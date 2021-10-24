//放一些类型
import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface YPRequestInterceptors<T = AxiosResponse> {
  requestinterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestinterceptorCatch?: (error: any) => any
  responseinterceptor?: (res: any) => any //有点问题
  responseinterceptorCatch?: (error: any) => any
} //定义传入进来的拦截器

export interface YPRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YPRequestInterceptors
  showLoading?: boolean
}
