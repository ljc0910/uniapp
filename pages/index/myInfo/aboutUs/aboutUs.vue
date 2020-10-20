<template>
  <view class="aboutUs">
    <view class="name">{{ aboutUs.name }}</view>
    <view class="value">{{ aboutUs.value }}</view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      aboutUs: {}
    };
  },
  mounted() {
    this.$api.aboutUs().then(res => {
      this.aboutUs = res;
      console.log(this.aboutUs);
    });
  }
};
</script>
<style lang="scss" scoped>
.aboutUs {
  padding: 40rpx;
  .name {
    font-size: 40rpx;
    font-weight: bold;
    margin-bottom: 20rpx;
  }
  .value {
    color: #666;
    font-size: 28rpx;
  }
}
</style>
