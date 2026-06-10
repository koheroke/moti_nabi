const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/work`;
export interface publichTokenType {
  id: string;
  name: string;
  bio: string;
  tags: string[];
  thumbnailUrl: string;
}

const publicWork = async (publichToken: publichTokenType) => {
  console.log("publichToken", publichToken)
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