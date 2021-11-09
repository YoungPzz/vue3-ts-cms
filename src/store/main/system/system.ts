import { Module } from 'vuex'
import { IRootState } from '../../types'
import { ISystemState } from './type'

const systemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {}
}

export default systemModule
