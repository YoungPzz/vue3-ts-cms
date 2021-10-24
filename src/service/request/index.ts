// 关于axios的封装，都封装到这个类里面，因为类具备很强的封装性，比函数要强
import axios from 'axios'
import type { AxiosInstance } from 'axios' //axios内部已经提供了关于axios实例的类型
import type { YPRequestInterceptors, YPRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class YPRequest {
  instance: AxiosInstance //instance 用于区分，当有多个请求时，是用不同的实例
  interceptors?: YPRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: YPRequestConfig) {
    //可以点击config进去看里面的类型
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? true
    //从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestinterceptor,
      this.interceptors?.requestinterceptorCatch
    ) //
    this.instance.interceptors.response.use(
      this.interceptors?.responseinterceptor,
      this.interceptors?.responseinterceptorCatch
    )

    //添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('这是所有实例都有的拦截器')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('这是所有实例都有的拦截器')

        //将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        return res.data //拿到的数据不需要.data
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }
  request(config: YPRequestConfig): void {
    if (config.interceptors?.requestinterceptor) {
      config = config.interceptors.requestinterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseinterceptor) {
        res = config.interceptors.responseinterceptor(res)
      }
      // console.log(res) //48行做了个拦截

      this.showLoading = true
    })
  }
}

export default YPRequest
