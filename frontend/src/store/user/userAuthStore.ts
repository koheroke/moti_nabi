import { defineStore } from 'pinia'


interface UserAuth {
  userId: string
  userEmail: string
  isLoading: boolean,
  isAuthenticated: boolean,
  isTempAuthenticated: boolean
}



export const useUserAuthStore = defineStore('userAuth', {
  state: (): UserAuth => ({
    userId: "",
    userEmail: "",
    isLoading: false,
    isAuthenticated: false,
    isTempAuthenticated: false
  }),

  getters: {
    userEmailGetter: (state) => state.userEmail ?? '',
    userIdGetter: (state) => state.userId ?? '',
    isAuthenticatedGetter: (state) => state.isAuthenticated,
    isTempAuthenticatedGetter: (state) => state.isTempAuthenticated,
  },

  actions: {
    setUserId(userid: string) {
      this.userId = userid
    },

    setUserEmail(userEmail: string) {
      this.userEmail = userEmail
    },

    setToken(token: string) {
      localStorage.setItem('token', token)
    },

    set(token: string) {
      localStorage.setItem('token', token)
    },

    login(userId: string, email: string) {
      this.setUserId(userId)
      this.setUserEmail(email)
      this.isTempAuthenticated = true
    },

    set2fa() {
      this.isTempAuthenticated = false
      this.isAuthenticated = true
    },

    logout() {
      this.userId = ""
      localStorage.removeItem('token')
      this.isAuthenticated = false
      this.isTempAuthenticated = false
    },

  },
})