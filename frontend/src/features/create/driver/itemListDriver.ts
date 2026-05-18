import type { itemCard } from "@/features/create/type/itemType";
const filteredItems: itemCard[] = [
  {
    id: 'item_1',
    name: 'Tシャツ',
    iconId: 'shirt',
    category: 'clothes',
    count: 3,
    isStorage: false,
  },

  {
    id: 'item_2',
    name: '充電器',
    iconId: 'charger',
    category: 'gadget',
    count: 1,
    isStorage: false,
  },

  {
    id: 'item_3',
    name: '薬',
    iconId: 'medicine',
    category: 'medicine',
    count: 2,
    isStorage: false,
  },

  {
    id: 'item_4',
    name: 'ジップロック',
    iconId: 'ziplock',
    category: 'storage',
    count: 1,
    isStorage: true,

    innerItems: [
      {
        id: 'inner_1',
        name: 'USB-Cケーブル',
        iconId: 'charger',
        category: 'gadget',
        count: 2,
      },

      {
        id: 'inner_2',
        name: '常備薬',
        iconId: 'medicine',
        category: 'medicine',
        count: 1,
      },
    ],
  },

  {
    id: 'item_5',
    name: 'ポーチ',
    iconId: 'pouch',
    category: 'storage',
    count: 1,
    isStorage: true,

    innerItems: [],
  },

  {
    id: 'item_6',
    name: 'ノートPC',
    iconId: 'laptop',
    category: 'gadget',
    count: 1,
    isStorage: false,
  },

  {
    id: 'item_7',
    name: '歯ブラシ',
    iconId: 'toothbrush',
    category: 'toiletry',
    count: 1,
    isStorage: false,
  },
]

const categories = [
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
]
export { filteredItems, categories }