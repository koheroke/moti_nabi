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
  u as l,
  w as u,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { t as d } from "./BaseButton-BOvMoO14.js";
import { n as f } from "./index-C2cro6hN.js";
import { t as p } from "./userAuthstore-CclVSd_h.js";
import { t as m } from "./BaseInput-DMtlmy4F.js";
import "./BaseInput-MKsRuCLn.js";
import { n as h, r as g, t as _ } from "./recaptcha-CVTYAGdJ.js";
var v = `http://localhost:3000/auth/login`,
  y = p(),
  b = () => {
    let e = s(!1),
      t = s(null);
    return {
      login: async (n, r) => {
        ((e.value = !0), (t.value = null), console.log(n));
        try {
          let e = await (
            await fetch(v, {
              method: `POST`,
              headers: { "Content-Type": `application/json` },
              body: JSON.stringify(n),
            })
          ).json();
          return e == null ? null : (y.login(e, r), e);
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
  x = u({
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
function S(e, t, n, i, s, c) {
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
var C = c(x, [
    [`render`, S],
    [`__scopeId`, `data-v-d9b14dd5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/GoogleButton.vue`,
    ],
  ]),
  w = u({
    __name: `LoginForm`,
    setup(e, { expose: t }) {
      t();
      let n = _(),
        r = f(),
        i = b(),
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
            let e = await n.get(`SIGNUP`),
              t = await i.login({ email: a.value, password: o.value }, e);
            (console.log(`res`, t), t != null && r.push(`/home`));
          },
          loginWithGoogle: async () => {
            window.location.href = `/auth/googleLogin`;
          },
          get BaseInput() {
            return m;
          },
          get FormField() {
            return h;
          },
          get BaseButton() {
            return d;
          },
          get BaseLabel() {
            return g;
          },
          GoogleButton: C,
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
  T = { class: `form` };
function E(t, a, s, c, u, d) {
  return (
    r(),
    o(`form`, T, [
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
        { onClick: l(c.onLogin, [`prevent`]) },
        { default: i(() => [...(a[2] ||= [n(` ここでログイン`, -1)])]), _: 1 },
      ),
      e(c.BaseLabel, null, {
        default: i(() => [...(a[3] ||= [n(` ──────── または ──────── `, -1)])]),
        _: 1,
      }),
      e(c.GoogleButton, { onClick: c.loginWithGoogle }),
    ])
  );
}
var D = c(w, [
    [`render`, E],
    [`__scopeId`, `data-v-1ad1b424`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/LoginForm.vue`,
    ],
  ]),
  O = {},
  k = { class: `hero` };
function A(e, t) {
  return (r(), o(`div`, k));
}
var j = c(O, [
    [`render`, A],
    [`__scopeId`, `data-v-05d953b5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/right/AuthHero.vue`,
    ],
  ]),
  M = u({
    __name: `LoginPage`,
    setup(e, { expose: t }) {
      t();
      let n = {
        LoginForm: D,
        AuthHero: j,
        get BaseLabel() {
          return g;
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
  N = { class: `l-auth` },
  P = { class: `l-auth__left` },
  F = { class: `l-auth__right` },
  I = { class: `login-link` };
function L(s, c, l, u, d, f) {
  let p = t(`RouterLink`);
  return (
    r(),
    o(`div`, N, [
      a(`div`, P, [e(u.AuthHero)]),
      a(`div`, F, [
        e(
          u.BaseLabel,
          { class: `title` },
          { default: i(() => [...(c[0] ||= [n(`持ちナビ`, -1)])]), _: 1 },
        ),
        e(u.LoginForm),
        a(`p`, I, [
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
var R = c(M, [
  [`render`, L],
  [`__scopeId`, `data-v-228500b4`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/LoginPage.vue`,
  ],
]);
export { R as default };
