<template>
  <div class="full-width common-layout">
    <el-container class="layout-container">
      <el-aside class="aside">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Monitor /></el-icon>诸暨
              </template>
              <el-menu-item-group>
                <template #title>次坞</template>
                <el-menu-item index="1-1"
                  ><RouterLink to="/cw1_2">1#2吨机</RouterLink>
                </el-menu-item>
                <el-menu-item index="1-2">2#2吨机</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><Monitor /></el-icon>萧山
              </template>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><Monitor /></el-icon>淳安
              </template>
              <el-menu-item-group>
                <template #title>千岛湖</template>
                <el-menu-item index="3-1">1#1吨机</el-menu-item>
                <el-menu-item index="3-2">2#1吨机</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main class="custom-main"></el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
import { Monitor } from '@element-plus/icons-vue'

// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles'
// }
// const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>
<style scoped>
.full-width {
  width: 100vw; /* 将父元素高度设置为100%屏幕高度 */
  height: 100vh;
  position: absolute;
  top: 10px;
  left: 0px;
}
.layout-container {
  width: 100%;
  /* display: flex;
  justify-content: flex-start; */
  /* justify-content: start; */

  /* display: inline flex; */

  /* position: relative; */
  /* top: 10px; */

  /* background-color: var(--el-color-primary-light-7); */
  /* color: var(--el-text-color-primary); */
}
.aside {
  color: var(--el-text-color-primary);

  width: 200px;
  /* background: var(--el-color-primary-light-8); */
}
.custom-main {
  /* background-color: blueviolet; */

  width: calc(100% - 240px);

  height: 95vh;
}
</style>
