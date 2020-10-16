<template>
  <view class="index">
    <!-- 各个页面入口 -->
    <home v-show="active === 0"></home>
    <release v-show="active === 1"></release>
    <message v-show="active === 2"></message>
    <myInfo v-show="active === 3"></myInfo>
    <!-- tabbar 模拟 -->
    <van-tabbar :active="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot>发布</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">消息</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </view>
</template>
<script>
import home from "./home/home";
import message from "./message/message";
import myInfo from "./myInfo/myInfo";
import release from "./release/release";
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
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.active = 0;
    });
  },
  methods: {
    onChange(event) {
      this.active = event.detail;
      uni.setNavigationBarTitle({
        title: this.list[this.active].title
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.index {
  padding-bottom: 100rpx;
  height: 100vh;
  box-sizing: border-box;
}
</style>
