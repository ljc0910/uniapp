<template>
  <view class="uni-tag2" :style="getStyle">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: "uni-tag2",
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
.uni-tag2 {
  float: left;
  border-radius: 8rpx;
  padding: 0 33rpx;
  color: #fff;
  font-size: 28rpx;
  height: 64rpx;
  line-height: 64rpx;
}
</style>
