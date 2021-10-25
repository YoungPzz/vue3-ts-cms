<template>
  <div class="login-panel">
    <div>
      <h1 class="title">欢迎登录</h1>
    </div>
    <el-tabs type="border-card" stretch="true" v-model="currentTab">
      <el-tab-pane name="account" label="账号密码"
        ><template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef"
      /></el-tab-pane>
      <el-tab-pane name="phone" label="手机"
        ><template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span> </template
        ><login-phone
      /></el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isRememberPwd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handleLoginComfirm"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>() //组件实例类型的方法
    const isRememberPwd = ref(true)
    const currentTab = ref<string>('account')
    const handleLoginComfirm = () => {
      if (currentTab.value == 'account') {
        accountRef.value?.loginAction(isRememberPwd.value)
      } else {
        //手机得验证逻辑
      }
    }

    return { isRememberPwd, handleLoginComfirm, accountRef, currentTab }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
.title {
  text-align: center;
}
.account-control {
  padding: 0 8px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
.login-button {
  margin-top: 15px;
  width: 100%;
}
</style>
