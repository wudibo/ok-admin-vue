import {createApp} from 'vue';
import {Component} from "@vue/runtime-core";
import App from './App.vue';
import http from './utils/http';
import router from './router/index';
import store from './store/index';
import antd from './plugins/antd';
import {createFromIconfontCN} from '@ant-design/icons-vue'

const OkIcon: Component = createFromIconfontCN({
  scriptUrl: 'https://at.alicdn.com/t/font_1735284_9c3dv0ukvde.js', // 在 https://www.iconfont.cn/ 上生成
}) as Component;

const app = createApp(App as unknown as Component);

/**设置全局工具类 Start*/
app.config.globalProperties.$http = http;//网络请求
/**设置全局工具类 End*/

/**全局字体图标组件*/
app.component('OkIcon', OkIcon);

app.use(router)
    .use(store)
    .use(antd);
app.mount('#app')
