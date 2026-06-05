import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
import { useUserProfileStore } from "@/features/profile/store/userProfileStore";
const userProfileStore = useUserProfileStore()
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
    userProfileStore.setUserProfile(await data.json())
    return await data.json()
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

