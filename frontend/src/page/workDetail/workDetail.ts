// features/user/user.ts

import type { WorkDetail } from "./workDetailType"
import { getMockWorkDetail } from "./driver/getWorkDetailMockDriver"
//テスト用
// import { getUserProfile, getUserWorks } from "./drivers/userApiDriver"
export const fetchWorkDetail = async (): Promise<WorkDetail> => {
  return await getMockWorkDetail()
}
