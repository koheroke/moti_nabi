import type { WorkDetail } from "../workDetailType";

// export const getMockWorkDetail = async (): Promise<Map<string,WorkDetail>> => {
//   await delay(800)


//   const getWorkDetailMap = new Map<string,WorkDetail>([
//     ["a", {
//       title:"旅行用持ち物リスト",
//       tags: ["旅行", "パッキング", "チェックリスト"],
//       likes:3,
//       commits:4,
//       about:"旅行前に必要な持ち物を整理するためのリストです",
//     }],
//   ]);
//   return getWorkDetailMap
// }
//バックエンドでmapを検索してオブジェクトを取得

export const getMockWorkDetail = async (): Promise<WorkDetail> => {
  await delay(800)



  return {
    title: "旅行用持ち物リスト",
    tags: ["旅行", "パッキング", "チェックリスト"],
    likes: 3,
    commits: 4,
    about: "旅行前に必要な持ち物を整理するためのリストです",
  }
}



const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}