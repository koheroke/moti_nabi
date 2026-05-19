import type { saveDBaddedItems } from "@/features/create/type/itemType";

const filteredItems: Record<string, saveDBaddedItems> = {
  item_1: {
    id: 'item_1',
    name: 'Tシャツ',
    iconId: 'shirt',
    category: 'clothes',
    isStorage: false,
  },

  item_2: {
    id: 'item_2',
    name: '充電器',
    iconId: 'charger',
    category: 'gadget',
    isStorage: false,
  },

  item_3: {
    id: 'item_3',
    name: '薬',
    iconId: 'medicine',
    category: 'medicine',
    isStorage: false,
  },

  item_4: {
    id: 'item_4',
    name: 'ジップロック',
    iconId: 'ziplock',
    category: 'storage',
    isStorage: true,
  },

  item_5: {
    id: 'item_5',
    name: 'ポーチ',
    iconId: 'pouch',
    category: 'storage',
    isStorage: true,
  },

  item_6: {
    id: 'item_6',
    name: 'ノートPC',
    iconId: 'laptop',
    category: 'gadget',
    isStorage: false,
  },

  item_7: {
    id: 'item_7',
    name: '歯ブラシ',
    iconId: 'toothbrush',
    category: 'toiletry',
    isStorage: false,
  },

  item_8: {
    id: 'item_8',
    name: 'パーカー',
    iconId: 'hoodie',
    category: 'clothes',
    isStorage: false,
  },

  item_9: {
    id: 'item_9',
    name: 'イヤホン',
    iconId: 'earphone',
    category: 'gadget',
    isStorage: false,
  },

  item_10: {
    id: 'item_10',
    name: '財布',
    iconId: 'wallet',
    category: 'clothes',
    isStorage: false,
  },

  item_11: {
    id: 'item_11',
    name: 'モバイルバッテリー',
    iconId: 'battery',
    category: 'gadget',
    isStorage: false,
  },

  item_12: {
    id: 'item_12',
    name: '洗面ポーチ',
    iconId: 'bag',
    category: 'storage',
    isStorage: true,
  },

  item_13: {
    id: 'item_13',
    name: '折りたたみ傘',
    iconId: 'umbrella',
    category: 'clothes',
    isStorage: false,
  },

  item_14: {
    id: 'item_14',
    name: 'スニーカー',
    iconId: 'shoes',
    category: 'clothes',
    isStorage: false,
  },

  item_15: {
    id: 'item_15',
    name: '書類ケース',
    iconId: 'file',
    category: 'storage',
    isStorage: true,
  },

  item_16: {
    id: 'item_16',
    name: '水筒',
    iconId: 'bottle',
    category: 'clothes',
    isStorage: false,
  },

  item_17: {
    id: 'item_17',
    name: 'カメラ',
    iconId: 'camera',
    category: 'gadget',
    isStorage: false,
  },

  item_18: {
    id: 'item_18',
    name: 'カメラバッグ',
    iconId: 'cameraBag',
    category: 'storage',
    isStorage: true,
  },
};

import { type Category } from "@/features/create/type/itemType";
const categories: Category[] = [
  {
    id: 'all',
    name: 'すべて',
    icon: '📦',
  },

  {
    id: 'clothes',
    name: '衣類',
    icon: '👕',
  },

  {
    id: 'gadget',
    name: 'ガジェット',
    icon: '🔌',
  },

  {
    id: 'toiletry',
    name: '洗面用品',
    icon: '🧴',
  },

  {
    id: 'medicine',
    name: '薬・健康',
    icon: '💊',
  },

  {
    id: 'document',
    name: '書類',
    icon: '📄',
  },

  {
    id: 'food',
    name: '食品',
    icon: '🍪',
  },

  {
    id: 'storage',
    name: '小収納',
    icon: '📦',
  },
  {
    id: 'bookmark',
    name: 'よく使う',
    icon: '📦',
  },
  {
    id: 'create',
    name: '自分の持ち物',
    icon: '📦',
  },
]


import { type UserLuggage_SaveDBData } from "../type/itemType"

const userLuggage_SaveDBData: UserLuggage_SaveDBData = {
  itemListDatas: {
    addedItems: [
      {
        id: "item_1",
        name: "Tシャッツ",
        category: 'gadget',
        iconId: 'charger',
        isStorage: false,
      },
    ],
    bookmarks: [
      'item_1', 'item_2', 'item_3', 'item_4',
    ],
  },
  previewDatas: {
    mainLuggage: {
      pokets: {
        poket_1: [

          {
            id: 'item_1',
            count: 3,
          },
          {
            id: 'item_4',
            count: 1,
            innerItems: [
              {
                id: 'inner_1',
                count: 2,
              },
              {
                id: 'inner_2',
                count: 1,
              },
            ],
          },
        ]
      }
    },
    caseType: 'HardSuitcase'
  }
};


export { filteredItems, categories, userLuggage_SaveDBData }