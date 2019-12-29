import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contracts from "../views/Contracts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contracts",
    name: "contracts",
    component: Contracts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
