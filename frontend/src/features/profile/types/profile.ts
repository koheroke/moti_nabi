

export interface editData {
  name: string
  iconUrl: string
  bio: string
  snsAccounts: { type: string, link: string }[]
  followUserIds: string[]
  bookmarkWorkIds: string[]
}

export type UserProfile = editData & {
  userId: string
}

