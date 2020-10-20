import request from "./request";

export default {
  login: data => {
    return request({
      data,
      url: "access_token",
      method: "post"
    });
  },
  // ----首页 start--------------------------------------------------------------
  // 首页banner
  indexBanner: data => {
    return request({
      data,
      url: "banners",
      method: "get"
    });
  },
  // radio筛选
  indexFilter: data => {
    return request({
      data,
      url: "form_filter/filter",
      method: "get"
    });
  },
  // 列表
  indexList: data => {
    return request({
      data,
      url: "information",
      method: "get"
    });
  },
  // 根据经纬度计算位置
  indexLocation: data => {
    return request({
      url: `place/lng/${data.lng}/lat/${data.lat}`,
      method: "get"
    });
  },
  // ----首页 end--------------------------------------------------------------
  // 获取个人信息
  getMyInfo: data => {
    return request({
      url: `user/${data}/show`,
      method: "get"
    });
  },
  // 关于我们
  aboutUs: data => {
    return request({
      data,
      url: "/about",
      method: "get"
    });
  }
};
