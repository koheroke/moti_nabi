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
    let this_case_thumbnail;
    try {
      this_case = structuredClone(
        templateData.templates[templateId].previewDatas.mainLuggage[caseId]
      );
      this_case_thumbnail = structuredClone(
        templateData.thumbnails[templateId].thumbnailJson[caseId]
      );
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
    const oldThumbnailPockets = this_case_thumbnail.pockets;
    const newThumnail = Object.fromEntries(
      addTemplateToken.pocketIds.map(({ beforeId, id }) => {
        console.log("beforeId", beforeId)
        console.log("beforeId", oldThumbnailPockets[beforeId])
        const old = oldThumbnailPockets[beforeId]
        return [
          id,
          {
            id,
            ...old
          }
        ]
      }
      )
    )

    this_case.pockets = newPockets;
    this_case.id = addTemplateToken.id
    this_case_thumbnail.pockets = newThumnail
    this_case_thumbnail.id = addTemplateToken.id

    console.log("addthis_case_thumbnail", this_case_thumbnail)

    const sendDbToken = {
      type: "set" as server_alterationTokenType,
      value: this_case,
      createdAt: Date.now(),
      path: ["previewDatas", "mainLuggage", addTemplateToken.id],
      thumbnailEdit: true,
      thumbnailValue: this_case_thumbnail
    }

    console.log("sendDbToken", sendDbToken)
    return sendDbToken
  }
  return { addTemplate }
}
export { useTemplate, templateData }