// features/user/user.ts

import type { Work } from "../types/work"
import { getMockUserWorks } from "../drivers/workMockDriver"
import { getMockWorks } from "../drivers/workMockDriver"
//テスト用
// import { getUserProfile, getUserWorks } from "./drivers/userApiDriver"
export const fetchUserWorks = async (): Promise<Work[]> => {
  return await getMockUserWorks()
}

export const fetchWorks = async (): Promise<Work[]> => {
  return await getMockWorks()
}