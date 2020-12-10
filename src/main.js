import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'ant-design-vue/dist/antd.css'
// import {Button, L Icon, Form, Input, InputNumber} from 'ant-design-vue'
import Andt from 'ant-design-vue'

const app = createApp(App)

/**部分antd全局组件*/
//.use(store)
app.use(router)
	.use(Andt);

// 需放置在最后
app.mount('#app');
