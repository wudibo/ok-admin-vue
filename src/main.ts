import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./assets/css/app.scss";
import NaiveUi from "naive-ui";

const app = createApp(App);
app.use(router);
app.use(NaiveUi);
app.mount("#app");
