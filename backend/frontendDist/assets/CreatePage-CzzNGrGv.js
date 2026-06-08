import {
  C as e,
  E as t,
  G as n,
  K as r,
  Q as i,
  R as a,
  S as o,
  St as s,
  U as c,
  V as l,
  Y as u,
  Z as d,
  _ as f,
  b as p,
  bt as m,
  ct as h,
  f as g,
  g as _,
  l as v,
  s as y,
  t as b,
  v as x,
  w as S,
  xt as C,
  y as w,
  yt as T,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { r as E } from "./pinia-DB58mGSn.js";
import { a as D, i as O, n as k, r as A, t as ee } from "./Preview-CqLogfCL.js";
import { t as te } from "./search-BL6OHK_0.js";
import { t as j } from "./BaseButton-BOvMoO14.js";
import { a as M, o as N } from "./index-C2gAzg84.js";
import { t as P } from "./BaseInput-DMtlmy4F.js";
import { t as F } from "./UserIcon-yVsuIyXb.js";
import { t as I } from "./workPackageStore-CHuZhDEm.js";
var L = M(`boxes`, [
    [
      `path`,
      {
        d: `M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z`,
        key: `lc1i9w`,
      },
    ],
    [`path`, { d: `m7 16.5-4.74-2.85`, key: `1o9zyk` }],
    [`path`, { d: `m7 16.5 5-3`, key: `va8pkn` }],
    [`path`, { d: `M7 16.5v5.17`, key: `jnp8gn` }],
    [
      `path`,
      {
        d: `M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z`,
        key: `8zsnat`,
      },
    ],
    [`path`, { d: `m17 16.5-5-3`, key: `8arw3v` }],
    [`path`, { d: `m17 16.5 4.74-2.85`, key: `8rfmw` }],
    [`path`, { d: `M17 16.5v5.17`, key: `k6z78m` }],
    [
      `path`,
      {
        d: `M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z`,
        key: `1xygjf`,
      },
    ],
    [`path`, { d: `M12 8 7.26 5.15`, key: `1vbdud` }],
    [`path`, { d: `m12 8 4.74-2.85`, key: `3rx089` }],
    [`path`, { d: `M12 13.5V8`, key: `1io7kd` }],
  ]),
  R = M(`corner-up-left`, [
    [`path`, { d: `M20 20v-7a4 4 0 0 0-4-4H4`, key: `1nkjon` }],
    [`path`, { d: `M9 14 4 9l5-5`, key: `102s5s` }],
  ]),
  z = M(`corner-up-right`, [
    [`path`, { d: `m15 14 5-5-5-5`, key: `12vg1m` }],
    [`path`, { d: `M4 20v-7a4 4 0 0 1 4-4h12`, key: `1lu4f8` }],
  ]),
  B = M(`layout-template`, [
    [
      `rect`,
      { width: `18`, height: `7`, x: `3`, y: `3`, rx: `1`, key: `f1a2em` },
    ],
    [
      `rect`,
      { width: `9`, height: `7`, x: `3`, y: `14`, rx: `1`, key: `jqznyg` },
    ],
    [
      `rect`,
      { width: `5`, height: `7`, x: `16`, y: `14`, rx: `1`, key: `q5h2i8` },
    ],
  ]),
  V = M(`luggage`, [
    [
      `path`,
      {
        d: `M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2`,
        key: `1m57jg`,
      },
    ],
    [`path`, { d: `M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14`, key: `1l99gc` }],
    [`path`, { d: `M10 20h4`, key: `ni2waw` }],
    [`circle`, { cx: `16`, cy: `20`, r: `2`, key: `1vifvg` }],
    [`circle`, { cx: `8`, cy: `20`, r: `2`, key: `ckkr5m` }],
  ]),
  H = M(`star`, [
    [
      `path`,
      {
        d: `M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,
        key: `r04s7s`,
      },
    ],
  ]),
  U = S({
    __name: `TopBar`,
    props: { title: { type: String, required: !0 } },
    setup(e, { expose: t }) {
      t();
      let n = O(),
        r = {
          alterationLog: n,
          forward: () => {
            n.redo();
          },
          back: () => {
            n.undo();
          },
          props: e,
          BaseButton: j,
          get CornerUpLeft() {
            return R;
          },
          get CornerUpRight() {
            return z;
          },
          UserIcon: F,
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
  W = { class: `topBar` },
  G = { class: `right` },
  K = { style: { color: `black`, "font-size": `35px`, "font-weight": `400` } },
  q = { style: { gap: `10px`, display: `flex`, "margin-left": `auto` } },
  J = { class: `left` },
  Y = {
    class: `buttons`,
    style: {
      "margin-left": `auto`,
      display: `flex`,
      "align-items": `center`,
      gap: `10px`,
    },
  };
function X(t, n, r, i, a, c) {
  return (
    l(),
    p(`div`, W, [
      f(`div`, G, [
        f(`div`, K, s(i.props.title), 1),
        f(`div`, q, [
          e(i.CornerUpLeft, { onClick: i.back }),
          e(i.CornerUpRight, { onClick: i.forward }),
        ]),
      ]),
      f(`div`, J, [
        f(`div`, Y, [
          e(i.UserIcon, {
            size: `medium`,
            userid: `a`,
            style: { "margin-right": `20px` },
          }),
          e(
            i.BaseButton,
            { variant: `ghost` },
            { default: d(() => [...(n[0] ||= [o(`招待`, -1)])]), _: 1 },
          ),
          e(i.BaseButton, null, {
            default: d(() => [...(n[1] ||= [o(`公開`, -1)])]),
            _: 1,
          }),
        ]),
      ]),
    ])
  );
}
var Z = b(U, [
    [`render`, X],
    [`__scopeId`, `data-v-2ded53f2`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/TopBar.vue`,
    ],
  ]),
  Q = S({
    __name: `itemCard`,
    props: { item: { type: Object, required: !0 } },
    setup(e, { expose: t }) {
      t();
      let n = A(),
        r = e,
        i = D(),
        a = i.iconMap,
        o = i.categoryColor,
        s = a[r.item.iconId] ?? `📦`,
        c = o[r.item.category[0]] ?? `#64748b`;
      function l(e) {
        e.dataTransfer?.setData(`itemId`, r.item.id);
      }
      let u = {
        createWork: n,
        props: r,
        createStore: i,
        iconMap: a,
        categoryColorMap: o,
        icon: s,
        categoryColor: c,
        onDragStart: l,
        onBookMark: () => {
          let e = { itemId: r.item.id };
          n.addBookmark(e);
        },
        get Star() {
          return H;
        },
      };
      return (
        Object.defineProperty(u, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        u
      );
    },
  }),
  ne = { class: `on-bookmark-area` },
  re = { class: `info` },
  ie = { class: `name` };
function ae(e, t, n, r, i, a) {
  return (
    l(),
    p(
      `div`,
      {
        class: T([`item-card`, { storage: n.item.isStorage }]),
        draggable: `true`,
        onDragstart: r.onDragStart,
      },
      [
        f(`div`, ne, [
          n.item.bookmark
            ? (l(),
              x(r.Star, {
                key: 0,
                size: 20,
                onClick: r.onBookMark,
                "stroke-width": 1.5,
                fill: `black`,
              }))
            : w(``, !0),
          n.item.bookmark
            ? w(``, !0)
            : (l(),
              x(r.Star, {
                key: 1,
                size: 20,
                onClick: r.onBookMark,
                "stroke-width": 1.5,
              })),
        ]),
        f(
          `div`,
          { class: `item-icon`, style: C({ color: r.categoryColor }) },
          s(r.icon.src),
          5,
        ),
        f(`div`, re, [f(`div`, ie, s(n.item.name), 1)]),
      ],
      34,
    )
  );
}
var oe = b(Q, [
    [`render`, ae],
    [`__scopeId`, `data-v-ae6a1f98`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/itemCard.vue`,
    ],
  ]),
  se = S({
    __name: `ItemList`,
    setup(e, { expose: t }) {
      t();
      let n = D(),
        { filteredListItem: r } = E(n),
        i = { createStore: n, filteredListItem: r, ItemCard: oe };
      return (
        Object.defineProperty(i, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  ce = { class: `itemList` };
function le(e, t, n, r, i, a) {
  return (
    l(),
    p(`div`, ce, [
      (l(!0),
      p(
        g,
        null,
        c(
          r.filteredListItem,
          (e) => (
            l(),
            x(r.ItemCard, { key: e.id, item: e }, null, 8, [`item`])
          ),
        ),
        128,
      )),
    ])
  );
}
var ue = b(se, [
    [`render`, le],
    [`__scopeId`, `data-v-9821cf80`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/ItemList.vue`,
    ],
  ]),
  de = S({
    __name: `itemSearch`,
    setup(e, { expose: t }) {
      t();
      let n = D(),
        r = h(``);
      u(r, (e) => {
        n.setSearchText(e);
      });
      let i = {
        createStore: n,
        modelValue: r,
        BaseInput: P,
        get Search() {
          return te;
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
  fe = { class: `container` };
function pe(t, n, r, i, a, o) {
  return (
    l(),
    p(`div`, fe, [
      e(i.Search, { color: `white`, size: 25 }),
      e(
        i.BaseInput,
        {
          modelValue: i.modelValue,
          "onUpdate:modelValue": (n[0] ||= (e) => (i.modelValue = e)),
          class: `gallery-search`,
        },
        null,
        8,
        [`modelValue`],
      ),
    ])
  );
}
var me = b(de, [
    [`render`, pe],
    [`__scopeId`, `data-v-ca710643`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/itemSearch.vue`,
    ],
  ]),
  he = S({
    __name: `filteredItems`,
    props: {
      categorys: { type: null, required: !0 },
      index: { type: Number, required: !0 },
    },
    emits: [`update:index`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = D(),
        i = e,
        a = _(() => i.categorys?.[i.index]),
        o = (e) => {
          let t = i.categorys?.map((e) => e.id);
          r.setCategory(e);
          let n = t?.indexOf(e);
          s(`update:index`, n);
        },
        s = n,
        c = {
          createStore: r,
          props: i,
          currentCategory: a,
          onCategory: o,
          emit: s,
          BaseButton: j,
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
  ge = { class: `filteredItems` },
  _e = { class: `category-open` },
  ve = { class: `category-open-button` },
  ye = { class: `category-list` },
  be = { class: `category-item` };
function xe(t, n, r, i, a, o) {
  return (
    l(),
    p(`div`, ge, [
      f(`section`, _e, [
        (n[1] ||= f(
          `section`,
          { class: `category-info` },
          s(`カテゴリーで絞り込む`),
          -1,
        )),
        e(
          i.BaseButton,
          {
            onClick: (n[0] ||= (e) =>
              i.props.categorys?.[i.props.index]?.id &&
              i.onCategory(i.props.categorys[i.props.index].id)),
          },
          {
            default: d(() => [
              f(`section`, ve, [
                f(`div`, null, s(i.currentCategory?.name), 1),
                f(`div`, null, s(i.currentCategory?.icon), 1),
              ]),
            ]),
            _: 1,
          },
        ),
      ]),
      f(`section`, ye, [
        (l(!0),
        p(
          g,
          null,
          c(
            i.props.categorys,
            (t) => (
              l(),
              p(`div`, { key: t.id }, [
                e(
                  i.BaseButton,
                  {
                    onClick: (e) => i.onCategory(t.id),
                    variant: `ghost`,
                    class: `category-item`,
                  },
                  {
                    default: d(() => [
                      f(`section`, be, [
                        f(`div`, null, s(t.name), 1),
                        f(`div`, null, s(t.icon), 1),
                      ]),
                    ]),
                    _: 2,
                  },
                  1032,
                  [`onClick`],
                ),
              ])
            ),
          ),
          128,
        )),
      ]),
    ])
  );
}
var Se = b(he, [
    [`render`, xe],
    [`__scopeId`, `data-v-4aacf4e9`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/filteredItems.vue`,
    ],
  ]),
  Ce = S({
    __name: `iconSelect`,
    props: { selectedCategory: { type: String, required: !1 } },
    emits: [`update:iconId`, `close`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = D(),
        i = r.iconMapGetter,
        a = r.categories,
        o = e,
        s = _(() => a.find((e) => e.id == o.selectedCategory)?.name),
        c = Object.entries(i).map(([e, t]) => ({ id: e, ...t })),
        l = _(() => c.filter((e) => e.category == o.selectedCategory)),
        u = n,
        d = {
          createStore: r,
          iconMap: i,
          categories: a,
          props: o,
          categoryName: s,
          iconArray: c,
          icons: l,
          emit: u,
          onIcon: (e) => {
            (u(`close`), u(`update:iconId`, e));
          },
        };
      return (
        Object.defineProperty(d, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  }),
  we = { class: `window` },
  Te = { class: `icon-area` },
  Ee = [`onClick`];
function De(e, t, n, r, i, a) {
  return (
    l(),
    p(`div`, we, [
      (t[0] ||= f(
        `div`,
        { class: `title`, style: { "text-align": `center` } },
        s(`アイコンを選択`),
        -1,
      )),
      f(`div`, null, s(`今選ばれているカテゴリー` + r.categoryName), 1),
      f(`section`, Te, [
        (l(!0),
        p(
          g,
          null,
          c(
            r.icons,
            (e) => (
              l(),
              p(`div`, null, [
                f(
                  `div`,
                  { class: `icon`, onClick: (t) => r.onIcon(e.id) },
                  s(e.src),
                  9,
                  Ee,
                ),
              ])
            ),
          ),
          256,
        )),
      ]),
    ])
  );
}
var Oe = b(Ce, [
    [`render`, De],
    [`__scopeId`, `data-v-92446b7d`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/iconSelect.vue`,
    ],
  ]),
  ke = S({
    __name: `addItem`,
    props: { categories: { type: null, required: !0 } },
    emits: [`update:add-item`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = D(),
        i = r.iconMap,
        a = n,
        o = e,
        s = h(!1),
        c = h(),
        l = h(!1),
        d = h(!1),
        f = h(),
        p = h(),
        m = A(),
        g = () => {
          b();
        };
      u(
        () => f.value,
        (e) => {
          e && (p.value = i[e].src);
        },
      );
      let _ = () => {
          if (!S.value || !c.value || !f.value) return;
          let e = {
            name: S.value,
            category: [c.value],
            createType: `userCreated`,
            isStorage: l.value,
            iconId: f.value,
          };
          (m.addListItem(e),
            (S.value = ``),
            (c.value = void 0),
            (f.value = void 0),
            (l.value = !1),
            x());
        },
        v = h(!1),
        y = h(!1),
        b = () => {
          v.value
            ? ((v.value = !1),
              setTimeout(() => {
                y.value = !1;
              }, 200))
            : ((y.value = !0), (v.value = !0));
        },
        x = () => {
          s.value
            ? ((s.value = !1),
              setTimeout(() => {
                d.value = !1;
              }, 200))
            : ((d.value = !0), (s.value = !0));
        },
        S = h(``),
        C = {
          createStore: r,
          iconMap: i,
          emit: a,
          props: o,
          open: s,
          selectedCategory: c,
          caseBool: l,
          show: d,
          selectedIcon: f,
          selectedIcoSrc: p,
          createWork: m,
          closeIconSelect: g,
          onAddItem: _,
          iconSelectOpen: v,
          iconSelectShow: y,
          iconSelectToggle: b,
          toggle: x,
          name: S,
          BaseButton: j,
          BaseInput: P,
          iconSelect: Oe,
        };
      return (
        Object.defineProperty(C, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        C
      );
    },
  }),
  Ae = {
    class: `setting-section`,
    style: { "font-size": `14px`, color: `rgb(108, 106, 106)` },
  },
  je = { class: `setting-section` },
  Me = { class: `setting-section` },
  Ne = {
    style: {
      "font-size": `15px`,
      "text-align": `left`,
      color: `rgb(108, 106, 106)`,
    },
  };
function Pe(r, a, c, u, h, g) {
  let _ = n(`v-list-item`),
    b = n(`v-select`);
  return (
    l(),
    p(`div`, null, [
      f(`div`, null, [
        e(
          u.BaseButton,
          {
            onClick: u.toggle,
            style: { "font-weight": `700` },
            class: `create-button`,
          },
          {
            default: d(() => [...(a[4] ||= [o(`+ 新しく持ち物を追加`, -1)])]),
            _: 1,
          },
        ),
        i(
          f(
            `section`,
            {
              class: T([
                `add-item-setting`,
                { popup: u.open, popdown: !u.open },
              ]),
            },
            [
              f(`section`, Ae, [
                (a[5] ||= o(s(`名前を記入`) + ` `, -1)),
                e(
                  u.BaseInput,
                  {
                    modelValue: u.name,
                    "onUpdate:modelValue": (a[0] ||= (e) => (u.name = e)),
                  },
                  null,
                  8,
                  [`modelValue`],
                ),
              ]),
              f(`section`, je, [
                e(
                  b,
                  {
                    modelValue: u.selectedCategory,
                    "onUpdate:modelValue": (a[1] ||= (e) =>
                      (u.selectedCategory = e)),
                    items: c.categories,
                    "item-title": `name`,
                    "item-value": `id`,
                    label: `カテゴリーを選択`,
                    variant: `outlined`,
                  },
                  {
                    item: d(({ props: n }) => [e(_, m(t(n)), null, 16)]),
                    _: 1,
                  },
                  8,
                  [`modelValue`, `items`],
                ),
                e(
                  u.BaseButton,
                  {
                    class: `icon-select-button`,
                    onClick: u.iconSelectToggle,
                    variant: `ghost`,
                  },
                  {
                    default: d(() => [
                      o(s(u.selectedIcoSrc) + ` アイコンを選択`, 1),
                    ]),
                    _: 1,
                  },
                ),
                i(
                  e(
                    u.iconSelect,
                    {
                      selectedCategory: u.selectedCategory,
                      onClose: u.closeIconSelect,
                      iconId: u.selectedIcon,
                      "onUpdate:iconId": (a[2] ||= (e) => (u.selectedIcon = e)),
                      class: T({
                        popup: u.iconSelectOpen,
                        popdown: !u.iconSelectOpen,
                      }),
                    },
                    null,
                    8,
                    [`selectedCategory`, `iconId`, `class`],
                  ),
                  [[v, u.iconSelectShow]],
                ),
              ]),
              f(`section`, Me, [
                f(`label`, Ne, [
                  i(
                    f(
                      `input`,
                      {
                        type: `checkbox`,
                        "onUpdate:modelValue": (a[3] ||= (e) =>
                          (u.caseBool = e)),
                      },
                      null,
                      512,
                    ),
                    [[y, u.caseBool]],
                  ),
                  (a[6] ||= o(` ` + s(`アイテムを収納にする`), -1)),
                ]),
              ]),
              e(
                u.BaseButton,
                { onClick: u.onAddItem },
                { default: d(() => [...(a[7] ||= [o(`追加`, -1)])]), _: 1 },
              ),
            ],
            2,
          ),
          [[v, u.show]],
        ),
      ]),
    ])
  );
}
var Fe = b(ke, [
    [`render`, Pe],
    [`__scopeId`, `data-v-71cc0f46`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/components/addItem.vue`,
    ],
  ]),
  Ie = S({
    __name: `itemBar`,
    setup(e, { expose: t }) {
      t();
      let n = D(),
        r = n.categories,
        i = h(null),
        o = h(0);
      a(async () => {
        u(
          () => i.value?.id,
          () => {
            i.value &&= null;
          },
        );
      });
      let s = {
        createStore: n,
        categories: r,
        returnAddItem: i,
        index: o,
        ItemList: ue,
        itemSearch: me,
        filteredItems: Se,
        addItem: Fe,
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
  Le = { class: `item-bar` },
  Re = { class: `list left` },
  ze = { class: `top` },
  Be = { class: `list right` };
function Ve(t, n, r, i, a, o) {
  return (
    l(),
    p(`div`, Le, [
      f(`section`, Re, [
        f(`section`, ze, [
          (n[2] ||= f(
            `div`,
            {
              style: {
                color: `white`,
                "font-size": `20px`,
                "padding-bottom": `12px`,
                "font-weight": `500`,
              },
            },
            s(`持ち物を検索`),
            -1,
          )),
          e(i.itemSearch, { class: `search` }),
        ]),
        e(
          i.filteredItems,
          {
            index: i.index,
            "onUpdate:index": (n[0] ||= (e) => (i.index = e)),
            categorys: i.categories,
          },
          null,
          8,
          [`index`, `categorys`],
        ),
      ]),
      f(`section`, Be, [
        (n[3] ||= f(`div`, { class: `title` }, s(`持ち物一覧`), -1)),
        e(
          i.addItem,
          {
            categories: i.categories,
            "add-item": i.returnAddItem,
            "onUpdate:addItem": (n[1] ||= (e) => (i.returnAddItem = e)),
          },
          null,
          8,
          [`categories`, `add-item`],
        ),
        e(i.ItemList),
      ]),
    ])
  );
}
var He = b(Ie, [
    [`render`, Ve],
    [`__scopeId`, `data-v-e3e69f4f`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/itemBar/itemBar.vue`,
    ],
  ]),
  Ue = S({
    __name: `Casecard`,
    props: {
      pockets: { type: Object, required: !0 },
      case: { type: Object, required: !0 },
      handle: { type: Object, required: !0 },
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = e,
        r = k(),
        i = {
          props: n,
          caseDragStore: r,
          onDragEnd: (e) => {
            r.drag(!1);
          },
          onDragStart: (e) => {
            (r.drag(!0), e.dataTransfer?.setData(`caseId`, n.id));
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
  We = { viewBox: `0 0 400 560`, class: `suitcase` },
  Ge = [`x`, `y`, `width`, `height`],
  Ke = [`x`, `y`, `width`, `height`],
  qe = [`x`, `y`, `width`, `height`],
  Je = [`x`, `y`],
  Ye = [`x`, `y`];
function Xe(e, t, n, r, i, a) {
  return (
    l(),
    p(
      `div`,
      {
        class: `suitcase-wrap case`,
        onDragstart: r.onDragStart,
        draggable: `true`,
        onDragend: r.onDragEnd,
      },
      [
        (l(),
        p(`svg`, We, [
          f(
            `rect`,
            {
              x: r.props.case.x,
              y: r.props.case.y,
              width: r.props.case.width,
              height: r.props.case.height,
              class: `case-body`,
              rx: `14`,
            },
            null,
            8,
            Ge,
          ),
          f(
            `rect`,
            {
              x: r.props.handle.x,
              y: r.props.handle.y,
              width: r.props.handle.width,
              height: r.props.handle.height,
              rx: `12`,
              class: `handle`,
            },
            null,
            8,
            Ke,
          ),
          (l(!0),
          p(
            g,
            null,
            c(
              n.pockets,
              (e) => (
                l(),
                p(`g`, { key: e.id, class: `pocket-group` }, [
                  f(
                    `rect`,
                    {
                      x: e.x,
                      y: e.y,
                      width: e.width,
                      height: e.height,
                      rx: `14`,
                      class: `pocket`,
                    },
                    null,
                    8,
                    qe,
                  ),
                  f(
                    `text`,
                    {
                      x: e.x + e.width / 2,
                      y: e.y + e.height / 2,
                      "text-anchor": `middle`,
                      "dominant-baseline": `middle`,
                      class: `pocket-label`,
                    },
                    s(e.name),
                    9,
                    Je,
                  ),
                  f(
                    `text`,
                    {
                      x: e.x + e.width - 12,
                      y: e.y + 22,
                      "text-anchor": `end`,
                      class: `pocket-count`,
                    },
                    s(e.items.size),
                    9,
                    Ye,
                  ),
                ])
              ),
            ),
            128,
          )),
        ])),
        f(`p`, null, s(r.props.name), 1),
      ],
      32,
    )
  );
}
var Ze = b(Ue, [
    [`render`, Xe],
    [`__scopeId`, `data-v-43c89e6a`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/components/Casecard.vue`,
    ],
  ]),
  Qe = S({
    __name: `caseViewList`,
    setup(e, { expose: t }) {
      t();
      let n = D(),
        r = {
          createStore: n,
          allcase: n.getAllCasesArray,
          cases: h(),
          Casecard: Ze,
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
  $e = { class: `caseView` },
  et = { class: `case` };
function tt(t, n, r, i, a, o) {
  return (
    l(),
    p(`div`, $e, [
      (l(!0),
      p(
        g,
        null,
        c(
          i.allcase,
          (t) => (
            l(),
            p(`div`, { key: t.id }, [
              f(`div`, et, [
                e(
                  i.Casecard,
                  {
                    pockets: t.data.pockets,
                    case: t.data.case,
                    handle: t.data.handle,
                    name: t.data.name,
                    id: t.id,
                    selectedPocket: i.cases,
                    "onUpdate:selectedPocket": (n[0] ||= (e) => (i.cases = e)),
                    style: { width: `200px`, height: `auto` },
                  },
                  null,
                  8,
                  [`pockets`, `case`, `handle`, `name`, `id`, `selectedPocket`],
                ),
              ]),
            ])
          ),
        ),
        128,
      )),
    ])
  );
}
var nt = b(Qe, [
    [`render`, tt],
    [`__scopeId`, `data-v-d826c699`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/components/caseViewList.vue`,
    ],
  ]),
  rt = S({
    __name: `caseSelectBar`,
    setup(e, { expose: t }) {
      t();
      let n = { caseViewList: nt };
      return (
        Object.defineProperty(n, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  it = { class: `case-bar` },
  at = { class: `bar` };
function ot(t, n, r, i, a, o) {
  return (l(), p(`div`, it, [f(`div`, at, [e(i.caseViewList)])]));
}
var st = b(rt, [
    [`render`, ot],
    [`__scopeId`, `data-v-47d89112`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/caseSelectBar.vue`,
    ],
  ]),
  ct = S({
    __name: `sideBar`,
    setup(e, { expose: t }) {
      t();
      let n = {
        selectedId: h(`template`),
        onSelect: (e) => {},
        sidebar: h([
          { id: `template`, name: `テンプレート`, onColor: `blue`, icon: B },
          { id: `item`, name: `持ち物`, onColor: `orange`, icon: L },
          { id: `case`, name: `ケース`, onColor: `green`, icon: V },
        ]),
        itemBar: He,
        caseSelectBar: st,
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
  lt = { class: `sideArea` },
  ut = { class: `sideBar list` },
  dt = { class: `flexCanter` },
  ft = [`onClick`],
  $ = { class: `selectContent` };
function pt(e, t, n, i, a, o) {
  return (
    l(),
    p(`div`, lt, [
      f(`div`, ut, [
        (l(!0),
        p(
          g,
          null,
          c(
            i.sidebar,
            (e) => (
              l(),
              p(`div`, { key: e.id }, [
                f(`section`, dt, [
                  f(
                    `div`,
                    {
                      class: `iconArea flexCanter`,
                      onClick: (t) => {
                        (i.onSelect(e.id), (i.selectedId = e.id));
                      },
                      style: { "flex-direction": `column` },
                    },
                    [
                      f(
                        `div`,
                        {
                          class: T([
                            `flexCanter icon`,
                            { shadow: i.selectedId == e.id },
                          ]),
                        },
                        [
                          i.selectedId == e.id
                            ? (l(),
                              x(
                                r(e.icon),
                                {
                                  key: 0,
                                  fill: e.onColor,
                                  "stroke-width": 1.5,
                                  color: `white`,
                                  size: 26,
                                },
                                null,
                                8,
                                [`fill`],
                              ))
                            : w(``, !0),
                          i.selectedId == e.id
                            ? w(``, !0)
                            : (l(),
                              x(r(e.icon), {
                                key: 1,
                                "stroke-width": 1.5,
                                size: 26,
                              })),
                        ],
                        2,
                      ),
                      f(`p`, null, s(e.name), 1),
                    ],
                    8,
                    ft,
                  ),
                ]),
              ])
            ),
          ),
          128,
        )),
      ]),
      f(`div`, $, [
        i.selectedId == `item` ? (l(), x(i.itemBar, { key: 0 })) : w(``, !0),
        i.selectedId == `case`
          ? (l(), x(i.caseSelectBar, { key: 1 }))
          : w(``, !0),
      ]),
    ])
  );
}
var mt = b(ct, [
    [`render`, pt],
    [`__scopeId`, `data-v-b5ea46fc`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/sideBar.vue`,
    ],
  ]),
  ht = S({
    __name: `CreatePage`,
    setup(e, { expose: t }) {
      t();
      let n = I(),
        r = N(),
        i = A();
      a(async () => {
        let e = ``;
        if (n.selectedPackageIdGetter)
          switch (
            ((e =
              n.selectedPackageIdGetter.id.replaceAll(/\s+/g, ``).length == 0
                ? await i.createNewwork()
                : await i.loadWork()),
            e)
          ) {
            case `noneNameorWorkId`:
              r.showAlert(`ユーザー情報の取得に失敗しました`, !0);
              break;
            case `fallLoadData`:
              r.showAlert(`データの取得に失敗しました`, !0);
              break;
            case `damagedData`:
              r.showAlert(`データが破損しています`, !0);
              break;
            case `none`:
              r.showAlert(`読み込み完了`, !1);
              break;
            default:
              break;
          }
      });
      let o = {
        workPackageStore: n,
        alertStore: r,
        createWork: i,
        TopBar: Z,
        Preview: ee,
        sideBar: mt,
      };
      return (
        Object.defineProperty(o, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  gt = { class: `page` },
  _t = { class: `main` },
  vt = { class: `sidebar-area` };
function yt(t, n, r, i, a, o) {
  return (
    l(),
    p(`div`, gt, [
      f(`header`, null, [e(i.TopBar, { title: `` })]),
      f(`main`, _t, [
        f(`div`, vt, [e(i.sideBar)]),
        e(i.Preview, { type: `hard` }),
      ]),
    ])
  );
}
var bt = b(ht, [
  [`render`, yt],
  [`__scopeId`, `data-v-fe2f1873`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/page/create/CreatePage.vue`,
  ],
]);
export { bt as default };
