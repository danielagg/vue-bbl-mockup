import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { SetupAxiosInterceptor } from "./Axios/SetupAxiosInterceptor";
import { AdalConfig } from "./Adal/AdalConfig";
import { default as Adal } from "vue-adal";

Vue.config.productionTip = false;

SetupAxiosInterceptor();
Vue.use(Adal, AdalConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
