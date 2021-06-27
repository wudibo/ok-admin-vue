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

/**tags水平滚动条动态处理*/
export const tagsScroll = function (
  superBox: HTMLDivElement,
  tagConent: HTMLDivElement
) {
  const layActive = tagConent.querySelector(".tag-active") as HTMLDivElement; // 当前选中的tag
  const superWidth = superBox.offsetWidth, // 可视宽度
    tagWidth = tagConent.offsetWidth, // 内容的总宽度
    layActiveWidth = layActive.offsetWidth; // 当前选中的元素的宽度

  const diffValue = superBox.scrollLeft - layActive.offsetLeft; // 滚动条和当前元素位置的差值
  const showDistance = superWidth - layActiveWidth; // 当前元素位置可现实的位置

  if (superBox.scrollLeft > layActive.offsetLeft) {
    // 元素在左边不可见的情况
    const adjacentElement = layActive.previousSibling as HTMLDivElement | null; // 获取当前元素的上一个相邻元素
    if (adjacentElement && adjacentElement.nodeType === 1) {
      superBox.scrollLeft = layActive.offsetLeft - adjacentElement.offsetWidth;
    } else {
      superBox.scrollLeft = 0; // 最左边
    }
  } else if (Math.abs(diffValue) > showDistance) {
    // 元素在右边不可见的情况
    superBox.scrollLeft = layActive.offsetLeft;
  }

  /* const superWidth = superBox.offsetWidth, // 可视宽度
    scrollLeft = superBox.scrollLeft, // 滚动条的位置
    tagWidth = tagConent.offsetWidth, // 内容总宽
    layActive = tagConent.querySelector(".tag-active") as HTMLDivElement;
  const layActiveWidth = layActive.offsetWidth, // 当前选中的元素的宽度
    layActiveLeft = layActive.offsetLeft; // 当前选中元素离左边的宽度
    
  console.log("layActiveLeft:" + layActiveLeft);
  console.log("tagWidth:" + tagWidth);
  console.log("superWidth:" + superWidth);
  console.log("scrollLeft:" + scrollLeft);
  console.log([superBox]); */
};
