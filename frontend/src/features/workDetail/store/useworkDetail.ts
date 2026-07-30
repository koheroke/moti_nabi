import { defineStore } from 'pinia'
import { type workAbout } from '../api/useworkDetailApi'


export const useworkDetailStore = defineStore("workDetail", {
  state: () => ({
    about: {
      userLike: false,
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
    }
  }
})