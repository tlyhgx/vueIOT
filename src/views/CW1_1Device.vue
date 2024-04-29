<template>
  <el-row class="row-bg bgcolor shadow-border">
    <el-col :span="8" style="padding: 44px 0 0 76px">2024-4-19 17:21:33</el-col>
    <el-col :span="8" justify="center">
      <div class="grid-content header">
        餐厨垃圾处理设备<span class="subheading">诸暨次坞001--2吨</span>
      </div>
    </el-col>
    <el-col :span="4" style="padding: 40px 0 0 86px; font-size: 1.2em"
      ><DIOStateDisplay name="在线" :isWork="true"
    /></el-col>
    <el-col :span="4" style="padding: 40px 0 0 26px; font-size: 1.2em">设备介绍</el-col>
  </el-row>

  <el-row gutter="10">
    <el-col :span="18">
      <div class="grid-content ep-bg-purple content-heigh">
        <el-row gutter="10">
          <el-col :span="6">
            <div class="subbgcolor di-state-display left-first-line shadow-border">
              <p class="dio_title">输入信号状态</p>
              <div class="group-container">
                <!-- //TODO22:isWork后面要改成变量赋值，第一个上料紧停是个常闭按钮 -->
                <DIOStateDisplay
                  class="group-item"
                  name="上料紧停按钮"
                  :isWork="!DI_state_bitArray[0]"
                />
                <DIOStateDisplay class="group-item" name="上限位" :isWork="DI_state_bitArray[6]" />
                <DIOStateDisplay class="group-item" name="下限位" :isWork="DI_state_bitArray[7]" />
                <DIOStateDisplay
                  class="group-item"
                  name="出料启动"
                  :isWork="DI_state_bitArray[8]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="搅拌A正转"
                  :isWork="DI_state_bitArray[9]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="搅拌A反转"
                  :isWork="DI_state_bitArray[10]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="搅拌B正转"
                  :isWork="DI_state_bitArray[11]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="破碎压榨正转"
                  :isWork="DI_state_bitArray[12]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="破碎压榨反转"
                  :isWork="DI_state_bitArray[13]"
                />
                <DIOStateDisplay class="group-item" name="液压泵" :isWork="DI_state_bitArray[14]" />
                <DIOStateDisplay
                  class="group-item"
                  name="不锈钢风机"
                  :isWork="DI_state_bitArray[15]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="喷淋塔电机"
                  :isWork="DI_state_bitArray[16]"
                />
                <DIOStateDisplay
                  class="group-item"
                  name="自吸式水泵"
                  :isWork="DI_state_bitArray[17]"
                />
              </div>
            </div>
          </el-col>
          <el-col
            :span="12"
            class="grid-content ep-bg-purple subbgcolor left-first-line shadow-border"
          >
            <el-row>
              <div style="width: 100%">
                <img
                  alt="设备图片"
                  src="@/assets/kitchen waste.png"
                  style="width: 100%; height: auto"
                />
              </div>
            </el-row>
            <el-row justify="center">
              <div style="display: flex; padding-top: 50px">
                <DIOStateDisplay name="工作" :isWork="true" />
                <DIOStateDisplay style="margin-left: 30px" name="停止" :isWork="false" />
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ep-bg-purple subbgcolor left-first-line shadow-border">
              <p class="dio_title">输出信号状态</p>
              <div class="group-container">
                <DIOStateDisplay
                  class="group-item-DO"
                  name="1#加热"
                  :isWork="DO_state_bitArray[0]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="2#加热"
                  :isWork="DO_state_bitArray[1]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="3#加热"
                  :isWork="DO_state_bitArray[2]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="4#加热"
                  :isWork="DO_state_bitArray[3]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="搅拌A正转"
                  :isWork="DO_state_bitArray[8]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="搅拌A反转"
                  :isWork="DO_state_bitArray[9]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="搅拌B正转"
                  :isWork="DO_state_bitArray[10]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="破碎压榨正转"
                  :isWork="DO_state_bitArray[11]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="破碎压榨反转"
                  :isWork="DO_state_bitArray[12]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="液压泵"
                  :isWork="DO_state_bitArray[13]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="不锈钢风机"
                  :isWork="DO_state_bitArray[14]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="喷淋塔电机"
                  :isWork="DO_state_bitArray[15]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="自吸式水泵"
                  :isWork="DO_state_bitArray[16]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="提升机上升"
                  :isWork="DO_state_bitArray[17]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="提升机下降"
                  :isWork="DO_state_bitArray[18]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="压榨冲洗"
                  :isWork="DO_state_bitArray[19]"
                />
                <DIOStateDisplay
                  class="group-item-DO"
                  name="外接冲洗"
                  :isWork="DO_state_bitArray[20]"
                />
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row gutter="10">
          <el-col :span="18">
            <div class="grid-content ep-bg-purple subbgcolor left-second-line shadow-border">
              温度实时曲线
              <LineChartStyle01 />
            </div>
          </el-col>
          <!-- //HACK:是否需要日期选择 -->
          <!-- //HACK22:此处要增加scroll ,会不会自动产生 -->
          <el-col :span="6">
            <div
              class="grid-content ep-bg-purple subbgcolor left-second-line shadow-border"
              style="padding-top: 15px"
            >
              <el-timeline style="max-width: 600px">
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :timestamp="activity.timestamp"
                >
                  <div style="color: red">{{ activity.content }}</div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple content-heigh">
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple subbgcolor right-row-line shadow-border">
              日清单
              <BarChartStyle01 />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple subbgcolor right-row-line shadow-border">
              日汇总清单
              <BarChartStyle01 />
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { ref, onUnmounted, onMounted } from 'vue'
import mqtt from 'mqtt'
import DIOStateDisplay from '@/components/DIOStateDisplay.vue'
import BarChartStyle01 from '@/components/BarChartStyle01.vue'
import LineChartStyle01 from '@/components/LineChartStyle01.vue'
import { bytesToBitArray } from '@/components/helpers'
const activities = [
  {
    timestamp: '09:10',
    content: '1#温度过高！'
  },
  {
    timestamp: '14:18',
    content: '搅拌机故障！'
  },
  {
    timestamp: '16:46',
    content: '破碎机故障！'
  },
  {
    timestamp: '21:34',
    content: '1#温度太高！'
  }
]
let timer: ReturnType<typeof setInterval> | null = null
const DO_state_bitArray = ref([]) //输出状态组
const DI_state_bitArray = ref([]) //输出状态组
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
    retain: true
  },
  protocolVersion: 4
}
const client = mqtt.connect('ws://106.14.181.182:9001', options)

// const messages = ref([])

function readCoil() {
  //0A01000000177D7F
  let hexArray: string[] = ['0A', '01', '00', '00', '00', '17', '7D', '7F']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
  console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}
function readDiscreteInputs() {
  //0A0200000017397F
  let hexArray: string[] = ['0A', '02', '00', '00', '00', '17', '39', '7F']

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
      console.log('subscribed  dio')
      // client.publish('/CJ2400101/PUBDIS', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  const msgRecieved = message.toString()
  // console.log('sssssssssss')
  // console.log(msgRecieved)
  const encoder = new TextEncoder()
  const result = encoder.encode(msgRecieved)

  if (result[1] == 1) {
    DO_state_bitArray.value = bytesToBitArray(result.slice(3, 6))
    console.log(DO_state_bitArray.value)
  } else if (result[1] == 2) {
    DI_state_bitArray.value = bytesToBitArray(result.slice(3, 6))
    console.log(DI_state_bitArray.value)
  }

  // console.log('sssssssss')
  // console.log(result)
  // messages.value.push(result)
})
onMounted(() => {
  timer = setInterval(() => {
    readDiscreteInputs()
    setTimeout(() => {
      console.log('1', '读取输出状态')
      readCoil()
      // resolve('done');
    }, 2000)
  }, 5000)
})
onUnmounted(() => {
  client.end()
  connected.value = false
  console.log('exit')
  if (timer) {
    clearInterval(timer)
  }
})
</script>
<style>
.header {
  display: flex;
  justify-content: center;
  padding-top: 16px;

  font-family: sans-serif;
  font-size: 2.2rem;
}

.shadow-border {
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5);
}

.bgcolor {
  background-color: rgb(92, 150, 197);
}

.left-first-line {
  height: 55vh;
}

.di-state-display {
  padding: 4% 0 0 5%;
}

.left-second-line {
  height: 29vh;
}

.right-row-line {
  height: 42vh;
}

.subbgcolor {
  background-color: rgb(126, 215, 241);
}
.dio_title {
  text-align: center;
  font-size: 24px;
  color: #286dc0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  /* font-family: cursive; */
}
.group-container {
  padding-top: 10px;
  padding-left: 45px;
}

.group-item {
  margin-top: 6px;
}
.group-item-DO {
  margin-top: 3px;
}

.content-heigh {
  height: 80vh;
}

.subheading {
  font-size: 1rem;
  padding: 20px 0 0 15px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  /* min-height: 36px; */
}
</style>
