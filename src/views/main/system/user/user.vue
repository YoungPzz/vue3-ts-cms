<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
    </div>
    <div class="content">
      <yp-table :listData="userList" :proplist="proplist" />
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
      { prop: 'enable', label: '状态', minWidth: '100' },
      { prop: 'createAt', label: '创建时间', minWidth: '250' },
      { prop: 'updateAt', label: '更新时间', minWidth: '250' }
    ]
    return { formConfig, proplist, userList, userCount }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
