import { defineStore } from 'pinia'


type TutorialProgress = Record<string, boolean>
export interface UserInfo {
  userId: string
  name: string
  tutorialProgress: TutorialProgress;
  iconUrl: string
}

type UserInfos = Record<string, UserInfo>

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfos: {} as UserInfos,
  }),

  getters: {
    getUserInfo: (state) => (userId: string) =>
      state.userInfos[userId],

    getIconUrl: (state) => (userId: string) =>
      state.userInfos[userId]?.iconUrl ?? '',

    getName: (state) => (userId: string) =>
      state.userInfos[userId]?.name ?? '',

  },

  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfos[userInfo.userId] = userInfo
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