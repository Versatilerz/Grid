import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OneView from "@/views/OneView.vue";
import TwoView from "@/views/TwoView.vue";
import ThreeView from "@/views/ThreeView.vue";
import FourView from "@/views/FourView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/one",
      name: "one",
      component: OneView,
    },
    {
      path: "/two",
      name: "two",
      component: TwoView,
    },
    {
      path: "/three",
      name: "three",
      component: ThreeView,
    },
    {
      path: "/four",
      name: "four",
      component: FourView,
    },
  ],
});

export default router;
