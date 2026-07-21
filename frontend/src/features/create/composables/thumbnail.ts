import type { BeforeParsingCaseData } from "../type/apiType";
import type { Case, pocketSvgData } from "../type/casetype";
import { useCreateStore } from "../store/createStore";
import type { previewSvgCase } from "../store/createStore";
import type { previewSvgPocket } from "../store/createStore";

export const useThumbnail = () => {
  let indexChangeCounter = 0

  const parse = (thumbnail: Record<string, BeforeParsingCaseData>) => {
    console.log(thumbnail)
    const createStore = useCreateStore()
    let caseData = createStore.staticCasesGetter;

    const pocketUnion = (luggage: BeforeParsingCaseData, staticCase: Case): previewSvgPocket[] => {
      const pockets = luggage.pockets;
      const buildPockets = Object.values(pockets).map((pocket) => {
        console.log("pockets_data__", pocket);

        const initialPocketId = pocket.initialPocketId;
        const staticcase = initialPocketId
          ? staticCase.pockets[initialPocketId]
          : undefined;
        const pocketsvgEdit = pocket.poketSvgEdit;

        const pocketSvgData: pocketSvgData = {
          size: {
            width: pocketsvgEdit?.width ?? staticcase?.size?.width ?? 0,
            height: pocketsvgEdit?.height ?? staticcase?.size?.height ?? 0,
          },
          pos: {
            x: pocketsvgEdit?.x ?? staticcase?.pos?.x ?? 0,
            y: pocketsvgEdit?.y ?? staticcase?.pos?.y ?? 0,
          },
          priority: pocketsvgEdit?.priority ?? 0,
        };

        const pocketData = {
          id: pocket.id,
          name: pocket.name ?? staticcase?.name,
          initialPocketId: staticcase?.id ?? "",
          logicalDelete: false
        };
        const res = {
          ...pocketData,
          ...pocketSvgData,
        }
        return res
      });

      const basePockets = buildPockets;
      return basePockets
    }


    const thumbnailData: previewSvgCase[] =
      Object.values(thumbnail).map((luggage) => {
        const staticCase = caseData[luggage.caseType]
        return {
          id: luggage.id,
          data: {
            id: luggage.id,
            case: staticCase.case,
            handle: staticCase.handle,
            name: staticCase.name,
            pockets: pocketUnion(luggage, staticCase),
            canvas: staticCase.canvas,
            logicalDelete: false
          }
        }
      })
    return thumbnailData
  }
  return { parse }

}