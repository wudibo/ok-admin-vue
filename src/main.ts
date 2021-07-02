import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './assets/css/app.scss';
import NaiveUi from 'naive-ui';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(NaiveUi);
app.mount('#app');
