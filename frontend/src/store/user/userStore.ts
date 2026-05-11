// src/stores/user.ts
import { defineStore } from 'pinia'
const testUser ={
  id: 1,
  name: "あずまこうへい",
  email: "@aaa"
}
export type User = {
  id: number
  name: string
  email: string
  role?: string
}

type UserState = {
  user: User | null
  token: string | null
  isLoading: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: testUser,
    token: localStorage.getItem('token'),
    isLoading: false,
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

    login(user: User, token: string) {
      this.setUser(user)
      this.setToken(token)
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
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