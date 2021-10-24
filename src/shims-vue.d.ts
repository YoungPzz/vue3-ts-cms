/* eslint-disable */
// 对.vue文件进行声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare let $store :any
