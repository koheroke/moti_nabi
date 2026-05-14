import { ref } from "vue"
import { type LoginInput } from "../type/LoingType"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/login`;
interface loginInput {
  email: string
  password: string
}
export const useLogin = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const login = async (loginInput: loginInput) => {
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
      const res = await singup_res.json()
    } catch (e) {
      error.value = '登録失敗'
    } finally {
      loading.value = false
    }
  }
  return { login, loading, error }
}