interface itemCard {
  id: string;
  name: string;
  iconId: string;
  category: string;
  bookmark: boolean;
  isStorage: boolean;
}

interface previewItem {
  id: string;
  name: string;
  iconId: string;
  category: string;
  isStorage: boolean;
  innerItems?: unknown[];
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
}
interface saveDBpreviewData {
  id: string,
  innerItems?: innerItems[];
  count: number;
}


interface saveDBaddedItem {
  id: string,
  name: string,
  category: CategoryId
  isStorage: boolean
  iconId: string
}

interface addItemType {
  id: string;
  name: string;
  icon: string;
}

interface UserLuggage_SaveDBData {
  itemListDatas: {
    addedItems: Record<string, saveDBaddedItem>
    bookmarks: Bookmarks
  },
  previewDatas: {
    mainLuggage: { pokets: { [key: string]: saveDBpreviewData[] } }
    caseType: CaseType
  }
};

export type { itemCard, UserLuggage_SaveDBData, addItemType, CategoryId, Category, saveDBaddedItem, previewItem, saveDBpreviewData, innerItems }