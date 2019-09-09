import Vue from 'vue';
import App from './App.vue';
// 1.1 引入ant-design-vue组件
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

Vue.config.productionTip = false;
// 1.2 注册ant-design-vue组件
Vue.use(AntDesignVue);

new Vue({
    render: h => h(App),
}).$mount('#app');
