// features/user/drivers/userMockDriver.ts

import type { UserProfile } from "../types/profile"

export const getMockUserProfile = async (): Promise<UserProfile> => {
  await delay(500)

  return {
    id: "user-001",
    name: "あずまこうへい",
    iconUrl: "/images/mock-user-icon.png",
    bio: "持ち物リストや作品を作っています。",
    snsLinks: [
      {url: "https://x.com/example",type:"x"},
      {url: "https://github.com/example",type:"github"}
    ],
    createdAt: "2026-05-01",
    postCount: 3
  }
}


const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}