import type { CaseType } from "./itemType";
import type { CategoryId } from "./categoryType";
import type { Bookmarks } from "./itemType";
import type { CaseEdit } from "./casetype";
import type { pocketLogicalDeleteToken, caseLogicalDeleteToken } from "./tokens"
interface innerItems {
  itemId: string,
  count: number;
  id: string;
}


interface saveDBprevieItems {
  itemId: string,
  innerItems?: Record<string, innerItems>;
  count: number;
  id: string;
}

interface pocket {
  items?: saveDBprevieItems
  poketSvgEdit?: CaseEdit
}

interface saveDBpreviewData {
  pockets?: Record<string, pocket>
  id: string
  addItemCounter?: number,
  caseType: CaseType
}


interface saveDBaddedItem {
  id: string,
  name: string,
  category: CategoryId[]
  isStorage: boolean
  iconId: string
  createType: createdType
}



import { type createdType } from "@/features/create/type/tokens"
interface UserLuggage_SaveDBData {
  workId: string
  workName: string
  itemListDatas: {
    addedItems: Record<string, saveDBaddedItem>
    bookmarks: Bookmarks
    addItemCounter: number,
  },
  previewDatas: {
    mainLuggage: Record<string, saveDBpreviewData>
    caseLogicalDelete?: caseLogicalDeleteToken[]
    pocketLogicalDelete: pocketLogicalDeleteToken[]
  }
};
interface iconInfomation { src: string, category: CategoryId, }




export type { pocket, saveDBprevieItems, iconInfomation, UserLuggage_SaveDBData, CategoryId, saveDBaddedItem, saveDBpreviewData, innerItems }