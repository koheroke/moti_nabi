import type { CategoryId } from "../type/categoryType";
import type { Case } from "../type/casetype";
import type { CaseType } from "../type/itemType";
export type loadResponse = "noneNameorWorkId" | "fallLoadData" | "damagedData" | "none"
export type addItemToPreviewResponse = "nonePreview" | "addPreview" | "noneItem" | "isRegulatedAction" | "blockEdit"
export type createdType = "default" | "userCreated" | "othersUserCreated"



export interface addItemCountToken {
  id: string
  caseId: string
  pocketId: string
  parentId: string | undefined
  pulse: number;
}

export interface deletePreviewItemToken {
  id: string
  caseId: string
  pocketId: string
  innnerItemToken?: addPreviewItemToken[]
  parentId: string | undefined
  itemId: string
}

export interface addPreviewItemToken {
  pocketId: string
  caseId: string
  parentId?: string
  itemId: string
  id: string | null
}

export interface positionChangePreviewItemToken {
  popPocketId: string
  popCaseId: string
  pushPocketId: string,
  pushCaseId: string
  id: string
}

export interface addPreviewCaseToken {
  case: Case | {
    caseId: string,
    caseType: CaseType
  }
  reverse: boolean
}
export interface deletePreviewCaseToken {
  deletecase: Case,
  id: string
}
export interface confirmedResizePocketToken {
  resizeData: { x: number, y: number, width: number, height: number }
  caseId: string,
  pocketId: string
}
export interface provisionalResizePocket {
  caseId: string,
  pocketId: string,
  resizeData: { x: number, y: number, width: number, height: number }
}
export interface provisionalRemovePocket {
  caseId: string,
  pocketId: string,
  removeData: { x: number, y: number, width: number, height: number }
}
export interface changePriorityPocket {
  caseId: string,
  pocketId: string,
  priority: number
}

export interface confirmedRemovePocketToken {
  removeData: { x: number, y: number, width: number, height: number }
  caseId: string,
  pocketId: string
}

export interface pocketLogicalDeleteToken {
  pocketId: string,
  caseId: string,
  type: "cancel" | "push"
}

export interface caseLogicalDeleteToken {
  caseId: string,
  type: "cancel" | "push"
}
//リスト
export interface addListItemToken {
  name: string
  category: CategoryId[],
  isStorage: boolean,
  iconId: string
  createType: createdType
}


export interface addBookmarkToken {
  itemId: string
}
