<template>
  <view class="editMyInfo">
    <view class="custom-card">
      <van-cell title="头像" is-link :border="false" center>
        <img
          class="head-img"
          src="http://iph.href.lu/300x200?text=qrcode"
          alt=""
        />
      </van-cell>
    </view>
    <view class="custom-card">
      <van-cell-group :border="false">
        <van-field
          label="姓名"
          :border="false"
          :value="username"
          placeholder="请输入用户名"
          input-align="right"
          custom-style="color:red;"
        />
        <view @click="clickSelelctFn">
          <van-field
            label="地区"
            right-icon="van-icon van-icon-arrow"
            readonly
            input-class="form-item-input"
            input-align="right"
            :value="value"
            placeholder="请选择地区"
            :border="false"
          />
        </view>
        <van-field
          label="地址"
          :border="false"
          :value="username"
          placeholder="请输入姓名"
          input-align="right"
        />
        <van-field
          label="手机"
          :border="false"
          :value="username"
          placeholder="请输入手机号"
          input-align="right"
        />
        <van-field
          label="微信"
          :border="false"
          :value="username"
          placeholder="请输入微信号"
          input-align="right"
        />
      </van-cell-group>
    </view>
    <view class="textarea-title">个人简介</view>
    <view class="custom-card">
      <van-field
        input-class="form-item-input"
        :value="value"
        type="textarea"
        :autosize="{ maxHeight: 120, minHeight: 80 }"
        placeholder="请输入个人简介..."
        :maxlength="200"
        show-word-limit
        :border="false"
      />
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      value: "",
      selectShow: false
    };
  },
  methods: {
    clickSelelctFn() {
      this.selectShow = true;
    }
  }
};
</script>
<style lang="scss">
.editMyInfo {
  background: #f5f6f7;
  height: 100vh;
  padding: 40rpx;
  box-sizing: border-box;
  overflow: auto;
  .custom-card {
    overflow: hidden;
    border-radius: 30rpx;
    background: #fff;
    margin-bottom: 30rpx;
    box-shadow: 0rpx 20rpx 50rpx -15rpx rgba(173, 188, 198, 0.15);
  }
  .head-img {
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
  }
  .textarea-title {
    font-size: 32rpx;
    color: #333;
    margin: 50rpx 0 30rpx 20rpx;
  }
  .van-field__label {
    color: #333;
  }
  .van-field__icon-container {
    width: 28rpx;
    display: block !important;
  }
}
</style>
