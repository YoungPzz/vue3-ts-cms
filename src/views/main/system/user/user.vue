<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
    </div>
    <div class="content">
      <yp-table
        :listData="userList"
        :proplist="proplist"
        :showIndexColumn="showIndexColumn"
        :showSelectColum="showSelectColum"
      >
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
      </yp-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search/index'
import YpTable from '@/base-ui/table'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    YpTable
  },
  //所有的配置只需要在search.config.ts里写好就行
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    console.log(123)
    console.log(userList)
    console.log(123)
    const userCount = computed(() => store.state.system.userCount)
    const proplist = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotname: 'status' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotname: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotname: 'updateAt'
      }
    ]

    //是否显示前面序号
    const showIndexColumn = true

    //是否选中当前行
    const showSelectColum = true
    return {
      formConfig,
      proplist,
      userList,
      userCount,
      showIndexColumn,
      showSelectColum
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
