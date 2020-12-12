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
				meta: {
				   title: 'Dashboard',
               icon: 'dashboard',
               affix: true //在tags是否一直悬挂不被关闭
				}
			}
		]
	},
   {
      path: '/form',
      component: Layout,
      name: 'form',
      meta: {
         title: 'form',
         icon: 'dashboard'
      },
      children: [
         {
            path: 'advanced-form',
            component: () => import('/@/views/form/advanced-form.vue'),
            name: 'advancedForm',
            meta: { title: 'advanced Form' },
         },
         {
            path: 'list-form',
            component: () => import('/@/views/form/list-form.vue'),
            name: 'listForm',
            meta: { title: 'list Form' },
            children: [
               {
                  path: 'advanced-form-a',
                  component: () => import('/@/views/form/advanced-form.vue'),
                  name: 'advancedFormA',
                  meta: { title: 'advanced Form' },
               },
               {
                  path: 'advanced-form-b',
                  component: () => import('/@/views/form/advanced-form.vue'),
                  name: 'advancedFormB',
                  meta: { title: 'advanced Form' },
               },
            ]
         }
      ]
   }
];
const router = createRouter({
	history: createWebHashHistory(),
	routes: asyncRoutes//constantRoutes,
})

export default router;
