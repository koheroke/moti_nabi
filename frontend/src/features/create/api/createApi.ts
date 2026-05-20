import { type UserLuggage_SaveDBData } from "../type/itemType";
import { userLuggage_SaveDBData } from "../driver/itemListDriver";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/create`;
const useCreateApi = () => {
  const load = async (userId: number, theWorkId: number): Promise<UserLuggage_SaveDBData> => {
    // const data = await fetch(
    //   `${url}/load`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       userId: userId,
    //       theWorkId: theWorkId
    //     })
    //   })
    const data = userLuggage_SaveDBData
    return data
  }
  return { load }
}
export { useCreateApi }

