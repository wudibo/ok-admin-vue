import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Layout from '@/layout/index.vue';

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
        ]
    },
    {
        path: '/form',
        component: (Layout as any),
        name: 'form',
        meta: {
            title: '表单',
            icon: 'dashboard'
        },
        children: [
            {
                path: 'advanced-form',
                component: () => import('@/views/form/advanced-form.vue'),
                name: 'advancedForm',
                meta: {title: '测试1'},
            },
            {
                path: 'list-form2',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm2',
                meta: {title: '测试2'},
                children: [
                    {
                        path: 'list-form2-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm2-1',
                        meta: {title: '测试2-1'},
                    },
                    {
                        path: 'list-form2-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm2-2',
                        meta: {title: '测试2-2'},
                    }
                ]
            },
            {
                path: 'list-form3',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm3',
                meta: {title: '测试3'},
                children: [
                    {
                        path: 'list-form-3-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm3-1',
                        meta: {title: '测试3-1'},
                    },
                    {
                        path: 'list-form-3-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm3-2',
                        meta: {title: '测试3-2'},
                    }
                ]
            },
            {
                path: 'list-form4',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm4',
                meta: {title: '测试4'},
                children: [
                    {
                        path: 'list-form-4-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm4-1',
                        meta: {title: '测试4-1'},
                    },
                    {
                        path: 'list-form-4-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm4-2',
                        meta: {title: '测试4-2'},
                    }
                ]
            },
            {
                path: 'list-form5',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm5',
                meta: {title: '测试5'},
                children: [
                    {
                        path: 'list-form-5-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm5-1',
                        meta: {title: '测试5-1'},
                    },
                    {
                        path: 'list-form-5-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm5-2',
                        meta: {title: '测试5-2'},
                    },
                    {
                        path: 'list-form-5-3',
                        component: () => import('@/views/form/form-temp.vue'),
                        name: 'listForm5-3',
                        meta: {title: '测试5-3'},
                        children: [
                            {
                                path: 'list-form-5-3-1',
                                component: () => import('@/views/form/list-form.vue'),
                                name: 'listForm5-3-1',
                                meta: {title: '测试5-3-1'},
                            },
                            {
                                path: 'list-form-5-3-2',
                                component: () => import('@/views/form/list-form.vue'),
                                name: 'listForm5-3-2',
                                meta: {title: '测试5-3-2'},
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: '/user',
        component: (Layout as any),
        name: 'user',
        meta: {
            title: '用户',
            icon: 'dashboard'
        },
        children: [
            {
                path: 'advanced-form',
                component: () => import('@/views/form/advanced-form.vue'),
                name: 'advancedForm',
                meta: {title: '测试1'},
            },
            {
                path: 'list-form2',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm2',
                meta: {title: '测试2'},
                children: [
                    {
                        path: 'list-form2-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm2-1',
                        meta: {title: '测试2-1'},
                    },
                    {
                        path: 'list-form2-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm2-2',
                        meta: {title: '测试2-2'},
                    }
                ]
            },
            {
                path: 'list-form3',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm3',
                meta: {title: '测试3'},
                children: [
                    {
                        path: 'list-form-3-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm3-1',
                        meta: {title: '测试3-1'},
                    },
                    {
                        path: 'list-form-3-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm3-2',
                        meta: {title: '测试3-2'},
                    }
                ]
            },
            {
                path: 'list-form4',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm4',
                meta: {title: '测试4'},
                children: [
                    {
                        path: 'list-form-4-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm4-1',
                        meta: {title: '测试4-1'},
                    },
                    {
                        path: 'list-form-4-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm4-2',
                        meta: {title: '测试4-2'},
                    }
                ]
            },
            {
                path: 'list-form5',
                component: () => import('@/views/form/form-temp.vue'),
                name: 'listForm5',
                meta: {title: '测试5'},
                children: [
                    {
                        path: 'list-form-5-1',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm5-1',
                        meta: {title: '测试5-1'},
                    },
                    {
                        path: 'list-form-5-2',
                        component: () => import('@/views/form/list-form.vue'),
                        name: 'listForm5-2',
                        meta: {title: '测试5-2'},
                    },
                    {
                        path: 'list-form-5-3',
                        component: () => import('@/views/form/form-temp.vue'),
                        name: 'listForm5-3',
                        meta: {title: '测试5-3'},
                        children: [
                            {
                                path: 'list-form-5-3-1',
                                component: () => import('@/views/form/list-form.vue'),
                                name: 'listForm5-3-1',
                                meta: {title: '测试5-3-1'},
                            },
                            {
                                path: 'list-form-5-3-2',
                                component: () => import('@/views/form/list-form.vue'),
                                name: 'listForm5-3-2',
                                meta: {title: '测试5-3-2'},
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: asyncRoutes
})

export default router
