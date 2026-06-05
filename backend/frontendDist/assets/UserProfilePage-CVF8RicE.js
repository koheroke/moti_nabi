import {
  C as e,
  R as t,
  S as n,
  St as r,
  V as i,
  Z as a,
  _ as o,
  b as s,
  ct as c,
  t as l,
  w as u,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { t as d } from "./BaseButton-BOvMoO14.js";
import { a as f, t as p } from "./index-Cfo4I9nX.js";
import { t as m } from "./userAuthstore-CclVSd_h.js";
import { t as h } from "./BaseInput-DMtlmy4F.js";
import "./BaseInput-MKsRuCLn.js";
import "./workPackageStore-CHuZhDEm.js";
import "./useIncrementalList-eUEiRs80.js";
import "./GalleryWorksSection-zsXzzoxQ.js";
import { t as g } from "./BaseTextArea-D4kxpvp6.js";
var _ = f(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  v = `https://picsum.photos/400/300`,
  y = async () => (
    await b(500),
    {
      id: `user-001`,
      name: `あずまこうへい`,
      iconUrl: v,
      bio: `持ち物リストや作品を作っています。`,
      snsLinks: [],
      createdAt: `2026-05-01`,
      postCount: 3,
    }
  ),
  b = (e) => new Promise((t) => setTimeout(t, e)),
  x = async (e) => await y(),
  S = u({
    __name: `ProfileEdit`,
    props: { userId: { type: String, required: !0 } },
    setup(e, { expose: n }) {
      n();
      let r = c(``),
        i = c(``),
        a = c(null),
        o = e,
        s = () => {};
      t(async () => {
        ((a.value = await x(o.userId)),
          (r.value = a.value?.bio || ``),
          (i.value = a.value?.name || ``));
      });
      let l = {
        bio: r,
        name: i,
        userProfile: a,
        props: o,
        pushEdit: s,
        get BaseTextArea() {
          return g;
        },
        get BaseInput() {
          return h;
        },
        get Camera() {
          return _;
        },
        get BaseButton() {
          return d;
        },
      };
      return (
        Object.defineProperty(l, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  }),
  C = { key: 0, class: `profile` },
  w = { class: `header` },
  T = { class: `right` },
  E = { class: `icon` },
  D = [`src`],
  O = { class: `icon-edit` },
  k = { class: `user-info` },
  A = { class: `user-id` },
  j = { class: `left` },
  M = {
    style: {
      display: `flex`,
      "justify-content": `center`,
      "margin-bottom": `10px`,
    },
  },
  N = { class: `profile-description` },
  P = { class: `bio` },
  F = { class: `meta` },
  I = { key: 1, class: `profile` };
function L(t, c, l, u, d, f) {
  return u.userProfile
    ? (i(),
      s(`div`, C, [
        o(`div`, w, [
          o(`section`, T, [
            o(`div`, E, [
              o(
                `img`,
                { src: u.userProfile.iconUrl, class: `icon_image` },
                null,
                8,
                D,
              ),
              o(`div`, O, [
                e(u.Camera, { fill: `white`, size: 100, color: `#1514143d` }),
              ]),
            ]),
            o(`div`, k, [
              e(
                u.BaseInput,
                {
                  modelValue: u.name,
                  "onUpdate:modelValue": (c[0] ||= (e) => (u.name = e)),
                  class: `name`,
                },
                null,
                8,
                [`modelValue`],
              ),
              o(`div`, A, `@` + r(u.userProfile.id), 1),
            ]),
          ]),
          o(`section`, j, [
            o(`div`, M, [
              (c[3] ||= o(
                `h1`,
                { style: { "font-size": `20px`, margin: `0` } },
                `プロフィール`,
                -1,
              )),
              e(
                u.BaseButton,
                { style: { "margin-left": `auto` }, onClick: u.pushEdit },
                {
                  default: a(() => [...(c[2] ||= [n(`変更を保存 `, -1)])]),
                  _: 1,
                },
              ),
            ]),
            o(`div`, N, [
              (c[4] ||= n(r(`自己紹介 :`) + ` `, -1)),
              o(`div`, P, [
                e(
                  u.BaseTextArea,
                  {
                    modelValue: u.bio,
                    "onUpdate:modelValue": (c[1] ||= (e) => (u.bio = e)),
                  },
                  null,
                  8,
                  [`modelValue`],
                ),
              ]),
              (c[5] ||= o(
                `div`,
                { class: `sns` },
                [
                  o(`img`, { src: `/svgicons/sns/instagram.svg`, alt: `icon` }),
                  o(`img`, { src: `/svgicons/sns/x.svg`, alt: `icon` }),
                  o(`img`, { src: `/svgicons/sns/facebook.svg`, alt: `icon` }),
                ],
                -1,
              )),
              o(`div`, F, [
                o(`span`, null, `📅 ` + r(u.userProfile.createdAt), 1),
                o(`span`, null, `📊 投稿数：` + r(u.userProfile.postCount), 1),
              ]),
            ]),
          ]),
        ]),
      ]))
    : (i(), s(`div`, I, `読み込み中...`));
}
var R = l(S, [
    [`render`, L],
    [`__scopeId`, `data-v-2de28378`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/user/components/ProfileEdit.vue`,
    ],
  ]),
  z = u({
    __name: `UserProfilePage`,
    setup(e, { expose: t }) {
      t();
      let n = m(),
        r = p(),
        i = c(),
        a = r.query.edit,
        o = Array.isArray(r.params.userId)
          ? r.params.userId[0]
          : r.params.userId,
        s = {
          userAuthstore: n,
          route: r,
          profile: i,
          editbool: a,
          userId: o,
          edit: c(o == n.userId ? a : !1),
          ProfileEdit: R,
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
  B = { class: `page` };
function V(t, n, r, a, o, c) {
  return (
    i(),
    s(`div`, B, [e(a.ProfileEdit, { userId: a.userId }, null, 8, [`userId`])])
  );
}
var H = l(z, [
  [`render`, V],
  [`__scopeId`, `data-v-0becedbe`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/user/UserProfilePage.vue`,
  ],
]);
export { H as default };
