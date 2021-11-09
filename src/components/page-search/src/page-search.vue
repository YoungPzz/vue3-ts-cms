<template>
  <div class="page-search">
    <YpForm v-bind="formConfig" :formData="formData">
      <template #header>高级检索</template>
      <template #footer>
        <div class="btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">检索</el-button>
        </div>
      </template>
    </YpForm>
  </div>
</template>

<script lang="ts">
import YpForm from '@/base-ui/form'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    YpForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
