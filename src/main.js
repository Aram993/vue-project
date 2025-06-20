import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/index.css"
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
