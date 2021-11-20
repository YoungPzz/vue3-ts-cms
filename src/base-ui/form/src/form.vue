<template>
  <div class="yp-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <!-- v-model="formData[`${item.field}`]" 现在不用双向绑定 -->
                <!-- model-value and @update 这两行都是双向绑定的语法糖 -->
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :placeholder="placeholder"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types/index'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      //prop的类型
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      defalut: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      //响应式
      type: Object,
      default: () => ({
        //响应式，设置为prop所以可以由外界决定
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emits: ['update:modelValue'], //modelvalue的发射事件，在讲组件的双向绑定时有讲
  setup(props, { emit }) {
    // 1.双向绑定
    // const formData = ref({ ...props.modelValue }) //这里解构modelValue并且复制粘贴到新的对象formData，目的是不影响原来的modelValue

    // watch(formData, (newValue) => emit('updata:modelValue', newValue), {
    //   //当formData发生变化，发送emit修改父组件的值
    //   deep: true //深度监听
    // })

    //2.不用双向绑定
    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      handleValueChange
    }
  }
})
</script>

<style scoped>
.yp-form {
  padding-top: 20px;
}
</style>
