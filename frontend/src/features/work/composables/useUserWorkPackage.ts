import type { workPackage } from "@/features/work/types/work";
import { useIncrementalList } from "@/composables/array/useIncrementalList";
import { onMounted, ref } from "vue"
import { useGetWorkPackages } from "@features/work/composables/work";


const getWorkPackages = useGetWorkPackages()
onMounted(async () => {

})
const useUserWorkPackage = () => {
  const load = (userId: string) => {
    getWorkPackages.getUserworkPackages(userId)
  }
  return { load }
}
export { useUserWorkPackage }