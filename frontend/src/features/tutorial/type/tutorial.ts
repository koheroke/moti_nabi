type tutorialType = "create"
type action = "push"
type tutorialData = {
  id: string,
  target: string,
  title: string,
  description: string,
  action: action,
  direction: direction
}
type targetData = {
  top: number,
  left: number,
  width: number,
  height: number,
}
type direction = "left" | "right" | "top" | "bottom"
export type { tutorialType, tutorialData, targetData, direction }