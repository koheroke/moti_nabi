import type { CategoryId } from "./categoryType";
import type { createdType } from "@/features/create/type/tokens"

interface itemCard {
  id: string;
  name: string;
  iconId: string;
  category: CategoryId[];
  bookmark: boolean;
  isStorage: boolean;
  createType: createdType
}


type Bookmarks = string[];
export type CaseType = 'HardSuitcase' | 'SoftSuitcase';
export type { Bookmarks, itemCard }