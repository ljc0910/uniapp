<template>
  <view class="homeDetail">
    <view class="swiper-area">
      <swiper
        class="base-swiper"
        active-class="active-class"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :current="current"
        @change="currentChange"
      >
        <swiper-item v-for="item in swiperList" :key="item">
          <img
            class="swiper-img"
            :src="`http://iph.href.lu/300x200?text=${item}`"
          />
        </swiper-item>
      </swiper>
      <!-- 因为 小程序 swiper的指示器修改起来比较困难，这里手写一套 start -->
      <view class="swiper-point">
        <view class="swiper-point-wraper">
          <view
            v-for="item in swiperList"
            :key="item"
            :class="{ isOnPoint: item === current, defaultPoint: true }"
          ></view>
        </view>
      </view>
    </view>
    <view class="cont-info">
      <view class="cont-left">
        <view class="head">
          <view class="head-title">奶油</view>
          <view class="head-cat">
            <img src="../../../../static/img/vip.png" />
            <view class="head-others">saf.fasa.sss</view>
          </view>
        </view>
        <view class="tags">
          <custom-tag>已驱虫</custom-tag>
          <custom-tag background="#FF791F">已绝育</custom-tag>
          <custom-tag background="#56BFA3">已免疫</custom-tag>
        </view>
      </view>
      <view class="cont-right">
        <img src="../../../../static/img/heat.png" alt="" />
        <view class="heat-nums">131人喜欢</view>
      </view>
    </view>
    <view class="item-detail">
      <view class="base-form">
        <view class="form-title">
          小宠故事
        </view>
        <view class="form-text">
          今天很残酷，明天更残酷，后天很美好。但是绝大部
          分人是死在明天晚上，只有那些真正的英雄，才能见 到后天的太阳。
        </view>
      </view>
      <view class="base-form">
        <view class="form-title">
          领养条件
        </view>
        <view class="text-list">
          <view class="text-item">
            <view class="text-icon">
              <view class="in-round"></view>
            </view>
            <view class="text-label">
              同城领养
            </view>
          </view>
          <view class="text-item">
            <view class="text-icon">
              <view class="in-round"></view>
            </view>
            <view class="text-label">
              全窗封闭
            </view>
          </view>
          <view class="text-item">
            <view class="text-icon">
              <view class="in-round"></view>
            </view>
            <view class="text-label">
              适龄绝育
            </view>
          </view>
          <view class="text-item">
            <view class="text-icon">
              <view class="in-round"></view>
            </view>
            <view class="text-label">
              接受回访
            </view>
          </view>
        </view>
      </view>
      <view class="btn-list">
        <van-button
          round
          type="info"
          icon="../../../../static/img/share.png"
          custom-style="height:100rpx;width:240rpx;background:#6387FE;border-color:#6387FE;"
          @click="routerShare"
          >帮他找家</van-button
        >
        <van-button
          round
          type="info"
          custom-style="height:100rpx;width:400rpx;background:#FF7F5F;margin-left:30rpx;border-color:#FF7F5F;"
          >申请领养</van-button
        >
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      swiperList: 5,
      autoplay: true,
      interval: 2000,
      duration: 500,
      current: 2
    };
  },
  methods: {
    currentChange(event) {
      this.current = event.detail.current;
    },
    routerShare() {
      //跳转到分享页
      uni.navigateTo({
        url: "/pages/index/home/homeDetail/sharePage/sharePage"
      });
    }
  }
};
</script>
<style lang="scss">
.homeDetail {
  overflow-x: hidden;
  .swiper-area {
    margin: 0;
    .swiper-point {
      bottom: 20rpx;
    }
  }
  .cont-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40rpx;
    .cont-left {
      .head {
        display: flex;
        align-items: center;
        .head-title {
          font-weight: bold;
          font-size: 44rpx;
          color: #333;
        }
        .head-cat {
          margin-left: 30rpx;
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
      .tags {
        display: flex;
        margin-top: 18rpx;
        flex-wrap: wrap;
        custom-tag {
          margin-right: 16rpx;
          margin-bottom: 4rpx;
        }
      }
    }
    .cont-right {
      text-align: center;
      img {
        width: 60rpx;
        height: 52rpx;
      }
      .heat-nums {
        font-size: 20rpx;
        color: #777777;
      }
    }
  }
  .item-detail {
    padding: 40rpx;
  }
  .btn-list {
    margin-top: 120rpx;
    .van-icon--image {
      line-height: 32rpx !important;
    }
  }
}
</style>
