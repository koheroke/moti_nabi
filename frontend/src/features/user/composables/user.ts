// features/user/user.ts

import type { UserProfile } from "../types/profile"
import { getMockUserProfile } from "../drivers/userMockDriver"

//テスト用
// import { getUserProfile, getWorks } from "./drivers/userApiDriver"
export const fetchUserProfile = async (userId: string): Promise<UserProfile> => {
  return await getMockUserProfile()
}
