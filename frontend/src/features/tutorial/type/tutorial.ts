type tutorialType = "create"
type action = "push"
type tutorialData = {
  id: string,
  target: string,
  title: string,
  description: string,
  action: action,
}
type targetData = {
  top: number,
  left: number,
  width: number,
  height: number,
}
export type { tutorialType, tutorialData, targetData }