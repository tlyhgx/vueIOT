<template>
    <!-- //TODO:居中 ，字体变大，文字居中，拉开距离 -->
    <div class="flex flex-wrap gap-4">
        <el-card style="max-width: 200px;" shadow="always">
            <h2 style="display: flex;justify-content: center;">除臭风机</h2>
            <div style="display: flex;justify-content: center; padding-top: 20px;">
                <el-button type="success" round @click="push1_6On">动作</el-button>

                <el-button type="danger" round @click="push1_6Off">停止</el-button>
            </div>

        </el-card>
        <el-card style="max-width: 200px;" shadow="always">
            <h2 style="display: flex;justify-content: center;">喷淋头电机</h2>
            <div style="display: flex;justify-content: center; padding-top: 20px;">
                <el-button type="success" round @click="push1_7On">动作</el-button>

                <el-button type="danger" round @click="push1_7Off">停止</el-button>
            </div>

        </el-card>
        <el-card style="max-width: 200px;" shadow="always">
            <h2 style="display: flex;justify-content: center;">自吸水泵</h2>
            <div style="display: flex;justify-content: center; padding-top: 20px;">
                <el-button type="success" round @click="push2_0On">动作</el-button>

                <el-button type="danger" round @click="push2_0Off">停止</el-button>
            </div>

        </el-card>
        <el-card style="max-width: 200px;" shadow="always">
            <h2 style="display: flex;justify-content: center;">压榨冲洗</h2>
            <div style="display: flex;justify-content: center; padding-top: 20px;">
                <el-button type="success" round @click="push2_3On">动作</el-button>

                <el-button type="danger" round @click="push2_3Off">停止</el-button>
            </div>

        </el-card>


    </div>





</template>
<script setup lang="ts">
import mqtt from 'mqtt'
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
function push1_6On() {
    let hexArray: string[] = ['0A', '05', '00', '0E', 'FF', '00', 'EC', '82']
    publish(hexArray)

}
function push1_6Off() {
    let hexArray: string[] = ['0A', '05', '00', '0E', '00', '00', 'AD', '72']
    publish(hexArray)
}
function push1_7On() {
    let hexArray: string[] = ['0A', '05', '00', '0F', 'FF', '00', 'BD', '42']
    publish(hexArray)

}
function push1_7Off() {
    let hexArray: string[] = ['0A', '05', '00', '0F', '00', '00', 'FC', 'B2']
    publish(hexArray)
}
function push2_0On() {
    let hexArray: string[] = ['0A', '05', '00', '10', 'FF', '00', '8C', '84']
    publish(hexArray)

}
function push2_0Off() {
    let hexArray: string[] = ['0A', '05', '00', '10', '00', '00', 'CD', '74']
    publish(hexArray)
}
function push2_3On() {
    let hexArray: string[] = ['0A', '05', '00', '13', 'FF', '00', '7C', '84']
    publish(hexArray)

}
function push2_3Off() {
    let hexArray: string[] = ['0A', '05', '00', '13', '00', '00', '3D', '74']
    publish(hexArray)
}
function publish(hexArray: string[]) {
    // 转换为字节数组
    let bytes: Uint8Array = new Uint8Array(hexArray.map((h) => parseInt(h, 16)))
    client.publish('/CJ2400101/SUBDIS', bytes, { qos: 0, retain: false })
}
</script>