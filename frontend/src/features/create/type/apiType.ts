import type { CaseType } from "./itemType";
import type { CategoryId } from "./categoryType";
import type { Bookmarks } from "./itemType";
import type { CaseEdit } from "./casetype";
import type { Pocket } from "./casetype";
interface innerItems {
  id: string,
  count: number;
  originalId: string;
}


interface saveDBprevieItems {
  id: string,
  innerItems?: Map<string, innerItems>;
  count: number;
  originalId: string;
}
interface saveDBpreviewData {
  pockets: Record<string, saveDBprevieItems>
  id: string
  addItemCounter: number,
  caseType: CaseType
  poketSvgEdit: CaseEdit[]
  pocketAdd: Pocket[]
  poketDelete: string[]
}


interface saveDBaddedItem {
  id: string,
  name: string,
  category: CategoryId[]
  isStorage: boolean
  iconId: string
  createType: createdType
}



import { type createdType } from "../composables/useCreateWork"
interface UserLuggage_SaveDBData {
  itemListDatas: {
    addedItems: Record<string, saveDBaddedItem>
    bookmarks: Bookmarks
    addItemCounter: number,
  },
  previewDatas: {
    mainLuggage: Record<string, saveDBpreviewData>
    caseType: CaseType
    addItemCounter: number
  }
};
interface iconInfomation { src: string, category: CategoryId, }



export type { saveDBprevieItems, iconInfomation, UserLuggage_SaveDBData, CategoryId, saveDBaddedItem, saveDBpreviewData, innerItems }