const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/user`;
import { useUserAuthStore } from "@/store/user/userAuthStore"
const userAuthstore = useUserAuthStore()
const userDelete = async (password: string) => {
  const userId = userAuthstore.userId
  if (!userId) return null
  const data = await fetch(
    `${url}/deleteUser`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        password: password
      })
    })
  const res = await data.json()
  console.log(res)
  return res
}

export { userDelete }

