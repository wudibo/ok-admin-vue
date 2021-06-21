import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/Index.vue';
import {Component} from "@vue/runtime-core";

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: (Layout as unknown as Component),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '首页',
          affix: true //在tags是否一直悬挂不被关闭
        }
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('@/views/user/user.vue'),
        meta: {
          title: '个人中心',
          affix: true //在tags是否一直悬挂不被关闭
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
})

export default router
