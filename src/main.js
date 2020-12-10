import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import store from './store'
import 'ant-design-vue/dist/antd.css'
import {Button, Icon, Form, Input, InputNumber} from 'ant-design-vue'

const app = createApp(App)

/**部分antd全局组件*/
//.use(store)
app.use(router)
	.use(Button)
	.use(Icon)
	.use(Form)
	.use(Input)
	.use(InputNumber);

// 需放置在最后
app.mount('#app');
