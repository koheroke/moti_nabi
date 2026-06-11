import { defineStore } from 'pinia'

import { type RequireAtLeastOne } from '@/types/RequireAtLeastOne'

export interface editAboutType {
  name: string;
  bio: string;
  tags: string[];
  thumbnailUrl: string;
  public: boolean;
}

export const useWorkDetailEditStore = defineStore("workDetailEdit", {
  state: () => ({
    about: {
      name: "",
      bio: "",
      tags: [],
      thumbnailUrl: "",
      public: false
    } as editAboutType,
    edit: {} as RequireAtLeastOne<editAboutType>
  }),
  getters: {
    AboutGetter: (state) => state.about,
    EditGetter: (state) => state.edit
  },
  actions: {
    setAbout(about: editAboutType) {
      console.log("aboutStore setAbout_log", about)
      this.about = { ...this.about, ...about }
    },
    addEdit(edit: RequireAtLeastOne<editAboutType>) {
      this.about = { ...this.about, ...edit }
      this.edit = { ...this.edit, ...edit }

    }
  }
})