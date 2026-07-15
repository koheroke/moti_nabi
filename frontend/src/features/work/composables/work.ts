import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useWorkPackageStore } from "../store/workPackageStore";
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthStore = useUserAuthStore()
const workPackageStore = useWorkPackageStore()
const url = `${apiUrl}/work`;
const useWork = () => {
  const getUserworkPackages = async (userId: string): Promise<workPackage[]> => {
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
    const works = await data.json()
    workPackageStore.setUserWorkPackageStore(works)
    return works
  }


  const getworkPackages = async (): Promise<workPackage[]> => {
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
    workPackageStore.setWorkPackageStore(works)
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

