<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import mqtt from 'mqtt'

const connected = ref(false)
// Connection options
//https://github.com/mqttjs/MQTT.js?tab=readme-ov-file#client
//https://www.emqx.com/en/blog/mqtt-js-tutorial
const options = {
  clean: true,
  connectTimeout: 4000,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: 'cjkj',
  password: 'cjkj5215',
  keepalive: 60,
  reconnectPeriod: 1000,
  will: {
    topic: '/will',
    payload: 'Offline',
    qos: 1,
    retain: false
  },
  protocolVersion: 4
}
const client = mqtt.connect('ws://106.14.181.182:9001', options)

const messages = ref([])

function outPut() {
  // let ask: string = '0A050009FF005D43'

  // 创建一个十六进制数组
  let hexArray: string[] = ['0A', '05', '00', '09', 'FF', '00', '5D', '43']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))

  // console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes)
}
function outPutOff() {
  // let askOff: string = '0A05000900001CB3'

  let hexArrayOff: string[] = ['0A', '05', '00', '09', '00', '00', '1C', 'B3']

  // 转换为字节数组

  let bytesOff: Uint8Array = new Uint8Array(hexArrayOff.map((h) => parseInt(h, 16)))
  client.publish('/CJ2400101/SUBDIS', bytesOff)
}
function readCoil() {
  let hexArray: string[] = ['0A', '01', '00', '08', '00', '03', 'FC', 'B2']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
  console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}

client.on('connect', () => {
  console.log('connected')
  connected.value = true
  client.subscribe('/CJ2400101/PUBDIS', { qos: 0 }, (err) => {
    if (!err) {
      console.log('subscribed')
      client.publish('/CJ2400101/PUBDIS', 'Hello mqtt')
    }
  })
  client.subscribe('/CJ2400101/WILL', { qos: 1 })
})

client.on('message', (topic, message) => {
  const msgRecieved = message.toString()
  const encoder = new TextEncoder()
  const result = encoder.encode(msgRecieved)
  // console.log(result)
  messages.value.push(result)
  messages.value.push(msgRecieved)
})

client.on('close', () => {
  console.log('close')
  connected.value = false
})
onUnmounted(() => {
  client.end()
  connected.value = false
  console.log('exit')
})
</script>

<template>
  <el-container>
    <el-aside class="aside">
      <MainView />
    </el-aside>
    <el-main>


      <h1>MQTTjs VITE Example</h1>
      <p>
        MQTTjs is a simple MQTT client for the browser. It uses WebSockets to connect to an MQTT
        broker.
      </p>
      <p>
        This example uses the public MQTT broker at
        <a href="https://test.mosquitto.org/">test.mosquitto.org</a>.
      </p>

      <p>Status: {{ connected ? 'Connected' : 'Disconnected' }}</p>
      <p>
        <button @click="client.publish('/CJ2400101/SUBDIS', 'Hello mqtt')">Publish</button>
        <button @click="outPut">Publish On0.9</button>
        <button @click="outPutOff">Publish Off0.9</button>
        <button @click="readCoil">read 0.9</button>
        <button @click="client.end()">Disconnect</button>
      </p>
      <p>Messages:</p>
      <ul>
        <li v-for="message in messages" :key="message">{{ message }}</li>
      </ul>

    </el-main>
  </el-container>

</template>

<style>
.aside {
  /* color: var(--el-text-color-primary); */
  height: 100vh;
  width: 240px;
  /* background: var(--el-color-primary-light-8); */
}
</style>
