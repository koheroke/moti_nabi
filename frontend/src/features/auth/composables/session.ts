import { ref } from "vue"
import { type LoginInput } from "../type/LoingType"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth`;

interface loginToken {
  id: number
  name: string
  email: string
}

export const useSession = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const login = async (): Promise<loginToken> => {
    const response = await fetch(
      `${url}/session/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const token = await response.json()
    return token
  }
  return { login, loading, error }
}