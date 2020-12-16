import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';
import menuMultilevel from "@/router/menuMultilevel";

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
        component: (Layout as any),
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
    menuMultilevel,
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: asyncRoutes
})

export default router
