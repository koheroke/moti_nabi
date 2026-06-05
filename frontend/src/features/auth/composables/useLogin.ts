import { ref } from "vue"
const apiUrl = import.meta.env.VITE_API_BASE_URL;

const url = `${apiUrl}/auth/login`;
import { useUserAuthStore } from "@/store/user/userAuthStore"
const userAuthstore = useUserAuthStore()
import { useUserStore } from "@/store/user/userIconStore"
const userStore = useUserStore()


interface loginInput {
  email: string
  password: string
}
const useLogin = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const login = async (loginInput: loginInput, token: string) => {
    loading.value = true
    error.value = null
    console.log(loginInput)
    try {
      const singup_res = await fetch(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginInput)
        }
      )
      const user = await singup_res.json()
      if (user == null) return null
      userAuthstore.login(user.userId, user.email, token)
      userStore.setUserInfo({
        userId: user.userId,
        name: user.name,
        iconUrl: user.iconUrl
      })
      userStore.setMyuserId(user.userId);
      return user
    } catch (e) {
      error.value = '登録失敗'
    } finally {
      loading.value = false
    }
  }
  return { login, loading, error }
}


export { useLogin }
export type { loginInput }


