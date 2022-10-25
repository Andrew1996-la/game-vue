import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SettingsView from "@/views/SettingsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "settings",
    component: SettingsView,
  },
  {
    path: "/game",
    name: "game",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/GameView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
