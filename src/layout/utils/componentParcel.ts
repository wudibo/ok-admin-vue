import { defineComponent } from 'vue';
import { createBlock, createVNode } from 'vue';

/**
 * 1.处理transition过渡组件无法嵌套多层元素的问题
 * 2.处理没有给组件指定name值导致页面keepAlive缓存问题
 * @returns
 */
export default function (component: any) {
  return () => {
    return new Promise((res) => {
      component().then((comm: any) => {
        const name = comm.default.name + '$' + comm.default.__hmrId;
        const tempComm = defineComponent({
          name,
          render: function () {
            return createBlock('div', { class: 'ok-admin-main' }, [createVNode(comm.default)]);
          }
        });
        res(tempComm);
      });
    });
  };
}
