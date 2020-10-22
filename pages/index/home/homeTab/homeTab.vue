<template>
  <view class="home-tab-tpl">
    <van-popup
      :show="popupShow"
      @close="onClose"
      position="top"
      custom-class="home-popup"
    >
      <homeRadio @onClose="onClose" @filterCb="filterCb"></homeRadio>
    </van-popup>
    <van-tabs
      sticky
      :offset-top="0.1"
      animated
      :ellipsis="false"
      color="#fff"
      :active="active"
      nav-class="home-nav"
      tab-class="home-tab"
      tab-active-class="home-tab-active"
      @change="tabChange"
    >
      <view slot="nav-right" class="tab-filter" @click="showFilter">
        <view style="margin-right:6rpx;">筛选</view>
        <img src="../../../../static/img/filter.png" />
      </view>
      <van-tab title="全部">
        <homeItem v-for="i in 15" :key="i"></homeItem>
      </van-tab>
      <van-tab title="标签 2">
        <uni-load-more
          mode=""
          color=""
          textColor=""
          textSize=""
          padding=""
        ></uni-load-more>
      </van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
    </van-tabs>
  </view>
</template>
<script>
import homeRadio from "./homeRadio/homeRadio"; //筛选弹窗
import homeItem from "./homeItem/homeItem";
export default {
  components: {
    homeRadio,
    homeItem
  },
  data() {
    return {
      popupShow: false,
      active: 0
    };
  },
  methods: {
    // 关闭回调
    onClose() {
      this.popupShow = false;
      // uni.getLocation({
      //   type: "wgs84",
      //   success: function(res) {
      //     console.log(res);
      //     console.log("当前位置的经度：" + res.longitude);
      //     console.log("当前位置的纬度：" + res.latitude);
      //   }
      // });
      console.log(this.active);
    },
    // 筛选回调
    filterCb(param) {
      console.log(param);
      this.popupShow = false;
    },
    // active切换
    tabChange(event) {
      this.active = event.detail.index;
    },
    showFilter() {
      this.popupShow = true;
    }
  }
};
</script>
<style lang="scss">
.home-tab-tpl {
  padding: 0 40rpx 100rpx;
  .home-nav {
    width: 500rpx;
    padding: 0;
  }
  .home-tab {
    font-size: 32rpx;
    color: #333333;
    text-align: left;
    padding-left: 0;
    padding-right: 62rpx;
  }
  .home-tab-active {
    font-size: 36rpx;
    font-weight: bold;
    position: relative;
  }
  .home-tab-active::after {
    content: "";
    display: block;
    position: absolute;
    width: 30rpx;
    height: 30rpx;
    background: url("../../../../static/img/cat.png");
    background-size: cover;
    right: 50rpx;
    top: 38rpx;
    z-index: 1;
    opacity: 0.7;
  }
  .tab-filter {
    color: red;
    background: #fff;
    width: 126rpx;
    line-height: 88rpx;
    display: flex;
    align-items: center;
    font-size: 32rpx;
    color: #333333;
    img {
      width: 28rpx;
      height: 28rpx;
    }
  }
}
</style>
