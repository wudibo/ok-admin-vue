import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';
import {Component} from "@vue/runtime-core";

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: (Layout as unknown as Component),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/index/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          affix: true //在tags是否一直悬挂不被关闭
        }
      }
    ],
  },
  {
    path: '/icon',
    component: (Layout as unknown as Component),
    children: [
      {
        path: '',
        component: () => import('@/views/icon/index.vue'),
        name: 'icon',
        meta: {
          title: '字体图标',
          icon: 'ok-icon-font-colors'
        }
      }
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: asyncRoutes
})

export default router
