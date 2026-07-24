
import type { pocketReNameToken, pastePocketToken, addPreviewTemplateToken, deletePreviewTemplateToken, addPreviewPocketToken, caseLogicalDeleteToken, pocketLogicalDeleteToken, changePriorityPocket, provisionalResizePocket, confirmedRemovePocketToken, provisionalRemovePocket, confirmedResizePocketToken, deletePreviewCaseToken, addPreviewCaseToken, addPreviewItemToken, addItemCountToken, addBookmarkToken, addListItemToken, deletePreviewItemToken } from "@/features/create/type/tokens";
import { useCreateStore } from "../store/createStore";
import type { server_alterationTokenType } from "../api/createSocketApi"
import type { Case, pocketSvgData } from "@/features/create/type/casetype";
import type { UserLuggage_SaveDBData, BeforeParsingCaseData, saveDBprevieItem } from "@/features/create/type/apiType";
import type { previewItem } from "@/features/create/type/casetype";
import { useSocketApi } from "@/features/create/api/createSocketApi"
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useCreateApi } from "../api/createApi";
import type { BeforeParsingThumbnail } from "../type/templateType";
import { useTemplateBarStore } from "../store/templateBar";
import { useThumbnail } from "./thumbnail";
import { type itemCard } from "../type/itemType";
const createApi = useCreateApi()
const userAuthstore = useUserAuthStore()
const api = useSocketApi()
const usethumbnail = useThumbnail()


export type alterationType = "previewItems_additem"
  | "previewItems_addcount"
  | "itemlistItems_bookmark"
  | "previewItems_delete"
  | "itemlistItems_additem"
  | "previewCases_addCase"
  | "previewCases_deleteCase"
  | "confirmed_resizePocket"
  | "confirmed_removePocket"
  | "changePriorityPocket"
  | "pocket_hardDelete"
  | "pocket_logicalDelete"
  | "case_logicalDelete"
  | "case_hardDelete"
  | "pocket_add"
  | "preview_addTemplate"
  | "pocket_paste"
  | "pocket_rename"
export type caseIds = "NormalSuitcase" | "HardSuitcase"
const caseIds = {
  "NormalSuitcase": "NormalSuitcase",
  "HardSuitcase": "HardSuitcase"
}

type allToken = pocketReNameToken | pastePocketToken | deletePreviewTemplateToken | addPreviewTemplateToken | addPreviewPocketToken | pocketLogicalDeleteToken | caseLogicalDeleteToken | changePriorityPocket | confirmedRemovePocketToken | provisionalRemovePocket | provisionalResizePocket | confirmedResizePocketToken | deletePreviewCaseToken | addPreviewCaseToken | addPreviewItemToken | addItemCountToken | addBookmarkToken | addListItemToken | deletePreviewItemToken

export interface alterationToken {
  token: allToken
  alterationType: alterationType
  user: string
}

const useApplyCreateAction = () => {
  const createStore = useCreateStore()
  const templateBarStore = useTemplateBarStore()
  const initCreateStaticData = async () => {
    if (createStore.isStaticLoaded) return
    const [itemListRes, categoryRes] = await Promise.all([
      fetch("/json/create/itemList.json"),
      fetch("/json/create/category.json"),
    ])
    const staticItemData = await itemListRes.json()
    const categoryData = await categoryRes.json()
    createStore.setStaticItemData(staticItemData)
    createStore.setIconMap(categoryData.iconMap)
    createStore.setCategoryColor(categoryData.color)
    createStore.setCategories(categoryData.categoryData)
    createStore.setStaticLoaded(true)
  }

  const getStaticCases = async () => {
    const cases = createStore.staticCasesGetter
    if (Object.keys(cases).length != 0) return;
    const getCaseDatas = await createApi.getStaticCases()
    createStore.setStaticCases(getCaseDatas)
  }

  const getTemplateThumbnails = async () => {
    if (Object.keys(templateBarStore.templateThumbnailsGetter).length != 0) {
      return
    }
    const TemplateThumbnails: Record<string, BeforeParsingThumbnail> = await createApi.getTemplateThumbnails()

    const parseTemplateThumbnails = Object.fromEntries(
      Object.values(TemplateThumbnails).map((templateThumbnail) => {
        return [templateThumbnail.id, {
          ...templateThumbnail,
          thumbnailJson: usethumbnail.parse(templateThumbnail.thumbnailJson)
        }]
      }
      ))
    templateBarStore.templateThumbnailsSetter(parseTemplateThumbnails)
  }

  const useParsers = () => {
    let indexChangeCounter = 0;
    let vueItemList: Record<string, itemCard> = {

    };

    const setStaticData = (this_vueItemList: Record<string, itemCard>, this_indexChangeCounter: number) => {
      vueItemList = this_vueItemList;
      indexChangeCounter = this_indexChangeCounter;
    }

    const parseCase = (staticCase: Case, luggage: BeforeParsingCaseData) => {
      const this_staticCase = staticCase;
      const res = {
        id: luggage.id,
        case: this_staticCase.case,
        handle: this_staticCase.handle,
        name: this_staticCase.name,
        pockets: pocketUnion(luggage, staticCase),
        logicalDelete: false,
        canvas: staticCase.canvas
      }
      return res
    }

    const pocketUnion = (luggage: BeforeParsingCaseData, staticCase: Case) => {
      const pockets = luggage.pockets;
      if (!pockets) return {}
      const buildPockets = Object.fromEntries(
        Object.entries(pockets).map(([id, pocket]) => {
          //console.log("pockets_data__", pocket)
          let pocketSvgData = {
          } as pocketSvgData
          const initialPocketId = pocket.initialPocketId;
          const staticcase = initialPocketId ? staticCase.pockets[initialPocketId] : undefined
          const pocketsvgEdit = pocket.poketSvgEdit;

          const this_priority = pocket?.poketSvgEdit?.priority ?? 0
          indexChangeCounter = indexChangeCounter < this_priority ? this_priority : indexChangeCounter

          pocketSvgData =
          {
            size: {
              width: pocketsvgEdit?.width ?? staticcase?.size?.width ?? 0,
              height: pocketsvgEdit?.height ?? staticcase?.size?.height ?? 0
            },
            pos: {
              x: pocketsvgEdit?.x ?? staticcase?.pos?.x ?? 0,
              y: pocketsvgEdit?.y ?? staticcase?.pos?.y ?? 0
            },
            priority: pocket?.poketSvgEdit?.priority ?? 0

          }
          //console.log("pocketSvgData__", pocketSvgData)
          const pocketData = {
            id: pocket.id,
            name: pocket.name ?? staticcase?.name,
            initialPocketId: staticcase?.id ?? "",
          }

          let items;
          if (luggage.pockets != undefined) {
            items = getItemDatra(
              luggage.pockets[pocket.id]?.items ?? {}
            )
          } else {
            items = {}
          }



          //console.log(" pocket.id,__", pocket.id)
          return [
            pocket.id,
            {
              ...pocketData,
              ...pocketSvgData,
              items: items,
              logicalDelete: false
            },
          ]
        })
      );
      const basePockets = buildPockets;
      return basePockets
    }



    const getItemDatra = (
      pocket: Record<string, saveDBprevieItem>,
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
    return { getItemDatra, pocketUnion, parseCase, setStaticData, indexChangeCounter }
  }

  const hydrateCreateState = (data: UserLuggage_SaveDBData) => {
    const parsers = useParsers()
    const staticItemData = createStore.staticItemData
    const caseData = createStore.staticCasesGetter
    const { previewDatas, itemListDatas } = data
    const synthesis = {
      ...staticItemData,
      ...itemListDatas.addedItems,
    }
    const vueItemList: Record<string, itemCard> = Object.fromEntries(
      Object.entries(synthesis).map(([key, item]) => [
        key,
        {
          ...item,
          bookmark: itemListDatas.bookmarks.includes(item.id),
        },
      ]),
    );
    let indexChangeCounter = 0
    parsers.setStaticData(vueItemList, indexChangeCounter)
    const vuepreviewData: Record<string, Case> = Object.fromEntries(
      Object.entries(previewDatas.mainLuggage).map(([luggageId, luggage]) => {
        const staticCase: Case = caseData[luggage.caseType];
        return [
          luggageId,
          parsers.parseCase(staticCase, luggage)
        ];
      }),
    );
    indexChangeCounter = parsers.indexChangeCounter
    //console.log("indexChangeCounter", indexChangeCounter)
    return { vuepreviewData: vuepreviewData, vueItemList: vueItemList, indexChangeCounter: indexChangeCounter }
  }

  const alterationData = (token: alterationToken, socketResponse?: boolean) => {
    if (!createStore) return
    let dbpushToken: {
      type: server_alterationTokenType,
      path: string[],
      value: any,
      thumbnailEdit: boolean
    } = { type: "arrayPush", path: [], value: null, thumbnailEdit: false }
    if (token.user == userAuthstore.userId && socketResponse == true) return;
    switch (token.alterationType) {
      case 'previewItems_additem': { //完了

        interface previewItems_additemRes {
          item: previewItem | undefined,
          parent?: string
        }
        const res: previewItems_additemRes | undefined = createStore.addPreviewItem(token.token as addPreviewItemToken)
        const this_token = token.token as addPreviewItemToken
        if (res == undefined || res.item == undefined) { return }
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "items",]
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
          dbpushToken.path.push("innerItems")
        }
        dbpushToken.value = res.item
        dbpushToken.type = "objectPush"
        break
      }

      case 'case_logicalDelete': {
        const this_token = token.token as caseLogicalDeleteToken
        if (!this_token) return
        createStore.logicalDeleteCase(this_token)
        dbpushToken.path = []
        dbpushToken.value = {}
        dbpushToken.type = "arrayPush"
        break
      }

      case 'pocket_logicalDelete': {
        const this_token = token.token as pocketLogicalDeleteToken
        createStore.logicalDeletePocket(this_token)
        dbpushToken.path = []
        dbpushToken.value = {}
        dbpushToken.type = "arrayPush"
        break
      }


      case 'case_hardDelete': {
        const this_token = token.token as caseLogicalDeleteToken
        createStore.hardDeleteCase(this_token)
        break
      }

      case 'pocket_hardDelete': {
        const this_token = token.token as pocketLogicalDeleteToken
        createStore.hardDeletePocket(this_token)
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
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "items", this_token.id]
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
          dbpushToken.path.push("innerItems")
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
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "items"]
        dbpushToken.value = res
        if (res.parent != undefined) {
          dbpushToken.path.push(res.parent)
          dbpushToken.path.push("innerItems")
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
      case 'previewCases_addCase': {
        const this_token = token.token as addPreviewCaseToken
        const res = createStore.addPreviewCase(this_token) as {
          newCreate: boolean
          id: string, caseType: string,
          pockets: Record<string, {
            id: string,
            initialPocketId: string
          }>
        }

        if (!res) return
        const data = { id: res.id, caseType: res.caseType, pockets: res.pockets }
        dbpushToken.path = ["previewDatas", "mainLuggage"]
        dbpushToken.value = data
        dbpushToken.type = "objectPush"
        dbpushToken.thumbnailEdit = true
        break
      }

      case 'pocket_add': {
        const this_token = token.token as addPreviewPocketToken
        const res = createStore.addPreviewPocket(this_token)
        if (!res) return;
        const { poketSvgEdit, items, id, name } = res
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets"];
        dbpushToken.value = { poketSvgEdit: poketSvgEdit, items: items, id: id, name: name };
        dbpushToken.type = "objectPush";
        dbpushToken.thumbnailEdit = true
        break
      }


      case 'confirmed_removePocket': {
        createStore.reMovePocket(token.token as provisionalRemovePocket)
        const this_token = token.token as provisionalRemovePocket
        //console.log("this_token.pocketId", this_token.removeData)
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "poketSvgEdit"]
        dbpushToken.value = { ...this_token.removeData };
        dbpushToken.type = "set";
        dbpushToken.thumbnailEdit = true
        break
      }

      case 'pocket_rename': {
        const this_token = token.token as pocketReNameToken
        createStore.pocketReName(this_token)
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "name"]
        dbpushToken.value = this_token.name;
        dbpushToken.type = "set";
        dbpushToken.thumbnailEdit = true
        break;
      }

      case 'preview_addTemplate': {
        const this_token = token.token as addPreviewTemplateToken
        const selectedTemplateData = templateBarStore.selectedTemplateDataGetter
        if (selectedTemplateData.id == this_token.templateData.templateId) {
          const template_case = selectedTemplateData.data[this_token.templateData.caseId]
          const this_retentionTemplate = JSON.parse(JSON.stringify(template_case))
          const this_case = createStore.addTemplate(this_token, this_retentionTemplate)
          createStore.addPreviewCase({ case: this_case, newCreate: false })
        } else {
          if (this_token.caseData) {
            const parsers = useParsers()
            const items = createStore.listItemGetter
            if (!items) return;
            parsers.setStaticData(items, 0)
            const this_staticCase = createStore.staticCasesGetter[this_token.caseData.caseType]
            const res = parsers.parseCase(this_staticCase, this_token.caseData)
            createStore.addPreviewCase({ case: res, newCreate: false })
          }
        }
        break
      }

      case 'pocket_paste': {
        const this_token = token.token as pastePocketToken;
        createStore.pastePocket(this_token);
        //console.log("this_token", this_token)
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.newPocketData.caseId, "pockets", this_token.newPocketData.id]
        dbpushToken.value = {
          beforePath: ["previewDatas", "mainLuggage", this_token.pocketData.caseId, "pockets", this_token.pocketData.id],
          leave: true,
          reValue: {
            id: this_token.newPocketData.id,
            poketSvgEdit: {
              x: this_token.pos.x,
              y: this_token.pos.y,
              priority: this_token.newPocketData.priority
            }
          }
        }
        dbpushToken.type = "move"
        dbpushToken.thumbnailEdit = true
        break
      }

      case 'changePriorityPocket': {
        const getToken = token.token as changePriorityPocket
        createStore.changePriorityPocket(getToken)
        createStore.indexChangeCounterSetter(getToken.priority + 1)
        const this_token = token.token as changePriorityPocket
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "poketSvgEdit", "priority"]
        dbpushToken.value = this_token.priority
        dbpushToken.type = "set"
        dbpushToken.thumbnailEdit = true
        break
      }

      case 'confirmed_resizePocket': {
        const this_token = token.token as provisionalResizePocket
        createStore.reSizePocket(token.token as provisionalResizePocket)
        //console.log("this_token.pocketId", this_token.pocketId)
        dbpushToken.path = ["previewDatas", "mainLuggage", this_token.caseId, "pockets", this_token.pocketId, "poketSvgEdit"]
        dbpushToken.value = { ...this_token.resizeData }
        //console.log(this_token.resizeData)
        dbpushToken.type = "set"
        dbpushToken.thumbnailEdit = true
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
          path: dbpushToken.path,
          thumbnailEdit: dbpushToken.thumbnailEdit
        },
        alterationToken: token
      }
      api.sendAlteration(pendingToken)
    }
  }
  const kicked = () => {
    api.leaveRoom()
    createStore.leaveWork()
  }

  return { getTemplateThumbnails, hydrateCreateState, alterationData, initCreateStaticData, kicked, getStaticCases }
}
export { useApplyCreateAction }




