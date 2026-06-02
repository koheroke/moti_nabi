
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
export type AlterationTokenType = "set" | "delete" | "arrayPush" | "arrayRemove" | "addMap" | "mapPush" | "mapRemove" | "objectPush" | "objectRemove";
export type AlterationToken = {
  id: string;
  workId: string;
  userId: string;
  type: AlterationTokenType;
  path: string[];
  beforeValue?: unknown;
  value: any
  createdAt: number;
};

export interface editWorkToken {
  workId: string,
  tokens: AlterationToken[]
}

export interface createApi {
  name: string
  userId: string
}
