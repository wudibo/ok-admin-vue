import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './assets/css/app.scss';
import NaiveUi from './naiveui/index';

const app = createApp(App);
app.use(NaiveUi);
app.use(store);
app.use(router);
app.mount('#app');
