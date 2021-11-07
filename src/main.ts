import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
import { registerApp } from './global'
import './assets/css/index.less'
import 'normalize.css'
import { setupStore } from './store'
const app = createApp(App)
app.use(registerApp) //当使用app.use传入一个函数时，默认会执行这个函数并传入app，效果和下行相同
// registerApp(app)
setupStore() //初始化store 
app.use(router).use(store).mount('#app')

// App.use(ElementPlus)

console.log(process.env.VUE_APP_BASE_URL)
