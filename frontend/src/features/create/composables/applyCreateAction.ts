
import type { deletePreviewCaseToken, addPreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "./useCreateWork";
import { useCreateStore } from "../store/createStore";

import { useSaveQueue } from "../services/saveQueue";
import type { Case, Pocket } from "@/features/create/type/casetype";
import type { UserLuggage_SaveDBData, saveDBpreviewData, saveDBpreviePockets } from "@/features/create/type/apiType";
import type { previewItem } from "@/features/create/type/casetype";



export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
  | "previewCases_addCase"
  | "previewCases_deleteCase"

type allToken = deletePreviewCaseToken | addPreviewCaseToken | addPreviewItemToken | addItemCountToken | addBookmarkToken | addListItemToken | deletePreviewItemToken

export interface alterationToken {
  token: allToken
  alterationType: alterationType
  user: string
}

const useApplyCreateAction = () => {
  const saveQueue = useSaveQueue()
  const createStore = useCreateStore()
  const initCreateStaticData = async () => {
    if (createStore.isStaticLoaded) return
    const [itemListRes, categoryRes, casesRes] = await Promise.all([
      fetch("/json/create/itemList.json"),
      fetch("/json/create/category.json"),
      fetch("/json/create/case.json"),
    ])
    const staticItemData = await itemListRes.json()
    const categoryData = await categoryRes.json()
    const casesData = await casesRes.json()
    createStore.setStaticItemData(staticItemData)
    createStore.setIconMap(categoryData.iconMap)
    createStore.setCategoryColor(categoryData.color)
    createStore.setCategories(categoryData.categoryData)
    createStore.setStaticCases(casesData)
    createStore.setStaticLoaded(true)
  }



  const hydrateCreateState = (data: UserLuggage_SaveDBData) => {
    const staticItemData = createStore.staticItemData
    const caseData = createStore.staticCases
    const { previewDatas, itemListDatas } = data
    // const synthesis = Object.assign(itemListDatas.addedItems, staticItemData)
    const synthesis = {
      ...staticItemData,
      ...itemListDatas.addedItems,
    }
    const vueItemList = Object.fromEntries(
      Object.entries(synthesis).map(([key, item]) => [
        key,
        {
          ...item,
          bookmark: itemListDatas.bookmarks.includes(item.id),
        },
      ]),
    );

    const getItemDatra = (poket: saveDBpreviePockets[]): previewItem[] => {
      return poket.map((item: saveDBpreviePockets): previewItem => {
        const { bookmark, ...itemData } = vueItemList[item.id]
        if (vueItemList[item.id].isStorage) {
          return {
            ...itemData,
            innerItems: item.innerItems ? getItemDatra(item.innerItems) : [],
            count: item.count,
            originalId: item.originalId
          }
        } else {
          return {
            ...itemData,
            count: item.count,
            originalId: item.originalId
          }
        }
      })
    }

    const pocketParse = (luggage: saveDBpreviewData, staticCase: Case) => {

      const buildPockets = Object.fromEntries(
        Object.entries(staticCase.pockets).map(([id, pocket]) => {
          const edit = luggage.poketSvgEdit?.find(
            (e) => e.id === pocket.id
          )
          const pocketSvgData = {
            width: edit?.width ?? pocket.width,
            height: edit?.height ?? pocket.height,
            x: edit?.x ?? pocket.x,
            y: edit?.y ?? pocket.y,
            id: pocket.id,
            name: pocket.name,
          }
          return [
            pocket.id,
            {
              ...pocket,
              ...pocketSvgData,
              items: getItemDatra(
                luggage.pockets[pocket.id]?.innerItems ?? []
              ),
            },
          ]
        })
      );


      const basePockets = Object.fromEntries(
        Object.entries(buildPockets).filter(
          ([_, pocket]) =>
            !(luggage.poketDelete ?? []).includes(pocket.id)
        )
      );

      (luggage.pocketAdd ?? []).forEach((pocket) => {
        basePockets[pocket.id] = {
          ...pocket,
          items: getItemDatra(
            luggage.pockets[pocket.id]?.innerItems ?? []
          ),
        }
      })
      return basePockets
    }

    const vuepreviewData: Record<string, Case> = Object.fromEntries(
      Object.entries(previewDatas.mainLuggage).map(([luggageId, luggage]) => {
        const staticCase = caseData[luggage.caseType];
        return [
          luggageId,
          {
            id: luggageId,
            case: staticCase.case,
            handle: staticCase.handle,
            name: staticCase.name,
            pockets: pocketParse(luggage, staticCase),
          },
        ];
      }),
    );

    return { vuepreviewData: vuepreviewData, vueItemList: vueItemList, addItemCounter: previewDatas.addItemCounter }
  }

  const alterationData = (token: alterationToken) => {
    saveQueue.push(token)

    switch (token.alterationType) {
      case 'previewItems_additem':
        createStore.pushpreviewItem(token.token as addPreviewItemToken)
        break

      case 'previewItems_addcount':
        createStore.addCount(token.token as addItemCountToken)
        break

      case 'itemlistItems_bookmark':
        createStore.addBookmark(token.token as addBookmarkToken)
        break

      case 'previewItems_delete':
        createStore.deletepreviewItem(token.token as deletePreviewItemToken)
        break

      case 'itemlistItems_additem':
        createStore.addListItem(token.token as addListItemToken)
        break

      case 'previewCases_addCase':
        createStore.addPreviewCase(token.token as addPreviewCaseToken)
        break
      case 'previewCases_deleteCase':
        createStore.deleteCase(token.token as deletePreviewCaseToken)
        break

    }

  }
  return { hydrateCreateState, alterationData, initCreateStaticData }
}
export { useApplyCreateAction }
