import type {
  Router,
  RouteMeta,
  RouteRecordRaw,
  RouteLocationNormalizedLoaded
} from "vue-router";
import { watch } from "vue";
import { asyncRoutes } from "../../router/router";

export type Tag = {
  fullPath: string;
  meta: RouteMeta;
};

/**路由路径处理 */
const handlePath = function (superPath: string, rePath: string): string {
  if (/^\//.test(rePath)) {
    // 如果rePath第一个字符是/的时候
    return rePath;
  } else if (/\/$/.test(superPath)) {
    // 如果superPath最后一个字符是/的时候
    return superPath + rePath;
  } else {
    return rePath ? superPath + "/" + rePath : superPath;
  }
};

/**tags监听*/
export const tagsEffect = function (
  tags: Array<Tag>,
  route: RouteLocationNormalizedLoaded,
  router: Router
): void {
  /**layouts初始化 (查找所有根路由的组件都是Layout)*/
  const layouts: Array<RouteRecordRaw> = asyncRoutes.reduce((lays, item) => {
    if (item.component && item.component.name === "Layout") {
      lays.push(item);
    }
    return lays;
  }, [] as Array<RouteRecordRaw>);

  /**tags初始化 处理affix悬挂 不处理多级路由*/
  layouts.forEach((item) => {
    if (item.children && item.children.length) {
      item.children.forEach((citem) => {
        if (citem.meta && citem.meta.affix) {
          const fullPath = handlePath(item.path, citem.path);
          tags.push({
            fullPath,
            meta: citem.meta
          });
        }
      });
    }
  });

  /**监听路由变化 */
  watch(
    route,
    (to) => {
      const isTag = tags.some((tag) => tag.fullPath === to.fullPath);
      if (!isTag) {
        // tag 不存在时
        tags.push({
          fullPath: route.fullPath,
          meta: route.meta
        });
      } else {
        // tag 已存在时
      }
    },
    {
      immediate: true
    }
  );
};
