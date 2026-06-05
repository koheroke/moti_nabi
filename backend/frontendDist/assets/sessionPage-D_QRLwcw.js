import {
  N as e,
  ot as t,
  v as n,
} from "./runtime-core.esm-bundler-BxSeyN28.js";
import { n as r } from "./index-GuthsImX.js";
import { t as i } from "./userAuthstore-y9warsrk.js";
var a = `http://localhost:3000/auth`,
  o = () => ({
    login: async () =>
      await (
        await fetch(`${a}/session/login`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
        })
      ).json(),
    loading: t(!1),
    error: t(null),
  }),
  s = n({
    __name: `sessionPage`,
    setup(t) {
      let n = r(),
        a = o(),
        s = i();
      return (
        e(async () => {
          let e = await a.login();
          if (!e.email) {
            n.push(`/login`);
            return;
          }
          (s.login(e, ``), n.push(`/home`));
        }),
        (e, t) => null
      );
    },
  });
export { s as default };
