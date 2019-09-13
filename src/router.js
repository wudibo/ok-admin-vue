import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {getToken} from '@/utils/cookie';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/user',
            component: () => import(/* webpackChunkName: "layouts" */ './layouts/UserLayout'),
            children: [
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
            path: '/member',
            component: () => import(/* webpackChunkName: "layouts" */ './layouts/BasicLayout'),
            children: [
                {
                    path: '/member/user',
                    name: 'user-list',
                    component: () => import(/* webpackChunkName: "member" */ './views/Member/User')
                },
                {
                    path: '/member/permission',
                    name: 'permission',
                    component: () => import(/* webpackChunkName: "member" */ './views/Member/Permission')
                },
                {
                    path: '/member/role',
                    name: 'role',
                    component: () => import(/* webpackChunkName: "member" */ './views/Member/Role')
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
    //放行的URL
    const whiteList = ['/user/login', '/user/register', '/user/forget'];
    // 用户已登录
    if (getToken()) {
        if (to.path === '/login') {
            next({path: '/'});
        } else {
            // TODO 发送请求查询用户信息
            next();
        }
    } else { // 用户未登录
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/user/login?redirect=${to.path}`);
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
};

export default router;
