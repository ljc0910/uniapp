import Vue from "vue";
import App from "./App";
import api from "./static/js/api"; // api统一方法封装
import store from "./store/index"; //引入vuex
Vue.config.productionTip = false;
Vue.prototype.$store = store;
Vue.prototype.$api = api;
App.mpType = "app";

const app = new Vue({
  ...App,
  store
});
app.$mount();
