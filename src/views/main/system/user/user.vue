<template>
  <div class="user">
    <page-search :formConfig="formConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="users" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//two config files
import { formConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
//two components
import PageSearch from '@/components/page-search/index'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  //所有的配置只需要在search.config.ts里写好就行
  setup() {
    return {
      formConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
