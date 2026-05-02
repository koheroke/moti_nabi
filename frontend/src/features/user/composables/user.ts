// features/user/user.ts

import type { UserProfile } from "../types/profile"
import type { Work } from "../../work/types/work"
import { getMockUserProfile } from "../drivers/userMockDriver"

//テスト用
// import { getUserProfile, getWorks } from "./drivers/userApiDriver"

export const fetchUserProfile = async (): Promise<UserProfile> => {
  return await getMockUserProfile()
}
