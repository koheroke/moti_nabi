
import { RequireAtLeastOne } from "@/types/atLeastOne"
import { SiteMember } from "@/generated/prisma/client"
export type editWorkPackageApi = RequireAtLeastOne<{
  name?: string,
  thumbnailJson?: string,
  data?: string,
  public?: boolean,
  likes?: number,
  tags?: string[],
  copies?: number,
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
