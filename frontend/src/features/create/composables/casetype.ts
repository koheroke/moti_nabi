import type { CategoryId } from "../type/categoryType"
import type { Pocket, previewItem } from "../type/casetype";



interface Case {
  pockets: Record<string, Pocket>;
  case: part;
  handle: part;
  name: string;
  id: string
}



type CaseEdit = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  id: string
}

type Category = {
  id: CategoryId
  name: string,
  icon: string,
}

interface part {
  x: number;
  y: number;
  width: number;
  height: number;
  radius: number;
}
export type { Category, previewItem, part, Case, CaseEdit, Pocket }
