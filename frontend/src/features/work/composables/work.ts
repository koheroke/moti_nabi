import type { workPackage } from "../types/work"
import type { previewSvgCase } from "@/features/create/store/createStore";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useWorkPackageStore } from "../store/workPackageStore";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import type { BeforeParsingWorkPackage } from "../types/work";
import { useThumbnail } from "@/features/create/composables/thumbnail";
import { useApplyCreateAction } from "@/features/create/composables/applyCreateAction";
import { useGalleryWorksStore } from "@/features/gallery/composables/useGalleryWorksStore";
const galleryWorksStore = useGalleryWorksStore()
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
    const newWork: workPackage[] = works.map((work) => {
      let parseThumbnail: previewSvgCase[] = []
      try { parseThumbnail = thumbnail.parse(work.thumbnailJson) } catch {
        parseThumbnail = []
      }
      console.log("work.lastAccessAt", work.lastAccessAt)
      return {
        ...work,
        thumbnailJson: parseThumbnail,
        lastAccessAt: work.lastAccessAt ? new Date(work.lastAccessAt).getTime() : 0
      }
    })
    workPackageStore.setUserWorkPackageStore(newWork)
    return works
  }
  const getworkPackages = async (number?: number): Promise<BeforeParsingWorkPackage[]> => {
    await applyCreateAction.getStaticCases()
    const userId = userAuthStore.userIdGetter
    const data = await fetch(
      `${url}/getWorkPackages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          number: number ? number : "all",
        })
      })
    const works: BeforeParsingWorkPackage[] = await data.json()
    console.log("works", works)
    const newWork: workPackage[] = works.map((work) => {
      console.log("work", work)
      let parseThumbnail: previewSvgCase[] = []
      try { parseThumbnail = thumbnail.parse(work.thumbnailJson) } catch {
        parseThumbnail = []
      }
      return {
        ...work,
        thumbnailJson: parseThumbnail,
        lastAccessAt: work.lastAccessAt ? new Date(work.lastAccessAt).getTime() : 0
      }
    })
    galleryWorksStore.setAllWorks(newWork)
    workPackageStore.setWorkPackageStore(newWork)
    return works
  }

  const deleteWork = async (id: string) => {
    const userId = userAuthStore.userIdGetter
    const res = await fetch(
      `${url}/deleteWork`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workId: id,
          userId: userId
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

