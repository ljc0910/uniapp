// service.js文件

import axios from "axios";
let baseURL = "https://ccxq.chunchunyoupin.com/";
const service = axios.create({
  withCredentials: true,
  crossDomain: true,
  baseURL,
  timeout: 1000
});
const failToast = msg => {
  //错误toast
  uni.showToast({
    title: msg,
    duration: 2000,
    icon: "none"
  });
};
const loginConfirm = () => {
  uni
    .showModal({
      title: "未登录",
      content: "当前未登录，是否授权登录？"
    })
    .then(() => {
      console.log("登录");
      uni.login({
        provider: "weixin",
        success: loginRes => {
          service
            .post("access_token", {
              openid: loginRes.code
            })
            .then(res => {
              console.log(res);
            });
          // this.$api
          //   .login({
          //     openid: loginRes.code
          //   })
          //   .then(res => {
          //     console.log(res);
          //   });
          // 获取用户信息
          // uni.getUserInfo({
          //   provider: "weixin",
          //   success: function(infoRes) {
          //     console.log(
          //       "用户昵称为：" + infoRes.userInfo.nickName,
          //       infoRes
          //     );
          //   }
          // });
        }
      });
    });
};
// request拦截器,在请求之前做一些处理
service.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //     // 给请求头添加user-token
    //     config.headers["user-token"] = store.state.token;
    // }
    console.log("请求拦截成功");
    return config;
  },
  error => {
    failToast(error);
    return Promise.reject(error);
  }
);

//配置成功后的拦截器
service.interceptors.response.use(
  res => {
    if (res.data && res.data.status == 200) {
      return res.data;
    } else {
      if (res.data.status === 700) {
        // 未登录
        loginConfirm();
      } else {
        failToast(res.data.msg);
        return Promise.reject(res.data.msg);
      }
    }
  },
  error => {
    failToast(error);
    return Promise.reject(error);
  }
);

axios.defaults.adapter = function(config) {
  //自定义适配器，用来适配uniapp的语法
  return new Promise((resolve, reject) => {
    console.log(config);
    var settle = require("axios/lib/core/settle");
    var buildURL = require("axios/lib/helpers/buildURL");
    uni.request({
      method: config.method.toUpperCase(),
      url:
        config.baseURL +
        buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response) {
        response = {
          data: response.data,
          status: response.statusCode,
          errMsg: response.errMsg,
          header: response.header,
          config: config
        };

        settle(resolve, reject, response);
      }
    });
  });
};
/**
 *  函数的参数options为axios的配置
 *  method => 方法名 "POST"等
 *  url => 路径,实际调用时传type即可，即为urlDict的key
 *  data => 数据的对象
 *  调用前将type值转为对应的url
 */
let request = options => {
  options.headers = options.headers || {};
  options.method = options.method || "get";
  if (options.method.toUpperCase() === "GET") {
    options.params = options.data;
  }
  return service(options);
};

export default request;
