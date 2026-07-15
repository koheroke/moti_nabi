import type { CaseType } from "./itemType";
import type { CategoryId } from "./categoryType";
import type { Bookmarks } from "./itemType";
import type { pocketEdit, part } from "./casetype";
import type { pocketLogicalDeleteToken, caseLogicalDeleteToken } from "./tokens"
interface innerItems {
  itemId: string,
  count: number;
  id: string;
}


interface saveDBprevieItem {
  itemId: string,
  innerItems?: Record<string, innerItems>;
  count: number;
  id: string;
}

interface BasePocket {
  items?: Record<string, saveDBprevieItem>;
  name: string;
  id: string;
}

interface InitialPocket extends BasePocket {
  initialPocketId: string;
  poketSvgEdit?: pocketEdit;
}

interface CustomPocket extends BasePocket {
  initialPocketId?: undefined;
  poketSvgEdit: pocketEdit;
}

type pocket = InitialPocket | CustomPocket;

interface BeforeParsingCaseData {
  pockets: Record<string, pocket>
  id: string,
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
  },
  previewDatas: {
    mainLuggage: Record<string, BeforeParsingCaseData>
    caseLogicalDelete?: caseLogicalDeleteToken[]
    pocketLogicalDelete: pocketLogicalDeleteToken[]
  }
};




interface staticCase {
  pockets: Record<string, pocket>,
  case: part;
  handle: part;
  name: string;
  id: string;
}

interface iconInfomation { src: string, category: CategoryId, }




export type { pocketEdit, staticCase, pocket, saveDBprevieItem, iconInfomation, UserLuggage_SaveDBData, CategoryId, saveDBaddedItem, BeforeParsingCaseData, innerItems }