// service 统一出口
import YPRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const ypRequest = new YPRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    //拦截器的本质是传入一个个函数
    requestinterceptor: (config) => {
      //携带token
      const token: string = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestinterceptorCatch: (err) => {
      return err
    },
    responseinterceptor: (res) => {
      return res
    },
    responseinterceptorCatch: (err) => {
      return err
    }
  }
})

// export const ypRequest2 = new YPRequest()
// baseURL:地址一
//这里创造不同的实例，用instance作为区分
export default ypRequest
