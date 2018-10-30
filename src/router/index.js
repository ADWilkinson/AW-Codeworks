import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/features",
      name: "features",
      component: () => import(/* webpackChunkName: "about" */ "@/views/Features.vue")
    },
    {
      path: "/discord",
      name: "discord",
      component: () => import("@/views/Discord.vue")
    }
  ]
});
