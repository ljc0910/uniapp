<template>
  <view class="editMyInfo">
    <view class="custom-card">
      <van-cell title="头像" is-link :border="false" center>
        <img class="head-img" :src="userInfo.avatar" alt="" />
      </van-cell>
      <van-dialog
        use-slot
        title="更换头像"
        :show="uploadShow"
        show-cancel-button
        confirm-button-open-type="getUserInfo"
        @close="onClose"
        @confirm="onConfirm"
      >
        <van-uploader
          style="margin:0 auto;"
          max-count="1"
          :file-list="fileList"
          @after-read="afterRead"
        >
        </van-uploader>
      </van-dialog>
    </view>
    <view class="custom-card">
      <van-cell-group :border="false">
        <van-field
          label="姓名"
          :border="false"
          :value="userInfo.nickname"
          placeholder="请输入用户名"
          input-align="right"
          custom-style="color:red;"
          @input="
            param => {
              userInfo.nickname = param.detail;
            }
          "
        />
        <view @click="clickSelelctFn">
          <van-field
            label="地区"
            right-icon="van-icon van-icon-arrow"
            readonly
            input-class="form-item-input"
            input-align="right"
            :model:value="areaText"
            placeholder="请选择地区"
            :border="false"
          />
        </view>
        <van-action-sheet :show="sheetShow">
          <van-area
            :area-list="areajs"
            :model:value="userInfo.city_id"
            @confirm="selectArea"
            @cancel="cancelArea"
          />
        </van-action-sheet>
        <van-field
          label="地址"
          :border="false"
          :model:value="userInfo.address"
          placeholder="请输入地址"
          input-align="right"
          @input="
            param => {
              userInfo.address = param.detail;
            }
          "
        />
        <van-field
          label="手机"
          :border="false"
          :model:value="userInfo.phone"
          placeholder="请输入手机号"
          input-align="right"
          @input="
            param => {
              userInfo.phone = param.detail;
            }
          "
        />
        <van-field
          label="微信"
          :border="false"
          :model:value="userInfo.weixin"
          placeholder="请输入微信号"
          input-align="right"
          @input="
            param => {
              userInfo.weixin = param.detail;
            }
          "
        />
      </van-cell-group>
    </view>
    <view class="textarea-title">个人简介</view>
    <view class="custom-card">
      <van-field
        input-class="form-item-input"
        :model:value="userInfo.description"
        type="textarea"
        :autosize="{ maxHeight: 120, minHeight: 80 }"
        placeholder="请输入个人简介..."
        :maxlength="200"
        show-word-limit
        :border="false"
        @input="
          param => {
            userInfo.description = param.detail;
          }
        "
      />
    </view>
    <van-button
      type="primary"
      color="#FF7F5F"
      custom-style="height:100rpx;font-size:36rpx;"
      round
      block
      @click="saveHandle"
      >保存</van-button
    >
  </view>
</template>
<script>
import areajs from "../../../../static/js/area";
export default {
  data() {
    return {
      userInfo: {
        avatar: "",
        nickname: "",
        address: "",
        phone: "",
        county_id: "",
        province_id: "",
        city_id: "",
        description: ""
      },
      sheetShow: false,
      areajs: areajs,
      username: "",
      uploadShow: true,
      fileList: []
    };
  },
  computed: {
    areaText() {
      const countyId = Number(this.userInfo.county_id);
      const provinceId = Number(this.userInfo.province_id);
      const cityId = Number(this.userInfo.city_id);
      const _country = areajs.county_list[countyId] || "";
      const _province = areajs.province_list[provinceId] || "";
      const _city = areajs.city_list[cityId] || "";
      return (_province + " " + _city + " " + _country).trim();
    }
  },
  mounted() {
    this.getMyInfo();
  },
  methods: {
    //获取个人信息
    getMyInfo() {
      this.$api.getMyInfo(0).then(res => {
        for (let key in this.userInfo) {
          this.userInfo[key] = res[key];
        }
      });
    },
    clickSelelctFn() {
      this.sheetShow = true;
    },
    // 选择地址
    selectArea(param) {
      const areaInfo = param.target.values;
      this.userInfo.province_id = areaInfo[0].code;
      this.userInfo.city_id = areaInfo[1].code;
      this.userInfo.county_id = areaInfo[2].code;
      this.sheetShow = false;
    },
    //取消选择
    cancelArea() {
      this.sheetShow = false;
    },
    // 图片上传后
    afterRead(event) {
      const { file } = event.detail;
      this.fileList.push({
        url: file.path
      });
    },
    // 保存操作
    saveHandle() {
      this.$api.updateMyInfo(this.userInfo).then(res => {
        //
      });
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
    background: #eee;
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
