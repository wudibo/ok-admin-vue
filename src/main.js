import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'ant-design-vue/dist/antd.css'
import Andt from 'ant-design-vue'
import {createFromIconfontCN} from '@ant-design/icons-vue'
const app = createApp(App);

const MyIcon = createFromIconfontCN({
   scriptUrl: '//at.alicdn.com/t/font_2062608_lmv95pesg59.js', // 在 iconfont.cn 上生成
});
app.component('ok-icon', MyIcon);

//.use(store)
app.use(router)
   .use(Andt);

// 需放置在最后
app.mount('#app');
