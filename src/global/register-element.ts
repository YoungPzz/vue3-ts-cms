import { App } from 'vue' //引入一个App类型，是由vue内部构造的
import 'element-plus/lib/theme-chalk/base.css'
import { ElButton, ElForm, ElInput } from 'element-plus'
const components = [ElButton, ElForm, ElInput]
import 'element-plus/lib/theme-chalk/index.css'
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
