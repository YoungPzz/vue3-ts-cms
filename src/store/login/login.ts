//在这里存放login的vuex
import { Module } from 'vuex'
import { IRootState } from '../types'
import { IloginState } from '../types'
import router from '@/router'
import {
  loginAccountRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { ILoginAccount } from '@/service/login/types'
import localCache from '@/utils/cache'
const loginMudule: Module<IloginState, IRootState> = {
  namespaced: true, //模块来一个命名空间
  state() {
    return {
      token: '',
      userInfo: '',
      UserMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMeaus: any) {
      state.UserMenus = userMeaus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: ILoginAccount) {
      //处理promise的语法糖
      //1.实现登录逻辑
      const loginResult = await loginAccountRequest(payload) //返回的是promise
      //loginResult即是返回结果)
      commit('changeToken', loginResult.data.token)
      localCache.setCache('token', loginResult.data.token)

      //2.请求用户信息
      const userInfoResult = await requestUserInfoById(loginResult.data.id)
      const userInfo = userInfoResult.data
      // console.log(userInfoResult) //如果直接用，没有携带token，无法获取授权
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo) //把userinfo也缓存起来

      //3.请求用户菜单（不同用户对应不同左侧菜单）
      const userMenuResult = await requestUserMenusByRoleId(userInfo.role.id)
      commit('changeUserMenus', userMenuResult.data)
      localCache.setCache('userMenus', userMenuResult.data)

      //4.跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeuserInfo', userInfo)
      }
      const UserMenus = localCache.getCache('UserMenus')
      if (UserMenus) {
        commit('changeUserMenus', UserMenus)
      }
    }
  }
} //第一个类型是state的类型，第二个是根的state的类型
export default loginMudule
