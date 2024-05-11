<template>
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules" label-width="auto"
        class="demo-ruleForm">
        <el-form-item label="用户名">
            <el-input v-model="ruleForm.name" placeholder="输入用户名" />
        </el-form-item>


        <el-form-item label="新密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" placeholder="输入新密码" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" placeholder="重新输入密码" />
        </el-form-item>
        <el-form-item label="对应路径">
            <el-input v-model="ruleForm.myRouter" placeholder="输入对应路径" />
        </el-form-item>
        <!-- <el-form-item label="Age" prop="age">
            <el-input v-model.number="ruleForm.age" />
        </el-form-item> -->

        <el-form-item>

            <el-button type="primary" @click="submitForm(ruleFormRef)">
                提交
            </el-button>
            <el-button @click="resetForm(ruleFormRef)">复位</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { emcryption } from '@/components/helpers'
import axios from '@/utils/axios';
// import axios from 'axios';
import { useRouter } from 'vue-router'
const router = useRouter()

const ruleFormRef = ref<FormInstance>()

// const checkAge = (rule: any, value: any, callback: any) => {
//     if (!value) {
//         return callback(new Error('Please input the age'))
//     }
//     setTimeout(() => {
//         if (!Number.isInteger(value)) {
//             callback(new Error('Please input digits'))
//         } else {
//             if (value < 18) {
//                 callback(new Error('Age must be greater than 18'))
//             } else {
//                 callback()
//             }
//         }
//     }, 1000)
// }
function isPasswordValid(password: string): boolean {
    // 密码必须至少有8位
    if (password.length < 8) {
        return false;
    }

    // 密码必须包含至少一个字母和一个数字
    let hasLetter = false;
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (isNaN(Number(char))) {
            hasLetter = true;
        } else {
            hasNumber = true;
        }
        if (hasLetter && hasNumber) {
            return true;
        }
    }

    // 如果没有字母或数字，返回false
    return false;
}

const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!isPasswordValid(value)) {
        callback(new Error('密码无效,必须至少有8位并且包含字母和数字!'))
    }

    else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请再次输入密码!'))
    } else if (value !== ruleForm.pass) {
        callback(new Error("两次密码不匹配!"))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    checkPass: '',
    // age: '',
    name: '',
    myRouter: ''

})

const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    // age: [{ validator: checkAge, trigger: 'blur' }],
})


async function onSubmit() {
    const encrytion_pass = emcryption(ruleForm.pass)
    const response = await axios.post('http://localhost:8000/cjkj_user_register',
        {
            // headers: {
            //     'Authorization': `Bearer ${localStorage.getItem('token')}`
            // },
            name: ruleForm.name, psw: encrytion_pass, myRouter: ruleForm.myRouter,


        }
    )
    console.log(response.data)

    // console.log("登录")
    router.push('/')    //TODO22:在这里转换到其它设备，根据用户名-->所在设备组
    //TODO333:添加登录记录

}
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
    onSubmit()
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>