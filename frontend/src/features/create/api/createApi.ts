import { type UserLuggage_SaveDBData } from "../type/apiType";

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
const useCreateApi = () => {
  const getWork = async (theWorkId: string): Promise<UserLuggage_SaveDBData> => {
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

    return parse
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

  return { getWork, createNewWork }
}
export { useCreateApi }

