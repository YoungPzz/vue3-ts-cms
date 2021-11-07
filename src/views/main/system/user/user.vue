<template>
  <div class="user">
    <div class="search">
      <YpForm v-bind="formConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import YpForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: {
    YpForm
  },
  //所有的配置只需要在search.config.ts里写好就行
  setup() {
    return { formConfig }
  }
})
</script>

<style scoped></style>
