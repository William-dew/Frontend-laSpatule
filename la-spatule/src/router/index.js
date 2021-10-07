import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/Inscription",
    name: "RegisterForm",
    component: () =>
      import("../views/RegisterForm.vue"),
  },
  {
    path: "/Connexion",
    name: "ConnectionForm",
    component: () =>
      import("../views/ConnectionForm.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
