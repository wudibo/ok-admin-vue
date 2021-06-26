import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { Component } from "@vue/runtime-core";

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout as unknown as Component,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          title: "首页",
          keepAlive: true,
          affix: true //在tags是否一直悬挂不被关闭
        }
      }
    ]
  },

  {
    path: "/user",
    component: Layout as unknown as Component,
    children: [
      {
        path: "",
        name: "user",
        component: () => import("@/views/user/user.vue"),
        meta: {
          title: "个人中心"
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
});

export default router;
