<template>
  <view class="myApprove">
    <van-tabs
      animated
      sticky
      color="#FF7F5F"
      line-width="25"
      ine-height="4"
      nav-class="custom-nav"
      tab-class="custom-tab"
      tab-active-class="custom-tab-active"
    >
      <van-tab title="全部">
        <view class="custom-tab-cont">
          <approveItem v-for="i in 15"></approveItem>
        </view>
      </van-tab>
      <van-tab title="待审核">内容 2</van-tab>
      <van-tab title="已通过">内容 3</van-tab>
    </van-tabs>
  </view>
</template>
<script>
import approveItem from "./approveItem/approveItem";
export default {
  components: {
    approveItem
  }
};
</script>
<style lang="scss">
.myApprove {
  .custom-tab {
    font-size: 32rpx;
    color: #333333;
    padding: 0 30rpx;
  }
  .custom-nav {
    width: 700rpx;
    margin: 0 auto;
  }
  .custom-tab-active {
    font-size: 36rpx;
    font-weight: bold;
    position: relative;
  }
  .van-tabs__line {
    border-radius: 20rpx 20rpx 0 0;
  }
  .van-tabs__wrap {
    box-shadow: 0 5rpx 10rpx 0 rgba(213, 223, 255, 0.3);
  }
  .custom-tab-cont {
    padding: 20rpx 0;
  }
}
</style>
