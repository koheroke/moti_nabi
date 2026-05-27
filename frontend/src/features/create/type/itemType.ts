import type { CategoryId } from "./categoryType";
import type { createdType } from "../composables/useCreateWork";

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