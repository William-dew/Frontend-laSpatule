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
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Connexion",
    name: "connectionForm",
    component: () => import("../views/ConnectionForm.vue"),
  },
  {
    path: "/Recette/:id",
    name: "recipePage",
    component: () => import("../views/RecipePage.vue"),
  },
  {
    path: "/Recette/Ajouter",
    name: "recipeAdd",
    component: () => import("../views/RecipeAdd.vue"),
  },
  {
    path: "/Inviter-un-ami",
    name: "invitFriend",
    component: () => import("../views/InvitFriend.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
