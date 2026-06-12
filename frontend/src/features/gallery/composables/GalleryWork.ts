import type { workPackage } from "@/features/work/types/work"
import { useIncrementalList } from "@/composables/array/useIncrementalList"
import { onMounted, ref } from "vue"
import type { ParseSearchQuery, SortType } from "../type"
import { isSubset } from "@/composables/array/isSubset"
import { useWorkPackageStore } from "@/features/work/store/workPackageStore"
import { useWork } from "@/features/work/composables/work"
const workPackageStore = useWorkPackageStore();
const getWorkPackages = useWork()

export const useGalleryWorks = (step: number) => {
  const allWorks = ref<workPackage[]>([])
  const works = ref<workPackage[]>([])

  onMounted(async () => {
    const work = await getWorkPackages.getworkPackages()
    workPackageStore.setWorkPackageStore(work)
    const fetchedWorks = workPackageStore.workPackageStoreGetter
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
        work.name.toLowerCase().includes(lowerWord)

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
          (a, b) => b.likes - a.likes
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