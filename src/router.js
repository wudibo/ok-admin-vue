import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/', 
            redirect: '/dashboard'
        },
        {
            path: '/user',
            // component: {render: h => h('router-view')},
            component: () => import(/* webpackChunkName: "layouts" */ './layouts/UserLayout'),
            children: [
                {
                    path: '/user',
                    redirect: '/user/login'
                },
                {
                    path: '/user/login',
                    name: 'login',
                    component: () => import(/* webpackChunkName: "user" */ './views/User/Login')
                },
                {
                    path: '/user/register',
                    name: 'register',
                    component: () => import(/* webpackChunkName: "user" */ './views/User/Register')
                },
                {
                    path: '/user/forget',
                    name: 'forget',
                    component: () => import(/* webpackChunkName: "user" */ './views/User/Forget')
                }
            ]
        },
        {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "layouts" */ './layouts/BasicLayout'),
            children: [
                {
                    path: '/dashboard',
                    redirect: '/dashboard/analysis'
                },
                {
                    path: '/dashboard/analysis',
                    name: 'analysis',
                    component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Analysis')
                },
                {
                    path: '/dashboard/monitor',
                    name: 'monitor',
                    component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Monitor')
                },
                {
                    path: '/dashboard/workplace',
                    name: 'workplace',
                    component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard/Workplace')
                }
            ]
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import(/* webpackChunkName: "dashboard" */ './views/404')
        },
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
