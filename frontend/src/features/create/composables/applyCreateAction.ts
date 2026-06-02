
import type { provisionalResizePocket, provisionalRemovePocket, confirmedResizePocketToken, deletePreviewCaseToken, addPreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "./useCreateWork";
import { useCreateStore } from "../store/createStore";
import type { server_alterationTokenType } from "../api/createSocketApi"
import { useSaveQueue } from "../services/saveQueue";
import type { Case } from "@/features/create/type/casetype";
import type { UserLuggage_SaveDBData, saveDBpreviewData, saveDBprevieItems } from "@/features/create/type/apiType";
import type { previewItem } from "@/features/create/type/casetype";
import { useSocketApi } from "../api/createSocketApi";

const socketApi = useSocketApi()




export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
  | "previewCases_addCase"
  | "previewCases_deleteCase"
  | "confirmed_resizePocket"
  | "confirmed_removePocket"

type allToken = provisionalRemovePocket | provisionalResizePocket | confirmedResizePocketToken | deletePreviewCaseToken | addPreviewCaseToken | addPreviewItemToken | addItemCountToken | addBookmarkToken | addListItemToken | deletePreviewItemToken

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

    const getItemDatra = (
      pocket: Map<string, saveDBprevieItems>
    ): Map<string, previewItem> => {
      return new Map(
        Array.from(pocket.entries()).map(([originalId, item]) => {
          const { bookmark, ...itemData } = vueItemList[item.id];

          const data: previewItem = vueItemList[item.id].isStorage
            ? {
              ...itemData,
              innerItems: item.innerItems
                ? getItemDatra(item.innerItems)
                : new Map(),
              count: item.count,
              originalId: item.originalId,
            }
            : {
              ...itemData,
              count: item.count,
              originalId: item.originalId,
            };

          return [originalId, data] as const;
        })
      );
    };



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
                luggage.pockets[pocket.id]?.innerItems ?? new Map()
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
            luggage.pockets[pocket.id]?.innerItems ?? new Map()
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
    if (!createStore || !saveQueue) return
    let dbpushToken: {
      type: server_alterationTokenType,
      path: string[],
      value: any
    } = { type: "arrayPush", path: [], value: null }

    switch (token.alterationType) {
      case 'previewItems_additem': {
        const res = createStore.pushpreviewItem(token.token as addPreviewItemToken)
        const this_token = token.token as addPreviewItemToken
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        dbpushToken.value = res
        dbpushToken.type = "mapPush"
        break
      }
      case 'previewItems_addcount': {
        const res = createStore.addCount(token.token as addItemCountToken)
        const this_token = token.token as addItemCountToken
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems", this_token.originalId]
        dbpushToken.value = res
        dbpushToken.type = "set"
        break
      }
      case 'itemlistItems_bookmark': {
        const res = createStore.addBookmark(token.token as addBookmarkToken)
        dbpushToken.path = ["itemListDatas", "bookmarks"]
        dbpushToken.value = res
        dbpushToken.type = "arrayPush"
        break
      }
      case 'previewItems_delete': {
        const res = createStore.deletepreviewItem(token.token as deletePreviewItemToken)
        const this_token = token.token as deletePreviewItemToken
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        dbpushToken.value = res
        dbpushToken.type = "mapRemove"
        break
      }
      case 'itemlistItems_additem': {
        const res = createStore.addListItem(token.token as addListItemToken)
        dbpushToken.path = ["itemListDatas", "addedItems"]
        dbpushToken.value = res
        dbpushToken.type = "objectPush"
        break

      }
      case 'previewCases_addCase': {
        const res = createStore.addPreviewCase(token.token as addPreviewCaseToken)
        dbpushToken.path = ["previewDatas", "mainLuggage"]
        dbpushToken.value = res
        dbpushToken.type = "objectPush"
        break
      }

      case 'confirmed_resizePocket': {
        const res = createStore.reMovePocket(token.token as provisionalRemovePocket)
        const this_token = token.token as provisionalRemovePocket
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        dbpushToken.value = res
        dbpushToken.type = "mapPush"
        break
      }
      case 'confirmed_resizePocket': {
        const res = createStore.reSizePocket(token.token as provisionalResizePocket)
        const this_token = token.token as provisionalResizePocket
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        dbpushToken.value = res
        dbpushToken.type = "mapPush"
        break
      }

      case 'previewCases_deleteCase': {
        const res = createStore.deleteCase(token.token as deletePreviewCaseToken)
        break
      }

    }
    saveQueue.push({ user: token.user, alterationType: token.alterationType, token: dbpushToken })
  }
  return { hydrateCreateState, alterationData, initCreateStaticData }
}
export { useApplyCreateAction }
