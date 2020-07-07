import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/SignIn",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_In_Page.vue")
  },
  {
    path: "/FormPage",
    name: "FormPage",
    component: () => import("../views/FormPage.vue")
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_Up_Page.vue")
  },

  {
    path: "/AllApplicationsPage",
    name: "AllApplicationsPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllApplicationsPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
