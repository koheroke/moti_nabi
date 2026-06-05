import {
  B as e,
  I as t,
  Y as n,
  _ as r,
  g as i,
  mt as a,
  ot as o,
  p as s,
  u as c,
  v as l,
} from "./runtime-core.esm-bundler-BxSeyN28.js";
import { t as u } from "./_plugin-vue_export-helper-CXTkFu_Z.js";
import { t as d } from "./BaseButton-BuHe-3wu.js";
import "./index-B82f_CT3.js";
import { t as f } from "./userAuthstore-y9warsrk.js";
import { t as p } from "./BaseInput-DBFJL_17.js";
import { n as m, r as h, t as g } from "./recaptcha-Bi4egx-6.js";
var _ = `http://localhost:3000/auth`,
  v = f(),
  y = () => {
    let e = o(!1),
      t = o(null);
    return {
      login: async (n, r) => {
        ((e.value = !0), (t.value = null), console.log(n));
        try {
          let e = await (
            await fetch(`${_}/login`, {
              method: `POST`,
              headers: { "Content-Type": `application/json` },
              body: JSON.stringify(n),
            })
          ).json();
          return (v.login(e, r), e);
        } catch {
          t.value = `登録失敗`;
        } finally {
          e.value = !1;
        }
      },
      loading: e,
      error: t,
    };
  },
  b = () => {
    let e = o(!1),
      t = o(null);
    return {
      login: async (n) => {
        ((e.value = !0), (t.value = null));
        try {
          let e = await (
            await fetch(`${_}/googleLogin`, {
              method: `POST`,
              headers: { "Content-Type": `application/json` },
            })
          ).json();
          return (v.login(e, n), e);
        } catch {
          t.value = `登録失敗`;
        } finally {
          e.value = !1;
        }
      },
      loading: e,
      error: t,
    };
  },
  x = u(
    l({
      __name: `GoogleButton`,
      emits: [`click`],
      setup(e, { emit: n }) {
        let r = n,
          i = () => {
            r(`click`);
          };
        return (e, n) => (
          t(),
          s(`button`, { class: `google-btn`, type: `button`, onClick: i }, [
            ...(n[0] ||= [
              c(
                `img`,
                {
                  src: `https://developers.google.com/identity/images/g-logo.png`,
                  alt: `Google`,
                  class: `icon`,
                },
                null,
                -1,
              ),
              c(`span`, null, `Googleでログイン`, -1),
            ]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-34a685d5`]],
  ),
  S = { class: `form` },
  C = u(
    l({
      __name: `LoginForm`,
      setup(e) {
        let c = b(),
          l = g(),
          u = y(),
          f = o(``),
          _ = o(``),
          v = o(``),
          C = async () => {
            let e = await l.get(`SIGNUP`);
            u.login({ email: f.value, password: _.value }, e);
          },
          w = async () => {
            let e = await l.get(`SIGNUP`);
            c.login(e);
          };
        return (e, o) => (
          t(),
          s(`form`, S, [
            r(
              a(m),
              {
                label: `メールアドレスでログイン`,
                error: v.value,
                required: ``,
              },
              {
                default: n(() => [
                  r(
                    a(p),
                    {
                      modelValue: f.value,
                      "onUpdate:modelValue": (o[0] ||= (e) => (f.value = e)),
                      type: `name`,
                    },
                    null,
                    8,
                    [`modelValue`],
                  ),
                ]),
                _: 1,
              },
              8,
              [`error`],
            ),
            r(
              a(m),
              { label: `パスワード`, error: v.value, required: `` },
              {
                default: n(() => [
                  r(
                    a(p),
                    {
                      modelValue: _.value,
                      "onUpdate:modelValue": (o[1] ||= (e) => (_.value = e)),
                      title: `形式に合ったパスワードを入力してください`,
                      type: `password`,
                      pattern: `^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$`,
                    },
                    null,
                    8,
                    [`modelValue`],
                  ),
                ]),
                _: 1,
              },
              8,
              [`error`],
            ),
            r(
              a(d),
              { onClick: C },
              { default: n(() => [...(o[2] ||= [i(` ログイン`, -1)])]), _: 1 },
            ),
            r(a(h), null, {
              default: n(() => [
                ...(o[3] ||= [i(` ──────── または ──────── `, -1)]),
              ]),
              _: 1,
            }),
            r(x, { onClick: w }),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-38f80880`]],
  ),
  w = {},
  T = { class: `hero` };
function E(e, n) {
  return (t(), s(`div`, T));
}
var D = u(w, [
    [`render`, E],
    [`__scopeId`, `data-v-33f072a8`],
  ]),
  O = { class: `l-auth` },
  k = { class: `l-auth__left` },
  A = { class: `l-auth__right` },
  j = { class: `login-link` },
  M = u(
    l({
      __name: `LoginPage`,
      setup(o) {
        return (o, l) => {
          let u = e(`RouterLink`);
          return (
            t(),
            s(`div`, O, [
              c(`div`, k, [r(D)]),
              c(`div`, A, [
                r(
                  a(h),
                  { class: `title` },
                  {
                    default: n(() => [...(l[0] ||= [i(`持ちナビ`, -1)])]),
                    _: 1,
                  },
                ),
                r(C),
                c(`p`, j, [
                  r(
                    u,
                    { to: `/signup` },
                    {
                      default: n(() => [...(l[1] ||= [i(`新規登録`, -1)])]),
                      _: 1,
                    },
                  ),
                  (l[2] ||= i(` はこちら `, -1)),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [[`__scopeId`, `data-v-257aa90a`]],
  );
export { M as default };
