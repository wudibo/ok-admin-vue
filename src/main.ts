import {createApp} from 'vue'
import App from './App.vue'
import http from '@/utils/http.ts'
import store from '@/store/index.ts'
import router from '@/router/index.ts'
import 'ant-design-vue/dist/antd.css'
import * as andt from 'ant-design-vue'
import {createFromIconfontCN} from '@ant-design/icons-vue'
import {Component} from "@vue/runtime-core";

const OkIcon: Component = createFromIconfontCN({
    scriptUrl: 'https://at.alicdn.com/t/font_1735284_ldkw1jlgdt.js', // 在 https://www.iconfont.cn/ 上生成
}) as Component;

const app = createApp(App as unknown as Component);
/**设置全局工具类 Start*/
app.config.globalProperties.$http = http;//网络请求
/**设置全局工具类 End*/

app.component('OkIcon', OkIcon);



app.use(router)
    .use(store)
    .use(andt);

app.mount('#app')
