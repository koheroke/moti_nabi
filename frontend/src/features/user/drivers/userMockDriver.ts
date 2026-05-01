// features/user/drivers/userMockDriver.ts

import type { UserProfile } from "../types/profile"
import type { UserWork } from "../types/work"

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

export const getMockUserWorks = async (): Promise<UserWork[]> => {
  await delay(800)

  return [
    {
      id: "work-001",
      title: "旅行用持ち物リスト",
      thumbnailUrl: "/images/mock-work-1.png",
      createdAt: "2026-05-01",
      isPublished: true
    },
    {
      id: "work-002",
      title: "学校用持ち物リスト",
      thumbnailUrl: "/images/mock-work-2.png",
      createdAt: "2026-04-28",
      isPublished: true
    },
    {
      id: "work-003",
      title: "部活用持ち物リスト",
      thumbnailUrl: "/images/mock-work-3.png",
      createdAt: "2026-04-20",
      isPublished: false
    }
  ]
}

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}