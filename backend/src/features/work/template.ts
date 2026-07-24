import type { alterationToken, server_alterationTokenType } from "./saveQueue";
import jsonTemplateData from "./jsonData/template/template.json"

const templateData: Record<string, any> = jsonTemplateData
interface addTemplateToken {
  templateData: { templateId: string, caseId: string }
  id: string
  pocketIds: {
    id: string, beforeId: string
  }[],
  caseData?: any
}


const useTemplate = () => {
  const addTemplate = (addTemplateToken: addTemplateToken) => {

    const { caseId, templateId } = addTemplateToken.templateData
    let this_case;
    try {
      this_case = structuredClone(
        templateData.templates[templateId].previewDatas.mainLuggage[caseId]
      );
      //console.log("getCase__", this_case)
    } catch (e) {
      return
    }
    if (!this_case) return;
    const oldPockets = this_case.pockets;
    const newPockets = Object.fromEntries(
      addTemplateToken.pocketIds.map(({ beforeId, id }) => {
        const pocket = oldPockets[beforeId];
        return [
          id,
          {
            ...pocket,
            id,
          },
        ];
      })
    );
    this_case.pockets = newPockets;
    this_case.id = addTemplateToken.id

    //console.log("addCase__", this_case)

    const sendDbToken = {
      type: "set" as server_alterationTokenType,
      value: this_case,
      createdAt: Date.now(),
      path: ["previewDatas", "mainLuggage", addTemplateToken.id],
      thumbnailEdit: true,
    }
    return sendDbToken
  }
  return { addTemplate }
}
export { useTemplate, templateData }