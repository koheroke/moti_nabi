import {
  R as e,
  ct as t,
  t as n,
  w as r,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { n as i } from "./index-Cfo4I9nX.js";
import { t as a } from "./userAuthstore-CclVSd_h.js";
var o = `http://localhost:3000/auth`,
  s = () => ({
    login: async () => {
      let e = await (
        await fetch(`${o}/session/login`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
        })
      ).json();
      return e == `noneToken` ? null : e;
    },
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
        let e = await o.login();
        if (!e) {
          r.push(`/login`);
          return;
        }
        (e && c.login(e, ``), r.push(`/home`));
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
var u = n(c, [
  [`render`, l],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/sessionPage.vue`,
  ],
]);
export { u as default };
