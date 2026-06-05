import {
  R as e,
  ct as t,
  t as n,
  w as r,
} from "./_plugin-vue_export-helper-Bh2CkUK5.js";
import { n as i } from "./index-COdq92lb.js";
import { t as a } from "./userAuthStore-BvaSD8Vv.js";
var o = `http://localhost:3000/auth`,
  s = () => ({
    getSessionToken: async () => {
      let e = await (
        await fetch(`${o}/session/getToken`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
        })
      ).json();
      return e == `noneToken` ? null : e;
    },
    verificationSessionToken: async (e) =>
      await (
        await fetch(`${o}/session/verificationToken`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ token: e }),
        })
      ).json(),
    loading: t(!1),
    error: t(null),
  }),
  c = r({
    __name: `sessionPage`,
    setup(t, { expose: n }) {
      n();
      let r = i(),
        o = s(),
        c = a();
      e(async () => {
        let e = await o.getSessionToken();
        if (!e) {
          r.push(`/login`);
          return;
        }
        console.log(`token`, e);
        let t = await o.verificationSessionToken(e);
        if ((console.log(`userData`, t), !t)) {
          r.push(`/login`);
          return;
        }
        (c.login(t, ``), r.push(`/home`));
      });
      let l = { router: r, session: o, userAuthstore: c };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function l(e, t, n, r, i, a) {
  return null;
}
var u = n(c, [
  [`render`, l],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/sessionPage.vue`,
  ],
]);
export { u as default };
