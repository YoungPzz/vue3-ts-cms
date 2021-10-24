import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
import { registerApp } from './global'
import ypRequest from './service'
const app = createApp(App)
app.use(registerApp) //当使用app.use传入一个函数时，默认会执行这个函数并传入app，效果和下行相同
// registerApp(app)
app.use(router).use(store).mount('#app')

// App.use(ElementPlus)
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
ypRequest
  .get<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false //false即不用loading
    // interceptors: {
    //   requestinterceptor: (config) => {
    //     console.log('单独成功的拦截')
    //     return config
    //   }
    // }
  })
  .then((res) => {
    console.log(res.data)
  })
console.log(process.env.VUE_APP_BASE_URL)
