import { useGetWorkPackage } from "@features/work/composables/work"
import type { workPackage } from "@/features/work/types/work";
import { useIncrementalList } from "@/composables/array/useIncrementalList";
import { onMounted, ref } from "vue"



const getWorkPackage = useGetWorkPackage()
onMounted(async () => {

})
const getworkPackage = useGetWorkPackage()
const useUserWorkPackage = () => {
  const load = (userId: string) => {
    getWorkPackage.getUserworkPackage(userId)
  }
  return { load }
}
export { useUserWorkPackage }



const getworkPackage = useGetWorkPackage()
export const UserWorks = (step: number, userId: string) => {
  const works = ref<workPackage[]>([])
  onMounted(async () => {
    works.value = await getworkPackage.getUserworkPackage(userId)
  })
  const { visibleItems, more } = useIncrementalList(works, step)

  return {
    works,
    more,
    visibleWorks: visibleItems,
  }
}