<template>
  <view class="adopterDetail">
    <van-nav-bar
      title="帮ta找家"
      left-arrow
      @click-left="backFn"
      custom-class="custom-nav-bar"
    />
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
}
</style>
