import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useWorkPackageStore } from "../store/workPackageStore";
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
    const res = await fetch(
      `${url}/getWorkPackages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

  return { getworkPackages, getUserworkPackages, deleteWork }
}
export { useWork }

