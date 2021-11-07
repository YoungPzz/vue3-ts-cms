<template>
  <div>
    <div class="user-info">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <!-- 用户信息 <span class="el-icon-arrow-down"> </span> -->
          <el-avatar size="small" :src="circleUrl"></el-avatar>
          <span class="name">{{ name }}</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowDown } from '@element-plus/icons'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = store.state.login.userInfo.name
    const circleUrl =
      'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    return { ArrowDown, circleUrl, name }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.name {
  margin-left: 10px;
  font-size: 15px;
}
</style>
