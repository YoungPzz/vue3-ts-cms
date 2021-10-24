<template>
  <div class="login-panel">
    <div>
      <h1 class="title">欢迎登录</h1>
    </div>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane label="账号密码"
        ><template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span> </template
        >账号密码</el-tab-pane
      >
      <el-tab-pane label="手机"
        ><template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span> </template
        >手机</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
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
</style>
