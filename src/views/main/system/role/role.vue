<template>
  <div class="role">
    <page-search :formConfig="formConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      contentTableConfig,
      formConfig
    }
  }
})
</script>

<style scoped></style>
