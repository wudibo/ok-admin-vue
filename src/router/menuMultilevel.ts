import Layout from "@/layout/index.vue";
import {Component} from "@vue/runtime-core";

export default {
    path: '/multilevel',
    component: (Layout as unknown as Component),
    name: 'multilevel',
    meta: {
        title: '多级菜单',
        icon: 'ok-icon-round_favor_fill'
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
                },
                {
                    path: 'list-form2-3',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-3',
                    meta: {title: '测试2-3'},
                },
                {
                    path: 'list-form2-4',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-4',
                    meta: {title: '测试2-4'},
                },
                {
                    path: 'list-form2-5',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-5',
                    meta: {title: '测试2-5'},
                },
                {
                    path: 'list-form2-6',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-6',
                    meta: {title: '测试2-6'},
                },
                {
                    path: 'list-form2-7',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-7',
                    meta: {title: '测试2-7'},
                },
                {
                    path: 'list-form2-8',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-8',
                    meta: {title: '测试2-8'},
                },
                {
                    path: 'list-form2-9',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-9',
                    meta: {title: '测试2-9'},
                },
                {
                    path: 'list-form2-10',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-10',
                    meta: {title: '测试2-10'},
                },
                {
                    path: 'list-form2-11',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-11',
                    meta: {title: '测试2-11'},
                },
                {
                    path: 'list-form2-12',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-12',
                    meta: {title: '测试2-12'},
                },
                {
                    path: 'list-form2-13',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-13',
                    meta: {title: '测试2-13'},
                },
                {
                    path: 'list-form2-14',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-14',
                    meta: {title: '测试2-14'},
                },
                {
                    path: 'list-form2-15',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-15',
                    meta: {title: '测试2-15'},
                },
                {
                    path: 'list-form2-16',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-16',
                    meta: {title: '测试2-16'},
                },
                {
                    path: 'list-form2-17',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-17',
                    meta: {title: '测试2-17'},
                },
                {
                    path: 'list-form2-18',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-18',
                    meta: {title: '测试2-18'},
                },
                {
                    path: 'list-form2-19',
                    component: () => import('@/views/form/list-form.vue'),
                    name: 'listForm2-19',
                    meta: {title: '测试2-19'},
                },
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
                },
                {
                    path: 'list-form-5-4',
                    component: () => import('@/views/form/form-temp.vue'),
                    name: 'listForm5-4',
                    meta: {title: '测试5-4'},
                    children: [
                        {
                            path: 'list-form-5-4-1',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-1',
                            meta: {title: '测试5-4-1'},
                        },
                        {
                            path: 'list-form-5-4-2',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-2',
                            meta: {title: '测试5-4-2'},
                        },
                        {
                            path: 'list-form-5-4-3',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-3',
                            meta: {title: '测试5-4-3'},
                        },
                        {
                            path: 'list-form-5-4-4',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-4',
                            meta: {title: '测试5-4-4'},
                        },
                        {
                            path: 'list-form-5-4-5',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-5',
                            meta: {title: '测试5-4-5'},
                        },
                        {
                            path: 'list-form-5-4-6',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-6',
                            meta: {title: '测试5-4-6'},
                        },
                        {
                            path: 'list-form-5-4-7',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-7',
                            meta: {title: '测试5-4-7'},
                        },
                        {
                            path: 'list-form-5-4-8',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-8',
                            meta: {title: '测试5-4-8'},
                        },
                        {
                            path: 'list-form-5-4-9',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-9',
                            meta: {title: '测试5-4-9'},
                        },
                        {
                            path: 'list-form-5-4-10',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-4-10',
                            meta: {title: '测试5-4-10'},
                        }
                    ]
                },
                {
                    path: 'list-form-5-5',
                    component: () => import('@/views/form/form-temp.vue'),
                    name: 'listForm5-5',
                    meta: {title: '测试5-5'},
                    children: [
                        {
                            path: 'list-form-5-5-1',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-5-1',
                            meta: {title: '测试5-5-1'},
                        },
                        {
                            path: 'list-form-5-5-2',
                            component: () => import('@/views/form/list-form.vue'),
                            name: 'listForm5-5-2',
                            meta: {title: '测试5-5-2'},
                        }
                    ]
                }
            ]
        }
    ]
}
