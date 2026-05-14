import { v7 as uuidv7 } from "uuid";
export type SignupInput = {
  name: string
  email: string
  password: string
  recaptchaToken: string
}
export const usesignup = (user: SignupInput) => {
  const userId = uuidv7();
  return { userId: userId, res: "users", }
}