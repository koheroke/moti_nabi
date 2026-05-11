export interface UserProfile{
  id: string
  name: string
  iconUrl: string
  bio: string
  snsLinks: {type:string, url:string, icon:string}[]
  createdAt: string
  postCount: number
}