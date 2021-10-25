<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" label-width="60px" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import localCache from '../../../utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: localCache.getCache('name') ?? '', //记住密码
      password: localCache.getCache('password') ?? ''
    })
    const loginAction = (isRememberPwd: boolean) => {
      formRef.value?.validate((valid) => {
        //validate()函数返回一个valid，验证成功则返回true
        if (valid && account.name != '') {
          //1.判断是否需要记住密码
          if (isRememberPwd) {
            //本地缓存 localstoreage
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          //2.触发网络请求vuex得action
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, loginAction, formRef }
  }
})
</script>

<style scoped></style>
