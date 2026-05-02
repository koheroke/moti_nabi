// features/work/drivers/workMockDriver.ts

import type { Work } from "../types/work"

export const getMockWorks = async (): Promise<Work[]> => {
  await delay(800)

  return [
    {
      id: "work-001",
      title: "旅行用持ち物リスト",
      thumbnailUrl: "/images/mock-work-1.png",
      createdAt: "2026-05-01",
      isPublished: true,
      likeCount: 120,
      tags: ["旅行", "パッキング"]
    },
    {
      id: "work-002",
      title: "学校用持ち物リスト",
      thumbnailUrl: "/images/mock-work-2.png",
      createdAt: "2026-04-28",
      isPublished: true,
      likeCount: 85,
      tags: ["学校", "日常"]
    },
    {
      id: "work-003",
      title: "部活用持ち物リスト",
      thumbnailUrl: "/images/mock-work-3.png",
      createdAt: "2026-04-20",
      isPublished: false,
      likeCount: 40,
      tags: ["部活", "スポーツ"]
    },
    {
      id: "work-004",
      title: "防災用持ち物リスト",
      thumbnailUrl: "/images/mock-work-4.png",
      createdAt: "2026-04-15",
      isPublished: true,
      likeCount: 200,
      tags: ["防災", "緊急"]
    },
    {
      id: "work-005",
      title: "キャンプ用持ち物リスト",
      thumbnailUrl: "/images/mock-work-5.png",
      createdAt: "2026-04-10",
      isPublished: true,
      likeCount: 150,
      tags: ["キャンプ", "アウトドア"]
    },
  ]
}

// features/user/drivers/userMockDriver.ts


export const getMockUserWorks = async (): Promise<Work[]> => {
  await delay(800)

  return [
    {
      id: "work-001",
      title: "旅行用持ち物リスト",
      thumbnailUrl: "/images/mock-work-1.png",
      createdAt: "2026-05-01",
      isPublished: true,
      likeCount: 120,
      tags: ["旅行", "パッキング"],
    },
    {
      id: "work-002",
      title: "学校用持ち物リスト",
      thumbnailUrl: "/images/mock-work-2.png",
      createdAt: "2026-04-28",
      isPublished: true,
      likeCount: 85,
      tags: ["学校", "日常"],
    },
    {
      id: "work-003",
      title: "部活用持ち物リスト",
      thumbnailUrl: "/images/mock-work-3.png",
      createdAt: "2026-04-20",
      isPublished: false,
      likeCount: 40,
      tags: ["部活", "スポーツ"],
    },
  ]
}


const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}