import {
  B as e,
  C as t,
  H as n,
  L as r,
  S as i,
  d as a,
  g as o,
  st as s,
  t as c,
  v as l,
  x as u,
  xt as d,
  y as f,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { a as p, t as m } from "./index-DPNatowj.js";
import { t as h } from "./userAuthstore-BS2VQYb3.js";
import { t as ee } from "./BaseInput-DJX8DiWo.js";
import "./BaseInput-Bn7Cheux.js";
import { n as g, t as _ } from "./useIncrementalList-DqpvJfMt.js";
import { t as v } from "./GalleryWorksSection-D5Q6Rkky.js";
var y = p(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  b = `https://picsum.photos/400/300`,
  x = `https://www.google.com/s2/favicons?domain=github.com`,
  S = async () => (
    await C(500),
    {
      id: `user-001`,
      name: `あずまこうへい`,
      iconUrl: b,
      bio: `持ち物リストや作品を作っています。`,
      snsLinks: [
        { url: `https://x.com/example`, type: `x`, icon: x },
        { url: `https://github.com/example`, type: `github`, icon: x },
      ],
      createdAt: `2026-05-01`,
      postCount: 3,
    }
  ),
  C = (e) => new Promise((t) => setTimeout(t, e)),
  w = async (e) => await S(),
  T = t({
    __name: `ProfileSection`,
    props: { userId: { type: String, required: !0 } },
    setup(e, { expose: t }) {
      t();
      let n = s(null),
        i = e;
      r(async () => {
        n.value = await w(i.userId);
      });
      let a = { profile: n, props: i };
      return (
        Object.defineProperty(a, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  E = { key: 0, class: `profile` },
  D = { class: `header` },
  O = { class: `right` },
  k = [`src`],
  A = { class: `user-info` },
  j = { class: `name` },
  M = { class: `user-id` },
  N = { class: `left` },
  P = { class: `profile-description` },
  F = { class: `bio` },
  I = { class: `sns` },
  L = [`href`],
  R = [`src`],
  z = { class: `meta` },
  B = { key: 1, class: `profile` };
function V(t, r, i, s, c, l) {
  return s.profile
    ? (e(),
      f(`div`, E, [
        o(`div`, D, [
          o(`section`, O, [
            o(`img`, { src: s.profile.iconUrl, class: `icon` }, null, 8, k),
            o(`div`, A, [
              o(`div`, j, d(s.profile.name), 1),
              o(`div`, M, `@` + d(s.profile.id), 1),
            ]),
          ]),
          o(`section`, N, [
            (r[1] ||= o(`div`, { class: `title` }, d(`プロフィール`), -1)),
            o(`div`, P, [
              (r[0] ||= u(d(`自己紹介 :`) + ` `, -1)),
              o(`div`, F, d(s.profile.bio), 1),
              o(`div`, I, [
                (e(!0),
                f(
                  a,
                  null,
                  n(
                    s.profile.snsLinks,
                    (t) => (
                      e(),
                      f(
                        `a`,
                        {
                          key: t.url,
                          href: t.url,
                          target: `_blank`,
                          class: `sns`,
                        },
                        [
                          o(`img`, { src: t.icon, class: `icon` }, null, 8, R),
                          u(` ` + d(t.type), 1),
                        ],
                        8,
                        L,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              o(`div`, z, [
                o(`span`, null, `📅 ` + d(s.profile.createdAt), 1),
                o(`span`, null, `📊 投稿数：` + d(s.profile.postCount), 1),
              ]),
            ]),
          ]),
        ]),
      ]))
    : (e(), f(`div`, B, `読み込み中...`));
}
var H = c(T, [
    [`render`, V],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/user/components/ProfileSection.vue`,
    ],
  ]),
  U = (e) => {
    let t = s([]);
    r(async () => {
      t.value = await g();
    });
    let { visibleItems: n, more: i } = _(t, e);
    return { works: t, more: i, visibleWorks: n };
  },
  W = 20,
  G = t({
    __name: `UserWorksPanel`,
    setup(e, { expose: t }) {
      t();
      let { visibleWorks: n, more: r } = U(W),
        i = {
          step: W,
          visibleWorks: n,
          more: r,
          onMoreClick: () => {
            r();
          },
          GalleryWorksSection: v,
        };
      return (
        Object.defineProperty(i, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  K = { class: `UserWorksPanel` };
function q(t, n, r, a, o, s) {
  return (
    e(),
    f(`div`, K, [
      i(
        a.GalleryWorksSection,
        { works: a.visibleWorks, onMoreClick: a.onMoreClick },
        null,
        8,
        [`works`],
      ),
    ])
  );
}
var J = c(G, [
    [`render`, q],
    [`__scopeId`, `data-v-c5497d41`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/user/components/UserWorksPanel.vue`,
    ],
  ]),
  Y = t({
    __name: `BaseTextArea`,
    props: {
      id: { type: String, required: !1, default: `textarea` },
      label: { type: String, required: !1 },
      modelValue: { type: String, required: !0 },
      placeholder: { type: String, required: !1, default: `` },
      maxlength: { type: Number, required: !1 },
      rows: { type: Number, required: !1, default: 4 },
      disabled: { type: Boolean, required: !1, default: !1 },
    },
    emits: [`update:modelValue`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = n,
        i = {
          emit: r,
          onInput: (e) => {
            let t = e.target;
            r(`update:modelValue`, t.value);
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
  }),
  X = { class: `textarea-field` },
  Z = [`for`],
  te = [`id`, `value`, `placeholder`, `maxlength`, `disabled`, `rows`],
  Q = { key: 1, class: `textarea-count` };
function ne(t, n, r, i, a, s) {
  return (
    e(),
    f(`div`, X, [
      r.label
        ? (e(),
          f(
            `label`,
            { key: 0, for: r.id, class: `textarea-label` },
            d(r.label),
            9,
            Z,
          ))
        : l(``, !0),
      o(
        `textarea`,
        {
          id: r.id,
          value: r.modelValue,
          placeholder: r.placeholder,
          maxlength: r.maxlength,
          disabled: r.disabled,
          rows: r.rows,
          class: `textarea`,
          onBlur: i.onInput,
        },
        null,
        40,
        te,
      ),
      r.maxlength
        ? (e(), f(`div`, Q, d(r.modelValue.length) + ` / ` + d(r.maxlength), 1))
        : l(``, !0),
    ])
  );
}
var re = c(Y, [
    [`render`, ne],
    [`__scopeId`, `data-v-030cfa6d`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/components/ui/form/BaseTextArea/BaseTextArea.vue`,
    ],
  ]),
  ie = t({
    __name: `ProfileEdit`,
    props: { userId: { type: String, required: !0 } },
    setup(e, { expose: t }) {
      t();
      let n = s(``),
        i = s(``),
        a = s(null),
        o = e;
      r(async () => {
        ((a.value = await w(o.userId)),
          (n.value = a.value?.bio || ``),
          (i.value = a.value?.name || ``));
      });
      let c = {
        bio: n,
        name: i,
        userProfile: a,
        props: o,
        get BaseTextArea() {
          return re;
        },
        get BaseInput() {
          return ee;
        },
        get Camera() {
          return y;
        },
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
  ae = { key: 0, class: `profile` },
  oe = { class: `header` },
  se = { class: `right` },
  ce = { class: `icon` },
  le = [`src`],
  ue = { class: `icon-edit` },
  de = { class: `user-info` },
  fe = { class: `user-id` },
  pe = { class: `left` },
  me = { class: `profile-description` },
  he = { class: `bio` },
  ge = { class: `sns` },
  _e = [`href`],
  ve = [`src`],
  ye = { class: `meta` },
  be = { key: 1, class: `profile` };
function $(t, r, s, c, l, p) {
  return c.userProfile
    ? (e(),
      f(`div`, ae, [
        o(`div`, oe, [
          o(`section`, se, [
            o(`div`, ce, [
              o(
                `img`,
                { src: c.userProfile.iconUrl, class: `icon_image` },
                null,
                8,
                le,
              ),
              o(`div`, ue, [
                i(c.Camera, { fill: `white`, size: 100, color: `#1514143d` }),
              ]),
            ]),
            o(`div`, de, [
              i(
                c.BaseInput,
                {
                  modelValue: c.name,
                  "onUpdate:modelValue": (r[0] ||= (e) => (c.name = e)),
                  class: `name`,
                },
                null,
                8,
                [`modelValue`],
              ),
              o(`div`, fe, `@` + d(c.userProfile.id), 1),
            ]),
          ]),
          o(`section`, pe, [
            (r[3] ||= o(`div`, { class: `title` }, d(`プロフィール`), -1)),
            o(`div`, me, [
              (r[2] ||= u(d(`自己紹介 :`) + ` `, -1)),
              o(`div`, he, [
                i(
                  c.BaseTextArea,
                  {
                    modelValue: c.bio,
                    "onUpdate:modelValue": (r[1] ||= (e) => (c.bio = e)),
                  },
                  null,
                  8,
                  [`modelValue`],
                ),
              ]),
              o(`div`, ge, [
                (e(!0),
                f(
                  a,
                  null,
                  n(
                    c.userProfile.snsLinks,
                    (t) => (
                      e(),
                      f(
                        `a`,
                        {
                          key: t.url,
                          href: t.url,
                          target: `_blank`,
                          class: `sns`,
                        },
                        [
                          o(`img`, { src: t.icon, class: `icon` }, null, 8, ve),
                          u(` ` + d(t.type), 1),
                        ],
                        8,
                        _e,
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              o(`div`, ye, [
                o(`span`, null, `📅 ` + d(c.userProfile.createdAt), 1),
                o(`span`, null, `📊 投稿数：` + d(c.userProfile.postCount), 1),
              ]),
            ]),
          ]),
        ]),
      ]))
    : (e(), f(`div`, be, `読み込み中...`));
}
var xe = c(ie, [
    [`render`, $],
    [`__scopeId`, `data-v-2de28378`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/user/components/ProfileEdit.vue`,
    ],
  ]),
  Se = t({
    __name: `UserProfilePage`,
    setup(e, { expose: t }) {
      t();
      let n = h(),
        r = m(),
        i = s(),
        a = r.query.edit,
        o = Array.isArray(r.params.userId)
          ? r.params.userId[0]
          : r.params.userId,
        c = {
          userAuthstore: n,
          route: r,
          profile: i,
          editbool: a,
          userId: o,
          edit: s(o == n.userId ? a : !1),
          ProfileSection: H,
          UserWorksPanel: J,
          ProfileEdit: xe,
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
  Ce = { class: `page` },
  we = { key: 0 },
  Te = { key: 1 };
function Ee(t, n, r, a, o, s) {
  return (
    e(),
    f(`div`, Ce, [
      a.edit
        ? (e(),
          f(`div`, we, [
            i(a.ProfileEdit, { userId: a.userId }, null, 8, [`userId`]),
          ]))
        : (e(),
          f(`div`, Te, [
            i(
              a.ProfileSection,
              {
                userId: a.userId,
                modelValue: a.profile,
                "onUpdate:modelValue": (n[0] ||= (e) => (a.profile = e)),
              },
              null,
              8,
              [`userId`, `modelValue`],
            ),
          ])),
      i(a.UserWorksPanel),
    ])
  );
}
var De = c(Se, [
  [`render`, Ee],
  [`__scopeId`, `data-v-0becedbe`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/user/UserProfilePage.vue`,
  ],
]);
export { De as default };
