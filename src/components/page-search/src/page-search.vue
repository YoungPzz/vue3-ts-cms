<template>
  <div class="page-search">
    <YpForm v-bind="formConfig" v-model="formData">
      <template #header>高级检索</template>
      <template #footer>
        <div class="btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search">检索</el-button>
        </div>
      </template>
    </YpForm>
  </div>
</template>

<script lang="ts">
import YpForm from '@/base-ui/form'
import { defineComponent, ref } from 'vue'
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
  setup(props) {
    //双向绑定的属性应该是由配置文件中的field来决定的
    // 优化1：formData中的属性应该动态来决定
    const formItems = props.formConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 优化二：当用户点击重置
    const handleResetClick = () => {
      // formData.value = formOriginData 如果是这样的方法，因为...props.modelvalue是浅拷贝,不能改变子组件的值
      //UOU for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }

      //不用双向绑定
      formData.value = formOriginData
    }

    return { formData, handleResetClick }
  }
})
</script>

<style scoped>
.btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
