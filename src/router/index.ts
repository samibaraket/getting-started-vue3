import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/companies",
    name: "companies",
    component: () => import("@/views/CompanyView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: {
      template: `<div class='p-8 text-center text-red-600 text-xl'>404 – Page Not Found</div>`,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
