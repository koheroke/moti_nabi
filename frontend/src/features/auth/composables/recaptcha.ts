type RecaptchaAction = "SIGNUP" | "LOGIN";
const apiUrl = import.meta.env.VITE_API_BASE_URL;
const RECAPTCHA_key = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const url = `${apiUrl}/auth`;
const useRecaptchaToken = () => {
  const get = async (action: RecaptchaAction): Promise<string> => {
    await new Promise<void>((resolve) => {
      grecaptcha.enterprise.ready(() => {
        resolve();
      });
    });
    const token = await grecaptcha.enterprise.execute(RECAPTCHA_key, {
      action,
    });
    await fetch(
      `${url}/recaptcha`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token)
      }
    )
    return token;
  };

  return { get };
};

export { useRecaptchaToken };