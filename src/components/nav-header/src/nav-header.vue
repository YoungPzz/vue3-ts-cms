<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldChange()"
    ></i>
    <div class="content">
      <div>面包屑</div>
      <UserInfo />
      <!-- 面包屑 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
export default defineComponent({
  components: {
    UserInfo
  },
  emits: ['foldChange'],
  setup(prpos, { emit }) {
    const isFold = ref(false)
    const handleFoldChange = () => {
      //把事件传给共同得父组件main，nav-manu会响应，main的aside宽度也需要做出响应
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { handleFoldChange, isFold }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
