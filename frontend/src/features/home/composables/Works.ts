import { fetchWorks } from "@/features/work/composables/work"
import type { Work } from "@/features/work/types/work";
import { onMounted, ref } from "vue"

export const useWorks = () => {
  const works = ref<Work[]>([])
  const maxNum = 5
  onMounted(async () => {
    works.value = await fetchWorks()
    works.value = works.value.sort((a, b) => a.likeCount - b.likeCount).slice(0, maxNum)
  })
  return {
    works,
  }
}