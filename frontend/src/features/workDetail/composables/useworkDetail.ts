import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import type { parseWorkPreviewData, workAbout } from "@/features/workDetail/api/useworkDetailApi";
import { type Case } from "@/features/create/type/casetype";
import { type itemCard } from "@/features/create/type/itemType";
import { useApplyCreateAction } from "@/features/create/composables/applyCreateAction";
import { useCreateStore } from "@/features/create/store/createStore";
import { type UserLuggage_SaveDBData } from "@/features/create/type/apiType";
import { useworkDetailApi } from "@/features/workDetail/api/useworkDetailApi";
import { useworkDetailStore } from "@/features/workDetail/store/useworkDetail";
const workDetailStore = useworkDetailStore()
const workPackageStore = useWorkPackageStore();
const createStore = useCreateStore()
const applyCreateAction = useApplyCreateAction()
const workDetailApi = useworkDetailApi()



const usePreviewWork = () => {
  const get = async () => {
    const theWorkId: string = workPackageStore.selectedPackageIdGetter
    if (!theWorkId) return "noneNameorWorkId"
    let data = null as parseWorkPreviewData | null
    let vuepreviewData = {} as Record<string, Case>
    let vueItemList = {} as Record<string, itemCard>
    let parseData = {} as UserLuggage_SaveDBData
    let about = {} as workAbout
    try {
      data = await workDetailApi.get(theWorkId)
    } catch (e) {
      return "fallLoadData"
    }
    try {
      if (data == null) throw new Error()
      await applyCreateAction.getStaticCases()
      const createAction = useApplyCreateAction()
      await createAction.initCreateStaticData()
      const response = applyCreateAction.hydrateCreateState(data.data)
      vuepreviewData = response.vuepreviewData
      vueItemList = response.vueItemList
      parseData = data.data
      about = data.about
    } catch (e) {
      return "damagedData"
    }
    createStore.setWork(parseData, vuepreviewData, vueItemList)
    createStore.setRole("viewer")
    workDetailStore.setAbout(about)
    return "none"
  }
  return { get }
}
export {
  usePreviewWork
}



