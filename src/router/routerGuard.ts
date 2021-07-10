import { Router } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/css/nprogress.css'; // 进度条样式

NProgress.configure({ showSpinner: false });

/***
 * 路由守卫
 */
export default function routerGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    next();
  });
  router.afterEach((to, from, failure) => {
    if (!failure) {
      NProgress.done();
    } else {
      NProgress.done();
    }
  });
}
