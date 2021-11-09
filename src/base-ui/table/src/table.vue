<template>
  <div class="yp-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="item in proplist" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <!-- 默认下的插槽 -->
          <template #default="scope">
            <slot :name="item.slotname" :row="scope.row">
              <!-- 在user.vue里可选择项地填入自定义的形式，如状态中的按钮 -->
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
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
