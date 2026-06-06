import { type UserLuggage_SaveDBData } from "../type/apiType";
import userLuggage_SaveDBData from "../driver/itemListDriver";


const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
const useCreateApi = () => {
  const getWork = async (theWorkId: string): Promise<UserLuggage_SaveDBData> => {
    const data = await fetch(
      `${url}/get`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theWorkId: theWorkId
        })
      })
    return await data.json()
  }


  const createNewWork = async (userId: string,): Promise<UserLuggage_SaveDBData | null> => {
    const data = await fetch(
      `${url}/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId,
        })
      })

    const res = await data.json()
    if (res == "error") {
      return null
    }

    const newWork: UserLuggage_SaveDBData = {
      "workId": res.workId,
      "workName": res.workName,
      "itemListDatas": {
        "addedItems": {},
        "bookmarks": [],
        "addItemCounter": 0,
      },
      "previewDatas": {
        mainLuggage: {},
        "addItemCounter": 0
      }
    };

    return newWork
  }


  const load = () => { //テスト用
    const data = userLuggage_SaveDBData
    return data
  }
  return { load, getWork, createNewWork }
}
export { useCreateApi }

