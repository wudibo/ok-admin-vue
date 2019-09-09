import Vue from 'vue';
import App from './App.vue';
// 1.1 引入ant-design-vue组件
import AntDesignVue from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
// 2.1 引入自定义router配置
import router from './router';

Vue.config.productionTip = false;
// 1.2 注册ant-design-vue组件
Vue.use(AntDesignVue);

new Vue({
    // 2.2 使用自定义router配置
    router,
    render: h => h(App),
}).$mount('#app');
