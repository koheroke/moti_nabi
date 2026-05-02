import { fetchWorks } from "@/features/work/composables/work"
import type { Work } from "@/features/work/types/work";
import { onMounted, ref, computed } from "vue"

export const useMyWorks = () => {
  const works = ref<Work[]>([])
  const moreNum = 5
  const sliceNum = ref(moreNum)

  onMounted(async () => {
    works.value = await fetchWorks()
  })

  const visibleWorks = computed(() => {
    return works.value.slice(0, sliceNum.value)
  })

  const more = () => {
    sliceNum.value += moreNum
  }

  return {
    works,
    visibleWorks,
    more
  }
}