import {
  C as e,
  S as t,
  V as n,
  Z as r,
  _ as i,
  b as a,
  t as o,
  v as s,
  w as c,
} from "./_plugin-vue_export-helper-Bh2CkUK5.js";
import { i as l, l as u, n as d } from "./index-COdq92lb.js";
import { t as f } from "./userAuthStore-BvaSD8Vv.js";
import { t as p } from "./UserIcon-Ce5M5GCC.js";
import { t as m } from "./workPackageStore-_rduQiQV.js";
import { t as h } from "./useIncrementalList-7z6ZpH37.js";
import { n as g, t as _ } from "./GalleryWorksSection--P8QSFcF.js";
var v = c({
  __name: `MyWorksSection`,
  props: { userId: { type: String, required: !0 } },
  setup(e, { expose: t }) {
    t();
    let n = m(),
      r = f(),
      { userWorkPackageStoreGetter: i } = u(n),
      { visibleItems: a, more: o } = h(i, 20),
      s = {
        workPackageStore: n,
        userAuthstore: r,
        userWorkPackageStoreGetter: i,
        visibleItems: a,
        more: o,
        props: e,
        HomeWorksSection: g,
      };
    return (
      Object.defineProperty(s, "__isScriptSetup", {
        enumerable: !1,
        value: !0,
      }),
      s
    );
  },
});
function y(e, t, r, i, a, o) {
  return (
    n(),
    s(
      i.HomeWorksSection,
      { works: i.visibleItems, onMoreClick: i.more },
      null,
      8,
      [`works`, `onMoreClick`],
    )
  );
}
var b = o(v, [
    [`render`, y],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/home/components/MyWorksSection.vue`,
    ],
  ]),
  x = c({
    __name: `homePage`,
    setup(e, { expose: t }) {
      t();
      let n = f(),
        r = d(),
        i = m(),
        a = {
          userAuthstore: n,
          router: r,
          workPackageStore: i,
          goCreate: () => {
            (i.selectWorkPackage(``), r.push(`/create`));
          },
          GalleryWorksSection: _,
          MyWorksSection: b,
          BaseButton: l,
          UserIcon: p,
        };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  S = { class: `page` },
  C = { class: `top` },
  w = { class: `body` },
  T = { class: `container` },
  E = { class: `hero` },
  D = { class: `container` },
  O = { class: `container` };
function k(o, s, c, l, u, d) {
  return (
    n(),
    a(`div`, S, [
      i(`header`, C, [
        (s[0] ||= i(`h1`, null, `motinabi`, -1)),
        e(
          l.UserIcon,
          { userid: l.userAuthstore.userId, size: `large` },
          null,
          8,
          [`userid`],
        ),
      ]),
      i(`body`, w, [
        i(`section`, T, [
          i(`section`, E, [
            (s[2] ||= i(`h1`, null, `持ち物リストを作ろう`, -1)),
            (s[3] ||= i(`p`, null, `かんたんに作成・共有`, -1)),
            e(
              l.BaseButton,
              { onClick: l.goCreate },
              {
                default: r(() => [...(s[1] ||= [t(`＋ 新しく作る`, -1)])]),
                _: 1,
              },
            ),
          ]),
        ]),
        i(`section`, D, [
          (s[4] ||= i(`h2`, { class: `title` }, `あなたの作品`, -1)),
          e(
            l.MyWorksSection,
            { userId: l.userAuthstore.userId, class: `content` },
            null,
            8,
            [`userId`],
          ),
        ]),
        (s[6] ||= i(
          `section`,
          { class: `container` },
          [
            i(`h2`, { class: `title` }, `続きから編集`),
            t(` 作りかけの持ち物リストの画像をぼやけさせて写す `),
          ],
          -1,
        )),
        i(`section`, O, [
          (s[5] ||= i(`h2`, { class: `title` }, `みんなの作品`, -1)),
          e(l.GalleryWorksSection, { class: `content` }),
        ]),
      ]),
    ])
  );
}
var A = o(x, [
  [`render`, k],
  [`__scopeId`, `data-v-c58ea8b5`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/home/homePage.vue`,
  ],
]);
export { A as default };
