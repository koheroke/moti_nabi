import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useWorkPackageStore } from "../store/workPackageStore";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import type { BeforeParsingWorkPackage } from "../types/work";
import { useThumbnail } from "@/features/create/composables/thumbnail";
import { useApplyCreateAction } from "@/features/create/composables/applyCreateAction";
const thumbnail = useThumbnail()
const userAuthStore = useUserAuthStore()
const applyCreateAction = useApplyCreateAction()
const workPackageStore = useWorkPackageStore()
const url = `${apiUrl}/work`;
const useWork = () => {

  const getUserworkPackages = async (userId: string): Promise<BeforeParsingWorkPackage[]> => {
    await applyCreateAction.getStaticCases()
    const data = await fetch(
      `${url}/getUserWorkPackages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
        })
      })
    const works: BeforeParsingWorkPackage[] = await data.json()
    console.log("BeforeParsingWorkPackage", works)
    const newWorks = works.map((work) => ({
      ...work,
      thumbnailJson: thumbnail.parse(work.thumbnailJson),
    }));
    workPackageStore.setUserWorkPackageStore(newWorks)
    return works
  }


  const getworkPackages = async (): Promise<BeforeParsingWorkPackage[]> => {
    await applyCreateAction.getStaticCases()
    const userId = userAuthStore.userIdGetter
    const res = await fetch(
      `${url}/getWorkPackages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId
        })
      })
    const works = await res.json()
    const newWorks = works.map((work: BeforeParsingWorkPackage) => ({
      ...work,
      thumbnailJson: thumbnail.parse(work.thumbnailJson),
    }));
    workPackageStore.setWorkPackageStore(newWorks)
    return await works
  }

  const deleteWork = async (id: string) => {
    const res = await fetch(
      `${url}/deleteWork`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workId: id,
        })
      })
    const deleteRes = await res.json()
    return await deleteRes
  }

  const setLike = async (workId: string, userId: string) => {
    await fetch(
      `${url}/setLike`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workId,
          userId,
        })
      })
  }

  return { getworkPackages, getUserworkPackages, deleteWork, setLike }
}
export { useWork }

