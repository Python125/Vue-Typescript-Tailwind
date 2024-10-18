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
  {
    path: "/arthur",
    name: "arthur",
    component: () => import("../pages/ArthurPage.vue"),
  },
  {
    path: "/molly",
    name: "molly",
    component: () => import("../pages/MollyPage.vue"),
  },
  {
    path: "/fred",
    name: "fred",
    component: () => import("../pages/FredPage.vue"),
  },
  {
    path: "/george",
    name: "george",
    component: () => import("../pages/GeorgePage.vue"),
  },
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
  {
    path: "/madeye",
    name: "madeye",
    component: () => import("../pages/MadEyePage.vue"),
  },
  {
    path: "/tonks",
    name: "tonks",
    component: () => import("../pages/TonksPage.vue"),
  },
  {
    path: "/neville",
    name: "neville",
    component: () => import("../pages/NevillePage.vue"),
  },
  {
    path: "/draco",
    name: "draco",
    component: () => import("../pages/DracoPage.vue"),
  },
  {
    path: "/narcissa",
    name: "narcissa",
    component: () => import("../pages/NarcissaPage.vue"),
  },
  {
    path: "/voldemort",
    name: "voldemort",
    component: () => import("../pages/VoldemortPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
