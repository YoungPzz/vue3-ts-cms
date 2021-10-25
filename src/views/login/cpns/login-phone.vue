<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="account" label-width="60px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="account.code" />
          <el-button type="primary" class="get-code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'
export default defineComponent({
  setup() {
    const account = reactive({
      account: {
        phone: '',
        code: ''
      }
    })
    return { account, rules }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}
.get-code {
  margin-left: 8px;
}
</style>
