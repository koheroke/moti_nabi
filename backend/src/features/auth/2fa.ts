import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { prisma } from "@/lib/prisma/prisma"
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
    await prisma.userAuth.update({
      where: { userId: user.userId },
      data: { twoFactorSecret: secret.base32 }
    });
    const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
    return {
      secretBase32: secret.base32,
      otpauthUrl: secret.otpauth_url,
      qrCodeUrl: qrCodeUrl,
    };
  }
  const verification2fa = async (user: verification): Promise<boolean> => {
    const userResponse = await prisma.userAuth.findFirst({
      where: {
        userId: user.userId
      }
      , select: {
        twoFactorSecret: true
      }
    });
    if (!userResponse) return false
    const secretBase32 = userResponse.twoFactorSecret
    if (!secretBase32) return false
    const isValid = authenticator.check(user.code, secretBase32);
    if (!isValid) return false;


    await prisma.userAuth.update({
      where: { userId: user.userId },
      data: { secoundfaEnabled: true }
    });

    return isValid
  }
  return { setUp, verification2fa }
}
