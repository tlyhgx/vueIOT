import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

import axios from './utils/axios' // 导入配置好的axios实例

const app = createApp(App)
app.config.globalProperties.$axios = axios // 将axios实例添加到Vue实例的原型链上
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
