<template>
  <div ref="chartRef" style="width: 100%; height: 100%"></div>


</template>
//TODO22:添加刷新
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
// const title=ref<string>('')
const props = defineProps({
  _date: Array,
  _value: Array,
  _title: String,
  _legend: String
})


function setChart() {
  const chart = echarts.init(chartRef.value);

  const option = {
    title: {
      text: props._title
    },
    tooltip: {},
    legend: {
      data: ['重量(kg)']
    },
    xAxis: {
      data: props._date

    },
    yAxis: {},
    series: [{
      name: props._legend,
      type: 'bar',
      data: props._value

    }]
  };

  chart.setOption(option);
}
onMounted(() => {
  setChart()
});
watch(() => props._date, setChart)
</script>
