// Vue
import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

// Vuetify
import Vuetify from "vuetify";
import "vuetify/src/stylus/app.styl";
import "@mdi/font/css/materialdesignicons.css";
import theme from "./plugins/theme";

Vue.use(Vuetify, {
  theme,
  iconfont: "mdi"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
