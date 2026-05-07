export interface ParseSearchQuery{
  tag:string[],
  word:string
}
export type SortType =
  | "latest"
  | "likes"