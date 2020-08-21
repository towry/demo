import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/system/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/lottie-job",
    component: () => import("@/views/animation/LottieJob.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/system/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
