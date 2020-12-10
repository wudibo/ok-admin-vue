import {createRouter, createWebHashHistory} from 'vue-router'

export const constantRoutes = [
	{
		path: '/',
		component: () => import('/@/views/index/index.vue')
	},
	{
		path: '/login',
		component: () => import('/@/views/login.vue'),
		hidden: true,
	}
]
const router = createRouter({
	mode: 'history',
	history: createWebHashHistory(),
	routes: constantRoutes,
})

export default router;