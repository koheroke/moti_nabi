
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
export type AlterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove" | "objectPush" | "objectRemove";
export type AlterationToken = {
  id: string;
  type: AlterationTokenType;
  beforeValue?: unknown;
  value: any
  createdAt: number;
  path: string[];
};



export interface createApi {
  name: string
  userId: string
}
