<template>
    <div>
  
      <div class="logoSection">
        <img alt="logo" src="@/assets/CJlogo.png" width="35" height="40" />
        <h3 style="position: relative; top: 15px; left: 6px">浙江三潭</h3>
      </div>
      <!-- //HACK22:选取时，颜色应该变色，但1，2项没有变色 -->
      <el-menu :default-openeds="['1', '3']" active-text-color="#ffd04b">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Monitor />
            </el-icon>徐州
          </template>
          <el-menu-item-group>
            <template #title>柳泉</template>
            <el-menu-item index="1-1">
              <RouterLink to="/device_cj2400101">1#5吨机</RouterLink>
            </el-menu-item>
            <el-menu-item index="1-2">
              <RouterLink to="/cw1_2">2#3吨机</RouterLink>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Monitor />
            </el-icon>萧山
          </template>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <Monitor />
            </el-icon>淳安
          </template>
          <el-menu-item-group>
            <template #title>千岛湖</template>
            <el-menu-item index="3-1">1#1吨机</el-menu-item>
            <el-menu-item index="3-2">2#1吨机</el-menu-item>
            
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
  
    </div>
  
  </template>
  
  <script lang="ts" setup>
  import { Monitor } from '@element-plus/icons-vue'
  import { RouterLink, RouterView } from 'vue-router'
  </script>
  <style scoped>
  .logoSection {
    display: flex;
    /* justify-content: center; */
    padding: 40px 0 10px 20px;
  }
  </style>
  