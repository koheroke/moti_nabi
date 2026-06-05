import { ref } from "vue"
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth`;


export const useSession = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const getSessionToken = async (): Promise<string | null> => {
    const response = await fetch(
      `${url}/session/getToken`,
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


  const verificationSessionToken = async (token: string) => {
    const response = await fetch(
      `${url}/session/verificationToken`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token })
      }
    )
    const data = await response.json()
    return data
  }
  return { getSessionToken, verificationSessionToken, loading, error }
}

