<template>
  <view class="release" @touchmove.stop.prevent="moveHandle">
    <!-- <van-button plain type="primary" @click="routerAdopt"
      >发布宠物领养</van-button
    >
    <van-button plain type="info" @click="routerLost">发布宠物走失</van-button> -->
    <view class="btn-list">
      <view class="btn" @click="routerAdopt">
        <img src="../../../static/img/lybtn.png" alt="" />
        <view class="text">发布宠物领养</view>
      </view>
      <view class="btn" @click="routerLost">
        <img src="../../../static/img/zsbtn.png" alt="" />
        <view class="text">发布宠物走失</view>
      </view>
    </view>
    <view class="single-btn" @click="cancelHandle">
      <img src="../../../static/img/close.png" alt="" />
      <view class="text">取消</view>
    </view>
    <!-- <van-button plain type="info" @click="routerOut">test</van-button> -->
  </view>
</template>
<script>
export default {
  methods: {
    // 跳转到宠物领养页
    routerAdopt() {
      uni.navigateTo({
        url: "/pages/index/release/adopt/adopt"
      });
    },
    // 跳转到宠物领养页
    routerLost() {
      uni.navigateTo({
        url: "/pages/index/release/lost/lost"
      });
    },
    cancelHandle() {
      this.$emit("close");
    },
    routerOut() {
      uni.navigateTo({
        url: "/pages/webView/webView"
      });
    },
    moveHandle() {
      //
    }
  }
};
</script>
<style lang="scss" scoped>
.release {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background: rgba(0, 0, 0, 0.75);
  .btn-list {
    position: absolute;
    bottom: 320rpx;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    .btn {
      text-align: center;
      img {
        width: 130rpx;
        height: 130rpx;
      }
      .text {
        font-size: 32rpx;
        color: rgba(255, 255, 255, 0.87);
        font-weight: bold;
        margin-top: 4rpx;
      }
    }
    .btn:active {
      opacity: 0.6;
    }
  }
  .single-btn {
    position: absolute;
    width: 100vw;
    bottom: 40rpx;
    text-align: center;
    img {
      width: 100rpx;
      height: 72rpx;
    }
    .text {
      font-size: 28rpx;
      color: rgba(255, 255, 255, 0.87);
    }
  }
  .single-btn:active {
    opacity: 0.6;
  }
}
</style>
