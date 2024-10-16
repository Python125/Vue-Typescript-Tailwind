import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/merchandise",
    name: "merchandise",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/MerchandisePage.vue"),
  },
  {
    path: "/potter",
    name: "potter",
    component: () => import("../pages/PotterPage.vue"),
  },
  {
    path: "/ginny",
    name: "ginny",
    component: () => import("../pages/GinnyPage.vue"),
  },
  {
    path: "/ron",
    name: "ron",
    component: () => import("../pages/RonPage.vue"),
  },
  {
    path: "/granger",
    name: "granger",
    component: () => import("../pages/GrangerPage.vue"),
  },
  {
    path: "/luna",
    name: "luna",
    component: () => import("../pages/LunaPage.vue"),
  },
  // {
  //   path: "",
  //   name: "",
  //   component: () => import("../pages/"),
  // },
  {
    path: "/sirius",
    name: "sirius",
    component: () => import("../pages/SiriusPage.vue"),
  },
  {
    path: "/lupin",
    name: "lupin",
    component: () => import("../pages/LupinPage.vue"),
  },
  {
    path: "/dumbledore",
    name: "dumbledore",
    component: () => import("../pages/DumbledorePage.vue"),
  },
  {
    path: "/mcgonagall",
    name: "mcgonagall",
    component: () => import("../pages/McGonagallPage.vue"),
  },
  {
    path: "/snape",
    name: "snape",
    component: () => import("../pages/SnapePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;