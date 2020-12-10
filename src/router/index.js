import {createRouter, createWebHashHistory} from 'vue-router'
import Layout from "/@/layout/index.vue";

export const constantRoutes = [
	{
		path: '/login',
		component: () => import('/@/views/login/login.vue'),
		hidden: true,
	}
];
export const asyncRoutes = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		children: [
			{
				path: 'dashboard',
				component: () => import('/@/views/index/index.vue'),
				name: 'Dashboard',
				meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
			}
		]
	},
];
const router = createRouter({
	mode: 'history',
	history: createWebHashHistory(),
	routes: asyncRoutes//constantRoutes,
})

export default router;
