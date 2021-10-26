export interface ILoginAccount {
  name: string
  password: string
}
export interface ILoginResult {
  //关于登录请求的接口
  id: number
  name: string
  token: string
}
export interface IDataType<T = any> {
  code: number
  data: T //因为data是不确定的，有可能是数组，有可能是对象，或者其他
}
