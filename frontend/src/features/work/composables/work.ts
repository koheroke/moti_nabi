import type { workPackage } from "../types/work"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/create`;
const useGetWorkPackage = () => {
  const getUserworkPackage = async (userId: string): Promise<workPackage[]> => {
    const data = await fetch(
      `${url}/work/getUserWorkPackage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,

        })
      })
    return await data.json()
  }


  const getworkPackage = async (): Promise<workPackage[]> => {
    const data = await fetch(
      `${url}/work/getWorkPackage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    return await data.json()
  }


  return { getworkPackage, getUserworkPackage }
}
export { useGetWorkPackage }

