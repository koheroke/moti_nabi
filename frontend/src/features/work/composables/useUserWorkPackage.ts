import type { workPackage } from "@/features/work/types/work";
import { useIncrementalList } from "@/composables/array/useIncrementalList";
import { onMounted, ref } from "vue"
import { useGetWorkPackage } from "@features/work/composables/work";


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