import Vue from 'vue';
import App from './App.vue';
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import router from './router';
import axios from './axios';

Vue.config.productionTip = false;
Vue.use(AntDesignVue);
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
