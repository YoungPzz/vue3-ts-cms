//在这里存放login的vuex
import { Module } from 'vuex'
import { IRootState } from '../types'
import { IloginState } from '../types'
const loginMudule: Module<IloginState, IRootState> = {
  namespaced: true, //模块来一个命名空间
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('123', payload)
    }
  }
} //第一个类型是state的类型，第二个是根的state的类型
export default loginMudule
