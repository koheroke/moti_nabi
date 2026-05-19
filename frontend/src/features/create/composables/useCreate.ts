const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/2fa`;
import { userLuggage_SaveDBData } from "../driver/itemListDriver";
import { type UserLuggage_SaveDBData } from "../type/itemType";
import { type Category } from "../type/itemType";
export const UseCreateWork = () => {
  const load = async (): Promise<UserLuggage_SaveDBData> => {
    const getData = userLuggage_SaveDBData
    return getData
  }
  const addItemToItemList = async (data: Category) => {
  }
  const addItemToPreview = async (data: Category) => {
  }
  return { load, addItemToItemList, addItemToPreview }
}

