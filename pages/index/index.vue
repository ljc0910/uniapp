<template>
  <view class="index">
    <!-- 各个页面入口 -->
    <home ref="home" v-show="active === 0" :showCover="showCover"></home>
    <!-- 发布页蒙层 -->
    <release
      ref="release"
      v-if="showCover"
      @close="showCover = false"
    ></release>
    <message
      ref="message"
      v-show="active === 2"
      :showCover="showCover"
    ></message>
    <myInfo ref="myInfo" v-show="active === 3" :showCover="showCover"></myInfo>
    <!-- 登陆 -->
    <van-dialog id="van-dialog" />
    <!-- tabbar 模拟 -->
    <view :class="{ showCover: showCover }">
      <van-tabbar
        :active="active"
        @change="onChange"
        active-color="#FF7F5F"
        inactive-color="#ADBCC6"
      >
        <van-tabbar-item>
          <image
            slot="icon"
            src="../../static/img/indexTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          <image
            slot="icon-active"
            src="../../static/img/indexOnTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          首页</van-tabbar-item
        >
        <van-tabbar-item>
          <image
            slot="icon"
            src="../../static/img/releaseTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          发布</van-tabbar-item
        >
        <van-tabbar-item info="5">
          <image
            slot="icon"
            src="../../static/img/msgTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          <image
            slot="icon-active"
            src="../../static/img/indexOnTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          消息</van-tabbar-item
        >
        <van-tabbar-item info="20">
          <image
            slot="icon"
            src="../../static/img/myTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          <image
            slot="icon-active"
            src="../../static/img/myOnTab.png"
            mode="aspectFit"
            style="width: 52rpx; height: 38rpx;"
          />
          我的</van-tabbar-item
        >
      </van-tabbar>
    </view>
  </view>
</template>
<script>
import home from "./home/home";
import message from "./message/message";
import myInfo from "./myInfo/myInfo";
import release from "./release/release";
import Dialog from "@/wxcomponents/vant/dist/dialog/dialog";
import { mapState } from "vuex";
export default {
  components: {
    home,
    myInfo,
    message,
    release
  },
  data() {
    return {
      active: -1,
      list: [
        {
          title: "首页"
        },
        {
          title: "发布"
        },
        {
          title: "消息"
        },
        {
          title: "我的"
        }
      ],
      showCover: false
    };
  },
  computed: {
    // ...mapState(['username']),
  },
  // 下拉刷新
  onPullDownRefresh() {
    this.$refs.home.pullRefresh();
  },
  // 上拉加载
  onReachBottom() {
    this.$refs.home.loadMore();
  },
  mounted() {
    this.$store.commit("favorites", "fffss");
    this.$nextTick(() => {
      this.active = 0;
    });
    this.getBanner();
  },
  methods: {
    onChange(event) {
      if (event.detail === 1) {
        this.showCover = true;
      } else {
        this.active = event.detail;
        uni.setNavigationBarTitle({
          title: this.list[this.active].title
        });
      }
    },
    getBanner() {
      this.$api.indexBanner();
    }
  }
};
</script>
<style lang="scss" scoped>
.index {
  height: 100vh;
  box-sizing: border-box;
}
</style>
