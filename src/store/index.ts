import { createStore } from 'vuex'
import login from './login/login'
import { IRootState } from './types'
export default createStore<IRootState>({
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
