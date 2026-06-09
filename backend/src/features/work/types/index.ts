
import { RequireAtLeastOne } from "@/types/atLeastOne"
import { SiteMember } from "@/generated/prisma/client"
export type editWorkPackageApi = RequireAtLeastOne<{
  name?: String,
  thumbnailUrl?: String,
  data?: String,
  public?: Boolean,
  likes?: number,
  tags?: String[],
  copies?: number,
  members?: SiteMember[]
}>




export interface createApi {
  name: string
  userId: string
}
