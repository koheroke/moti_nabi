import type { CategoryId } from "./categoryType"


interface Case {
  pockets: Record<string, Pocket>;
  case: part;
  handle: part;
  name: string;
  id: string
}

interface previewItem {
  originalId: string;
  id: string
  name: string;
  iconId: string;
  category: CategoryId[];
  isStorage: boolean;
  innerItems?: previewItem[];
  count: number;
}
type Pocket = {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  items: previewItem[];
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
export type { Category, previewItem, Pocket, part, Case, CaseEdit }

