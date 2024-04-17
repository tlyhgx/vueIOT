<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
      data: {
        labels: ['10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40'],
        datasets: [
          {
            label: '仓底高位温度',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: '仓底低位温度',
            backgroundColor: '#aa7979',
            data: [22, 45, 40, 26, 11, 53, 29]
          },
          {
            label: '仓内温度',
            backgroundColor: '#235422',
            data: [32, 57, 12, 53, 45, 53, 19]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
