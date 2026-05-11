// features/user/drivers/userMockDriver.ts

import type { UserProfile } from "../types/profile"
const testThumbnailUrl = "https://picsum.photos/400/300"
const testIcon = "https://www.google.com/s2/favicons?domain=github.com"
export const getMockUserProfile = async (): Promise<UserProfile> => {
  await delay(500)

  return {
    id: "user-001",
    name: "あずまこうへい",
    iconUrl: testThumbnailUrl,
    bio: "持ち物リストや作品を作っています。",
    snsLinks: [
      {url: "https://x.com/example",type:"x",icon:testIcon},
      {url: "https://github.com/example",type:"github",icon:testIcon}
    ],
    createdAt: "2026-05-01",
    postCount: 3
  }
}


const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}