<template>
  <view>
    <van-cell is-link :border="false" center @click="routerFn">
      <view slot="title">
        <view class="custom-cell-cont">
          <img class="head-img" src="http://iph.href.lu/220x220" />
          <view class="item-right">
            <view class="head-title">奶油</view>
            <view class="right-cont">
              <!-- 待领养 start -->
              <view v-if="true" class="adopt">
                <view class="text">申请人</view>
                <view class="headimg-list" :style="getWidth">
                  <img src="http://iph.href.lu/20x20" style="left:0;" />
                  <img src="http://iph.href.lu/20x20" style="left:30rpx;" />
                  <img src="http://iph.href.lu/20x20" style="left:60rpx;" />
                </view>
              </view>
              <!-- 待领养 end -->
              <!-- 待审核 start -->
              <view class="text" v-if="false">申请人</view>
              <!-- 待审核 end -->
              <!-- 已领养 start -->
              <view class="text" v-if="false">申请人</view>
              <!-- 已领养 end -->
            </view>
            <view class="right-foot">
              <uni-tag2 color="#00AF66" background="rgba(0, 175, 102, 0.15)"
                >12345</uni-tag2
              >
            </view>
          </view>
        </view>
      </view>
    </van-cell>
  </view>
</template>
<script>
export default {
  computed: {
    getWidth() {
      let num = 3;
      let width = num * 30 + 18;
      return `width:${width}rpx;`;
    }
  },
  methods: {
    routerFn() {
      // 判断跳转类型
      //申请人
      uni.navigateTo({
        url: "/pages/index/myInfo/myRelease/adopter/adopter"
      });
    }
  }
};
</script>
<style lang="scss">
.custom-cell-cont {
  display: flex;
  align-items: center;
  .head-img {
    width: 220rpx;
    height: 220rpx;
    border-radius: 16rpx;
    margin-right: 40rpx;
  }
  .head-title {
    font-weight: 400;
    font-size: 36rpx;
    color: #333;
  }
  .right-cont {
    margin: 10rpx 0 28rpx 0;
    .adopt {
      display: flex;
      align-items: center;
    }
    .text {
      font-size: 28rpx;
      color: #777777;
    }
    .headimg-list {
      position: relative;
      height: 48rpx;
      margin: 0 10rpx;
      img {
        position: absolute;
        border-radius: 50%;
        width: 44rpx;
        height: 44rpx;
        border: 2rpx solid #fff;
      }
    }
  }
}
</style>
