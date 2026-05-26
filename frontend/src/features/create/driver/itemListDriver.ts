


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


export { userLuggage_SaveDBData }



