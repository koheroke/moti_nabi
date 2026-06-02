// // features/work/drivers/workMockDriver.ts

// import type { Work } from "../types/work"
// const testThumbnailUrl = "https://picsum.photos/400/300"
// export const getMockWorks = async (): Promise<Work[]> => {
//   await delay(800)

//   return [
//     {
//       id: "work-001",
//       title: "旅行用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-1.png",
//       createdAt: "2026-05-01",
//       isPublished: true,
//       likeCount: 120,
//       tags: ["旅行", "パッキング"]
//     },
//     {
//       id: "work-002",
//       title: "学校用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-2.png",
//       createdAt: "2026-04-28",
//       isPublished: true,
//       likeCount: 85,
//       tags: ["学校", "日常"]
//     },
//     {
//       id: "work-003",
//       title: "部活用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-3.png",
//       createdAt: "2026-04-20",
//       isPublished: false,
//       likeCount: 40,
//       tags: ["部活", "スポーツ"]
//     },
//     {
//       id: "work-004",
//       title: "防災用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-4.png",
//       createdAt: "2026-04-15",
//       isPublished: true,
//       likeCount: 200,
//       tags: ["防災", "緊急"]
//     },
//     {
//       id: "work-005",
//       title: "キャンプ用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-5.png",
//       createdAt: "2026-04-10",
//       isPublished: true,
//       likeCount: 150,
//       tags: ["キャンプ", "アウトドア"]
//     },
//     {
//       id: "work-006",
//       title: "登山用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-6.png",
//       createdAt: "2026-04-08",
//       isPublished: true,
//       likeCount: 95,
//       tags: ["登山", "アウトドア"]
//     },
//     {
//       id: "work-007",
//       title: "引っ越しチェックリスト",
//       thumbnailUrl: "/images/mock-work-7.png",
//       createdAt: "2026-04-05",
//       isPublished: true,
//       likeCount: 180,
//       tags: ["引っ越し", "生活"]
//     },
//     {
//       id: "work-008",
//       title: "海外旅行準備リスト",
//       thumbnailUrl: "/images/mock-work-8.png",
//       createdAt: "2026-04-03",
//       isPublished: true,
//       likeCount: 220,
//       tags: ["海外", "旅行"]
//     },
//     {
//       id: "work-009",
//       title: "面接準備リスト",
//       thumbnailUrl: "/images/mock-work-9.png",
//       createdAt: "2026-04-01",
//       isPublished: true,
//       likeCount: 130,
//       tags: ["就活", "面接"]
//     },
//     {
//       id: "work-010",
//       title: "文化祭準備リスト",
//       thumbnailUrl: "/images/mock-work-10.png",
//       createdAt: "2026-03-29",
//       isPublished: true,
//       likeCount: 75,
//       tags: ["学校", "イベント"]
//     },
//     {
//       id: "work-011",
//       title: "撮影機材チェックリスト",
//       thumbnailUrl: "/images/mock-work-11.png",
//       createdAt: "2026-03-27",
//       isPublished: true,
//       likeCount: 160,
//       tags: ["撮影", "機材"]
//     },
//     {
//       id: "work-012",
//       title: "配信用セットアップ",
//       thumbnailUrl: "/images/mock-work-12.png",
//       createdAt: "2026-03-25",
//       isPublished: true,
//       likeCount: 210,
//       tags: ["配信", "PC"]
//     },
//     {
//       id: "work-013",
//       title: "ジム持ち物リスト",
//       thumbnailUrl: "/images/mock-work-13.png",
//       createdAt: "2026-03-23",
//       isPublished: true,
//       likeCount: 145,
//       tags: ["ジム", "運動"]
//     },
//     {
//       id: "work-014",
//       title: "受験勉強セット",
//       thumbnailUrl: "/images/mock-work-14.png",
//       createdAt: "2026-03-20",
//       isPublished: false,
//       likeCount: 65,
//       tags: ["受験", "勉強"]
//     },
//     {
//       id: "work-015",
//       title: "ピクニック持ち物リスト",
//       thumbnailUrl: "/images/mock-work-15.png",
//       createdAt: "2026-03-18",
//       isPublished: true,
//       likeCount: 115,
//       tags: ["ピクニック", "休日"]
//     },
//     {
//       id: "work-016",
//       title: "ゲーム大会準備リスト",
//       thumbnailUrl: "/images/mock-work-16.png",
//       createdAt: "2026-03-16",
//       isPublished: true,
//       likeCount: 170,
//       tags: ["ゲーム", "イベント"]
//     },
//     {
//       id: "work-017",
//       title: "テレワーク環境リスト",
//       thumbnailUrl: "/images/mock-work-17.png",
//       createdAt: "2026-03-14",
//       isPublished: true,
//       likeCount: 240,
//       tags: ["仕事", "PC"]
//     },
//     {
//       id: "work-018",
//       title: "動画編集セット",
//       thumbnailUrl: "/images/mock-work-18.png",
//       createdAt: "2026-03-12",
//       isPublished: true,
//       likeCount: 190,
//       tags: ["動画編集", "クリエイティブ"]
//     },
//     {
//       id: "work-019",
//       title: "料理初心者セット",
//       thumbnailUrl: "/images/mock-work-19.png",
//       createdAt: "2026-03-10",
//       isPublished: true,
//       likeCount: 88,
//       tags: ["料理", "生活"]
//     },
//     {
//       id: "work-020",
//       title: "海水浴持ち物リスト",
//       thumbnailUrl: "/images/mock-work-20.png",
//       createdAt: "2026-03-08",
//       isPublished: true,
//       likeCount: 155,
//       tags: ["海", "夏"]
//     },
//     {
//       id: "work-021",
//       title: "スキー旅行準備",
//       thumbnailUrl: "/images/mock-work-21.png",
//       createdAt: "2026-03-05",
//       isPublished: true,
//       likeCount: 110,
//       tags: ["冬", "旅行"]
//     },
//     {
//       id: "work-022",
//       title: "カフェ作業セット",
//       thumbnailUrl: "/images/mock-work-22.png",
//       createdAt: "2026-03-03",
//       isPublished: true,
//       likeCount: 205,
//       tags: ["カフェ", "仕事"]
//     },
//     {
//       id: "work-023",
//       title: "音楽ライブ持ち物",
//       thumbnailUrl: "/images/mock-work-23.png",
//       createdAt: "2026-03-01",
//       isPublished: true,
//       likeCount: 178,
//       tags: ["ライブ", "音楽"]
//     },
//     {
//       id: "work-024",
//       title: "読書会準備リスト",
//       thumbnailUrl: "/images/mock-work-24.png",
//       createdAt: "2026-02-27",
//       isPublished: true,
//       likeCount: 54,
//       tags: ["読書", "趣味"]
//     },
//     {
//       id: "work-025",
//       title: "DIY工具セット",
//       thumbnailUrl: "/images/mock-work-25.png",
//       createdAt: "2026-02-24",
//       isPublished: true,
//       likeCount: 142,
//       tags: ["DIY", "工具"]
//     },
//     {
//       id: "work-026",
//       title: "在宅学習セット",
//       thumbnailUrl: "/images/mock-work-26.png",
//       createdAt: "2026-02-21",
//       isPublished: false,
//       likeCount: 91,
//       tags: ["勉強", "在宅"]
//     },
//     {
//       id: "work-027",
//       title: "花見持ち物リスト",
//       thumbnailUrl: "/images/mock-work-27.png",
//       createdAt: "2026-02-18",
//       isPublished: true,
//       likeCount: 166,
//       tags: ["春", "イベント"]
//     },
//     {
//       id: "work-028",
//       title: "フリマ出店準備",
//       thumbnailUrl: "/images/mock-work-28.png",
//       createdAt: "2026-02-15",
//       isPublished: true,
//       likeCount: 104,
//       tags: ["販売", "イベント"]
//     },
//     {
//       id: "work-029",
//       title: "サイクリング装備リスト",
//       thumbnailUrl: "/images/mock-work-29.png",
//       createdAt: "2026-02-12",
//       isPublished: true,
//       likeCount: 134,
//       tags: ["自転車", "スポーツ"]
//     },
//     {
//       id: "work-030",
//       title: "一人暮らしスターター",
//       thumbnailUrl: "/images/mock-work-30.png",
//       createdAt: "2026-02-10",
//       isPublished: true,
//       likeCount: 260,
//       tags: ["生活", "新生活"]
//     },
//   ].map((work) => ({
//     ...work,
//     thumbnailUrl: testThumbnailUrl,
//   }))
// }


// export const getMockUserWorks = async (): Promise<Work[]> => {
//   await delay(800)

//   return [
//     {
//       id: "work-001",
//       title: "旅行用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-1.png",
//       createdAt: "2026-05-01",
//       isPublished: true,
//       likeCount: 120,
//       tags: ["旅行", "パッキング"],
//     },
//     {
//       id: "work-002",
//       title: "学校用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-2.png",
//       createdAt: "2026-04-28",
//       isPublished: true,
//       likeCount: 85,
//       tags: ["学校", "日常"],
//     },
//     {
//       id: "work-003",
//       title: "部活用持ち物リスト",
//       thumbnailUrl: "/images/mock-work-3.png",
//       createdAt: "2026-04-20",
//       isPublished: false,
//       likeCount: 40,
//       tags: ["部活", "スポーツ"],
//     },

//   ].map((work) => ({
//     ...work,
//     thumbnailUrl: testThumbnailUrl,
//   }))
// }


// const delay = (ms: number): Promise<void> => {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }