<template>
  <div class="user">
    <div class="search">
      <page-search :formConfig="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { formConfig } from './config/search.config'
import PageSearch from '@/components/page-search/index'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  //所有的配置只需要在search.config.ts里写好就行
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
