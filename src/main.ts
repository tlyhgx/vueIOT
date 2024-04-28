import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import { createPahoMqttPlugin } from 'vue-paho-mqtt'

const app = createApp(App).use(
  createPahoMqttPlugin({
    PluginOptions: {
      autoConnect: false,
      showNotifications: true
    },

    MqttOptions: {
      host: '106.14.181.182',
      port: 9001,
      username: 'cjkj',
      password: 'cjkj5215',
      clientId: `MyID-${Math.random() * 9999}`,
      mainTopic: ''
    }
  })
)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
