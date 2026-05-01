import { ref } from "vue"
import { type LoginInput } from "../type/LoingType"
export const useLogin = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const login = async (loginInput:LoginInput) => {
    loading.value = true
    error.value = null
    console.log(loginInput)
    try {
    } catch (e) {
      error.value = 'ログイン失敗'
    } finally {
      loading.value = false
    }
  }
  return { login, loading, error }
}