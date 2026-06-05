import {
  I as e,
  N as t,
  Nt as n,
  R as r,
  _ as i,
  a,
  d as o,
  g as s,
  m as c,
  mt as l,
  ot as u,
  t as d,
  v as f,
} from "./_plugin-vue_export-helper-Cti9LuzH.js";
import { t as p } from "./index-DiGTZRr7.js";
import { t as m } from "./userAuthstore-BLiVPtLR.js";
import { n as h } from "./thumbs-up-BCVjNkFL.js";
import { n as ee, t as g } from "./useIncrementalList-Cw5kvBpC.js";
import { t as _ } from "./GalleryWorksSection-DnRs8IIa.js";
var v = h(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  y = `https://picsum.photos/400/300`,
  b = `https://www.google.com/s2/favicons?domain=github.com`,
  x = async () => (
    await S(500),
    {
      id: `user-001`,
      name: `あずまこうへい`,
      iconUrl: y,
      bio: `持ち物リストや作品を作っています。`,
      snsLinks: [
        { url: `https://x.com/example`, type: `x`, icon: b },
        { url: `https://github.com/example`, type: `github`, icon: b },
      ],
      createdAt: `2026-05-01`,
      postCount: 3,
    }
  ),
  S = (e) => new Promise((t) => setTimeout(t, e)),
  C = async (e) => (console.log(e), await x()),
  w = { key: 0, class: `profile` },
  T = { class: `header` },
  E = { class: `right` },
  D = [`src`],
  O = { class: `user-info` },
  k = { class: `name` },
  A = { class: `user-id` },
  j = { class: `left` },
  M = { class: `profile-description` },
  N = { class: `bio` },
  P = { class: `sns` },
  F = [`href`],
  I = [`src`],
  L = { class: `meta` },
  R = { key: 1, class: `profile` },
  z = f({
    __name: `ProfileSection`,
    props: { userId: {} },
    setup(i) {
      let l = u(null),
        d = i;
      return (
        t(async () => {
          l.value = await C(d.userId);
        }),
        (t, i) =>
          l.value
            ? (e(),
              c(`div`, w, [
                o(`div`, T, [
                  o(`section`, E, [
                    o(
                      `img`,
                      { src: l.value.iconUrl, class: `icon` },
                      null,
                      8,
                      D,
                    ),
                    o(`div`, O, [
                      o(`div`, k, n(l.value.name), 1),
                      o(`div`, A, `@` + n(l.value.id), 1),
                    ]),
                  ]),
                  o(`section`, j, [
                    (i[1] ||= o(
                      `div`,
                      { class: `title` },
                      n(`プロフィール`),
                      -1,
                    )),
                    o(`div`, M, [
                      (i[0] ||= s(n(`自己紹介 :`) + ` `, -1)),
                      o(`div`, N, n(l.value.bio), 1),
                      o(`div`, P, [
                        (e(!0),
                        c(
                          a,
                          null,
                          r(
                            l.value.snsLinks,
                            (t) => (
                              e(),
                              c(
                                `a`,
                                {
                                  key: t.url,
                                  href: t.url,
                                  target: `_blank`,
                                  class: `sns`,
                                },
                                [
                                  o(
                                    `img`,
                                    { src: t.icon, class: `icon` },
                                    null,
                                    8,
                                    I,
                                  ),
                                  s(` ` + n(t.type), 1),
                                ],
                                8,
                                F,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      o(`div`, L, [
                        o(`span`, null, `📅 ` + n(l.value.createdAt), 1),
                        o(
                          `span`,
                          null,
                          `📊 投稿数：` + n(l.value.postCount),
                          1,
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]))
            : (e(), c(`div`, R, `読み込み中...`))
      );
    },
  }),
  te = (e) => {
    let n = u([]);
    t(async () => {
      n.value = await ee();
    });
    let { visibleItems: r, more: i } = g(n, e);
    return { works: n, more: i, visibleWorks: r };
  },
  B = { class: `UserWorksPanel` },
  V = 20,
  H = d(
    f({
      __name: `UserWorksPanel`,
      setup(t) {
        let { visibleWorks: n, more: r } = te(V),
          a = () => {
            r();
          };
        return (t, r) => (
          e(),
          c(`div`, B, [
            i(_, { works: l(n), onMoreClick: a }, null, 8, [`works`]),
          ])
        );
      },
    }),
    [[`__scopeId`, `data-v-e9fe6808`]],
  ),
  U = { key: 0, class: `profile` },
  W = { class: `header` },
  G = { class: `right` },
  K = { class: `icon` },
  q = [`src`],
  J = { class: `icon-edit` },
  Y = { class: `user-info` },
  X = { class: `name` },
  Z = { class: `user-id` },
  Q = { class: `left` },
  ne = { class: `profile-description` },
  re = { class: `bio` },
  ie = { class: `sns` },
  ae = [`href`],
  oe = [`src`],
  $ = { class: `meta` },
  se = { key: 1, class: `profile` },
  ce = d(
    f({
      __name: `ProfileEdit`,
      props: { userId: {} },
      setup(d) {
        let f = u(null),
          p = d;
        return (
          t(async () => {
            f.value = await C(p.userId);
          }),
          (t, u) =>
            f.value
              ? (e(),
                c(`div`, U, [
                  o(`div`, W, [
                    o(`section`, G, [
                      o(`div`, K, [
                        o(
                          `img`,
                          { src: f.value.iconUrl, class: `icon_image` },
                          null,
                          8,
                          q,
                        ),
                        o(`div`, J, [
                          i(l(v), {
                            fill: `white`,
                            size: 100,
                            color: `#1514143d`,
                          }),
                        ]),
                      ]),
                      o(`div`, Y, [
                        o(`div`, X, n(f.value.name), 1),
                        o(`div`, Z, `@` + n(f.value.id), 1),
                      ]),
                    ]),
                    o(`section`, Q, [
                      (u[1] ||= o(
                        `div`,
                        { class: `title` },
                        n(`プロフィール`),
                        -1,
                      )),
                      o(`div`, ne, [
                        (u[0] ||= s(n(`自己紹介 :`) + ` `, -1)),
                        o(`div`, re, n(f.value.bio), 1),
                        o(`div`, ie, [
                          (e(!0),
                          c(
                            a,
                            null,
                            r(
                              f.value.snsLinks,
                              (t) => (
                                e(),
                                c(
                                  `a`,
                                  {
                                    key: t.url,
                                    href: t.url,
                                    target: `_blank`,
                                    class: `sns`,
                                  },
                                  [
                                    o(
                                      `img`,
                                      { src: t.icon, class: `icon` },
                                      null,
                                      8,
                                      oe,
                                    ),
                                    s(` ` + n(t.type), 1),
                                  ],
                                  8,
                                  ae,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        o(`div`, $, [
                          o(`span`, null, `📅 ` + n(f.value.createdAt), 1),
                          o(
                            `span`,
                            null,
                            `📊 投稿数：` + n(f.value.postCount),
                            1,
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]))
              : (e(), c(`div`, se, `読み込み中...`))
        );
      },
    }),
    [[`__scopeId`, `data-v-2db7ddff`]],
  ),
  le = { class: `page` },
  ue = { key: 0 },
  de = { key: 1 },
  fe = d(
    f({
      __name: `UserProfilePage`,
      setup(t) {
        console.log(`test`);
        let n = m(),
          r = p(),
          a = u(),
          o = r.query.edit,
          s = Array.isArray(r.params.userId)
            ? r.params.userId[0]
            : r.params.userId,
          d = u(s == n.userId ? o : !1);
        return (
          console.log(s, d.value),
          (t, n) => (
            e(),
            c(`div`, le, [
              d.value
                ? (e(),
                  c(`div`, ue, [i(ce, { userId: l(s) }, null, 8, [`userId`])]))
                : (e(),
                  c(`div`, de, [
                    i(
                      z,
                      {
                        userId: l(s),
                        modelValue: a.value,
                        "onUpdate:modelValue": (n[0] ||= (e) => (a.value = e)),
                      },
                      null,
                      8,
                      [`userId`, `modelValue`],
                    ),
                  ])),
              i(H),
            ])
          )
        );
      },
    }),
    [[`__scopeId`, `data-v-459fb6ee`]],
  );
export { fe as default };
