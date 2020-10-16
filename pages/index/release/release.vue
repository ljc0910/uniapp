<template>
  <view>
    <van-button plain type="primary" @click="routerAdopt"
      >发布宠物领养</van-button
    >
    <van-button plain type="info" @click="routerLost">发布宠物走失</van-button>
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
    }
  }
};
</script>
