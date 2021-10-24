//放一些类型
import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface YPRequestInterceptors {
  requestinterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestinterceptorCatch?: (error: any) => any
  responseinterceptor?: (config: any) => any
  responseinterceptorCatch?: (error: any) => any
} //定义传入进来的拦截器

export interface YPRequestConfig extends AxiosRequestConfig {
  interceptors?: YPRequestInterceptors
  showLoading?: boolean
}
