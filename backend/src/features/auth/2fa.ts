import speakeasy from "speakeasy";
import qrcode from "qrcode";
import { prisma } from "@/lib/prisma/prisma"
import { authenticator } from '@otplib/preset-default';
import { useSession } from '@/features/auth/session';
import { Context } from "hono";
const this_session = useSession()


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
      name: `moti_nabi:${user.email}`,
    });
    await prisma.userAuth.update({
      where: { userId: user.userId },
      data: { twoFactorSecret: secret.base32 }
    });
    // const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);
    return {
      otpauthUrl: secret.otpauth_url,
    };
  }
  const verification2fa = async (user: verification, c: Context): Promise<boolean> => {
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
    // await prisma.userAuth.update({
    //   where: { userId: user.userId },
    //   data: { secoundfaEnabled: true }
    // });
    console.log("setLoginSession")
    await this_session.setLoginSession(c, user.userId, "user")
    this_session.discardToken(c, "provisional_auth_token")
    return isValid
  }
  return { setUp, verification2fa }
}
