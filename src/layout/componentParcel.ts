import { createBlock, createVNode } from 'vue';

type glob = Record<string, () => Promise<{ [key: string]: any }>>;
// 页面路径地址
const pages: glob = import.meta.glob('../views/**/*.vue');

/**
 * 处理transition过渡组件无法嵌套多层元素的问题
 * @returns
 */
export default function (componentPath: string) {
  return new Promise((res) => {
    componentPath = componentPath.replace('@/', '../'); // 将@/替换为../
    pages[componentPath]().then((commp) => {
      res({
        render: function () {
          return createBlock('div', {}, [createVNode(commp.default)]);
        }
      });
    });
  });
}
