import ypRequest from '../index'
import { ILoginAccount, IDataType, ILoginResult } from './types'
enum LoginApi {
  AccountLogion = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/' //role/1/menu
}
export function loginAccountRequest(account: ILoginAccount) {
  return ypRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogion,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return ypRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}
export function requestUserMenusByRoleId(id: number) {
  return ypRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
