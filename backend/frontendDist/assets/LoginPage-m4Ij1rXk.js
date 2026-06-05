import {
  B as e,
  C as t,
  S as n,
  W as r,
  X as i,
  g as a,
  st as o,
  t as s,
  x as c,
  y as l,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { t as u } from "./BaseButton-DgJxAwXf.js";
import "./index-DPNatowj.js";
import { t as d } from "./userAuthstore-BS2VQYb3.js";
import { t as f } from "./BaseInput-DJX8DiWo.js";
import "./BaseInput-Bn7Cheux.js";
import { n as p, r as m, t as h } from "./recaptcha-DsmNWtQC.js";
var g = `http://localhost:3000/auth`,
  _ = d(),
  v = () => {
    let e = o(!1),
      t = o(null);
    return {
      login: async (n, r) => {
        ((e.value = !0), (t.value = null), console.log(n));
        try {
          let e = await (
            await fetch(`${g}/login`, {
              method: `POST`,
              headers: { "Content-Type": `application/json` },
              body: JSON.stringify(n),
            })
          ).json();
          return (_.login(e, r), e);
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
  y = t({
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
function b(t, n, r, i, o, s) {
  return (
    e(),
    l(
      `button`,
      { class: `google-btn`, type: `button`, onClick: i.handleClick },
      [
        ...(n[0] ||= [
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
var x = s(y, [
    [`render`, b],
    [`__scopeId`, `data-v-d9b14dd5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/GoogleButton.vue`,
    ],
  ]),
  S = t({
    __name: `LoginForm`,
    setup(e, { expose: t }) {
      t();
      let n = h(),
        r = v(),
        i = o(``),
        a = o(``),
        s = {
          recaptchaToken: n,
          Login: r,
          email: i,
          passward: a,
          error: o(``),
          onLogin: async () => {
            let e = await n.get(`SIGNUP`);
            r.login({ email: i.value, password: a.value }, e);
          },
          loginWithGoogle: async () => {
            window.location.href = `/auth/googleLogin`;
          },
          get BaseInput() {
            return f;
          },
          get FormField() {
            return p;
          },
          get BaseButton() {
            return u;
          },
          get BaseLabel() {
            return m;
          },
          GoogleButton: x,
        };
      return (
        Object.defineProperty(s, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  C = { class: `form` };
function w(t, r, a, o, s, u) {
  return (
    e(),
    l(`form`, C, [
      n(
        o.FormField,
        { label: `メールアドレスでログイン`, error: o.error, required: `` },
        {
          default: i(() => [
            n(
              o.BaseInput,
              {
                modelValue: o.email,
                "onUpdate:modelValue": (r[0] ||= (e) => (o.email = e)),
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
      n(
        o.FormField,
        { label: `パスワード`, error: o.error, required: `` },
        {
          default: i(() => [
            n(
              o.BaseInput,
              {
                modelValue: o.passward,
                "onUpdate:modelValue": (r[1] ||= (e) => (o.passward = e)),
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
      n(
        o.BaseButton,
        { onClick: o.onLogin },
        { default: i(() => [...(r[2] ||= [c(` ログイン`, -1)])]), _: 1 },
      ),
      n(o.BaseLabel, null, {
        default: i(() => [...(r[3] ||= [c(` ──────── または ──────── `, -1)])]),
        _: 1,
      }),
      n(o.GoogleButton, { onClick: o.loginWithGoogle }),
    ])
  );
}
var T = s(S, [
    [`render`, w],
    [`__scopeId`, `data-v-1ad1b424`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/left/LoginForm.vue`,
    ],
  ]),
  E = {},
  D = { class: `hero` };
function O(t, n) {
  return (e(), l(`div`, D));
}
var k = s(E, [
    [`render`, O],
    [`__scopeId`, `data-v-05d953b5`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/auth/components/login/right/AuthHero.vue`,
    ],
  ]),
  A = t({
    __name: `LoginPage`,
    setup(e, { expose: t }) {
      t();
      let n = {
        LoginForm: T,
        AuthHero: k,
        get BaseLabel() {
          return m;
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
  j = { class: `l-auth` },
  M = { class: `l-auth__left` },
  N = { class: `l-auth__right` },
  P = { class: `login-link` };
function F(t, o, s, u, d, f) {
  let p = r(`RouterLink`);
  return (
    e(),
    l(`div`, j, [
      a(`div`, M, [n(u.AuthHero)]),
      a(`div`, N, [
        n(
          u.BaseLabel,
          { class: `title` },
          { default: i(() => [...(o[0] ||= [c(`持ちナビ`, -1)])]), _: 1 },
        ),
        n(u.LoginForm),
        a(`p`, P, [
          n(
            p,
            { to: `/signup` },
            { default: i(() => [...(o[1] ||= [c(`新規登録`, -1)])]), _: 1 },
          ),
          (o[2] ||= c(` はこちら `, -1)),
        ]),
      ]),
    ])
  );
}
var I = s(A, [
  [`render`, F],
  [`__scopeId`, `data-v-228500b4`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/auth/LoginPage.vue`,
  ],
]);
export { I as default };
