import { defineComponent } from 'vue';
import { createBlock, createVNode } from 'vue';

/**
 * 处理transition过渡组件无法嵌套多层元素的问题
 * @returns
 */
export default function(component: any) {
  return () => {
    return new Promise((res) => {
      component().then((commp: any) => {
        const name = commp.default.name + '$' + commp.default.__hmrId;
        const tempcomm = defineComponent({
          name,
          render: function() {
            return createBlock('div', null, [createVNode(commp.default)]);
          }
        });
        res(tempcomm);
      });
    });
  };
}
