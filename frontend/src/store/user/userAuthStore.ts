import { defineStore } from 'pinia'


interface UserAuth {
  userId: string
  userEmail: string
  token: string | null
  isLoading: boolean,
  isAuthenticated: boolean,
  isTempAuthenticated: boolean
}



export const useUserAuthStore = defineStore('userAuth', {
  state: (): UserAuth => ({
    userId: "",
    userEmail: "",
    token: localStorage.getItem('token'),
    isLoading: false,
    isAuthenticated: false,
    isTempAuthenticated: false
  }),

  getters: {
    isLoggedInGetter: (state) => !!state.userId && !!state.token,
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
      this.token = token
      localStorage.setItem('token', token)
    },

    set(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    login(userId: string, email: string, token: string) {
      this.setUserId(userId)
      this.setUserEmail(email)
      this.setToken(token)
      this.isAuthenticated = true
    },

    set2fa() {
      this.isTempAuthenticated = true
      this.isAuthenticated = false
    },

    logout() {
      this.userId = ""
      this.token = null
      localStorage.removeItem('token')
      this.isAuthenticated = false
      this.isTempAuthenticated = false
    },

  },
})