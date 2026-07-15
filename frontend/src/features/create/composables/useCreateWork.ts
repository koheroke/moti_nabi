import type { UserLuggage_SaveDBData } from "../type/apiType";
import type { Case, Pocket } from "../type/casetype";
import type { itemCard, CaseType } from "../type/itemType";
import type {
  loadResponse, addItemToPreviewResponse,
  addItemCountToken,
  deletePreviewItemToken,
  addPreviewItemToken,
  addPreviewCaseToken,
  deletePreviewCaseToken,
  confirmedResizePocketToken,
  provisionalResizePocket,
  provisionalRemovePocket,
  addListItemToken,
  addBookmarkToken,
  confirmedRemovePocketToken,
  changePriorityPocket,
  pocketLogicalDeleteToken,
  caseLogicalDeleteToken

} from "@/features/create/type/tokens";
import { type menber } from "../type/infoType";
import { useApplyCreateAction } from "./applyCreateAction";
import { useCreateApi } from "../api/createApi";
import { useUserAuthStore } from "@/store/user/userAuthStore";
import { useCreateStore } from "../store/createStore";
import type { alterationToken } from "./applyCreateAction";
import { useAlterationLogStore } from "../store/useAlterationLogStore"
import { useWorkPackageStore } from "@/features/work/store/workPackageStore";
import { useSocketApi } from "../api/createSocketApi";
import { useAlertStore } from "@/store/feedback/alertStore";
import { type editAboutType, useWorkDetailEditStore } from "@/features/workDetailEdit/store/useworkDetail";



const workDetailEditStore = useWorkDetailEditStore()
const alertStore = useAlertStore();
const api = useSocketApi()
const workPackageStore = useWorkPackageStore();

export const useCreateWork = () => {
  const createStore = useCreateStore()
  const userAuthstore = useUserAuthStore()
  const alterationLog = useAlterationLogStore()
  const createApi = useCreateApi()
  const applyCreateAction = useApplyCreateAction()
  let saveRemovePocket: { x: number, y: number } = { x: 0, y: 0 }
  let saveResizePocket: { width: number, height: number } = { width: 0, height: 0 }



  const createNewwork = async () => {
    const userId = userAuthstore.userId
    let newWork = null as UserLuggage_SaveDBData | null
    let vuepreviewData = {} as Record<string, Case>
    let vueItemList = {} as Record<string, itemCard>
    let addItemCounter = 0 as number
    try {
      newWork = await createApi.createNewWork(userId)
    } catch (e) {
      return "fallLoadData"
    }
    if (newWork == null) return "damagedData"
    const createAction = useApplyCreateAction()
    await createAction.initCreateStaticData()
    const response = applyCreateAction.hydrateCreateState(newWork)
    vuepreviewData = response.vuepreviewData
    vueItemList = response.vueItemList
    try {
      //console.log("newWork", newWork)
      if (newWork == null) return "damagedData"
      const createAction = useApplyCreateAction()
      await createAction.initCreateStaticData()
      const response = applyCreateAction.hydrateCreateState(newWork)
      vuepreviewData = response.vuepreviewData
      vueItemList = response.vueItemList
    } catch (e) {
      return "damagedData"
    }
    createStore.setRole("owner")
    createStore.setWork(newWork, vuepreviewData, vueItemList)
    workPackageStore.selectedPackageIdStore(newWork.workId)
    await api.joinWorkRoom()
    await applyCreateAction.getStaticCases()
    return "none"
  }



  const loadWork = async (): Promise<loadResponse> => {
    const theWorkId: string = workPackageStore.selectedPackageIdGetter
    const staticCases = await applyCreateAction.getStaticCases()
    console.log("staticCases", staticCases)
    if (!theWorkId) return "noneNameorWorkId"
    let data = null as { parseData: UserLuggage_SaveDBData, menbers: menber[], about: editAboutType } | null
    let vuepreviewData = {} as Record<string, Case>
    let vueItemList = {} as Record<string, itemCard>
    let parseData = {} as UserLuggage_SaveDBData
    let menbers = [] as menber[]
    let about = {} as editAboutType
    let indexChangeCounter = 0
    try {
      data = await createApi.getWork(theWorkId)
    } catch (e) {
      return "fallLoadData"
    }
    try {
      if (data == null) throw new Error()
      const createAction = useApplyCreateAction()
      await createAction.initCreateStaticData()
      const response = applyCreateAction.hydrateCreateState(data.parseData)
      vuepreviewData = response.vuepreviewData
      vueItemList = response.vueItemList
      parseData = data.parseData
      menbers = data.menbers
      about = data.about
      indexChangeCounter = response.indexChangeCounter
    } catch (e) {
      return "damagedData"
    }
    createStore.setWork(parseData, vuepreviewData, vueItemList)
    createStore.setMenbersSetter(menbers)
    workDetailEditStore.setAbout(about)
    createStore.indexChangeCounterSetter(indexChangeCounter)
    const user = menbers.find((menber) => menber.userId == userAuthstore.userId);
    createStore.setRole(user?.role ?? "viewer")
    return "none"
  }


  const setWorkSocket = async () => {
    const alterationTokens = await api.joinWorkRoom()
    if (!alterationTokens) return "noneNameorWorkId";
    alterationTokens.forEach((token: alterationToken) => {
      applyCreateAction.alterationData(token)
    })
    return "none";
  }
  const loadCreatePageWork = async () => {
    const resCreateNewwork = await loadWork();
    const resSetWorkSocket = await setWorkSocket()
    if (resCreateNewwork != "none") return resCreateNewwork;
    return resSetWorkSocket
  }
  const setCreatePageWork = async () => {
    let res = "";
    if (
      (workPackageStore.selectedPackageIdGetter ?? "").replaceAll(/\s+/g, "")
        .length === 0
    ) {
      res = await createNewwork();
    } else {
      res = await loadCreatePageWork();
    }
    switch (res) {
      case "noneNameorWorkId":
        alertStore.showAlert("ユーザー情報の取得に失敗しました", true);
        break;
      case "fallLoadData":
        alertStore.showAlert("データの取得に失敗しました", true);
        break;
      case "damagedData":
        alertStore.showAlert("データが破損しています", true);
        break;

      case "none":
        alertStore.showAlert("読み込み完了", false);
        break;
      default:
        break;
    }

  }

  const addItemToPreview = async (token: addPreviewItemToken): Promise<addItemToPreviewResponse> => {
    if (createStore.getBlockEdit) return "blockEdit"
    const { itemId } = token
    const items = createStore?.listItemGetter
    if (!items) return "nonePreview"
    const item = items[itemId]
    if (!item) return "noneItem"
    if (item.isStorage == true && token.parentId != undefined) return "isRegulatedAction"
    const id = (token.id != null) ? token.id : crypto.randomUUID()
    const deleteToken: deletePreviewItemToken = {
      id: id,
      caseId: token.caseId,
      pocketId: token.pocketId,
      parentId: token.parentId,
      itemId: token.itemId
    }

    const newToken = {
      ...token,
      id: id
    }

    const fowardToken: alterationToken = {
      alterationType: "previewItems_additem",
      token: newToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: deleteToken,
      user: userAuthstore.userId
    }

    alterationLog.saveState({ forwardToken: fowardToken, reverseToken: reverseToken })
    applyCreateAction.alterationData(fowardToken)
    return "addPreview"
  }

  const addItemCount = (token: addItemCountToken) => {
    if (createStore.getBlockEdit) return "blockEdit"
    const newToken: alterationToken = {
      alterationType: "previewItems_addcount",
      token: token,
      user: userAuthstore.userId
    }

    const reversePulse = { ...token, pulse: token.pulse * -1 }

    const reverseToken: alterationToken = {
      alterationType: "previewItems_addcount",
      token: reversePulse,
      user: userAuthstore.userId
    }
    alterationLog.saveState({ forwardToken: newToken, reverseToken: reverseToken })

    applyCreateAction.alterationData(newToken)
  }

  const addBookmark = (token: addBookmarkToken) => {
    if (createStore.getBlockEdit) return "blockEdit"
    const newToken: alterationToken = {
      alterationType: "itemlistItems_bookmark",
      token: token,
      user: userAuthstore.userId
    }
    applyCreateAction.alterationData(newToken)
  }

  const deletePreviewItem = (token: deletePreviewItemToken) => {
    if (createStore.getBlockEdit) return "blockEdit"
    if (!createStore.listItemGetter) return
    const newToken: alterationToken = {
      alterationType: "previewItems_delete",
      token: token,
      user: userAuthstore.userId
    }
    const { innnerItemToken, ...addtoken } = token
    const reverseToken: alterationToken[] = []
    reverseToken.push({
      alterationType: "previewItems_additem",
      token: addtoken,
      user: userAuthstore.userId
    })
    if (token.innnerItemToken) {
      token.innnerItemToken.forEach((item) => {
        reverseToken.push({
          alterationType: "previewItems_additem",
          token: item,
          user: userAuthstore.userId
        })
      })
    }

    applyCreateAction.alterationData(newToken)
    alterationLog.saveState({ forwardToken: newToken, reverseToken: reverseToken })
  }
  const addListItem = (token: addListItemToken) => {
    if (createStore.getBlockEdit) return "blockEdit"
    const newToken: alterationToken = {
      alterationType: "itemlistItems_additem",
      token: token,
      user: userAuthstore.userId
    }
    applyCreateAction.alterationData(newToken)
  }
  const addCase = (caseType: CaseType) => {
    if (createStore.getBlockEdit) return "blockEdit"
    const id = crypto.randomUUID()
    const addToken: addPreviewCaseToken = {
      case: {
        caseType: caseType as CaseType,
        caseId: id,
        pockets: {}
      },
      reverse: false
    }



    const forwardToken: alterationToken = {
      alterationType: "previewCases_addCase",
      token: addToken,
      user: userAuthstore.userId
    }

    const deleteToken: deletePreviewCaseToken = {
      id: id,
      deletecase: createStore.staticCasesGetter[caseType]
    }

    const reverseToken: alterationToken = {
      alterationType: "previewCases_deleteCase",
      token: deleteToken,
      user: userAuthstore.userId
    }
    applyCreateAction.alterationData(forwardToken)
    alterationLog.saveState({ forwardToken: forwardToken, reverseToken: reverseToken })
  }
  const deleteCase = (id: string) => { //作成途中
    // if (createStore.getBlockEdit) return "blockEdit"

    // const this_case: Case = createStore.previewItemGetter[id]
    // const addToken: addPreviewCaseToken = {
    //   case: this_case,
    //   reverse: true
    // }

    // const deleteToken: deletePreviewCaseToken = {
    //   id: id,
    //   deletecase: this_case
    // }

    // const reverseToken: alterationToken = {
    //   alterationType: "previewCases_deleteCase",
    //   token: addToken,
    //   user: userAuthstore.userId
    // }

    // const forwardToken: alterationToken = {
    //   alterationType: "previewCases_addCase",
    //   token: deleteToken,
    //   user: userAuthstore.userId
    // }
    // createStore.addPreviewCase(addToken)
    // alterationLog.saveState({ forwardToken: forwardToken, reverseToken: reverseToken })
  }

  let provisionalpocket = false
  let sevePocket: { x: number, y: number, width: number, height: number } = { x: 0, y: 0, width: 0, height: 0 }
  const provisionalResizePocket = (resizeData: { x: number, y: number, width: number, height: number }, pocketId: string, caseId: string) => {
    const pockets = createStore.previewCase[caseId].pockets
    if (createStore.getBlockEdit || !pockets) return "blockEdit"
    if (!provisionalpocket) {
      provisionalpocket = true
      const { x, y } =
        pockets[pocketId].pos
      const { width, height } =
        pockets[pocketId].size
      sevePocket = { x: x, y: y, width: width, height: height }
    }
    const token: provisionalResizePocket = {
      caseId: caseId,
      pocketId: pocketId,
      resizeData: resizeData,
    };
    createStore.reSizePocket(token) //userのみの変更で合ってる
  }
  const confirmedResizePocket = (caseid: string, pocketId: string) => {
    const pockets = createStore.previewCase[caseid].pockets
    if (createStore.getBlockEdit || !pockets) return "blockEdit"
    const { x, y } =
      pockets[pocketId].pos
    const { width, height } =
      pockets[pocketId].size

    if (width == saveResizePocket.width && height == saveResizePocket.height) {
      console.log("blockEdit")
      return "blockEdit";
    }
    console.log("confirmed")
    const confirmedToken: confirmedResizePocketToken = {
      resizeData: { x: x, y: y, width: width, height: height },
      caseId: caseid,
      pocketId: pocketId,
    }

    const revarseConfirmedToken: confirmedResizePocketToken = {
      resizeData: sevePocket,
      caseId: caseid,
      pocketId: pocketId
    }

    const reverseToken: alterationToken = {
      alterationType: "confirmed_resizePocket",
      token: revarseConfirmedToken,
      user: userAuthstore.userId
    }

    const token: alterationToken = {
      token: confirmedToken,
      alterationType: "confirmed_resizePocket",
      user: userAuthstore.userId
    }
    provisionalpocket = false

    alterationLog.saveState({ forwardToken: token, reverseToken: reverseToken })
    applyCreateAction.alterationData(token)
  }


  let provisionalPocket = false
  let savePocket: { x: number; y: number; width: number; height: number } = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }

  const provisionalRemovePocket = (
    moveData: { x: number; y: number, width: number, height: number },
    pocketId: string,
    caseId: string
  ) => {
    const pockets = createStore.previewCase[caseId].pockets
    if (createStore.getBlockEdit || !pockets) return "blockEdit";
    if (!provisionalPocket) {
      provisionalPocket = true

      const { x, y } =
        pockets[pocketId].pos
      const { width, height } =
        pockets[pocketId].size

      savePocket = { x, y, width, height }
    }

    const token: provisionalRemovePocket = {
      caseId,
      pocketId,
      removeData: moveData,
    }

    createStore.reMovePocket(token)
  }
  const buildItemPathMap = () => {
    const cases = createStore.previewItemGetter;

    const itemPathMap: Record<
      string,
      {
        id: string;
        pathData: {
          pocketId: string;
          caseId: string;
          itemId: string;
          parentId?: string;
        };
        detail: string;
        name: string;
      }
    > = {};
    //console.log("cases", cases)
    Object.entries(cases).forEach(([caseId, caseData]) => {
      //console.log("caseId", caseData)
      if (!caseData.pockets) return
      Object.entries(caseData.pockets).forEach(([pocketId, pocketData]) => {
        //console.log("pocketId", pocketData)
        Object.entries(pocketData.items).forEach(([parentItemId, parentItem]) => {
          //console.log("parentItemId", parentItem)
          itemPathMap[parentItemId] = {
            id: parentItemId,
            pathData: {
              pocketId,
              caseId,
              itemId: parentItemId,
            },
            detail: `/${caseData.name}/${pocketData.name}/${parentItem.name}`,
            name: parentItem.name,
          };
          // //console.log("itemPathMap", itemPathMap)

          if (parentItem.innerItems) {
            Object.entries(parentItem.innerItems).forEach(([itemId, item]) => {
              itemPathMap[itemId] = {
                id: itemId,
                pathData: {
                  pocketId,
                  caseId,
                  itemId,
                  parentId: parentItemId,
                },
                name: item.name,
                detail: `/${caseData.name}/${pocketData.name}/${parentItem.name}/${item.name}`
              };
            });
          }
        });
      });
    });
    //console.log("itemPathMap__", itemPathMap)
    return itemPathMap;
  };

  const startRemovePocket = (data: { x: number, y: number }) => {
    saveRemovePocket = data
  }
  const startResizePocket = (data: { width: number, height: number }) => {
    saveResizePocket = data
  }
  const confirmedRemovePocket = (caseId: string, pocketId: string) => {
    const pockets = createStore.previewCase[caseId].pockets
    if (createStore.getBlockEdit || !pockets) return "blockEdit"

    const nowpos =
      { ...pockets[pocketId].pos, ...pockets[pocketId].size }

    console.log("nowpos__", nowpos)
    console.log("saveRemovePocket__", saveRemovePocket)
    if (nowpos.x == saveRemovePocket.x && nowpos.y == saveRemovePocket.y) {
      console.log("blockEdit")
      return "blockEdit"
    }
    console.log("confirmed")



    const confirmedToken: confirmedRemovePocketToken = {
      removeData: nowpos,
      caseId: caseId,
      pocketId: pocketId,
    }
    const reverseConfirmedToken: confirmedRemovePocketToken = {
      removeData: savePocket,
      caseId,
      pocketId,
    }
    const token: alterationToken = {
      alterationType: "confirmed_removePocket",
      token: confirmedToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "confirmed_removePocket",
      token: reverseConfirmedToken,
      user: userAuthstore.userId,
    }

    provisionalPocket = false

    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })

    applyCreateAction.alterationData(token)
  }

  const confirmedChangePriorityPocket = (caseId: string, pocketId: string) => {
    const pockets = createStore.previewItemGetter[caseId].pockets
    if (!pockets) return
    const this_priority = pockets[pocketId].priority
    const confirmedToken: changePriorityPocket = {
      priority: this_priority,
      caseId: caseId,
      pocketId: pocketId,
    }
    const reverseConfirmedToken: changePriorityPocket = {
      priority: this_priority - 1,
      caseId,
      pocketId,
    }
    const token: alterationToken = {
      alterationType: "changePriorityPocket",
      token: confirmedToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "changePriorityPocket",
      token: reverseConfirmedToken,
      user: userAuthstore.userId,
    }

    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })

    applyCreateAction.alterationData(token)
  }


  const provisionaChangePriorityPocket = (caseId: string, pocketId: string) => {
    const indexChangeCounter = createStore.indexChangeCounterGetter;

    const confirmedToken: changePriorityPocket = {
      priority: indexChangeCounter + 1,
      caseId: caseId,
      pocketId: pocketId,
    }
    createStore.changePriorityPocket(confirmedToken)
  }

  const pocketLogicalDelete = (data: pocketLogicalDeleteToken) => {
    const confirmedToken = data
    const reverseConfirmedToken: pocketLogicalDeleteToken = { ...data, type: "cancel" }


    const token: alterationToken = {
      alterationType: "pocket_logicalDelete",
      token: confirmedToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "pocket_logicalDelete",
      token: reverseConfirmedToken,
      user: userAuthstore.userId,
    }

    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })
    console.log("pocketLogicalDelete", token)

    applyCreateAction.alterationData(token)
  }

  const copyPocket = (caseId: string, pocketId: string) => {

  }



  const addPocket = (value: { caseId: string, pocketData: Pocket, pocketId?: string }) => {
    const { pocketId, caseId, pocketData } = value

    const this_pocketId = pocketId ? pocketId : crypto.randomUUID();
    const data = { ...pocketData, id: this_pocketId }
    const confirmedToken = {
      caseId: caseId,
      pocketId: this_pocketId,
      pocketData: data
    }
    const reverseConfirmedToken: pocketLogicalDeleteToken = {
      caseId: caseId,
      pocketId: this_pocketId,
      type: "push",
    }

    const token: alterationToken = {
      alterationType: "pocket_add",
      token: confirmedToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "pocket_logicalDelete",
      token: reverseConfirmedToken,
      user: userAuthstore.userId,
    }
    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })

    applyCreateAction.alterationData(token)
  }



  const caseLogicalDelete = (data: caseLogicalDeleteToken) => {
    const confirmedToken = data
    const reverseConfirmedToken: caseLogicalDeleteToken = { ...data, type: "cancel" }


    const token: alterationToken = {
      alterationType: "case_logicalDelete",
      token: confirmedToken,
      user: userAuthstore.userId,
    }

    const reverseToken: alterationToken = {
      alterationType: "case_logicalDelete",
      token: reverseConfirmedToken,
      user: userAuthstore.userId,
    }

    alterationLog.saveState({
      forwardToken: token,
      reverseToken,
    })

    applyCreateAction.alterationData(token)
  }

  // const positionChangeItemToPreview = (token: positionChangePreviewItemToken) => {
  //   const target_item = createStore.previewCase[token.popCaseId].pockets[token.popPocketId].items.
  //     if(!target_item) return
  //   const push_target = createStore.previewCase[token.pushCaseId].pockets[token.pushCaseId].items
  //   push_target.set(target_item, target_item)
  // }

  return { startRemovePocket, startResizePocket, caseLogicalDelete, pocketLogicalDelete, copyPocket, addPocket, provisionaChangePriorityPocket, confirmedChangePriorityPocket, buildItemPathMap, createNewwork, confirmedRemovePocket, provisionalRemovePocket, provisionalResizePocket, confirmedResizePocket, loadWork, addItemToPreview, addItemCount, addBookmark, deletePreviewItem, addListItem, addCase, deleteCase, setCreatePageWork }
}
