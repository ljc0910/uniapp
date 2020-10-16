<template>
  <view class="myInfo">
    <view class="personal custom-card">
      <img class="head-img" src="http://iph.href.lu/300x200?text=qrcode" />
      <view class="user-info">
        <view class="top">
          <view class="nickname">一只咸鱼</view>
          <img src="../../../static/img/vip.png" class="isVip" />
        </view>
        <van-cell
          icon="location-o"
          custom-class="custom-cell"
          title="上海市 长宁区"
          is-link
          @click="routerEdit"
          :border="false"
        />
        <view class="bottom">
          <custom-tag background="#F7B500FF">申请认证</custom-tag>
          <van-icon
            name="question-o"
            custom-style="font-size:32rpx;color:#7f91a1;margin-left:10rpx;"
            @click="showTips"
          />
          <van-dialog id="van-dialog" />
        </view>
      </view>
    </view>
    <view class="cell-list custom-card-2">
      <van-cell
        icon="/static/img/menu6.png"
        title="我的领养"
        is-link
        :border="false"
        @click="routerFn('myAdopt')"
      />
      <van-cell
        icon="/static/img/menu1.png"
        title="我的发布"
        is-link
        :border="false"
        @click="routerFn('myRelease')"
      />
      <van-cell
        icon="/static/img/menu7.png"
        title="待认证"
        is-link
        :border="false"
        @click="routerFn('myApprove')"
      />
      <van-cell
        icon="/static/img/menu5.png"
        title="我的领养申请"
        is-link
        :border="false"
        @click="routerFn('myApply')"
      />
      <van-cell
        icon="/static/img/menu4.png"
        title="我的关注"
        is-link
        :border="false"
        @click="routerFn('myFocus')"
      />
      <van-cell
        icon="/static/img/menu2.png"
        title="领养协议"
        is-link
        :border="false"
        @click="routerFn('adoptDeal')"
      />
      <van-cell
        icon="/static/img/menu3.png"
        title="关于我们"
        is-link
        :border="false"
        @click="routerFn('aboutUs')"
      />
    </view>
  </view>
</template>
<script>
import Dialog from "@/wxcomponents/vant/dist/dialog/dialog";
export default {
  data() {
    return {};
  },
  methods: {
    showTips() {
      Dialog.alert({
        context: this,
        message: "这是一段提示内容"
      }).then(() => {
        // on close
      });
    },
    routerEdit() {
      uni.navigateTo({
        url: "/pages/index/myInfo/editMyInfo/editMyInfo"
      });
    },
    routerFn(page) {
      let url = `/pages/index/myInfo/${page}/${page}`;
      console.log(url);
      uni.navigateTo({
        url: url
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.myInfo {
  padding: 0 40rpx;
  background: #f5f6f7;
  height: 100%;
  .custom-card {
    padding: 40rpx 30rpx;
    border-radius: 30rpx;
    background: #fff;
    margin-bottom: 30rpx;
  }
  .custom-card-2 {
    border-radius: 30rpx;
    background: #fff;
    overflow: hidden;
    padding: 20rpx 0;
  }
  .personal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .head-img {
      width: 160rpx;
      height: 160rpx;
      border-radius: 50%;
    }
    .user-info {
      width: 420rpx;
      .top {
        display: flex;
        align-items: center;
        margin-bottom: 4rpx;
        .nickname {
          color: #333333;
          font-weight: bold;
          margin-right: 20rpx;
        }
        .isVip {
          width: 32rpx;
          height: 36rpx;
        }
      }
      .bottom {
        margin-top: 10rpx;
      }
    }
  }
}
</style>
