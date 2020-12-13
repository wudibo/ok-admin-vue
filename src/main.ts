import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cScrollbar from 'c-scrollbar'
import 'ant-design-vue/dist/antd.css'
import * as Andt from 'ant-design-vue'
import {createFromIconfontCN} from '@ant-design/icons-vue'

const OkIcon: any = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2062608_vqa432lsf9.js', // 在 iconfont.cn 上生成
});
const app = createApp(App as any);
app.component('ok-icon', OkIcon);

app.use(store)
    .use(router)
    .use(cScrollbar)
    .use(Andt);

app.mount('#app')
