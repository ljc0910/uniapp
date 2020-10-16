<template>
  <view class="adopt">
    <view class="base-form">
      <view class="form-title">
        宠物信息
      </view>
      <view class="form-list">
        <view class="field-wraper">
          <view class="form-item">
            <view class="form-item-label">昵称</view>
            <van-field
              input-class="form-item-input"
              :value="value"
              placeholder="请输入用户名"
              :border="false"
            />
          </view>
          <view class="form-item">
            <custom-select
              paclholder="请选择分类"
              :columns="columns"
              @selectCb="setSelectVal"
            ></custom-select>
          </view>
        </view>
      </view>
    </view>
    <view class="base-form">
      <view class="form-title">
        宠物简介
      </view>
      <view class="form-list">
        <view class="field-wraper">
          <view class="form-item">
            <van-field
              input-class="form-item-input"
              :value="value"
              type="textarea"
              :autosize="{ maxHeight: 100, minHeight: 50 }"
              placeholder="请输入宠物简介（限200字）"
              :maxlength="200"
              show-word-limit
              :border="false"
            />
          </view>
        </view>
      </view>
    </view>
    <view class="base-form" style="margin-bottom:30rpx;">
      <view class="form-title">
        领养条件
      </view>
      <view class="checkbox-list">
        <van-checkbox-group
          :value="checkboxval"
          @change="onChange"
          class="custom-checkbox"
        >
          <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
          <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
          <van-checkbox name="3" shape="square">复选框 3</van-checkbox>
          <van-checkbox name="4" shape="square">复选框 4</van-checkbox>
        </van-checkbox-group>
      </view>
    </view>
    <view class="base-form" style="margin-bottom:30rpx;">
      <view class="form-title">
        上传照片
      </view>
      <view class="title-tip">
        注意：您上传的第一张照片将作为封面使用，请谨慎选择哦~
      </view>
      <view class="upload-list">
        <van-uploader
          :file-list="fileList"
          @after-read="afterRead"
          @delete="deleteCb"
        >
          <view class="custom-upload-wraper">
            <van-icon class="plus" name="plus" />
            <view>添加照片</view>
          </view>
        </van-uploader>
      </view>
    </view>
    <van-button
      type="primary"
      color="#FF7F5F"
      custom-style="height:100rpx;font-size:36rpx;"
      round
      block
      >发布</van-button
    >
  </view>
</template>
<script>
import customSelect from "../../../../components/custom-select";
export default {
  components: {
    customSelect
  },
  data() {
    return {
      value: "",
      cbvalue: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      checkboxval: [],
      fileList: []
    };
  },
  methods: {
    setSelectVal(param) {
      this.cbvalue = param;
    },
    onChange(param) {
      this.checkboxval = param.detail;
    },
    afterRead(event) {
      const { file } = event.detail;
      this.fileList.push({
        url: file.path
      });
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      //   wx.uploadFile({
      //     url: "https://example.weixin.qq.com/upload", // 仅为示例，非真实的接口地址
      //     filePath: file.path,
      //     name: "file",
      //     formData: { user: "test" },
      //     success(res) {
      //       // 上传完成需要更新 fileList
      //       this.fileList.push({ ...file, url: res.data });
      //     }
      //   });
    },
    deleteCb(event) {
      const { index } = event.detail;
      this.fileList.splice(index, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
.adopt {
  padding: 40rpx;
  box-sizing: border-box;
}
</style>
