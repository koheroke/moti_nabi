import { fetchUserWorks } from "@/features/work/composables/work"
import type { Work } from "@/features/work/types/work";
import { useIncrementalList } from "@/composables/array/useIncrementalList";
import { onMounted, ref } from "vue"

export const useMyWorks = (step:number) => {
  const works = ref<Work[]>([])
  onMounted(async () => {
    works.value = await fetchUserWorks()
  })
  const { visibleItems ,more} = useIncrementalList(works, step)
  
  return {
    works,
    more,
    visibleWorks:visibleItems,
  }  
}