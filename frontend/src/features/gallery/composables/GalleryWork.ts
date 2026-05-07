import { fetchWorks } from "@/features/work/composables/work"
import type { Work } from "@/features/work/types/work"
import { useIncrementalList } from "@/composables/array/useIncrementalList"
import { onMounted, ref } from "vue"
import type { ParseSearchQuery, SortType } from "../type"
import { isSubset } from "@/composables/array/isSubset"

export const useGalleryWorks = (step: number) => {
  const allWorks = ref<Work[]>([])
  const works = ref<Work[]>([])

  onMounted(async () => {
    const fetchedWorks = await fetchWorks()
    allWorks.value = fetchedWorks
    works.value = fetchedWorks
  })

  const { visibleItems, more } = useIncrementalList(works, step)

  const GalleryWorksSearch = (search: ParseSearchQuery) => {
    const { tag, word } = search
    const lowerWord = word?.toLowerCase()

    works.value = allWorks.value.filter((work) => {
      const workTags = work.tags.map((t) => t.toLowerCase())

      const matchTag =
        tag.length === 0 ||
        isSubset(
          tag.map((t) => t.toLowerCase()),
          workTags
        )

      const matchWord =
        !lowerWord ||
        work.title.toLowerCase().includes(lowerWord)

      return matchTag && matchWord
    })
  }

  const GalleryWorksSort = (sortType: SortType) => {
    switch (sortType) {
      case "latest":
        works.value = [...works.value].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        )
        break

      case "likes":
        works.value = [...works.value].sort(
          (a, b) => b.likeCount - a.likeCount
        )
        break
    }
  }

  return {
    works,
    more,
    visibleWorks: visibleItems,
    GalleryWorksSearch,
    GalleryWorksSort,
  }
}