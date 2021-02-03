import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';
import menuMultilevel from "@/router/menuMultilevel";
import {Component} from "@vue/runtime-core";

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/login.vue'),
        hidden: true,
    }
];

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
                    icon: 'dashboard',
                    affix: true //在tags是否一直悬挂不被关闭
                }
            }
        ],
    },
    /*{
        path: '/logo',
        component: () => import('@/views/login/login.vue'),
        meta: {
            title: '登录',
            icon: 'ok-icon-round_favor_fill'
        },
    },*/
    {
        path: '/user',
        component: (Layout as unknown as Component),
        meta: {
            title: '用户',
            icon: 'ok-icon-round_favor_fill'
        },
        children: [
            {
                path: 'info',
                component: () => import('@/views/form/advanced-form.vue'),
                name: 'userInfo',
                meta: {title: '用户信息', icon: 'ok-icon-myfill'},
            },
            {
                path: 'set',
                component: () => import('@/views/form/advanced-form.vue'),
                name: 'userSet',
                meta: {title: '设置信息', icon: 'ok-icon-myfill'},
            }
        ]
    },
    menuMultilevel,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: asyncRoutes
})

export default router
