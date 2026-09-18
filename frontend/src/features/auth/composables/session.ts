import { ref } from "vue"
import { type userData } from "../type/SessionType";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth`;


export const useSession = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const getSessionToken = async (): Promise<userData | undefined> => {
    const response = await fetch(
      `${url}/session/getToken`,
      {
        credentials: "include",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    console.log("response.ok", response.ok)
    if (!response.ok) return undefined;
    const data = await response.json()
    console.log(data, "data")
    if (!data) {
      return undefined
    }
    return data
  }

  return { getSessionToken, loading, error }
}
