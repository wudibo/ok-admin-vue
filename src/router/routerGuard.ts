import type { Router, RouteLocationNormalized } from 'vue-router';
import NProgress from 'nprogress';
import store from '@/store/store.ts';
import 'nprogress/css/nprogress.css'; // 进度条样式

NProgress.configure({ showSpinner: false });

/**
 * 添加keepAlive缓存
 */
function addKeepAlive(route: any) {
  if (route.meta && route.meta.keepAlive) {
    store.commit(
      'admin/ADD_KEEPALIVES',
      route.matched[route.matched.length - 1].components.default.name
    );
  }
}

/***
 * 路由守卫
 */
export default function routerGuard(router: Router) {
  /**前置守卫*/
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();
    /* setTimeout(() => {
      if (to.fullPath.slice(0, 9) === '/redirect') {
        router.replace(to.fullPath.slice(9));
      }
    }) */
    /* console.log(to.fullPath.slice(9));
    console.log(to.fullPath); */
  });
  /**后置守卫*/
  router.afterEach((to, from, failure) => {
    addKeepAlive(to); // 添加keepAlive缓存
    if (!failure) {
      NProgress.done();
    } else {
      NProgress.done();
    }
  });
}
