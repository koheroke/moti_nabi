// features/user/user.ts

import type { UserProfile } from "../types/profile"
import type { UserWork } from "../types/work"
import { getMockUserProfile, getMockUserWorks } from "../drivers/userMockDriver"

//テスト用
// import { getUserProfile, getUserWorks } from "./drivers/userApiDriver"

export const fetchUserProfile = async (): Promise<UserProfile> => {
  return await getMockUserProfile()
}

export const fetchUserWorks = async (): Promise<UserWork[]> => {
  return await getMockUserWorks()
}