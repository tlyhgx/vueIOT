<template>
  <p>cssss</p>
</template>
<script setup lang="ts">
import { $mqtt } from 'vue-paho-mqtt'
import { onMounted, onUnmounted } from 'vue'
$mqtt.publish('SUBDIS', 'Hello, world!', 'Qr')
$mqtt.subscribe('PUBDIS', (data: string) => {
  console.log(data, 'recieved')
})

onMounted(() => {
  console.log('测试mqtt')
  $mqtt.connect({
    onConnect: () => {
      console.log('Mqtt connected')
    },
    onFailure: () => {
      console.log('Mqtt connection failed')
    },
    onConnectionLost: (error: any) => {
      console.log('Error:', error.message)
    },
    onMessageArrived: (message: { payloadString: string; destinationName: string }) => {
      console.log('Message Arrived:', message.payloadString, message.destinationName)
    }
  })
})

//BUG:WebSocket connection to 'wss://106.14.181.182:9001/mqtt' failed:  当本地有其它publish时
onUnmounted(() => {
  console.log('退出mqtt')
  $mqtt.disconnect()
  // const result = await $mqtt.disconnect()
  // console.log( result)
})
</script>
