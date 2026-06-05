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
import "./index-GuthsImX.js";
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
  b = u(
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
  x = { class: `form` },
  S = u(
    l({
      __name: `LoginForm`,
      setup(e) {
        let c = g(),
          l = y(),
          u = o(``),
          f = o(``),
          _ = o(``),
          v = async () => {
            let e = await c.get(`SIGNUP`);
            l.login({ email: u.value, password: f.value }, e);
          },
          S = async () => {
            window.location.href = `/api/login/google`;
          };
        return (e, o) => (
          t(),
          s(`form`, x, [
            r(
              a(m),
              {
                label: `メールアドレスでログイン`,
                error: _.value,
                required: ``,
              },
              {
                default: n(() => [
                  r(
                    a(p),
                    {
                      modelValue: u.value,
                      "onUpdate:modelValue": (o[0] ||= (e) => (u.value = e)),
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
              { label: `パスワード`, error: _.value, required: `` },
              {
                default: n(() => [
                  r(
                    a(p),
                    {
                      modelValue: f.value,
                      "onUpdate:modelValue": (o[1] ||= (e) => (f.value = e)),
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
              { onClick: v },
              { default: n(() => [...(o[2] ||= [i(` ログイン`, -1)])]), _: 1 },
            ),
            r(a(h), null, {
              default: n(() => [
                ...(o[3] ||= [i(` ──────── または ──────── `, -1)]),
              ]),
              _: 1,
            }),
            r(b, { onClick: S }),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-25b80255`]],
  ),
  C = {},
  w = { class: `hero` };
function T(e, n) {
  return (t(), s(`div`, w));
}
var E = u(C, [
    [`render`, T],
    [`__scopeId`, `data-v-33f072a8`],
  ]),
  D = { class: `l-auth` },
  O = { class: `l-auth__left` },
  k = { class: `l-auth__right` },
  A = { class: `login-link` },
  j = u(
    l({
      __name: `LoginPage`,
      setup(o) {
        return (o, l) => {
          let u = e(`RouterLink`);
          return (
            t(),
            s(`div`, D, [
              c(`div`, O, [r(E)]),
              c(`div`, k, [
                r(
                  a(h),
                  { class: `title` },
                  {
                    default: n(() => [...(l[0] ||= [i(`持ちナビ`, -1)])]),
                    _: 1,
                  },
                ),
                r(S),
                c(`p`, A, [
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
export { j as default };
