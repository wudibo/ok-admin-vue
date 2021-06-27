import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import { Component } from "vue";
import { NewspaperOutline } from "@vicons/ionicons5";
import { StarBorderRound } from "../icon/material-icon";

export type IMeta = {
  title?: string;
  icon?: Component;
  keepAlive?: boolean;
  affix?: boolean;
  hidden?: boolean;
};
export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout as unknown as Component,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home.vue"),
        meta: {
          title: "首页",
          keepAlive: true,
          icon: StarBorderRound,
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
          title: "个人中心",
          icon: StarBorderRound
        }
      }
    ]
  },

  {
    path: "/form",
    component: Layout as unknown as Component,
    redirect: "/form/basic-form",
    meta: {
      title: "表单",
      icon: NewspaperOutline
    },
    children: [
      {
        path: "basic-form",
        name: "basic-form",
        component: () => import("@/views/form/basic-form.vue"),
        meta: {
          title: "基础表单",
          icon: StarBorderRound
        }
      },
      {
        path: "advanced-form",
        name: "advanced-form",
        component: () => import("@/views/form/advanced-form.vue"),
        meta: {
          title: "高级表单"
        }
      },
      {
        path: "step-form",
        name: "step-form",
        component: () => import("@/views/form/advanced-form.vue"),
        meta: {
          title: "分步表单"
        }
      },
      {
        path: "detail",
        name: "detail",
        component: () => import("@/views/form/advanced-form.vue"),
        meta: {
          title: "表单详情"
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
