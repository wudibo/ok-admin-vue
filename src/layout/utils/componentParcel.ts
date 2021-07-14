import { createBlock, createVNode, defineComponent, watchEffect, ref } from 'vue';
import store from '@/store/store.ts';

/**
 * 1.处理transition过渡组件无法嵌套多层元素的问题
 * 2.处理没有给组件指定name值导致页面keepAlive缓存问题
 * @returns
 */
export default function (component: any) {
  return () => {
    return new Promise((res) => {
      component().then((comm: any) => {
        const name = (comm.default.name || 'okAdminMain') + '$' + comm.default.__hmrId;
        const tempComm = defineComponent({
          name,
          setup() {
            const appTheme = store.getters['theme/appThemeGetter'];
            return {
              appTheme
            };
          },
          render: function () {
            const appTheme = this.appTheme;
            return createBlock(
              'div',
              {
                class: 'ok-admin-main',
                style: {
                  '--primaryColor': appTheme.primaryColor,
                  '--primaryColorHover': appTheme.primaryColorHover,
                  '--primaryColorPressed': appTheme.primaryColorPressed
                }
              },
              [createVNode(comm.default)]
            );
          }
        });
        res(tempComm);
      });
    });
  };
}
