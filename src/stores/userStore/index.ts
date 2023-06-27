import type { IStore } from './index.d'
import { defineStore } from 'pinia'
export default defineStore('userStore', {
  state: (): IStore => ({
    testValue: 1,
    userInfo: {
      userName: 'admin',
      avatar: 'https://foruda.gitee.com/avatar/1669426812317011153/1326874_zhizous_1669426812.png'
    }
  }),
  actions: {
    SET_TESTVALUE(val: number) {
      this.testValue = val
    },
    SET_USERNAME(val: string) {
      this.userInfo.userName = val
    },
    SET_USERAVATAR(val: string) {
      this.userInfo.avatar = val
    }
  },
  getters: {
    userInfoGetter: (state) => {
      return state.userInfo
    },
    testValueGetter(): number {
      return this.testValue
    }
  }
})
