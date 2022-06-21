import { createRouter, createWebHashHistory } from "vue-router";
// import Style from '@/views/Style.vue'
import Home from "@/views/Home.vue";

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "Contratos",
    },
    path: "/contratos",
    name: "contratos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "@/views/Contracts.vue"),
  },
  {
    meta: {
      title: "Nuevo contrato",
    },
    path: "/contratos/nuevo",
    name: "Nuevo contrato",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "@/views/NewContract.vue"),
  },
  {
    meta: {
      title: "Suscriptores",
    },
    path: "/suscriptores",
    name: "suscriptores",
    component: () =>
      import(/* webpackChunkName: "forms" */ "@/views/Subscribers.vue"),
  },
  {
    meta: {
      title: "Nuevo suscriptor",
    },
    path: "/suscriptores/nuevo",
    name: "Nuevo suscriptor",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tables" */ "@/views/NewSubscriber.vue"),
  },

  {
    meta: {
      title: "Inventario",
    },
    path: "/inventario",
    name: "Inventario",
    component: () =>
      import(/* webpackChunkName: "ui" */ "@/views/Inventory.vue"),
  },
  {
    meta: {
      title: "Inventario",
    },
    path: "/inventario/nuevo",
    name: "Nuevo producto",
    component: () =>
      import(/* webpackChunkName: "ui" */ "@/views/NewProduct.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
  },

  {
    meta: {
      title: "Login",
      fullScreen: true,
    },
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    meta: {
      title: "Error",
      fullScreen: true,
    },
    path: "/error",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/Error.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
