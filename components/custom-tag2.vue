<template>
  <view class="custom-tag2" :style="getStyle">
    <slot></slot>
  </view>
</template>
<script>
export default {
  props: {
    background: {
      default: "#6387FE"
    },
    color: {
      default: "#000"
    }
  },
  computed: {
    getStyle() {
      let style = `background:${this.background};color:${this.color};border:2rpx solid ${this.color};`;
      return style;
    }
  }
};
</script>
<style lang="scss" scoped>
.custom-tag2 {
  float: left;
  border-radius: 8rpx;
  padding: 0 33rpx;
  color: #fff;
  font-size: 28rpx;
  height: 64rpx;
  line-height: 64rpx;
}
</style>
