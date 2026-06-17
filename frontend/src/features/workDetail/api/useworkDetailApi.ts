import { type UserLuggage_SaveDBData } from "@/features/create/type/apiType";

export type WorkPreviewResponse = {
  data: UserLuggage_SaveDBData;
  id: string;
  createdAt: Date;
  name: string;
  bio: string | null;
  likes: number;
  tags: string[];
  copies: number;
  members: WorkMemberResponse[];
};

export type parseWorkPreviewData = {
  id: string,
  about: workAbout,
  data: UserLuggage_SaveDBData;
}

export type workAbout = {
  name: string;
  bio: string;
  likes: number;
  tags: string[];
  copies: number;
  members: WorkMemberResponse[];
}

export type WorkMemberResponse = {
  role: string;
  userId: string;
  user: {
    profile: {
      id: string;
      userId: string;
      iconUrl: string;
      name: string;
    }
  };
};

const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
const useworkDetailApi = () => {

  const get = async (theWorkId: string): Promise<parseWorkPreviewData> => {
    const res = await fetch(
      `${url}/getWorkDetail`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theWorkId: theWorkId
        })
      })
    const response = await res.json()
    response.data = JSON.parse(response.data)
    const { data, id, createdAt, ...about } = response
    return { id: id, data: data, about: about }
  }


  return { get }
}
export { useworkDetailApi }
