import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'
import store from '@/store/index.ts'

import cScrollbar from 'c-scrollbar'
// import 'ant-design-vue/dist/antd.css'
import * as andt from 'ant-design-vue'
import {createFromIconfontCN} from '@ant-design/icons-vue'
import {Component} from "@vue/runtime-core";

const OkIcon: Component = createFromIconfontCN({
    scriptUrl: 'https://at.alicdn.com/t/font_2062608_vqa432lsf9.js', // 在 iconfont.cn 上生成
}) as Component;

const app = createApp(App as unknown as Component);
app.component('OkIcon', OkIcon);

app.use(router)
    .use(store)
    .use(andt)
    .use(cScrollbar);

app.mount('#app')
