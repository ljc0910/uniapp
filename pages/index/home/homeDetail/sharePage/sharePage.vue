<template>
  <view class="sharePage">
    <view>
      <img class="bg" src="../../../../../static/img/sharebg.png" />
      <van-nav-bar
        title="帮ta找家"
        left-arrow
        @click-left="backFn"
        custom-class="custom-nav-bar"
      />
      <img src="http://iph.href.lu/300x200" class="head-img" />
      <view class="share-cont">
        <view class="cont-item">
          <view class="label text">姓名</view>
          <view class="text">小毛桃</view>
        </view>
        <view class="cont-item">
          <view class="label text">性别</view>
          <view class="text">男</view>
        </view>
        <view class="cont-item">
          <view class="label text">年龄</view>
          <view class="text">4～5个月</view>
        </view>
        <view class="cont-item">
          <view class="label text">健康</view>
          <view class="tags">
            <custom-tag>已驱虫</custom-tag>
            <custom-tag background="#FF791F">大事发生发发发</custom-tag>
            <custom-tag background="#56BFA3">已免疫</custom-tag>
          </view>
        </view>
      </view>
      <img src="http://iph.href.lu/300x200?text=qrcode" class="qrcode" />
    </view>
    <van-button type="default" @click="saveImg">默认按钮</van-button>
  </view>
</template>
<script>
export default {
  methods: {
    backFn() {
      console.log("back");
      uni.navigateBack({
        url: "/pages/index/home/homeDetail/homeDetail"
      });
    },
    saveImg() {
      //
    }
  }
};
</script>
<style lang="scss" scoped>
.sharePage {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .head-img {
    width: 23vh;
    height: 23vh;
    border: 10rpx solid #fff;
    box-shadow: 2rpx 2rpx 4rpx 0 #666;
    display: block;
    margin: 5vh auto 0;
  }
  .share-cont {
    margin: 3vh 0 3vh 170rpx;
    .cont-item {
      margin-bottom: 30rpx;
      overflow: hidden;
      .label {
        width: 128rpx;
      }
      .text {
        color: #fff;
        font-size: 32rpx;
        font-weight: 400;
        float: left;
      }
      .tags {
        display: flex;
        margin-top: 6rpx;
        flex-wrap: wrap;
        custom-tag {
          margin-right: 16rpx;
          margin-bottom: 4rpx;
        }
      }
    }
  }
  .qrcode {
    width: 22vh;
    height: 22vh;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
}
</style>
