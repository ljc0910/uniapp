<template>
  <view :class="{ showCover: showCover, 'home-wraper': true }">
    <view class="home-cont">
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
            <img class="swiper-img" :src="item.image" />
          </swiper-item>
        </swiper>
        <!-- 因为 小程序 swiper的指示器修改起来比较困难，这里手写一套 start -->
        <view class="swiper-point">
          <view class="swiper-point-wraper">
            <view
              v-for="item in swiperList.length"
              :key="item"
              :class="{ isOnPoint: item === current, defaultPoint: true }"
            ></view>
          </view>
        </view>
        <!-- 因为 小程序 swiper的指示器修改起来比较困难，这里手写一套 end -->
        <!-- <van-sticky @scroll="searchScrollTop"> -->
        <view :class="{ 'search-area': true, searchIsTop: searchIsTop }">
          <img
            src="../../../static/img/fangdajing.png"
            style="height:32rpx;"
            alt=""
          />
          <van-field
            :value="searchVal"
            placeholder="请搜索宠物名称或编号"
            :border="false"
            @change="searchValChange"
            clearable
          />
          <view class="search-area-info">
            <img
              src="../../../static/img/location.png"
              style="width:28rpx;"
              alt=""
            />
            <view class="search-area-location" @click="locationHandle">{{
              lcationObj.name || "未知"
            }}</view>
            <img
              @click="locationHandle"
              src="../../../static/img/trangle.png"
              style="width:20rpx;height:12rpx;"
              alt=""
            />
          </view>
        </view>
        <!-- </van-sticky> -->
        <van-action-sheet :show="sheetShow">
          <van-area
            :area-list="areajs"
            :value="lcationObj.code"
            @confirm="selectArea"
            @cancel="cancelArea"
          />
        </van-action-sheet>
      </view>
      <homeTab></homeTab>
      <!-- <view style="height:2000rpx;background:#ccc;"></view> -->
    </view>
  </view>
</template>
<script>
import areajs from "../../../static/js/area"; // 区域code
import homeTab from "./homeTab/homeTab";
export default {
  components: {
    homeTab
  },
  props: {
    showCover: Boolean
  },
  data() {
    return {
      swiperList: [],
      autoplay: true,
      interval: 2000,
      duration: 500,
      current: 2,
      value: "",
      sheetShow: false,
      areajs: areajs,
      searchVal: "",
      curLocation: [], //用户的地址
      searchIsTop: false
    };
  },
  computed: {
    lcationObj() {
      return this.curLocation.length > 0
        ? this.curLocation[this.curLocation.length - 1]
        : {};
    }
  },
  mounted() {
    this.getLocation();
    this.getBanner();
  },
  methods: {
    pullRefresh() {
      console.log("下拉刷新,home");
      setTimeout(() => {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    loadMore() {
      console.log("上拉加载,home");
    },
    currentChange(event) {
      this.current = event.detail.current;
    },
    searchValChange(val) {
      console.log(val);
    },
    // 获取轮播
    getBanner() {
      this.$api.indexBanner().then(res => {
        this.swiperList = res;
      });
    },
    // 手动定位
    locationHandle() {
      this.sheetShow = true;
    },
    // 选择地址
    selectArea(param) {
      // console.log(param.target.values);
      const areaInfo = param.target.values;
      this.curLocation = areaInfo;
      this.sheetShow = false;
    },
    // 自动定位
    getLocation() {
      uni.getLocation({
        type: "wgs84",
        success: res => {
          this.$api
            .indexLocation({
              lng: res.longitude, //经度
              lat: res.latitude //纬度
            })
            .then(cres => {
              this.curLocation = cres.reverse();
            });
        }
      });
    },
    //取消选择
    cancelArea() {
      this.sheetShow = false;
    },
    searchScrollTop(param) {
      // this.searchIsTop = param.target.isFixed;
    }
  }
};
</script>
<style lang="scss">
.search-area {
  background: #fff;
  padding: 0 30rpx;
  width: 610rpx;
  height: 90rpx;
  border-radius: 8rpx;
  overflow: hidden;
  box-shadow: 0 30rpx 50rpx 0 #ebeff2;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 8rpx;
  z-index: 1;
  position: relative;
  img {
    width: 32rpx;
    height: 32rpx;
  }
  van-field {
    width: 440rpx;
  }
  .search-area-info {
    display: flex;
    align-items: center;
  }
  .search-area-location {
    font-size: 28rpx;
    color: #333333;
    margin: 0 12rpx;
    width: 90rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.searchIsTop {
  bottom: -90rpx;
  left: 0;
  width: 750rpx;
}
.home-wraper {
  width: 100%;
  height: 100%;
  // overflow-y: auto;
  // overflow-x: hidden;
  .home-cont {
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    color: transparent;
  }
}
</style>
