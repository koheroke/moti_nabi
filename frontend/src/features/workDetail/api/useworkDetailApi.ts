import { type UserLuggage_SaveDBData } from "@/features/create/type/apiType";
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthStore = useUserAuthStore()
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
  about: workAbout,
  data: UserLuggage_SaveDBData;
}

export type workAbout = {
  userLike: boolean,
  id: string,
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
          theWorkId: theWorkId,
          userId: userAuthStore.userIdGetter
        })
      })
    const response = await res.json()
    response.data = JSON.parse(response.data)
    const { data, createdAt, likedUsers, ...about } = response
    let userLike = false
    console.log("likedUsers", likedUsers)
    if (likedUsers) {
      userLike = true
    }
    const res_about = { ...about, userLike: userLike }
    return { data: data, about: res_about }
  }


  return { get }
}
export { useworkDetailApi }
