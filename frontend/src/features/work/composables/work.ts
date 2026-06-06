import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useWorkPackageStore } from "../store/workPackageStore";
const workPackageStore = useWorkPackageStore()
const url = `${apiUrl}/work`;
const useGetWorkPackages = () => {
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
    console.log("works", works)
    workPackageStore.setUserWorkPackageStore(works)
    return works
  }


  const getworkPackages = async (): Promise<workPackage[]> => {
    const data = await fetch(
      `${url}/getWorkPackage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    return await data.json()
  }


  return { getworkPackages, getUserworkPackages }
}
export { useGetWorkPackages }

