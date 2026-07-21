import type { previewSvgCase } from "@/features/create/store/createStore";
import type { BeforeParsingCaseData } from "@/features/create/type/apiType";
export interface baseWorkPackage {
  id: string,
  name: string,
  public: boolean,
  likes: number,
  tags: string[],
  copies: number,
  createdAt: string,
  liked: boolean
}
export interface workPackage extends baseWorkPackage {
  thumbnailJson: previewSvgCase[],
}
export interface BeforeParsingWorkPackage extends baseWorkPackage {
  thumbnailJson: Record<string, BeforeParsingCaseData>,
}




