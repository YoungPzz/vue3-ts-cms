import { Module } from 'vuex'
import { IRootState } from '../../types'
import { ISystemState } from './type'
import { getPageListData } from '@/service/main/system/system'
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeusersList(state, userList: any[]) {
      state.userList = userList
    },
    changeusersCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeroleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeroleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      //1.getPageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      console.log(',,,', pageUrl)
      //2.对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      //3.let list into state
      const { list, totalCount } = pageResult.data
      commit(`change${pageName}List`, list)
      commit(`change${pageName}Count`, totalCount)
    }
  }
}

export default systemModule
