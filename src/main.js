import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import 'ant-design-vue/dist/antd.less';
import {Button, Icon, Form, Input, InputNumber} from 'ant-design-vue';
const app = createApp(App);
/**部分antd全局组件*/
app.use(Button);
app.use(Icon);
app.use(Form);
app.use(Input);
app.use(InputNumber);

// 需放置在最后
app.mount('#app');
