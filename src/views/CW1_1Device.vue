<template>
  <el-container>
    <el-aside class="aside">
      <MainView />
    </el-aside>
    <el-main>
      <el-row class=" bgcolor shadow-border">
        <el-col :span="8" style="padding: 40px 0 0 76px">
          <div>{{ currentTime }}</div>
        </el-col>
        <el-col :span="8" justify="center">
          <div class="grid-content header">
            餐厨垃圾处理设备<span class="subheading">诸暨次坞001--2吨</span>
          </div>
        </el-col>
        <el-col :span="4" style="padding: 40px 0 0 86px; font-size: 1.2em">

          <DIOStateDisplay v-if="isOnline" name="在线" :isWork=isOnline />
          <DIOStateDisplay v-else name="离线" :isWork=isOnline />
        </el-col>
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
                    <!-- 第一个上料紧停是个常闭按钮 -->
                    <DIOStateDisplay class="group-item" name="上料紧停按钮（常闭）" :isWork="!DI_state_bitArray[0]" />
                    <DIOStateDisplay class="group-item" name="上限位" :isWork="DI_state_bitArray[6]" />
                    <DIOStateDisplay class="group-item" name="下限位" :isWork="DI_state_bitArray[7]" />
                    <DIOStateDisplay class="group-item" name="出料启动" :isWork="DI_state_bitArray[8]" />
                    <DIOStateDisplay class="group-item" name="搅拌A正转" :isWork="DI_state_bitArray[9]" />
                    <DIOStateDisplay class="group-item" name="搅拌A反转" :isWork="DI_state_bitArray[10]" />
                    <DIOStateDisplay class="group-item" name="搅拌B正转" :isWork="DI_state_bitArray[11]" />
                    <DIOStateDisplay class="group-item" name="破碎压榨正转" :isWork="DI_state_bitArray[12]" />
                    <DIOStateDisplay class="group-item" name="破碎压榨反转" :isWork="DI_state_bitArray[13]" />
                    <DIOStateDisplay class="group-item" name="液压泵" :isWork="DI_state_bitArray[14]" />
                    <DIOStateDisplay class="group-item" name="不锈钢风机" :isWork="DI_state_bitArray[15]" />
                    <DIOStateDisplay class="group-item" name="喷淋塔电机" :isWork="DI_state_bitArray[16]" />
                    <DIOStateDisplay class="group-item" name="自吸式水泵" :isWork="DI_state_bitArray[17]" />
                  </div>
                </div>
              </el-col>
              <el-col :span="12" class="grid-content ep-bg-purple subbgcolor left-first-line shadow-border">
                <el-row>
                  <div style="width: 100%">
                    <img alt="设备图片" src="@/assets/kitchen waste.png" style="width: 100%; height: auto" />
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
                    <DIOStateDisplay class="group-item-DO" name="1#加热" :isWork="DO_state_bitArray[0]" />
                    <DIOStateDisplay class="group-item-DO" name="2#加热" :isWork="DO_state_bitArray[1]" />
                    <DIOStateDisplay class="group-item-DO" name="3#加热" :isWork="DO_state_bitArray[2]" />
                    <DIOStateDisplay class="group-item-DO" name="4#加热" :isWork="DO_state_bitArray[3]" />
                    <DIOStateDisplay class="group-item-DO" name="搅拌A正转" :isWork="DO_state_bitArray[8]" />
                    <DIOStateDisplay class="group-item-DO" name="搅拌A反转" :isWork="DO_state_bitArray[9]" />
                    <DIOStateDisplay class="group-item-DO" name="搅拌B正转" :isWork="DO_state_bitArray[10]" />
                    <DIOStateDisplay class="group-item-DO" name="破碎压榨正转" :isWork="DO_state_bitArray[11]" />
                    <DIOStateDisplay class="group-item-DO" name="破碎压榨反转" :isWork="DO_state_bitArray[12]" />
                    <DIOStateDisplay class="group-item-DO" name="液压泵" :isWork="DO_state_bitArray[13]" />
                    <DIOStateDisplay class="group-item-DO" name="不锈钢风机" :isWork="DO_state_bitArray[14]" />
                    <DIOStateDisplay class="group-item-DO" name="喷淋塔电机" :isWork="DO_state_bitArray[15]" />
                    <DIOStateDisplay class="group-item-DO" name="自吸式水泵" :isWork="DO_state_bitArray[16]" />
                    <DIOStateDisplay class="group-item-DO" name="提升机上升" :isWork="DO_state_bitArray[17]" />
                    <DIOStateDisplay class="group-item-DO" name="提升机下降" :isWork="DO_state_bitArray[18]" />
                    <DIOStateDisplay class="group-item-DO" name="压榨冲洗" :isWork="DO_state_bitArray[19]" />
                    <DIOStateDisplay class="group-item-DO" name="外接冲洗" :isWork="DO_state_bitArray[20]" />
                  </div>
                </div>
              </el-col>
            </el-row>

            <el-row gutter="10">
              <el-col :span="18">
                <div class="grid-content ep-bg-purple subbgcolor left-second-line shadow-border">
                  <!-- 温度实时曲线 -->
                  <LineChartStyle01 style="width: 100%; height: 110%;padding-top:10px" :input_temp1="AI_temp1_data"
                    :input_temp2="AI_temp2_data" :input_temp3="AI_temp3_data" :input_time="AI_temp_time" />
                </div>
              </el-col>
              <!-- //HACK:是否需要日期选择 -->
              <!-- //HACK22:此处要增加scroll ,会不会自动产生 -->
              <!--实时报警-->
              <el-col :span="6">
                <div class="grid-content ep-bg-purple subbgcolor left-second-line shadow-border"
                  style="padding-top: 15px">
                  <el-scrollbar height="90%">
                    <el-timeline style="max-width: 600px ;height:100px">
                      <el-timeline-item v-for="(activity, index) in activities" :key="index"
                        :timestamp="activity.timestamp">
                        <div v-if=activity.state style=" color: red ">{{ activity.content }}</div>
                        <div v-else style=" color: green ">{{ activity.content }}</div>
                      </el-timeline-item>
                    </el-timeline>

                  </el-scrollbar>

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

                  <BarChartStyle01 :_date=Dairy_list_date.values :_value=Dairy_list_value.values _title="日清单"
                    _legend="重量(kg)" />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="grid-content ep-bg-purple subbgcolor right-row-line shadow-border">

                  <BarChartStyle01 :_date=Dairy_summary_date.values :_value=Dairy_summary_value.values _title="日汇总"
                    _legend="重量(kg)" />
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref, onUnmounted, onMounted } from 'vue'
import mqtt from 'mqtt'
import DIOStateDisplay from '@/components/DIOStateDisplay.vue'
import BarChartStyle01 from '@/components/BarChartStyle01.vue'
import LineChartStyle01 from '@/components/LineChartStyle01.vue'
import { bytesToBitArray, bytes4_Float } from '@/components/helpers'
import axios from 'axios';
const activities = ref([])
let timer_dio: ReturnType<typeof setInterval> | null = null
let timer_temp: ReturnType<typeof setInterval> | null = null
let timer_alarm: ReturnType<typeof setInterval> | null = null
const DO_state_bitArray = ref([]) //输出状态组
const DI_state_bitArray = ref([]) //输入状态组
const AI_temp1_data: number = ref() //模拟量1
const AI_temp2_data: number = ref() //模拟量2
const AI_temp3_data: number = ref() //模拟量3
const AI_temp_time: string = ref() //时间
let Dairy_summary_date = ref([])
let Dairy_summary_value = ref([])
let Dairy_list_date = ref([])
let Dairy_list_value = ref([])
const currentTime = ref(new Date().toLocaleString());
let newAlarmInfo: string = ref()
let lastAlarmInfo: string = ref()
const alarmInfoColor = ref()
let intervalId: number;
const connected = ref(false)
const isOnline = ref(true)
// Connection options
//https://github.com/mqttjs/MQTT.js?tab=readme-ov-file#client
//https://www.emqx.com/en/blog/mqtt-js-tutorial

const options = {
  clean: true,
  connectTimeout: 6000,
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

// const messages = ref([])

function readCoil() {
  //0A01000000177D7F
  let hexArray: string[] = ['0A', '01', '00', '00', '00', '17', '7D', '7F']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
  // console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}
function readDiscreteInputs() {
  //0A0200000017397F
  let hexArray: string[] = ['0A', '02', '00', '00', '00', '17', '39', '7F']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
  // console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}
function readHoldingRegister() {
  //0A03004d000654A4
  //0A03004d00011566
  // let hexArray: string[] = ['0A', '03', '00', '4D', '00', '01', '15', '66']
  let hexArray: string[] = ['0A', '03', '00', '4D', '00', '06', '54', 'A4']

  // 转换为字节数组
  let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))

  // console.log(bytes)
  client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}
async function readLastAlarm() {
  const response = await axios.get('http://localhost:8000/cclj/get_last_alarm/',
    {
      params: {
        device_code: 'cj2400101',
      }
    }
  )
  alarmInfoColor.value = response.data[2]
  if (response.data[2] == 1) {

    newAlarmInfo.value = response.data[1] + '  产生！'
  } else {

    newAlarmInfo.value = response.data[1] + '  消失！'
  }

  let dict: { [key: string]: string } = {
    "timestamp": response.data[0],
    "content": newAlarmInfo.value,
    "state": response.data[2]
  };
  if (lastAlarmInfo.value != newAlarmInfo.value) {
    activities.value.unshift(dict)
  }

  lastAlarmInfo.value = newAlarmInfo.value


}
async function readDailySummaryByMonth() {
  let currentDate = new Date();
  const response = await axios.get('http://localhost:8000/cclj/daily_summary_by_month/',
    {
      params: {
        current_datetime: currentDate,
        device_code: 'cj2400101',
        content_code: 'weight'
      }
    }
  )
  Dairy_summary_date.value.values = response.data._date
  Dairy_summary_value.value.values = response.data._value
}
async function readDailyList() {
  let currentDate = new Date();
  const response = await axios.get('http://localhost:8000/cclj/daily_list/',
    {
      params: {
        current_datetime: currentDate,
        device_code: 'cj2400101',
        content_code: 'weight'
      }
    }
  )
  Dairy_list_date.value.values = response.data._date
  Dairy_list_value.value.values = response.data._value
  // console.log(Dairy_list_date.value)
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
  client.subscribe('/CJ2400101/WILL', { qos: 2, retain: false })
})

client.on('message', (topic, message) => {
  console.log(message)
  isOnline.value = true
  //message[1]是功能代码  1：读coil状态  2：读discrete inputs 状态
  //     3:读保持寄存器      102：offline的第一个f   119: www.usr 心跳包 的第二个 w
  //message[2] 的12是 温度组返回长度  如 10, 3, 12, 64, 182, 102, 102, 0, 0, 0, 0, 0, 0, 0, 0, 241, 1,
  if (message[1] == 1) {
    DO_state_bitArray.value = bytesToBitArray(message.subarray(3, 6))
    // console.log(DO_state_bitArray.value)
  } else if (message[1] == 2) {
    DI_state_bitArray.value = bytesToBitArray(message.subarray(3, 6))
    // console.log(DI_state_bitArray.value)
  } else if (message[1] == 3 && message[2] == 12) {
    // 获取当前日期和时间
    const now = new Date() //HACK22:这里 now 和 time 初始化，最好可以放在前面
    // 获取当前时间
    const time = now.toTimeString()

    AI_temp1_data.value = bytes4_Float(message.subarray(3, 7))
    AI_temp2_data.value = bytes4_Float(message.subarray(7, 11))
    AI_temp3_data.value = bytes4_Float(message.subarray(11, 15))
    AI_temp_time.value = time.slice(0, 8)
  } else if (message[1] == 102) {
    isOnline.value = false
  }
})
onMounted(() => {
  intervalId = window.setInterval(() => {
    currentTime.value = new Date().toLocaleString();
  }, 1000);

  readDailySummaryByMonth()
  readDailyList()
  timer_dio = setInterval(() => {
    readDiscreteInputs()
    setTimeout(() => {
      readCoil()
    }, 2000)

  }, 3000);
  timer_temp = setInterval(() => {
    readHoldingRegister()
  }, 8000);
  timer_alarm = setInterval(() => {
    readLastAlarm()
  }, 5000);  //TODO:时间临时测试用，后期要1min左右


})
onUnmounted(() => {
  client.end()
  connected.value = false
  console.log('exit')
  if (timer_dio) {
    clearInterval(timer_dio)
  }
  if (timer_temp) {
    clearInterval(timer_temp)
  }
  if (timer_alarm) {
    clearInterval(timer_alarm)
  }
  if (intervalId) {
    clearInterval(intervalId)
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
  height: 54vh;
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
