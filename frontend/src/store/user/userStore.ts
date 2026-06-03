// src/stores/user.ts
import { defineStore } from 'pinia'
const testUser = {
  id: "",
  name: "あずまこうへい",
  email: "@aaa",
  iconUrl: ""
}
export type User = {
  id: string
  name: string
  email: string
  role?: string
  iconUrl: string
}

type UserState = {
  user: User | null
  token: string | null
  isLoading: boolean,
  isAuthenticated: boolean,
  isTempAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: {} as User,
    token: localStorage.getItem('token'),
    isLoading: false,
    isAuthenticated: false,
    isTempAuthenticated: false
  }),

  getters: {
    isLoggedIn: (state) => !!state.user && !!state.token,
    userName: (state) => state.user?.name ?? '',
    userEmail: (state) => state.user?.email ?? '',
    userId: (state) => state.user?.id ?? '',
  },

  actions: {
    setUser(user: User) {
      this.user = user
    },

    setToken(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    set(token: string) {
      this.token = token
      localStorage.setItem('token', token)
    },

    login(user: User, token: string) {
      this.setUser(user)
      this.setToken(token)
      this.isAuthenticated = true
    },

    set2fa() {
      this.isTempAuthenticated = true
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      this.isAuthenticated = false
      this.isTempAuthenticated = false
    },

    async fetchUser() {
      if (!this.token) return

      this.isLoading = true

      try {
        const res = await fetch('/api/me', {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })

        if (!res.ok) {
          throw new Error('ユーザー情報の取得に失敗しました')
        }

        const user: User = await res.json()
        this.user = user
      } catch (error) {
        this.logout()
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
  },
})