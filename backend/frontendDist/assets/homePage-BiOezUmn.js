import {
  B as e,
  C as t,
  S as n,
  W as r,
  X as i,
  _ as a,
  g as o,
  t as s,
  x as c,
  y as l,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { r as u } from "./pinia-BDLqBGc_.js";
import { t as d } from "./BaseButton-DgJxAwXf.js";
import { n as f } from "./index-BWdytgOe.js";
import { t as p } from "./userAuthstore-B3Eqog8J.js";
import { t as m } from "./UserIcon-U7D_LATZ.js";
import { t as h } from "./workPackageStore-Cx7ot4E2.js";
import { t as g } from "./useIncrementalList-3rxYdtr2.js";
import { n as _, t as v } from "./GalleryWorksSection-DdlYpDzI.js";
var y = t({
  __name: `MyWorksSection`,
  props: { userId: { type: String, required: !0 } },
  setup(e, { expose: t }) {
    t();
    let n = h(),
      r = p(),
      { userWorkPackageStoreGetter: i } = u(n),
      { visibleItems: a, more: o } = g(i, 20),
      s = {
        workPackageStore: n,
        userAuthstore: r,
        userWorkPackageStoreGetter: i,
        visibleItems: a,
        more: o,
        props: e,
        HomeWorksSection: _,
      };
    return (
      Object.defineProperty(s, `__isScriptSetup`, {
        enumerable: !1,
        value: !0,
      }),
      s
    );
  },
});
function b(t, n, r, i, o, s) {
  return (
    e(),
    a(
      i.HomeWorksSection,
      { works: i.visibleItems, onMoreClick: i.more },
      null,
      8,
      [`works`, `onMoreClick`],
    )
  );
}
var x = s(y, [
    [`render`, b],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/home/components/MyWorksSection.vue`,
    ],
  ]),
  S = `a`,
  C = t({
    __name: `homePage`,
    setup(e, { expose: t }) {
      t();
      let n = f(),
        r = {
          router: n,
          testUserId: S,
          goCreate: () => {
            n.push(`/create`);
          },
          GalleryWorksSection: v,
          MyWorksSection: x,
          BaseButton: d,
          UserIcon: m,
        };
      return (
        Object.defineProperty(r, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  w = { class: `page` },
  T = { class: `top` },
  E = { class: `body` },
  D = { class: `container` },
  O = { class: `hero` },
  k = { class: `container` },
  A = { class: `container` },
  j = { class: `container` };
function M(t, a, s, u, d, f) {
  let p = r(`p2`);
  return (
    e(),
    l(`div`, w, [
      o(`header`, T, [
        (a[0] ||= o(`h1`, null, `motinabi`, -1)),
        n(u.UserIcon, { userid: u.testUserId, size: `large` }),
      ]),
      o(`body`, E, [
        o(`section`, D, [
          o(`section`, O, [
            (a[2] ||= o(`h1`, null, `持ち物リストを作ろう`, -1)),
            (a[3] ||= o(`p`, null, `かんたんに作成・共有`, -1)),
            n(
              u.BaseButton,
              { onClick: u.goCreate },
              {
                default: i(() => [...(a[1] ||= [c(`＋ 新しく作る`, -1)])]),
                _: 1,
              },
            ),
          ]),
        ]),
        o(`section`, k, [
          n(
            p,
            { class: `title` },
            { default: i(() => [...(a[4] ||= [c(`あなたの作品`, -1)])]), _: 1 },
          ),
          n(u.MyWorksSection, { userId: u.testUserId, class: `content` }),
        ]),
        o(`section`, A, [
          n(
            p,
            { class: `title` },
            { default: i(() => [...(a[5] ||= [c(`続きから編集`, -1)])]), _: 1 },
          ),
          (a[6] ||= c(` 作りかけの持ち物リストの画像をぼやけさせて写す `, -1)),
        ]),
        o(`section`, j, [
          n(
            p,
            { class: `title` },
            { default: i(() => [...(a[7] ||= [c(`みんなの作品`, -1)])]), _: 1 },
          ),
          n(u.GalleryWorksSection, { class: `content` }),
        ]),
      ]),
    ])
  );
}
var N = s(C, [
  [`render`, M],
  [`__scopeId`, `data-v-c58ea8b5`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/home/homePage.vue`,
  ],
]);
export { N as default };
