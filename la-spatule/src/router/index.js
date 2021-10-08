import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/Inscription",
    name: "registerForm",
    component: () =>
      import("../views/RegisterForm.vue"),
  },
  {
    path: "/Connexion",
    name: "connectionForm",
    component: () =>
      import("../views/ConnectionForm.vue"),
  },
  {
    path: "/Recette/:id",
    name: "recipePage",
    component: () =>
      import("../views/RecipePage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
