<template>
  <div class="yp-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="item in proplist" :key="item.prop">
        <el-table-column v-bind="item" align="center" />
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    listData: {
      type: Array
    },
    proplist: {
      type: Array
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
