import { createApp } from 'vue'
import App from './App.vue'
//引入pinia
import { createPinia } from 'pinia'

const app = createApp(App)
//创建pinia实例
const pinia = createPinia()
//安装pinia
app.use(pinia)
app.mount('#app')
