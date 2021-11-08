<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldChange()"
    ></i>
    <div class="content">
      <YpBreadCrumb :breadcrumbs="breadcrumbs" />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import YpBreadCrumb from '@/base-ui/breadcrumb/src/breadcrumb.vue'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    UserInfo,
    YpBreadCrumb
  },
  emits: ['foldChange'],
  setup(prpos, { emit }) {
    const isFold = ref(false)
    const handleFoldChange = () => {
      //把事件传给共同得父组件main，nav-manu会响应，main的aside宽度也需要做出响应
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //面包屑的数据
    const store = useStore()

    const breadcrumbs = computed(() => {
      const route = useRoute()
      const userMenus = store.state.login.userMenus
      const currentRoute = route.path
      // console.log(userMenus)
      // console.log(currentRoute)
      return pathMapBreadcrumbs(userMenus, currentRoute)
    })
    return { handleFoldChange, isFold, breadcrumbs }
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
