import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { DBdriver } from "../drivers/DBdriver";
import { authenticator } from '@otplib/preset-default';
interface User {
  userId: string
  email: string
}
interface verification {
  userId: string
  code: string
}
export const use2fa = () => {
  const setUp = async (user: User) => {
    const secret = speakeasy.generateSecret({
      name: `YourAppName:${user.email}`,
    });
    await DBdriver.saveSecretToDB(user.userId, secret.base32);
    const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
    return {
      secretBase32: secret.base32,
      otpauthUrl: secret.otpauth_url,
      qrCodeUrl: qrCodeUrl,
    };
  }
  const verification2fa = async (user: verification): Promise<boolean> => {
    const secretBase32 = await DBdriver.getSecretToDB(user.userId)
    const isValid = await authenticator.check(user.code, secretBase32);
    return isValid
  }
  return { setUp, verification2fa }
}
