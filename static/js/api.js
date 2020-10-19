import request from "./request";

export default {
  login: data => {
    return request({
      data,
      url: "/access_token",
      method: "post"
    });
  },
  indexBanner: data => {
    return request({
      data,
      url: "/banners",
      method: "get"
    });
  }
};
