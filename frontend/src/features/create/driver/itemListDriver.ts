import type { saveDBaddedItem } from "@/features/create/type/itemType";

const filteredItems: Record<string, saveDBaddedItem> = {
  item_1: {
    id: 'item_1',
    name: 'Tシャツ',
    iconId: 'shirt',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_2: {
    id: 'item_2',
    name: '充電器',
    iconId: 'charger',
    category: ['gadget'],
    isStorage: false,
    createType: "default"
  },

  item_3: {
    id: 'item_3',
    name: '薬',
    iconId: 'medicine',
    category: ['medicine'],
    isStorage: false,
    createType: "default"
  },

  item_4: {
    id: 'item_4',
    name: 'ジップロック',
    iconId: 'ziplock',
    category: ['storage'],
    isStorage: true,
    createType: "default"
  },

  inner_1: {
    id: 'item_5',
    name: 'ポーチ',
    iconId: 'pouch',
    category: ['storage'],
    isStorage: true,
    createType: "default"
  },

  item_6: {
    id: 'item_6',
    name: 'ノートPC',
    iconId: 'laptop',
    category: ['gadget'],
    isStorage: false,
    createType: "default"
  },

  item_7: {
    id: 'item_7',
    name: '歯ブラシ',
    iconId: 'toothbrush',
    category: ['toiletry'],
    isStorage: false,
    createType: "default"
  },

  item_8: {
    id: 'item_8',
    name: 'パーカー',
    iconId: 'hoodie',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_9: {
    id: 'item_9',
    name: 'イヤホン',
    iconId: 'earphone',
    category: ['gadget'],
    isStorage: false,
    createType: "default"
  },

  item_10: {
    id: 'item_10',
    name: '財布',
    iconId: 'wallet',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_11: {
    id: 'item_11',
    name: 'モバイルバッテリー',
    iconId: 'battery',
    category: ['gadget'],
    isStorage: false,
    createType: "default"
  },

  inner_2: {
    id: 'inner_2',
    name: '洗面ポーチ',
    iconId: 'bag',
    category: ['storage'],
    isStorage: true,
    createType: "default"
  },

  item_13: {
    id: 'item_13',
    name: '折りたたみ傘',
    iconId: 'umbrella',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_14: {
    id: 'item_14',
    name: 'スニーカー',
    iconId: 'shoes',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_15: {
    id: 'item_15',
    name: '書類ケース',
    iconId: 'file',
    category: ['storage'],
    isStorage: true,
    createType: "default"
  },

  item_16: {
    id: 'item_16',
    name: '水筒',
    iconId: 'bottle',
    category: ['clothes'],
    isStorage: false,
    createType: "default"
  },

  item_17: {
    id: 'item_17',
    name: 'カメラ',
    iconId: 'camera',
    category: ['gadget'],
    isStorage: false,
    createType: "default"
  },

  item_18: {
    id: 'item_18',
    name: 'カメラバッグ',
    iconId: 'cameraBag',
    category: ['storage'],
    isStorage: true,
    createType: "default"
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
    name: 'ブックマーク中',
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
    addedItems: {
      item_19: {
        id: "item_1",
        name: "Tシャッツ",
        category: ['create', "food"],
        iconId: 'charger',
        isStorage: false,
        createType: "userCreated",
      },
    },
    bookmarks: [
      'item_1', 'item_2', 'item_3', 'item_4',
    ],
  },
  previewDatas: {
    addItemCounter: 8,
    mainLuggage: {
      pockets: {
        mesh: [
          {
            originalId: `item_1`,
            id: 'item_1',
            count: 3,
          },
          {
            id: 'inner_1',
            count: 1,
            originalId: "item_2",
            innerItems: [
              {
                id: 'item_6',
                originalId: "item_3",
                count: 2,
              },
              {
                originalId: "item_4",
                id: 'item_6',
                count: 1,
              },
            ],
          },
        ],
        main: [
          {
            originalId: `item_5`,
            id: 'inner_1',
            count: 3,
          },
          {
            id: 'item_6',
            count: 1,
            originalId: "item_6",
            innerItems: [
              {
                originalId: `item_7`,
                id: 'item_6',
                count: 2,
              },
              {
                originalId: `item_8`,
                id: 'item_6',
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


import type { iconInfomation } from "@/features/create/type/itemType";

export const iconMap: Record<string, iconInfomation> = {
  shirt: {
    src: "👕",
    category: "clothes",
  },

  charger: {
    src: "🔌",
    category: "gadget",
  },

  medicine: {
    src: "💊",
    category: "medicine",
  },

  ziplock: {
    src: "🟦",
    category: "storage",
  },

  pouch: {
    src: "👝",
    category: "storage",
  },
};




export const categoryColorMap: Record<string, string> = {
  clothes: "#3b82f6",
  gadget: "#8b5cf6",
  medicine: "#ef4444",
  toiletry: "#22c55e",
  storage: "#64748b",
};