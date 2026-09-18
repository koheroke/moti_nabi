import { type TutorialProgress } from "@/features/tutorial/store/tutorial"
export interface userData {
  userId: string,
  authData: { email: string },
  iconUrl: string,
  name: string,
  secoundfaEnabled: string | false,
  tutorialProgress: TutorialProgress
}