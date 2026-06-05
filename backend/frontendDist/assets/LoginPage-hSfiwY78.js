import {
  C as e,
  G as t,
  S as n,
  V as r,
  Z as i,
  _ as a,
  b as o,
  ct as s,
  t as c,
  w as l,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { t as u } from "./BaseButton-BOvMoO14.js";
import { n as d } from "./index-9brz4ZpC.js";
import { t as f } from "./userAuthstore-CclVSd_h.js";
import { t as p } from "./BaseInput-DMtlmy4F.js";
import "./BaseInput-MKsRuCLn.js";
import { n as m, r as h, t as g } from "./recaptcha-CVTYAGdJ.js";
var _ = `http://localhost:3000/auth`,
  v = f(),
  y = () => {
    let e = s(!1),
      t = s(null);
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
          return e == null ? null : (v.login(e, r), e);
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
  b = l({
    __name: `GoogleButton`,
    emits: [`click`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = n,
        i = {
          emit: r,
          handleClick: () => {
            r(`click`);
          },
        };
      return (
        Object.defineProperty(i, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  });
function x(e, t, n, i, s, c) {
  return (
    r(),
    o(
      `button`,
      { class: `google-btn`, type: `button`, onClick: i.handleClick },
      [
        ...(t[0] ||= [
          a(
            `img`,
            {
              src: `https://developers.google.com/identity/images/g-logo.png`,
              alt: `Google`,
              class: `icon`,
            },
            null,
            -1,
          ),
          a(`span`, null, `Googleでログイン`, -1),
        ]),
      ],
    )
  );
}
var S = c(b, [
    [`render`, x],
    [`__scopeId`, `data-v-d9b14dd5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/GoogleButton.vue`,
    ],
  ]),
  C = l({
    __name: `LoginForm`,
    setup(e, { expose: t }) {
      t();
      let n = g(),
        r = d(),
        i = y(),
        a = s(``),
        o = s(``),
        c = {
          recaptchaToken: n,
          router: r,
          Login: i,
          email: a,
          passward: o,
          error: s(``),
          onLogin: async () => {
            let e = await n.get(`SIGNUP`);
            (await i.login({ email: a.value, password: o.value }, e)) != null &&
              r.push(`/home`);
          },
          loginWithGoogle: async () => {
            window.location.href = `/auth/googleLogin`;
          },
          get BaseInput() {
            return p;
          },
          get FormField() {
            return m;
          },
          get BaseButton() {
            return u;
          },
          get BaseLabel() {
            return h;
          },
          GoogleButton: S,
        };
      return (
        Object.defineProperty(c, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        c
      );
    },
  }),
  w = { class: `form` };
function T(t, a, s, c, l, u) {
  return (
    r(),
    o(`form`, w, [
      e(
        c.FormField,
        { label: `メールアドレスでログイン`, error: c.error, required: `` },
        {
          default: i(() => [
            e(
              c.BaseInput,
              {
                modelValue: c.email,
                "onUpdate:modelValue": (a[0] ||= (e) => (c.email = e)),
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
      e(
        c.FormField,
        { label: `パスワード`, error: c.error, required: `` },
        {
          default: i(() => [
            e(
              c.BaseInput,
              {
                modelValue: c.passward,
                "onUpdate:modelValue": (a[1] ||= (e) => (c.passward = e)),
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
      e(
        c.BaseButton,
        { onClick: c.onLogin },
        { default: i(() => [...(a[2] ||= [n(` ログイン`, -1)])]), _: 1 },
      ),
      e(c.BaseLabel, null, {
        default: i(() => [...(a[3] ||= [n(` ──────── または ──────── `, -1)])]),
        _: 1,
      }),
      e(c.GoogleButton, { onClick: c.loginWithGoogle }),
    ])
  );
}
var E = c(C, [
    [`render`, T],
    [`__scopeId`, `data-v-1ad1b424`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/LoginForm.vue`,
    ],
  ]),
  D = {},
  O = { class: `hero` };
function k(e, t) {
  return (r(), o(`div`, O));
}
var A = c(D, [
    [`render`, k],
    [`__scopeId`, `data-v-05d953b5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/right/AuthHero.vue`,
    ],
  ]),
  j = l({
    __name: `LoginPage`,
    setup(e, { expose: t }) {
      t();
      let n = {
        LoginForm: E,
        AuthHero: A,
        get BaseLabel() {
          return h;
        },
      };
      return (
        Object.defineProperty(n, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  M = { class: `l-auth` },
  N = { class: `l-auth__left` },
  P = { class: `l-auth__right` },
  F = { class: `login-link` };
function I(s, c, l, u, d, f) {
  let p = t(`RouterLink`);
  return (
    r(),
    o(`div`, M, [
      a(`div`, N, [e(u.AuthHero)]),
      a(`div`, P, [
        e(
          u.BaseLabel,
          { class: `title` },
          { default: i(() => [...(c[0] ||= [n(`持ちナビ`, -1)])]), _: 1 },
        ),
        e(u.LoginForm),
        a(`p`, F, [
          e(
            p,
            { to: `/signup` },
            { default: i(() => [...(c[1] ||= [n(`新規登録`, -1)])]), _: 1 },
          ),
          (c[2] ||= n(` はこちら `, -1)),
        ]),
      ]),
    ])
  );
}
var L = c(j, [
  [`render`, I],
  [`__scopeId`, `data-v-228500b4`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/LoginPage.vue`,
  ],
]);
export { L as default };
