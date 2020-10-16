<template>
  <view class="homeRadio">
    <view class="home-radio-area">
      <view
        class="radio-wraper"
        v-for="(item, index) in filterList"
        :key="index"
      >
        <view class="radio-title">{{ item.title }}</view>
        <view class="radio-list">
          <van-radio-group
            style="display:flex;"
            :value="item.value"
            @change="onChange($event, item)"
          >
            <van-radio
              use-icon-slot
              :name="filter.id"
              v-for="(filter, findex) in item.filters"
              :key="findex"
            >
              <view
                slot="icon"
                :class="{
                  radioItem: true,
                  isOnRadio: item.value === filter.id
                }"
                >{{ filter.lable }}</view
              >
            </van-radio>
          </van-radio-group>
        </view>
      </view>
    </view>
    <view class="home-radio-btn">
      <van-button
        type="primary"
        square
        block
        custom-class="radio-btn radio-btn-cancle"
        @click="cancelHandle"
        >取消</van-button
      >
      <van-button
        type="primary"
        square
        block
        custom-class="radio-btn radio-btn-save"
        @click="saveHandle"
        >确定</van-button
      >
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      filterList: [
        {
          title: "信息",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        },
        {
          title: "信息2",
          value: "",
          filters: [
            {
              lable: "全部",
              id: 1
            },
            {
              lable: "其他",
              id: 2
            }
          ]
        }
      ]
    };
  },
  methods: {
    onChange(param, item) {
      item.value = param.detail;
    },
    // 取消
    cancelHandle() {
      //to do
      this.onClose();
    },
    // 确定操作
    saveHandle() {
      //to do
      this.onClose();
    },
    // 关闭popup
    onClose() {
      this.$emit("onClose");
    }
  }
};
</script>
<style lang="scss">
.homeRadio {
  .home-radio-area {
    max-height: 70vh;
    max-width: 100%;
    overflow: auto;
    padding: 0 40rpx;
    .radio-wraper {
      margin-bottom: 20rpx;
      .radio-title {
        font-size: 28rpx;
        color: #333;
        line-height: 68rpx;
      }
      .radio-list {
        .radioItem {
          width: 145rpx;
          height: 62rpx;
          background: #f7f7f7;
          border: 2rpx solid #dfdfdf;
          text-align: center;
          line-height: 66rpx;
          font-size: 28rpx;
          color: #777777;
          border-radius: 8rpx;
          float: left;
          margin-right: 30rpx;
        }
        .isOnRadio {
          color: #ff7f5f;
          background: #ffe5df;
          border: 2rpx solid #ff7f5f;
        }
      }
    }
  }
  .home-radio-btn {
    display: flex;
    .radio-btn {
      width: 376rpx;
      height: 100rpx;
      font-size: 32rpx;
    }
    .radio-btn-cancle {
      color: #777777;
      background: #fff;
      border-color: #fff;
      border-top: 1px solid #dfdfdf;
    }
    .radio-btn-save {
      color: #fff;
      background: #ff7f5f;
      border-color: #ff7f5f;
    }
  }
}
</style>
