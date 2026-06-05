import { useUserAuthStore } from "@/store/user/userAuthStore"
const userStore = useUserAuthStore()
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/2fa`;
export interface Setup2FAResponse {
  secretBase32: string;
  otpauthUrl: string;
  qrCodeUrl: string;
}
export const use2fa = () => {
  const setup = async (): Promise<Setup2FAResponse> => {
    const response = await fetch(
      `${url}/setup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userStore.userId,
          email: userStore.userEmail
        })
      }
    )
    const data: Setup2FAResponse = await response.json()
    console.log("data:" + JSON.stringify(data))
    return data
  }

  const verification2fa = async (code: string): Promise<boolean> => {
    const response = await fetch(
      `${url}/verification`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userStore.userId,
          code: code
        })
      }
    )
    const verificationBool: boolean = await response.json()
    if (verificationBool) {
      userStore.set2fa()
    }
    return verificationBool

  }
  return { setup, verification2fa }
}

