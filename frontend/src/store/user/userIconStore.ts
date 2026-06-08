import { defineStore } from 'pinia'

export interface UserInfo {
  userId: string
  name: string
  iconUrl: string
}

type UserInfos = Record<string, UserInfo>

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfos: {} as UserInfos,
    myuserId: ""
  }),

  getters: {
    getUserInfo: (state) => (userId: string) =>
      state.userInfos[userId],

    getIconUrl: (state) => (userId: string) =>
      state.userInfos[userId]?.iconUrl ?? '',

    getName: (state) => (userId: string) =>
      state.userInfos[userId]?.name ?? '',
    getMyuserId: (state) => state.myuserId

  },

  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfos[userInfo.userId] = userInfo
    },
    setMyuserId(userId: string) {
      this.myuserId = userId
    },


    setIconUrl(userId: string, iconUrl: string) {
      if (this.userInfos[userId]) {
        this.userInfos[userId].iconUrl = iconUrl
      }
    },

    setName(userId: string, name: string) {

      if (this.userInfos[userId]) {
        this.userInfos[userId].name = name
      }
    },

    removeUser(userId: string) {
      delete this.userInfos[userId]
    },

    resetUsers() {
      this.userInfos = {}
    }
  }
})