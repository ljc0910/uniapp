import Vue from "vue";
import App from "./App";
import api from "./static/js/api";
//引入vuex
import store from "./store/index";
import customTag from "./components/custom-tag.vue";
import customTag2 from "./components/custom-tag2.vue";
import customInfo from "./components/custom-info.vue";
import aLoadMore from "./components/a_loadMore.vue";
Vue.config.productionTip = false;
//把vuex定义成全局组件
Vue.prototype.$store = store;
Vue.component("custom-tag", customTag);
Vue.component("custom-tag2", customTag2);
Vue.component("custom-info", customInfo);
Vue.component("aLoadMore", aLoadMore);
Vue.prototype.$api = api;
App.mpType = "app";

const app = new Vue({
  ...App,
  store
});
app.$mount();
