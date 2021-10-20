//全局的配置抽离到这个地方，使得main.ts更简洁
import { App } from 'vue' //引入一个App类型，是由vue内部构造的
import regisetrEP from './register-element'

export function registerApp(app: App): void {
  regisetrEP(app)
}
