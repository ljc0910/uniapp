<template>
  <view class="custom-tag" :style="getStyle">
    <slot></slot>
  </view>
</template>
<script>
export default {
  props: {
    background: {
      default: "#6387FE"
    }
  },
  computed: {
    getStyle() {
      let style = `background:${this.background};`;
      return style;
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-tag {
  float: left;
  border-radius: 4rpx;
  padding: 0 8rpx;
  color: #fff;
  font-size: 20rpx;
  height: 34rpx;
  line-height: 34rpx;
}
</style>
