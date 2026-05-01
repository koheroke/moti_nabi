export const verifyRecaptcha = async (token: string) => {
  const params = new URLSearchParams()
  params.append('secret', process.env.RECAPTCHA_SECRET_KEY!)
  params.append('response', token)
  const res = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      body: params,
    }
  )
  return await res.json()
}