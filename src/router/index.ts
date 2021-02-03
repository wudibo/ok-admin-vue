import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';
import menuMultilevel from "@/router/menuMultilevel";
import {Component} from "@vue/runtime-core";
// import {FontColorsOutlined} from "@ant-design/icons-vue";
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
