interface itemCard {
  id: string;
  name: string;
  iconId: string;
  category: CategoryId[];
  bookmark: boolean;
  isStorage: boolean;
  createType: createdType
}


interface previewItem {
  originalId: string;
  id: string
  name: string;
  iconId: string;
  category: CategoryId[];
  isStorage: boolean;
  innerItems?: previewItem[];
  count: number;
}
type CategoryId =
  | 'all'
  | 'clothes'
  | 'gadget'
  | 'toiletry'
  | 'medicine'
  | 'document'
  | 'food'
  | 'storage'
  | 'bookmark'
  | 'create';

type Category = {
  id: CategoryId
  name: string,
  icon: string,
}


type Bookmarks = string[];
type CaseType = 'HardSuitcase' | 'SoftSuitcase';



interface innerItems {
  id: string,
  count: number;
  originalId: string;
}
interface saveDBpreviewData {
  id: string,
  innerItems?: innerItems[];
  count: number;
  originalId: string;
}


interface saveDBaddedItem {
  id: string,
  name: string,
  category: CategoryId[]
  isStorage: boolean
  iconId: string
  createType: createdType
}

interface addItemType {
  id: string;
  name: string;
  icon: string;
}


import { type createdType } from "../composables/useCreateWork"
interface UserLuggage_SaveDBData {
  itemListDatas: {
    addedItems: Record<string, saveDBaddedItem>
    bookmarks: Bookmarks

  },
  previewDatas: {
    mainLuggage: { pockets: { [key: string]: saveDBpreviewData[] } }
    caseType: CaseType
    addItemCounter: number
  }
};
interface iconInfomation { src: string, category: CategoryId, }



export type { iconInfomation, itemCard, UserLuggage_SaveDBData, addItemType, CategoryId, Category, saveDBaddedItem, previewItem, saveDBpreviewData, innerItems }