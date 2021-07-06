import { App } from 'vue';
import { NButton, NIcon } from 'naive-ui';

// 这里添加经常使用的全局NaiveUI组件
export default {
  install(_app: App) {
    _app.component('NButton', NButton);
    _app.component('NIcon', NIcon);
  }
};
