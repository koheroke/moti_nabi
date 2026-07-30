import type { workPackage } from "@/features/work/types/work"
import { defineStore } from "pinia"
import type { SortType } from "../type"
import { isSubset } from "@/composables/array/isSubset"

export const useGalleryWorksStore = defineStore("gallery", {
  state: () => ({
    allWorks: [] as workPackage[],
    works: [] as workPackage[],
    step: 0,
  }),
  getters: {
    GalleryWorksGetter: (state) => state.works
  },
  actions: {
    more() {
      this.step += 30;
    },
    setStep(this_step: number) {
      this.step = this_step
    },
    setAllWorks(allWorks: workPackage[]) {
      this.allWorks = allWorks
      this.works = allWorks
    },

    GalleryWorksSearch(search: string) {
      const searchs = search.split(" ")
      if ((searchs[searchs.length - 1] == "#" && searchs.length == 1) || searchs.length == 0) {
        this.works = this.allWorks
        console.log("this.works", this.works)
        return
      }
      const tags = searchs.filter((search) => (
        search[0] == "#"
      )).map((tag) => {
        return tag.slice(1)
      })

      const word = searchs.filter((search) => (
        search[0] != "#"
      )).join(" ")


      const lowerWord = word?.toLowerCase()
      this.works = this.allWorks.filter((work) => {
        const workTags = work.tags.map((t) => t.toLowerCase())
        const matchTag =
          tags.length === 0 ||
          isSubset(
            tags.map((t) => t.toLowerCase()),
            workTags
          )
        console.log("workTags", workTags)
        const matchWord =
          !lowerWord ||
          work.name.toLowerCase().includes(lowerWord)

        return matchTag && matchWord
      })
    },

    GalleryWorksSort(sortType: SortType) {
      switch (sortType) {
        case "latest":
          this.works = [...this.works].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() -
              new Date(a.createdAt).getTime()
          )
          break
        case "likes":
          this.works = [...this.works].sort(
            (a, b) => b.likes - a.likes
          )
          break
      }
    }
  }
})