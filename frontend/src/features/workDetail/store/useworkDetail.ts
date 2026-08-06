import { defineStore } from 'pinia'
import { type workAbout } from '../api/useworkDetailApi'


export const useworkDetailStore = defineStore("workDetail", {
  state: () => ({
    about: {
      userLike: undefined,
      id: "",
      name: "",
      bio: "",
      likes: 0,
      tags: [],
      copies: 0,
      members: [],
    } as workAbout,
  }),
  getters: {
    AboutGetter: (state) => state.about,
  },
  actions: {
    setAbout(about: workAbout) {
      this.about = about
    },

    leave() {
      this.about = {
        userLike: undefined,
        id: "",
        name: "",
        bio: "",
        likes: 0,
        tags: [],
        copies: 0,
        members: [],
      }
    },
    setLike() {
      if (this.about.userLike) {
        this.about.likes--
      } else {
        this.about.likes++
      }
      this.about.userLike = !this.about.userLike

    }
  }
})