<template>
  <div class="common-layout">
    <el-container >
      <el-aside class="aside">
        <section class="logoSection" >
           <img alt="Vue logo" class="logo" src="@/assets/CJlogo.png" width="35" height="40"  />
           <h3  style="position: relative;top:15px;left:6px">崇峻科技</h3>
          </section>
        <!-- <el-scrollbar> -->
          
          
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><Monitor /></el-icon>诸暨
              </template>
              <el-menu-item-group>
                <template #title>次坞</template>
                <el-menu-item index="1-1">
                  <RouterLink to="/cw1_1">1#2吨机</RouterLink>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <RouterLink to="/cw1_2">2#2吨机</RouterLink>
                </el-menu-item>
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
        <!-- </el-scrollbar> -->
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

.aside {
  color: var(--el-text-color-primary);
  
  height: 100vh;
  width: 200px;
  /* background: var(--el-color-primary-light-8); */
}
.custom-main {
  /* background-color: blueviolet; */

  width: calc(100% - 240px);

  height: 100vh;
}

.logoSection{
  display:flex;
  /* justify-content: center; */
  padding: 40px 0 10px 20px;
 
}
</style>
