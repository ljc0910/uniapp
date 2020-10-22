<template>
  <view class="adopterDetail">
    <van-nav-bar
      title="申请人详情"
      left-arrow
      @click-left="backFn"
      custom-class="custom-nav-bar"
    />
    <view class="top-bg"></view>
  </view>
</template>
<script>
export default {
  methods: {
    backFn() {
      console.log("back");
      uni.navigateBack({
        url: "/pages/index/myInfo/myRelease/adopter/adopter"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.adopterDetail {
  background: #ccc;
  height: 100vh;
  position: relative;
  .top-bg {
    background: orange;
    border-radius: 50%;
    height: 2000rpx;
    width: 2000rpx;
    position: absolute;
    top: -1500rpx;
    left: -500px;
  }
}
</style>
