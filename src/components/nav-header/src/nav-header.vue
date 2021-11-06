<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldChange()"
    ></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
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
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
