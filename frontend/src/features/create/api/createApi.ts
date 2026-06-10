import { type UserLuggage_SaveDBData } from "../type/apiType";
import { type menber } from "../type/infoType";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
const useCreateApi = () => {

  const getWork = async (theWorkId: string): Promise<{ parseData: UserLuggage_SaveDBData, menbers: menber[] }> => {
    const res = await fetch(
      `${url}/getWork`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theWorkId: theWorkId
        })
      })
    const data = await res.json()
    data.data = JSON.parse(data.data)


    const parse = {
      ...data.data,
      workName: data.name,
      workId: data.id,
    }
    console.log("parse", parse);
    return {
      parseData: parse, menbers: data.members
    }
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
    const newWorkData = await data.json();

    if (newWorkData == "error") {
      return null
    };

    const createdData = await JSON.parse(newWorkData.data);
    const workData = {
      workName: newWorkData.workName,
      workId: newWorkData.workId,
      ...createdData
    }
    return workData
  }


  const addMenber = async (token: { workId: string, role: string, userId: string }): Promise<string> => {
    const data = await fetch(
      `${url}/addMenber`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...token
        })
      })
    return await data.json()
  }


  const deleteMenber = async (token: { userId: string, workId: string }): Promise<string> => {
    const data = await fetch(
      `${url}/deleteMenber`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...token
        })
      })
    return await data.json()
  }

  return { getWork, createNewWork, addMenber, deleteMenber }
}
export { useCreateApi }

