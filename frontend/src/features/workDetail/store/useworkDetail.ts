import { defineStore } from 'pinia'
import { type workAbout } from '../api/useworkDetailApi'


export const useworkDetailStore = defineStore("workDetail", {
  state: () => ({
    about: {} as workAbout,
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