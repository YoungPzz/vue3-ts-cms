import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderYp',
      age: 20
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
} //初始化
export default store
