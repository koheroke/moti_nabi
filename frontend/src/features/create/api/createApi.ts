import { type UserLuggage_SaveDBData } from "../type/apiType";
import userLuggage_SaveDBData from "../driver/itemListDriver";


const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/create`;
const useCreateApi = () => {
  const getWork = async (userId: number, theWorkId: number): Promise<UserLuggage_SaveDBData> => {
    const data = await fetch(
      `${url}/work/get`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          theWorkId: theWorkId
        })
      })
    return await data.json()
  }


  const pushWork = async (userId: string, workId: string): Promise<UserLuggage_SaveDBData> => {
    const data = await fetch(
      `${url}/work/push`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
          theWorkId: workId
        })
      })
    return await data.json()
  }


  const load = () => { //テスト用
    const data = userLuggage_SaveDBData
    return data
  }
  return { load, getWork, pushWork }
}
export { useCreateApi }

