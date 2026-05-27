


import { type UserLuggage_SaveDBData } from "../type/apiType"
const userLuggage_SaveDBData: UserLuggage_SaveDBData = {
  itemListDatas: {
    addedItems: {
      item_1: {
        id: "item_1",
        name: "Tシャツ",
        category: ["create", "food"],
        iconId: "charger",
        isStorage: false,
        createType: "userCreated",
      },
    },
    addItemCounter: 1,
    bookmarks: ["item_1", "item_2", "item_3", "item_4"],
  },

  previewDatas: {
    caseType: "HardSuitcase",
    addItemCounter: 1,

    mainLuggage: {
      suitcase_0: {
        id: "suitcase_0",
        addItemCounter: 8,
        caseType: "HardSuitcase",
        // poketSvgEdit: [{ id: "main", width: 200, height: 300, }],
        // pocketAdd: [{
        //   id: "side", width: 200, height: 300, name: "サイド", x: 0,
        //   y: 0,
        //   items: []
        //   originalId: "mesh",
        // }],
        // poketDelete: ["mesh"],
        poketSvgEdit: [],
        pocketAdd: [],
        poketDelete: [],
        pockets: {
          mesh: {
            id: "mesh",
            originalId: "mesh",
            count: 0,
            innerItems: [
              {
                originalId: "item_1",
                id: "item_1",
                count: 3,
              },
              {
                id: "inner_1",
                count: 1,
                originalId: "item_2",
                innerItems: [
                  {
                    id: "item_6",
                    originalId: "item_3",
                    count: 2,
                  },
                  {
                    originalId: "item_4",
                    id: "item_6",
                    count: 1,
                  },
                ],
              },
            ],
          },

          main: {
            id: "main",
            originalId: "main",
            count: 0,
            innerItems: [
              {
                originalId: "item_5",
                id: "inner_1",
                count: 3,
              },
            ],
          },
        },
      },
    },
  },
};
export default userLuggage_SaveDBData;