import Vue from "vue";
import App from "./App";
import customTag from "./components/custom-tag.vue";
import customTag2 from "./components/custom-tag2.vue";
import customInfo from "./components/custom-info.vue";
Vue.config.productionTip = false;

Vue.component("custom-tag", customTag);
Vue.component("custom-tag2", customTag2);
Vue.component("custom-info", customInfo);
App.mpType = "app";

const app = new Vue({
  ...App
});
app.$mount();
