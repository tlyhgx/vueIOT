<template>
    <div class="system_title">
        <img alt="logo" src="@/assets/CJlogo.png" width="45" height="50" />
        <div style="display: inline;padding-left: 15px;position: relative;top:-5px">设 备 物 联</div>

    </div>

    <el-form :model="form" label-width="auto" class="el-form-dis" label-position="left">
        <el-form-item label="用户名:">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
            <el-input v-model="form.psw" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>

            <el-alert v-show="showMsg" title="用户名或密码错误！" type="error" />
        </el-form-item>

        <el-form-item>
            <el-row justify="space-around" style="width:100%;padding-top:5px">
                <el-col :span="4">
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button @click="onCancel">取消</el-button>
                </el-col>

            </el-row>


        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import { emcryption } from '@/components/helpers';
import axios from 'axios';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

let showMsg = ref(false)
const router = useRouter()
const form = reactive({
    name: '',
    psw: '',
})
async function onSubmit() {
    const encrytion_pass = emcryption(form.psw)
    const response = await axios.post('http://localhost:8000/token', { name: form.name, psw: encrytion_pass })
    console.log(response.data)
    if (response.data == null) {
        console.log("登录失败！")   //TODO:添加登录失败提醒
        showMsg.value = true
    }
    else {
        //TODO11:添加token
    const token=response.data.access_token
    localStorage.setItem('token',token)
    
        router.push('/cclj')    //TODO22:在这里转换到其它设备，根据用户名-->所在设备组
    }


    //TODO333:添加登录记录

}
function onCancel() {
    form.name = '';
    form.psw = ''
}
</script>

<style scoped>
.button-container {
    padding-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.system_title {

    position: fixed;
    /* 使用固定定位 */
    top: 34%;
    /* 从顶部开始计算，移动到屏幕的一半 */
    left: 50%;
    /* 从左边开始计算，移动到屏幕的一半 */
    transform: translate(-50%, -50%);
    font-size: 36px;
    color: #286dc0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    /* font-family: cursive; */
}

.el-form-dis {
    max-width: 300px;
    position: fixed;
    /* 使用固定定位 */
    top: 50%;
    /* 从顶部开始计算，移动到屏幕的一半 */
    left: 50%;
    /* 从左边开始计算，移动到屏幕的一半 */
    transform: translate(-50%, -50%);
    /* 使用 transform 属性将元素自身的中心点对齐到屏幕的中心 */

}
</style>