<template>
  <div class="yp-table">
    <!-- selection-change在前面勾选时触发 -->
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColum"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
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
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColum: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    return { handleSelectionChange }
  }
})
</script>

<style scoped></style>
