
import type { provisionalResizePocket, confirmedRemovePocketToken, provisionalRemovePocket, confirmedResizePocketToken, deletePreviewCaseToken, addPreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "@/features/create/type/tokens";
import { useCreateStore } from "../store/createStore";
import type { server_alterationTokenType } from "../api/createSocketApi"
import type { Case } from "@/features/create/type/casetype";
import type { UserLuggage_SaveDBData, saveDBpreviewData, saveDBprevieItems } from "@/features/create/type/apiType";
import type { previewItem } from "@/features/create/type/casetype";
import { useSocketApi } from "@/features/create/api/createSocketApi"
import { useUserAuthStore } from "@/store/user/userAuthStore";
const userAuthstore = useUserAuthStore()
const api = useSocketApi()
export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
  | "previewCases_addCase"
  | "previewCases_deleteCase"
  | "confirmed_resizePocket"
  | "confirmed_removePocket"


type allToken = confirmedRemovePocketToken | provisionalRemovePocket | provisionalResizePocket | confirmedResizePocketToken | deletePreviewCaseToken | addPreviewCaseToken | addPreviewItemToken | addItemCountToken | addBookmarkToken | addListItemToken | deletePreviewItemToken

export interface alterationToken {
  token: allToken
  alterationType: alterationType
  user: string
}

const useApplyCreateAction = () => {
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
    console.log("hydrateCreateState_data", data)

    const staticItemData = createStore.staticItemData
    const caseData = createStore.staticCases
    const { previewDatas, itemListDatas } = data
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
      pocket: Record<string, saveDBprevieItems>
    ): Record<string, previewItem> => {
      return Object.fromEntries(
        Object.values(pocket).map((item) => {
          const { bookmark, ...itemData } = vueItemList[item.itemId];
          const data: previewItem = vueItemList[item.itemId].isStorage
            ? {
              ...itemData,
              innerItems: item.innerItems
                ? getItemDatra(item.innerItems)
                : {},
              count: item.count,
              id: item.id,
              itemId: item.itemId,
            }
            : {
              ...itemData,
              count: item.count,
              id: item.id,
              itemId: item.itemId,
            };

          return [item.id, data];
        })
      );
    };


    const pocketParse = (luggage: saveDBpreviewData, staticCase: Case) => {

      const buildPockets = Object.fromEntries(
        Object.entries(staticCase.pockets).map(([id, pocket]) => {
          let edit;
          const poketSvgEdit = luggage.poketSvgEdit
          if (poketSvgEdit != undefined) {
            edit = Object.values(poketSvgEdit)?.find(
              (e) => e.id === pocket.id
            )
          }
          const pocketSvgData = {
            size: {
              width: edit?.width ?? pocket.size.width,
              height: edit?.height ?? pocket.size.height,
            },
            pos: {
              x: edit?.x ?? pocket.pos.x,
              y: edit?.y ?? pocket.pos.y,
            },
            id: pocket.id,
            name: pocket.name,
          }
          let items;
          if (luggage.pockets != undefined) {
            items = getItemDatra(
              luggage.pockets[pocket.id]?.innerItems ?? {}
            )
          } else {
            items = {}
          }
          return [
            pocket.id,
            {
              ...pocket,
              ...pocketSvgData,
              items: items
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

        let items;
        if (luggage.pockets != undefined) {
          items = getItemDatra(
            luggage.pockets[pocket.id]?.innerItems ?? {}
          )
        } else {
          items = {}
        }
        basePockets[pocket.id] = {
          ...pocket,
          items: items
        }
      })
      return basePockets
    }

    console.log("previewDatas.mainLuggage", previewDatas.mainLuggage)
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

  const alterationData = (token: alterationToken, socketResponse?: boolean) => {
    if (!createStore) return
    let dbpushToken: {
      type: server_alterationTokenType,
      path: string[],
      value: any
    } = { type: "arrayPush", path: [], value: null }
    if (token.user == userAuthstore.userId && socketResponse == true) return;
    switch (token.alterationType) {
      case 'previewItems_additem': { //完了

        interface previewItems_additemRes {
          item: previewItem | undefined,
          parent?: string
        }
        const res: previewItems_additemRes | undefined = createStore.pushpreviewItem(token.token as addPreviewItemToken)
        const this_token = token.token as addPreviewItemToken
        if (res == undefined || res.item == undefined) { return }
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
        }
        dbpushToken.value = res.item
        dbpushToken.type = "objectPush"
        break
      }



      case 'previewItems_addcount': { //完了

        interface previewItems_addcountRes {
          data: number,
          parent?: string
        }
        const res: previewItems_addcountRes | undefined = createStore.addCount(token.token as addItemCountToken)
        if (res == undefined || res.data == undefined) { return }
        const this_token = token.token as addItemCountToken
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems", this_token.id]
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
        }
        dbpushToken.path.push("count")
        dbpushToken.value = res.data
        dbpushToken.type = "set"

        break
      }
      case 'itemlistItems_bookmark': { //完了
        const res = createStore.addBookmark(token.token as addBookmarkToken)
        dbpushToken.path = ["itemListDatas", "bookmarks"]
        dbpushToken.value = res
        dbpushToken.type = "arrayPush"
        break
      }
      case 'previewItems_delete': { //完了

        interface previewItems_deleteRes {
          id: string,
          parent?: string
        }
        const res: previewItems_deleteRes | undefined = createStore.deletepreviewItem(token.token as deletePreviewItemToken)
        const this_token = token.token as deletePreviewItemToken
        if (res == undefined || res.id == undefined) { return }
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "innerItems"]
        dbpushToken.value = res
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
        }
        dbpushToken.value = { id: res.id }
        dbpushToken.type = "objectRemove"
        break
      }
      case 'itemlistItems_additem': { //完了
        const res = createStore.addListItem(token.token as addListItemToken)
        dbpushToken.path = ["itemListDatas", "addedItems"]
        dbpushToken.value = res
        dbpushToken.type = "objectPush"
        break

      }
      case 'previewCases_addCase': { //完了
        console.log("token.token", token.token)
        const res = createStore.addPreviewCase(token.token as addPreviewCaseToken) as { caseId: string, caseType: string }
        if (!res) return
        const data = { id: res.caseId, caseType: res.caseType }
        dbpushToken.path = ["previewDatas", "mainLuggage"]
        dbpushToken.value = data
        dbpushToken.type = "objectPush"
        break
      }

      case 'confirmed_removePocket': {
        createStore.reMovePocket(token.token as provisionalRemovePocket)
        const this_token = token.token as provisionalRemovePocket
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "poketSvgEdit", this_token.pocketId]
        dbpushToken.value = { ...this_token.removeData, id: this_token.pocketId }
        console.log("dbpushToken.value", dbpushToken.value)
        dbpushToken.type = "set"
        break
      }
      case 'confirmed_resizePocket': {
        const this_token = token.token as provisionalResizePocket
        createStore.reSizePocket(token.token as provisionalResizePocket)

        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "poketSvgEdit", this_token.pocketId]
        dbpushToken.value = { ...this_token.resizeData, id: this_token.pocketId }
        console.log(this_token.resizeData)
        dbpushToken.type = "set"
        break
      }
      case 'previewCases_deleteCase': {
        const res = createStore.deleteCase(token.token as deletePreviewCaseToken)
        break
      }
    }
    if (socketResponse == undefined || socketResponse == false) {
      const pendingToken = {
        sendDbToken: {
          type: dbpushToken.type,
          value: dbpushToken.value,
          createdAt: Date.now(),
          path: dbpushToken.path
        },
        alterationToken: token
      }
      api.sendAlteration(pendingToken)
    }
  }
  return { hydrateCreateState, alterationData, initCreateStaticData }
}
export { useApplyCreateAction }



