import { v7 as uuidv7 } from "uuid";
export type SignupInput = {
  name: string
  email: string
  password: string
  recaptchaToken: string
}
export const usesignup = () => {
  const singup = async (user: SignupInput) => {
    const userId = uuidv7();
    // await DBdriver.saveSecretToDB(userId, user);
    return { userId: userId, res: "users", }
  }
  return { singup }

}