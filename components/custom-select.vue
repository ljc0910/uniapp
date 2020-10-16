<template>
  <view>
    <view class="form-item-label">分类</view>
    <!-- vant输入框无法添加点击事件，这里包裹一层，事件添加到父元素上 -->
    <view @click="clickSelelctFn">
      <van-field
        right-icon="van-icon van-icon-arrow"
        readonly
        input-class="form-item-input"
        :value="value"
        :placeholder="paclholder"
        :border="false"
      />
    </view>
    <!-- 选择框 -->
    <van-action-sheet :show="selectShow">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="cancelFn"
        @confirm="confirmFn"
      />
    </van-action-sheet>
  </view>
</template>
<script>
export default {
  props: {
    columns: {
      default: []
    },
    paclholder: {
      default: ""
    }
  },
  data() {
    return {
      selectShow: false,
      value: ""
    };
  },
  methods: {
    // 取消选择
    cancelFn() {
      this.selectShow = false;
    },
    // 确认选择
    confirmFn(event) {
      const { value, index, id } = event.target;
      this.selectShow = false;
      this.value = value;
      this.$emit("selectCb", value);
    },
    clickSelelctFn() {
      this.selectShow = true;
    }
  }
};
</script>
