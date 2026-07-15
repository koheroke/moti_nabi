import type { CategoryId } from "./categoryType"


interface Case {
  pockets: Record<string, Pocket>;
  case: part;
  handle: part;
  name: string;
  id: string;
  canvas: caseCanvas;
  logicalDelete: boolean;
}


interface caseCanvas {
  width: number;
  height: number;
}

interface listCase {
  pockets: Record<string, Pocket>;
  case: part;
  handle: part;
  name: string;
  id: string;
  canvas: caseCanvas;
}


interface previewItem {
  id: string;
  itemId: string
  name: string;
  iconId: string;
  category: CategoryId[];
  isStorage: boolean;
  innerItems?: Record<string, previewItem>;
  count: number;
}
type pocketSvgData = {
  pos: {
    x: number;
    y: number;
  }
  size: {
    width: number;
    height: number;
  }
  priority: number
}

type Pocket = pocketSvgData & {
  id: string;
  name: string;
  priority: number
  items: Record<string, previewItem>;
  logicalDelete: boolean;
}
type pocketEdit = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  priority: number
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
export type { Category, previewItem, Pocket, part, Case, pocketEdit, listCase, pocketSvgData, caseCanvas }
