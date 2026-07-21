
import { RequireAtLeastOne } from "@/types/atLeastOne"
import { SiteMember } from "@/generated/prisma/client"
export type editWorkPackageApi = RequireAtLeastOne<{
  name?: String,
  thumbnailJson?: String,
  data?: String,
  public?: Boolean,
  likes?: number,
  tags?: String[],
  copies?: number,
  members?: SiteMember[]
}>

export type publichTokenType = RequireAtLeastOne<editAboutType> & {
  id: string;
}


export interface editAboutType {
  name: string;
  bio: string;
  tags: string[];
  thumbnailJson: string;
  public: boolean;
}


export interface createApi {
  name: string
  userId: string
}
