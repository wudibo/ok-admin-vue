import { h, createVNode, defineComponent } from 'vue';
import store from '@/store/store.ts';

/**
 * 功能如下
 * 1.处理transition过渡组件无法嵌套多层元素的问题
 * 2.处理没有给组件指定name值导致页面keepAlive缓存问题
 * 3.主题样式 --primary-color,--primary-color-hover,--primary-color-pressed
 * @returns
 */
export default function (component: any) {
  return () => {
    return new Promise((res) => {
      component().then((comm: any) => {
        const name = (comm.default.name || 'okAdminMain') + '$' + comm.default.__hmrId;
        const tempComm = defineComponent({
          name,
          render: function () {
            const appTheme = store.getters['theme/appThemeGetter'];
            return h(
              'div',
              {
                class: 'ok-admin-main',
                style: {
                  '--primary-color': appTheme.primaryColor,
                  '--primary-color-hover': appTheme.primaryColorHover,
                  '--primary-color-pressed': appTheme.primaryColorPressed
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
