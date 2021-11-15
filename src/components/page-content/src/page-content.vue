<template>
  <div class="page-content">
    <yp-table :listData="dataList" v-bind="contentTableConfig">
      <template #header>
        <span>用户列表</span>
      </template>
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '可用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>
          {{ $filters.formatTime(scope.row.createAt) }}
        </span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
    </yp-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import YpTable from '@/base-ui/table'
import { useStore } from 'vuex'
export default defineComponent({
  components: { YpTable },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )
    const userCount = computed(() => store.state.system.userCount)

    return { dataList, userCount }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
