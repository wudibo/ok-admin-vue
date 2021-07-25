import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import NaiveUi from './naiveui/index';
import globalComponents from './components/global.ts';

import './assets/css/app.scss';

const app = createApp(App);
// 注册全局NaiveUI组件
app.use(NaiveUi);

// 注册全局自定义组件
app.use(globalComponents);

// 挂载vuex状态管理
app.use(store);

// 挂载路由
app.use(router);

app.mount('#app');
