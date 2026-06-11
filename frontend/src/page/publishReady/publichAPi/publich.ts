const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
import { type editAboutType } from "@/features/workDetailEdit/store/useworkDetail"
import { type RequireAtLeastOne } from '@/types/RequireAtLeastOne'
export type publichTokenType = RequireAtLeastOne<editAboutType> & {
  id: string;
}

const publicWork = async (publichToken: publichTokenType) => {
  const res = await fetch(
    `${url}/publicWork`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...publichToken
      })
    })
  const data = await res.json()
  return data
}
export { publicWork }