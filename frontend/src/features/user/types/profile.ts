export interface UserProfile{
  id: string
  name: string
  iconUrl: string
  bio: string
  snsLinks: {type:string, url:string}[]
  createdAt: string
  postCount: number
}