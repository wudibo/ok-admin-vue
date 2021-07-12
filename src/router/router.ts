import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import componentParcel from '../layout/utils/componentParcel';
import Layout from '@/layout/index.vue';
import { Component } from 'vue';
import { NewspaperOutline, WarningOutline } from '@vicons/ionicons5';
import { StarBorderRound } from '../icon/material-icon';
import multiMenu from './multiMenu';
import routerGuard from './routerGuard';

export type IMeta = {
  title?: string;
  icon?: Component;
  keepAlive?: boolean;
  affix?: boolean;
  hidden?: boolean;
};

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout as unknown as Component,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: componentParcel(() => import('@/views/home/home.vue')),
        meta: {
          title: '首页',
          keepAlive: true,
          icon: StarBorderRound,
          affix: true //在tags是否一直悬挂不被关闭
        }
      }
    ]
  },

  {
    path: '/control',
    component: Layout as unknown as Component,
    children: [
      {
        path: '',
        name: 'control',
        component: componentParcel(() => import('@/views/control/control.vue')),
        meta: {
          title: '控制台',
          keepAlive: true,
          icon: StarBorderRound
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout as unknown as Component,
    children: [
      {
        path: '',
        name: 'user',
        component: componentParcel(() => import('@/views/user/user.vue')),
        meta: {
          title: '个人中心',
          icon: StarBorderRound
        }
      }
    ]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout as unknown as Component,
    redirect: '/form/basic-form',
    meta: {
      title: '表单',
      icon: NewspaperOutline
    },
    children: [
      {
        path: 'basic-form',
        name: 'basic-form',
        component: componentParcel(() => import('@/views/form/basic-form.vue')),
        meta: {
          title: '基础表单',
          icon: StarBorderRound
        }
      },
      {
        path: 'advanced-form',
        name: 'advanced-form',
        component: componentParcel(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '高级表单'
        }
      },
      {
        path: 'step-form',
        name: 'step-form',
        component: componentParcel(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '分步表单'
        }
      },
      {
        path: 'detail',
        name: 'detail',
        component: componentParcel(() => import('@/views/form/advanced-form.vue')),
        meta: {
          title: '表单详情'
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'exception',
    component: Layout as unknown as Component,
    redirect: '/exception/404',
    meta: {
      title: '异常页',
      icon: WarningOutline
    },
    children: [
      {
        path: '403',
        name: '403',
        component: componentParcel(() => import('@/views/exception/403.vue')),
        meta: {
          title: '403'
        }
      },
      {
        path: '404',
        name: '404',
        component: componentParcel(() => import('@/views/exception/404.vue')),
        meta: {
          title: '404'
        }
      },
      {
        path: '500',
        name: '500',
        component: componentParcel(() => import('@/views/exception/500.vue')),
        meta: {
          title: '500'
        }
      }
    ]
  },
  multiMenu
];

const constantRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter.concat(asyncRoutes),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

// 路由守卫
routerGuard(router);

export default router;
