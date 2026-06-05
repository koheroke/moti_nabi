import { ref } from "vue"
import { type SignupInput } from "../type/SignUpType"
import { useUserAuthStore } from "@/store/user/userAuthStore"
import { useUserStore, type UserInfo } from "@/store/user/userIconStore"
const userStore = useUserStore()
const userAuthstore = useUserAuthStore()
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/signup`;
export const useSignup = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const signup = async (signupInput: SignupInput, token: string) => {
    loading.value = true
    error.value = null
    try {
      const singup_res = await fetch(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupInput)
        }
      )
      const { userId, res } = await singup_res.json()
      if (res == "error") throw new Error("error")

      const user: UserInfo = {
        userId: userId,
        name: signupInput.name,
        iconUrl: ""
      }
      console.log(user,)
      userStore.setUserInfo(user)
      userAuthstore.login(userId, signupInput.email, token)
      userStore.setMyuserId(userId);
      return res
    } catch (e) {
      error.value = '登録失敗'
    } finally {
      loading.value = false
    }
  }

  return { signup, loading, error }
}

