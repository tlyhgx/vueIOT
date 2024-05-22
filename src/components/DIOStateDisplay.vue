<template>
  <div style="display: flex; align-items: center; ">
    <img v-if="isWork" style="width: 20px; height: 20px" src="@/assets/work.png" fit="fill" />
    <img v-else style="width: 20px; height: 20px" src="@/assets/stop.png" fit="fill" />
    <div style="padding-left: 10px">{{ name || '未设置名称' }}</div>
  </div>
</template>
<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
  name: String,
  isWork: Boolean
})
const { name, isWork } = toRefs(props)
</script>
<style scoped></style>
