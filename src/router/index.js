import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/details",
    name: "details",
    component: DetailsView,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({ name: "login" });
      }
    },
  },
  {
    path: "/login", // add new login route
    name: "login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("token")) {
        next({ name: "details" });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
