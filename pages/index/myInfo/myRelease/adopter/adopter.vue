<template>
  <view class="adopter">
    <van-cell
      clickable
      link-type="navigateTo"
      url="/pages/index/myInfo/myRelease/adopter/adopterDetail/adopterDetail"
      :border="false"
    >
      <view slot="title" class="cell-item">
        <img class="head-img" src="http://iph.href.lu/100x100" />
        <view class="adopter-cont">
          <view class="cont-head">
            <view class="head-nickname">一只咸鱼</view>
            <view class="head-time">09-17 13:45</view>
          </view>
          <view class="cont-body">
            <view class="body-left">
              <view class="left-context"
                >我想领养你的宠物我想领养你的宠物“咸鱼”</view
              >
              <view class="left-location">
                <van-icon
                  name="location-o"
                  custom-style="font-size:30rpx;transform:scaleY(0.9);margin-top:-6rpx;margin-right:6rpx;"
                />
                <view class="location-text">
                  上海市 浦东新区浦东新区
                </view>
              </view>
            </view>
            <view class="body-right">
              <van-button
                custom-style="width:128rpx;height:56rpx;background:#6387FE;font-size:24rpx;padding:0;color:#fff;border-radius:8rpx;"
                type="default"
                @click="adoptHandle"
                >同意领养</van-button
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
  data() {
    return {
      isSystem: true
    };
  },
  methods: {
    adoptHandle(e) {
      e.stopPropagation(); //非IE浏览器
    }
  }
};
</script>
<style lang="scss" scoped>
.adopter {
  .cell-item {
    width: 670rpx;
    margin: 4rpx auto;
    display: flex;
    align-items: center;
    .head-img {
      width: 140rpx;
      height: 140rpx;
      border-radius: 12rpx;
    }
    .adopter-cont {
      width: 500rpx;
      margin-left: 30rpx;
      .cont-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .head-nickname {
          width: 360rpx;
          font-size: 32rpx;
          color: #333333;
          font-weight: 400;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .head-time {
          font-size: 24rpx;
          color: #999999;
        }
      }
      .cont-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .body-left {
          width: 368rpx;
          .left-context {
            font-size: 28rpx;
            color: #77777b;
            font-weight: 300;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .left-location {
            font-size: 24rpx;
            color: #7f91a1;
            font-weight: 300;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            .location-text {
              // line-height: 48rpx;
            }
          }
        }
        .body-right {
          position: relative;
          z-index: 1;
        }
      }
    }
  }
}
</style>
