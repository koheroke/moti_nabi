import { ref } from "vue"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth`;

export interface loginToken {
  id: string
  name: string
  email: string
  iconUrl: string
}

export const useSession = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const login = async (): Promise<loginToken | null> => {
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
    if (token == "noneToken") {
      return null
    }
    return token
  }
  return { login, loading, error }
}