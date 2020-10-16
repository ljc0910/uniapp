<template>
  <view class="home-item">
    <view class="item-left">
      <img src="http://iph.href.lu/220x220" />
    </view>
    <view class="item-right">
      <view class="right-head" @click="routerDetail">
        <view class="head-title">奶油</view>
        <view class="head-heat">
          <img src="../static/img/heat.png" />
          <view class="head-heat-num">123</view>
        </view>
        <view class="head-cat">
          <img src="../static/img/vip.png" />
          <view class="head-others">saf.fasa.sss</view>
        </view>
      </view>
      <view class="right-cont">
        在某个小区楼下发现的小奶猫。很 可爱，希望有人能领养他
        这是一只小鸭子滋滋滋滋嘴
      </view>
      <view class="right-foot">
        <view class="foot-tags">
          <custom-tag>已驱虫</custom-tag>
          <custom-tag background="#FF791F">已绝育</custom-tag>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    routerDetail() {
      this.$emit("clickCb");
    }
  }
};
</script>
<style lang="scss">
.home-item {
  display: flex;
  align-items: center;
  margin: 30rpx 0;
  .item-left {
    img {
      width: 220rpx;
      height: 220rpx;
      border-radius: 16rpx;
      background: #eee;
    }
  }
  .item-right {
    height: 220rpx;
    overflow: hidden;
    margin-left: 30rpx;
    .right-head {
      display: flex;
      align-items: center;
      .head-title {
        font-size: 36rpx;
      }
      .head-heat {
        margin: 0 16rpx;
        display: flex;
        align-items: center;
        font-size: 28rpx;
        color: #666c81;
        img {
          margin-right: 6rpx;
          width: 24rpx;
          height: 22rpx;
        }
      }
      .head-cat {
        display: flex;
        align-items: center;
        background: #f1f2f6;
        height: 36rpx;
        border-radius: 36rpx;
        font-size: 20rpx;
        line-height: 36rpx;
        color: #666c81;
        padding-right: 20rpx;
        img {
          width: 32rpx;
          height: 36rpx;
          left: 0;
          top: 0;
          margin-right: -10rpx;
        }
        .head-others {
          margin-left: 20rpx;
        }
      }
    }
    .right-cont {
      font-size: 28rpx;
      color: #828799;
      margin-top: 10rpx;
      height: 82rpx;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .right-foot {
      margin-top: 24rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .foot-tags {
        display: flex;
        custom-tag {
          margin-right: 16rpx;
        }
      }
    }
  }
}
</style>
