<template>
  <el-button type="success" @click="outPut"> 打开1.1</el-button>
  <el-button type="success" @click="outPutOff"> 关闭1.1</el-button>
  <el-button type="success" @click="readCoil"> 读取DO</el-button>
</template>
<script setup lang="ts">
import { $mqtt } from 'vue-paho-mqtt'
import { onMounted, onUnmounted } from 'vue'

function outPutOff() {
  // let askOff: string = '0A05000900001CB3'

  let hexArrayOff: string[] = ['0A', '05', '00', '09', '00', '00', '1C', 'B3']

  // 转换为字节数组

  let bytesOff: Uint8Array = new Uint8Array(hexArrayOff.map((h) => parseInt(h, 16)))
  $mqtt.publish('CJ2400101/SUBDIS', bytesOff, 'B')
}
function readCoil() {
  //0A010001000F
  let hexArray: string[] = ['0A', '01', '00', '01', '00', '0F', '2C', 'B5']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))

  $mqtt.publish('CJ2400101/SUBDIS', bytes, 'B')
}
function outPut() {
  // let ask: string = '0A050009FF005D43'

  // 创建一个十六进制数组
  let hexArray: string[] = ['0A', '05', '00', '09', 'FF', '00', '5D', '43']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))

  // console.log(bytes)
  $mqtt.publish('CJ2400101/SUBDIS', bytes, 'B')
}

const connect = async () => {
  await $mqtt.connect({
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
}
const subscript = async () => {
  $mqtt.subscribe('CJ2400101/PUBDIS', (data: string) => {
    console.log(data, 'recieved')
    console.log(data.length)
    console.log(data.charCodeAt(0))
    console.log(data.charCodeAt(1))
    // console.log(parseInt(data))
  })
}
onMounted(async () => {
  console.log('测试mqtt')
  await connect()
  await subscript()

  // await
})

//BUG:WebSocket connection to 'wss://106.14.181.182:9001/mqtt' failed:
// 当本地有输出远程开启publish时;远程关闭不会
onUnmounted(() => {
  console.log('退出mqtt')
  $mqtt.disconnect()
  // const result = await $mqtt.disconnect()
  // console.log( result)
})
</script>
