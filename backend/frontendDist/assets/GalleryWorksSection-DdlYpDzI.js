import {
  B as e,
  C as t,
  S as n,
  X as r,
  _ as i,
  g as a,
  h as o,
  t as s,
  x as c,
  y as l,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { r as u } from "./pinia-BDLqBGc_.js";
import { t as d } from "./BaseButton-DgJxAwXf.js";
import { n as f } from "./index-BWdytgOe.js";
import { t as p } from "./userAuthstore-B3Eqog8J.js";
import { t as m } from "./workPackageStore-Cx7ot4E2.js";
import { n as h, t as g } from "./useIncrementalList-3rxYdtr2.js";
var _ = t({
    __name: `HomeWorksSection`,
    props: {
      works: { type: Array, required: !0 },
      onMoreClick: { type: Function, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = { WorksSection: h, BaseButton: d };
      return (
        Object.defineProperty(n, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  v = { class: `works-section` },
  y = { class: `box` };
function b(t, i, o, s, u, d) {
  return (
    e(),
    l(`section`, v, [
      a(`div`, y, [n(s.WorksSection, { works: o.works }, null, 8, [`works`])]),
      n(
        s.BaseButton,
        { variant: `text`, onClick: (i[0] ||= (e) => o.onMoreClick?.()) },
        { default: r(() => [...(i[1] ||= [c(` すべて見る → `, -1)])]), _: 1 },
      ),
    ])
  );
}
var x = s(_, [
    [`render`, b],
    [`__scopeId`, `data-v-80a0c294`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/home/components/HomeWorksSection.vue`,
    ],
  ]),
  S = t({
    __name: `GalleryWorksSection`,
    setup(e, { expose: t }) {
      t();
      let n = m(),
        r = p(),
        { WorkPackageStoreGetter: i } = u(n),
        a = o(() => [...i.value].sort((e, t) => t.likes - e.likes)),
        { visibleItems: s, more: c } = g(a, 5),
        l = f(),
        d = {
          workPackageStore: n,
          userAuthstore: r,
          WorkPackageStoreGetter: i,
          sortedWorks: a,
          visibleItems: s,
          more: c,
          router: l,
          onMoreClick: () => {
            l.push(`/gallery`);
          },
          HomeWorksSection: x,
        };
      return (
        Object.defineProperty(d, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  });
function C(t, n, r, a, o, s) {
  return (
    e(),
    i(
      a.HomeWorksSection,
      { works: a.visibleItems, onMoreClick: a.onMoreClick },
      null,
      8,
      [`works`],
    )
  );
}
var w = s(S, [
  [`render`, C],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/home/components/GalleryWorksSection.vue`,
  ],
]);
export { x as n, w as t };
