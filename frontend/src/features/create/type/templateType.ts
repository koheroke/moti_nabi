import type { previewSvgCase } from "../store/createStore"
import type { BeforeParsingCaseData } from "./apiType"
interface baseThumbnail {
  id: string,
  name: string,
  tags: string[],
}

interface thumbnail extends baseThumbnail {
  thumbnailJson: previewSvgCase[]
}
interface BeforeParsingThumbnail extends baseThumbnail {
  thumbnailJson: Record<string, BeforeParsingCaseData>
}

export type { thumbnail, BeforeParsingThumbnail }