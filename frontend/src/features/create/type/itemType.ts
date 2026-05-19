interface itemCard {
  id: string;
  name: string;
  iconId: string;
  category: string;
  bookmark: boolean;
  isStorage: boolean;
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


interface saveDBpreviewData {
  id: string,
  innerItems?: unknown[];
  count: number;
}

interface saveDBaddedItems {
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
    addedItems: saveDBaddedItems[]
    bookmarks: Bookmarks
  },
  previewDatas: {
    mainLuggage: { pokets: { [key: string]: saveDBpreviewData[] } }
    caseType: CaseType
  }
};

export type { itemCard, UserLuggage_SaveDBData, addItemType, CategoryId, Category, saveDBaddedItems }