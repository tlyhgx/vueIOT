<template>
  <div>
    <div ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps } from 'vue'
import * as echarts from 'echarts'

const chart = ref(null)
const props = defineProps({
  input_temp1: Number,
  input_temp2: Number,
  input_temp3: Number,
  input_time: String
})
let temp_time: string[] = []
let temp1s: number[] = []
let temp2s: number[] = []
let temp3s: number[] = []
function dataChanged() {
  console.log('cssssssss')
  console.log(props.input_time)
  temp_time.push(props.input_time)
  temp1s.push(props.input_temp1)
  temp2s.push(props.input_temp2)
  temp3s.push(props.input_temp3)
  setChart()
}
function setChart() {
  const myChart = echarts.init(chart.value)

  const option = {
    title: {
      // text: '温度实时曲线'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['仓底高位温度', '仓底低位温度', '仓内温度']
    },
    xAxis: {
      data: temp_time
    },
    yAxis: {},
    series: [
      {
        name: '仓底高位温度',
        type: 'line',
        data: temp1s
      },
      {
        name: '仓底低位温度',
        type: 'line',
        data: temp2s
      },
      {
        name: '仓内温度',
        type: 'line',
        data: temp3s
      }
    ]
  }

  myChart.setOption(option)
}
watch(() => props.input_time, dataChanged)
onMounted(setChart)
</script>
