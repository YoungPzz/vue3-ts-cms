import { App } from 'vue' //引入一个App类型，是由vue内部构造的
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElTabPane,
  ElTabs,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu
} from 'element-plus'
const components = [
  ElButton,
  ElForm,
  ElInput,
  ElTabPane,
  ElTabs,
  ElFormItem,
  ElLink,
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu
]
import 'element-plus/lib/theme-chalk/index.css'
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
