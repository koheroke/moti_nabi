import {
  C as e,
  L as t,
  st as n,
  t as r,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { n as i } from "./index-DPNatowj.js";
import { t as a } from "./userAuthstore-BS2VQYb3.js";
var o = `http://localhost:3000/auth`,
  s = () => ({
    login: async () =>
      await (
        await fetch(`${o}/session/login`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
        })
      ).json(),
    loading: n(!1),
    error: n(null),
  }),
  c = e({
    __name: `sessionPage`,
    setup(e, { expose: n }) {
      n();
      let r = i(),
        o = s(),
        c = a();
      t(async () => {
        let e = await o.login();
        if (!e.email) {
          r.push(`/login`);
          return;
        }
        (c.login(e, ``), r.push(`/home`));
      });
      let l = { router: r, session: o, userAuthstore: c };
      return (
        Object.defineProperty(l, `__isScriptSetup`, {
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
var u = r(c, [
  [`render`, l],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/sessionPage.vue`,
  ],
]);
export { u as default };
