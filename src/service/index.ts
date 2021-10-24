// service 统一出口
import YPRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const ypRequest = new YPRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    //拦截器的本质是传入一个个函数
    requestinterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestinterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseinterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseinterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

// export const ypRequest2 = new YPRequest()
// baseURL:地址一
//这里创造不同的实例，用instance作为区分
export default ypRequest
