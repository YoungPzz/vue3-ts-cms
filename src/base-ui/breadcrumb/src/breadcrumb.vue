<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item></template
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadCrumb } from '../types'
export default defineComponent({
  //只需给这个组件传参数，即可使用
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadCrumb[]>
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
