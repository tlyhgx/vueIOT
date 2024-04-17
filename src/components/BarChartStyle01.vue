<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ '10:33', '10:45', '11:12', '12:45', '13:12' , '13:45', '14:12' , '14:45', '15:12' , '17:45', '18:12'  ],
          datasets: [ { data: [32, 20, 12, 23, 14, 26, 14, 30, 13, 27, 11] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>

<!-- <template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
      chartData() { return  [ '10:33', '10:45', '11:12', '12:45', '13:12' , '13:45', '14:12' , '14:45', '15:12' , '17:45', '18:12'  ] },
      chartOptions() { return [32, 20, 12, 23, 14, 26, 14, 30, 13, 27, 11] }
    }
}
</script> -->