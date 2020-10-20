<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
/*每个页面公共css */
.custom-btn {
  font-size: 28rpx;
  width: 150rpx;
  height: 56rpx;
  line-height: 52rpx;
  padding: 0;
  text-align: center;
  border-radius: 56rpx;
  border: 2rpx solid #000;
  margin: 0;
}
.custom-btn:active {
  opacity: 0.8;
}
.custom-btn-success {
  border-color: #00af66;
  background: #e5f7ef;
  color: #00af66;
}
.custom-btn-primary {
  border-color: #1890ff;
  background: #e7f3ff;
  color: #1890ff;
}
custom-tag {
  height: 34rpx;
}

// 因为 小程序 swiper的指示器修改起来比较困难，这里手写一套 start
.swiper-area {
  height: 422rpx;
  margin-bottom: 90rpx;
  .base-swiper {
    height: 422rpx;
  }
  .swiper-img {
    width: 100%;
    height: 422rpx;
  }
  .swiper-point {
    width: 100%;
    text-align: center;
    position: relative;
    margin-top: -100rpx;
    z-index: 1;
    .swiper-point-wraper {
      display: inline-block;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 10rpx;
      padding: 5rpx;
      .defaultPoint {
        width: 10rpx;
        height: 10rpx;
        border-radius: 10rpx;
        background: #ccc;
        float: left;
        // transition: all linear 0.2s;
      }
      .defaultPoint:not(:last-of-type) {
        margin-right: 10rpx;
      }
      .isOnPoint {
        background: orange;
        width: 20rpx;
      }
    }
  }
}
// 因为 小程序 swiper的指示器修改起来比较困难，这里手写一套 end

// 表单item通用css
.field-wraper {
  .van-cell {
    background: #f5f6f7;
    border-radius: 8rpx;
  }
}
// 表单css
.base-form {
  margin-bottom: 70rpx;
  .form-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333333;
    display: flex;
    align-items: center;
  }
  .form-title::before {
    content: "";
    width: 10rpx;
    height: 32rpx;
    background: #ff7f5f;
    display: block;
    margin-right: 16rpx;
  }
  .form-list {
    .field-wraper {
      .form-item {
        margin-top: 20rpx;
        .form-item-label {
          font-size: 28rpx;
          font-weight: bold;
          color: #333;
          line-height: 68rpx;
          margin-left: 26rpx;
        }
      }
    }
  }
  .title-tip {
    color: #999;
    font-size: 24rpx;
    margin-top: 14rpx;
  }
  .form-text {
    color: #777777;
    font-size: 28rpx;
    line-height: 48rpx;
    margin-top: 20rpx;
  }
  .text-list {
    display: flex;
    flex-wrap: wrap;
    .text-item {
      margin-top: 40rpx;
      width: 220rpx;
      display: flex;
      align-items: center;
      .text-icon {
        width: 22rpx;
        height: 22rpx;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2rpx solid #ff7f5f;
        position: relative;
        .in-round {
          width: 10rpx;
          height: 10rpx;
          background: #ff7f5f;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .text-label {
        color: #333;
        font-size: 28rpx;
        margin-left: 19rpx;
      }
    }
  }
}
//checkbox
.checkbox-list {
  margin-top: 30rpx;
  .custom-checkbox {
    display: flex;
    flex-wrap: wrap;
    font-size: 28rpx;
    color: #333333;
    .van-checkbox {
      width: 220rpx;
      margin-bottom: 40rpx;
    }
    .van-checkbox__icon {
      border-radius: 4rpx;
      overflow: hidden;
    }
    .van-checkbox__icon--checked {
      background-color: #ff7f5f;
      border-color: #ff7f5f;
    }
    .van-checkbox__label {
      padding-left: 16rpx;
      margin: 0;
    }
  }
}

//上传 upload
.upload-list {
  margin-top: 30rpx;
  .custom-upload-wraper {
    box-sizing: border-box;
    border: 2rpx dashed #c1c1c1;
    border-radius: 8rpx;
    width: 144rpx;
    height: 144rpx;
    font-size: 20rpx;
    color: #ccc;
    text-align: center;
    .plus {
      margin: 30rpx auto 14rpx;
      font-size: 30rpx;
    }
  }
  .van-uploader__preview {
    margin-right: 0;
  }
  .van-uploader__preview-image {
    width: 144rpx !important;
    height: 144rpx !important;
    border-radius: 8rpx;
    margin-right: 22rpx;
  }
  .van-uploader__preview-delete {
    border-radius: 50%;
    background-color: #ff2e2e;
    width: 40rpx;
    height: 40rpx;
    top: -20rpx;
    right: 4rpx;
  }
  .van-uploader__preview-delete-icon {
    font-size: 48rpx;
  }
}

.message {
  .cell-item {
    display: flex;
    align-items: center;
    .head-img {
      width: 140rpx;
      height: 140rpx;
      border-radius: 12rpx;
    }
  }
}

//自定义导航栏
.custom-nav-bar {
  background-color: transparent !important;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon-arrow-left:before {
    content: "\F008";
    color: #fff;
  }
}
.van-hairline--bottom:after {
  border-bottom-width: 0px !important;
}

// 自定义cell
.myInfo--custom-cell {
  padding: 0 !important;
  .van-icon {
    color: #7f91a1;
    font-size: 32rpx;
    transform: scaleY(0.9);
  }
  .van-cell__title {
    color: #7f91a1;
    font-size: 28rpx;
    margin-left: -4rpx;
  }
}

// 蒙层
.showCover {
  filter: blur(4px);
}
.van-tabbar-item__text {
  font-size: 20rpx;
}
</style>
