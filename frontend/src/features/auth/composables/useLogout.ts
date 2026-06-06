const apiUrl = import.meta.env.VITE_API_BASE_URL;
const url = `${apiUrl}/auth/logout`;

const useLogout = async () => {
  const res = await fetch(
    url,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await res.json()
  return data
}

export { useLogout }


