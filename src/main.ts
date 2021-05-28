import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'

console.log("Main.ts")
const app = createApp(App)
app.use(vuetify)

app.mount('#app')
