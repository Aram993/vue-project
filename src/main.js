import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/index.css"
import router from './router'
import { createPinia } from 'pinia'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import authPlugin from './plugins/authPlugin.js'
const pinia = createPinia();

const app = createApp(App)
app.use(pinia)

authPlugin.install(app).finally(() => {
    app.use(router)
    app.use(Vue3Toastify)
    app.mount('#app')
})



