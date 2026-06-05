import {
  B as e,
  C as t,
  H as n,
  L as r,
  R as i,
  S as a,
  W as o,
  X as s,
  Z as c,
  _ as l,
  c as u,
  d,
  g as f,
  h as p,
  l as m,
  st as h,
  t as g,
  v as _,
  vt as v,
  x as y,
  xt as b,
  y as x,
} from "./_plugin-vue_export-helper-BwfGDmfF.js";
import { n as S, r as C } from "./pinia-BDLqBGc_.js";
import { t as ee } from "./BaseButton-DgJxAwXf.js";
import { a as w } from "./index-DPNatowj.js";
import { t as te } from "./userAuthstore-BS2VQYb3.js";
var T = w(`circle-minus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
  ]),
  E = w(`circle-plus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
    [`path`, { d: `M12 8v8`, key: `napkw2` }],
  ]),
  D = w(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  O = S(`create`, {
    state: () => ({
      workId: null,
      userLuggage_SaveDBData: null,
      listItem: null,
      previewCase: {},
      searchText: ``,
      staticItemData: {},
      category: null,
      addItemCounter: null,
      staticCases: {},
      iconMap: {},
      categoryColor: {},
      categories: [],
      isStaticLoaded: !1,
    }),
    getters: {
      staticCasesGetter: (e) => e.staticCases,
      categorys: (e) => e.categories,
      iconMapGetter: (e) => e.iconMap,
      categoryColorGetter: (e) => e.categoryColor,
      listItemGetter: (e) => e.listItem,
      previewItemGetter: (e) => e.previewCase,
      workIdGetter: (e) => e.workId,
      getAllCasesArray: (e) =>
        Object.entries(e.staticCases).map(([e, t]) => ({ id: e, data: t })),
      getPreviewCasesArray: (e) =>
        Object.entries(e.previewCase).map(([e, t]) => ({ id: e, data: t })),
      filteredListItem: (e) => {
        if (!e.listItem) return {};
        let t = e.searchText.trim().toLowerCase();
        return Object.fromEntries(
          Object.entries(e.listItem).filter(([n, r]) => {
            if (e.category === `bookmark`) return r.bookmark == 1;
            if (e.category === `create`) return r.createType == `userCreated`;
            let i = t === `` || r.name.toLowerCase().includes(t),
              a =
                !e.category ||
                e.category === `all` ||
                r.category.includes(e.category);
            return i && a;
          }),
        );
      },
    },
    actions: {
      setIconMap(e) {
        this.iconMap = e;
      },
      setStaticCases(e) {
        this.staticCases = e;
      },
      setCategoryColor(e) {
        this.categoryColor = e;
      },
      setCategories(e) {
        this.categories = e;
      },
      setSearchText(e) {
        this.searchText = e;
      },
      setCategory(e) {
        this.category = e;
      },
      setAddItemCounter(e) {
        this.addItemCounter = e;
      },
      setStaticItemData(e) {
        this.staticItemData = e;
      },
      setSaveDBData(e) {
        this.userLuggage_SaveDBData = e;
      },
      setlistItem(e) {
        this.listItem = e;
      },
      setpreviewData(e) {
        this.previewCase = e;
      },
      setWorkId(e) {
        this.workId = e;
      },
      setStaticLoaded(e) {
        this.isStaticLoaded = e;
      },
      addCount(e) {
        if (!this.previewCase || !this.listItem) return;
        let t = this.previewCase[e.caseId].pockets[e.pocketId],
          n = e.parentItemId ?? e.originalId,
          r = t.items.get(n);
        if (!r) return;
        if (!e.parentItemId) {
          r.count += e.pulse;
          return;
        }
        let i = r.innerItems.get(e.originalId);
        return (i && (i.count += e.pulse), t.items);
      },
      pushpreviewItem(e) {
        if (!this.previewCase || !this.listItem || !this.addItemCounter) return;
        let t = this.previewCase[e.caseId].pockets[e.pocketId],
          n = e.originalId ? e.originalId : `item_${this.addItemCounter}`;
        this.addItemCounter++;
        let r = {
          ...this.listItem[e.itemId],
          count: 1,
          originalId: n,
          innerItems: new Map(),
        };
        if (e.parentItemId == null) t.items.set(r.originalId, r);
        else {
          let n = t.items.get(e.parentItemId)?.innerItems;
          n && n.set(r.originalId, r);
        }
        return t.items;
      },
      addBookmark(e) {
        if (!(!this.previewCase || !this.listItem))
          return (
            (this.listItem[e.itemId].bookmark =
              !this.listItem[e.itemId].bookmark),
            e.itemId
          );
      },
      addListItem(e) {
        if (!this.previewCase || !this.listItem || !this.addItemCounter) return;
        let t = `item_${Object.keys(this.listItem).length + 1}`,
          n = { ...e, bookmark: !1, id: t };
        return ((this.listItem[t] = n), n);
      },
      deletepreviewItem(e) {
        if (!this.previewCase || !this.listItem || !this.previewCase[e.caseId])
          return;
        let t = this.previewCase[e.caseId].pockets[e.pocketId],
          n = e.parentItemId ? e.parentItemId : e.originalId,
          r = t.items.get(n)?.innerItems;
        if (r && e.parentItemId == null)
          return (
            r.delete(n),
            e.parentItemId != null &&
              r.get(e.originalId)?.innerItems?.delete(e.itemId),
            t.items
          );
      },
      addPreviewCase(e) {
        if (e.reverse) {
          let t = e.case;
          return t.case ? ((this.previewCase[t.id] = t), t) : void 0;
        } else {
          let t = e.case;
          return (
            (this.previewCase[t.caseId] = this.staticCasesGetter[t.caseType]),
            t
          );
        }
      },
      deleteCase(e) {
        return (delete this.previewItemGetter[e.id], e.id);
      },
      reSizePocket(e) {
        let t = this.previewCase[e.caseId].pockets[e.pocketId];
        return (
          (t.height = e.resizeData.height),
          (t.width = e.resizeData.width),
          (t.x = e.resizeData.x),
          (t.y = e.resizeData.y),
          t
        );
      },
      reMovePocket(e) {
        let t = this.previewCase[e.caseId].pockets[e.pocketId];
        return ((t.x = e.removeData.x), (t.y = e.removeData.y), t);
      },
    },
  }),
  k = O(),
  ne = () => {
    if (!k.workIdGetter == null) return;
    let e = [],
      t = (t) => {
        let n = {
          id: `id_${e.length}`,
          workId: k.workIdGetter,
          userId: t.user,
          type: t.token.type,
          path: t.token.path,
          beforeValue: null,
          value: t.token,
          createdAt: Date.now(),
        };
        (e.length == 0 && r(), e.push(n));
      },
      n = () => {
        e.length = 0;
      },
      r = () => {
        setTimeout(() => {
          n();
        }, 3e3);
      };
    return { push: t, pop: n };
  },
  A = new WebSocket(`ws://localhost:3080`),
  j = M();
A.onmessage = (e) => {
  let t = JSON.parse(e.data);
  switch (t.event) {
    case `work:alteration`:
      let e = JSON.parse(t.payload);
      j.alterationData(e);
      break;
    case `work:userJoin`:
      console.log(`join`);
      break;
    case `work:userLeave`:
      console.log(`leave`);
      break;
    default:
      console.warn(`unknown event`, t.event);
  }
};
var M = () => {
    let e = ne(),
      t = O();
    return {
      hydrateCreateState: (e) => {
        let n = t.staticItemData,
          r = t.staticCases,
          { previewDatas: i, itemListDatas: a } = e,
          o = { ...n, ...a.addedItems },
          s = Object.fromEntries(
            Object.entries(o).map(([e, t]) => [
              e,
              { ...t, bookmark: a.bookmarks.includes(t.id) },
            ]),
          ),
          c = (e) =>
            new Map(
              Array.from(e.entries()).map(([e, t]) => {
                let { bookmark: n, ...r } = s[t.id];
                return [
                  e,
                  s[t.id].isStorage
                    ? {
                        ...r,
                        innerItems: t.innerItems ? c(t.innerItems) : new Map(),
                        count: t.count,
                        originalId: t.originalId,
                      }
                    : { ...r, count: t.count, originalId: t.originalId },
                ];
              }),
            ),
          l = (e, t) => {
            let n = Object.fromEntries(
                Object.entries(t.pockets).map(([t, n]) => {
                  let r = e.poketSvgEdit?.find((e) => e.id === n.id),
                    i = {
                      width: r?.width ?? n.width,
                      height: r?.height ?? n.height,
                      x: r?.x ?? n.x,
                      y: r?.y ?? n.y,
                      id: n.id,
                      name: n.name,
                    };
                  return [
                    n.id,
                    {
                      ...n,
                      ...i,
                      items: c(e.pockets[n.id]?.innerItems ?? new Map()),
                    },
                  ];
                }),
              ),
              r = Object.fromEntries(
                Object.entries(n).filter(
                  ([t, n]) => !(e.poketDelete ?? []).includes(n.id),
                ),
              );
            return (
              (e.pocketAdd ?? []).forEach((t) => {
                r[t.id] = {
                  ...t,
                  items: c(e.pockets[t.id]?.innerItems ?? new Map()),
                };
              }),
              r
            );
          };
        return {
          vuepreviewData: Object.fromEntries(
            Object.entries(i.mainLuggage).map(([e, t]) => {
              let n = r[t.caseType];
              return [
                e,
                {
                  id: e,
                  case: n.case,
                  handle: n.handle,
                  name: n.name,
                  pockets: l(t, n),
                },
              ];
            }),
          ),
          vueItemList: s,
          addItemCounter: i.addItemCounter,
        };
      },
      alterationData: (n) => {
        if (!t || !e) return;
        let r = { type: `arrayPush`, path: [], value: null };
        switch (n.alterationType) {
          case `previewItems_additem`: {
            let e = t.pushpreviewItem(n.token),
              i = n.token;
            ((r.path = [i.caseId, `pockets`, i.pocketId, `innerItems`]),
              (r.value = e),
              (r.type = `set`));
            break;
          }
          case `previewItems_addcount`:
            t.addCount(n.token);
            break;
          case `itemlistItems_bookmark`:
            t.addBookmark(n.token);
            break;
          case `previewItems_delete`:
            t.deletepreviewItem(n.token);
            break;
          case `itemlistItems_additem`:
            t.addListItem(n.token);
            break;
          case `previewCases_addCase`:
            t.addPreviewCase(n.token);
            break;
          case `previewCases_deleteCase`:
            t.deleteCase(n.token);
            break;
          case `confirmed_resizePocket`:
            t.reMovePocket(n.token);
            break;
          case `confirmed_resizePocket`:
            t.reSizePocket(n.token);
            break;
        }
        e.push({ user: n.user, alterationType: n.alterationType, token: r });
      },
      initCreateStaticData: async () => {
        if (t.isStaticLoaded) return;
        let [e, n, r] = await Promise.all([
            fetch(`/json/create/itemList.json`),
            fetch(`/json/create/category.json`),
            fetch(`/json/create/case.json`),
          ]),
          i = await e.json(),
          a = await n.json(),
          o = await r.json();
        (t.setStaticItemData(i),
          t.setIconMap(a.iconMap),
          t.setCategoryColor(a.color),
          t.setCategories(a.categoryData),
          t.setStaticCases(o),
          t.setStaticLoaded(!0));
      },
    };
  },
  N = S(`alterationLog`, () => {
    let e = M(),
      t = [],
      n = [];
    return {
      undoStack: t,
      redoStack: n,
      saveState: (e) => {
        (t.push(e), (n.length = 0));
      },
      undo: () => {
        if (t.length === 0) return;
        let r = t.pop();
        r &&
          (n.push(r),
          r.reverseToken instanceof Array
            ? r.reverseToken.forEach((t) => {
                e.alterationData(t);
              })
            : e.alterationData(r.reverseToken));
      },
      redo: () => {
        if (n.length === 0) return;
        let r = n.pop();
        r && (t.push(r), e.alterationData(r.forwardToken));
      },
    };
  }),
  P = {
    itemListDatas: {
      addedItems: {
        item_1: {
          id: `item_1`,
          name: `Tシャツ`,
          category: [`create`, `food`],
          iconId: `charger`,
          isStorage: !1,
          createType: `userCreated`,
        },
      },
      addItemCounter: 1,
      bookmarks: [`item_1`, `item_2`, `item_3`, `item_4`],
    },
    previewDatas: {
      caseType: `HardSuitcase`,
      addItemCounter: 1,
      mainLuggage: {
        suitcase_0: {
          id: `suitcase_0`,
          addItemCounter: 8,
          caseType: `HardSuitcase`,
          poketSvgEdit: [{ id: `main`, width: 200, height: 300 }],
          pocketAdd: [
            {
              id: `side`,
              width: 200,
              height: 300,
              name: `サイド`,
              x: 0,
              y: 0,
              items: new Map(),
            },
          ],
          poketDelete: [`mesh`],
          pockets: {
            mesh: {
              id: `mesh`,
              originalId: `mesh`,
              count: 0,
              innerItems: new Map([
                [`item_1`, { originalId: `item_1`, id: `item_1`, count: 3 }],
                [
                  `item_2`,
                  {
                    id: `inner_1`,
                    count: 1,
                    originalId: `item_2`,
                    innerItems: new Map([
                      [
                        `item_3`,
                        { id: `item_6`, originalId: `item_3`, count: 2 },
                      ],
                      [
                        `item_4`,
                        { id: `item_6`, originalId: `item_4`, count: 1 },
                      ],
                    ]),
                  },
                ],
              ]),
            },
            main: {
              id: `main`,
              originalId: `main`,
              count: 0,
              innerItems: new Map([
                [`item_5`, { originalId: `item_5`, id: `inner_1`, count: 3 }],
              ]),
            },
          },
        },
      },
    },
  },
  F = () => ({ load: async (e, t) => P }),
  I = () => {
    let e = O(),
      t = te(),
      n = N(),
      r = F(),
      i = M(),
      a = async () => {
        let t = null,
          n = {},
          a = {},
          o = 0;
        try {
          t = await r.load(1, 1);
        } catch {
          return `fallLoadData`;
        }
        (await M().initCreateStaticData(), i.hydrateCreateState(t));
        try {
          if (t == null) throw Error();
          await M().initCreateStaticData();
          let e = i.hydrateCreateState(t);
          ((n = e.vuepreviewData), (a = e.vueItemList), (o = e.addItemCounter));
        } catch {
          return `damagedData`;
        }
        return (
          e.setAddItemCounter(o),
          e.setSaveDBData(t),
          e.setlistItem(a),
          e.setpreviewData(n),
          `none`
        );
      },
      o = async (r) => {
        let { itemId: a } = r,
          o = e?.listItemGetter;
        if (!o) return `nonePreview`;
        let s = o[a];
        if (!s) return `noneItem`;
        if (s.isStorage == 1 && r.parentItemId != null)
          return `isRegulatedAction`;
        let c = {
            alterationType: `previewItems_additem`,
            token: r,
            user: t.userName,
          },
          l = {
            alterationType: `previewItems_delete`,
            token: r,
            user: t.userName,
          };
        return (
          n.saveState({ forwardToken: c, reverseToken: l }),
          i.alterationData(c),
          `addPreview`
        );
      },
      s = (e) => {
        let r = {
            alterationType: `previewItems_addcount`,
            token: e,
            user: t.userName,
          },
          a = {
            alterationType: `previewItems_addcount`,
            token: { ...e, pulse: e.pulse * -1 },
            user: t.userName,
          };
        (n.saveState({ forwardToken: r, reverseToken: a }),
          i.alterationData(r));
      },
      c = (e) => {
        let n = {
          alterationType: `itemlistItems_bookmark`,
          token: e,
          user: t.userName,
        };
        i.alterationData(n);
      },
      l = (r) => {
        if (!e.listItemGetter) return;
        let a = {
            alterationType: `previewItems_delete`,
            token: r,
            user: t.userName,
          },
          { innnerItemToken: o, ...s } = r,
          c = [];
        (c.push({
          alterationType: `previewItems_additem`,
          token: s,
          user: t.userName,
        }),
          r.innnerItemToken &&
            r.innnerItemToken.forEach((e) => {
              c.push({
                alterationType: `previewItems_additem`,
                token: e,
                user: t.userName,
              });
            }),
          i.alterationData(a),
          n.saveState({ forwardToken: a, reverseToken: c }));
      },
      u = (e) => {
        let n = {
          alterationType: `itemlistItems_additem`,
          token: e,
          user: t.userName,
        };
        i.alterationData(n);
      },
      d = (r) => {
        let i = `caseID_${e.getPreviewCasesArray.length}`,
          a = { case: { caseType: r, caseId: i }, reverse: !1 },
          o = {
            alterationType: `previewCases_addCase`,
            token: a,
            user: t.userName,
          },
          s = {
            alterationType: `previewCases_deleteCase`,
            token: { id: i, deletecase: e.staticCasesGetter[r] },
            user: t.userName,
          };
        (e.addPreviewCase(a),
          n.saveState({ forwardToken: o, reverseToken: s }));
      },
      f = (r) => {
        let i = e.previewItemGetter[r],
          a = { case: i, reverse: !0 },
          o = {
            alterationType: `previewCases_deleteCase`,
            token: { id: r, deletecase: i },
            user: t.userName,
          },
          s = {
            alterationType: `previewCases_addCase`,
            token: a,
            user: t.userName,
          };
        (e.addPreviewCase(a),
          n.saveState({ forwardToken: s, reverseToken: o }));
      },
      p = !1,
      m = { x: 0, y: 0, width: 0, height: 0 },
      h = (t, n, r) => {
        if (!p) {
          p = !0;
          let { x: t, y: i, width: a, height: o } = e.previewCase[r].pockets[n];
          m = { x: t, y: i, width: a, height: o };
        }
        let i = { caseId: r, pocketId: n, resizeData: t };
        e.reSizePocket(i);
      },
      g = (r, a) => {
        let { x: o, y: s, width: c, height: l } = e.previewCase[r].pockets[a],
          u = {
            pos: { x: o, y: s, width: c, height: l },
            caseId: r,
            pocketId: a,
          },
          d = {
            alterationType: `confirmed_resizePocket`,
            token: { pos: m, caseId: r, pocketId: a },
            user: t.userName,
          },
          f = {
            token: u,
            alterationType: `confirmed_resizePocket`,
            user: t.userName,
          };
        ((p = !1),
          n.saveState({ forwardToken: f, reverseToken: d }),
          i.alterationData(f));
      },
      _ = !1,
      v = { x: 0, y: 0, width: 0, height: 0 };
    return {
      confirmedRemovePocket: (r, a) => {
        let { x: o, y: s, width: c, height: l } = e.previewCase[r].pockets[a],
          u = {
            pos: { x: o, y: s, width: c, height: l },
            caseId: r,
            pocketId: a,
          },
          d = { pos: v, caseId: r, pocketId: a },
          f = {
            alterationType: `confirmed_resizePocket`,
            token: u,
            user: t.userName,
          },
          p = {
            alterationType: `confirmed_resizePocket`,
            token: d,
            user: t.userName,
          };
        ((_ = !1),
          n.saveState({ forwardToken: f, reverseToken: p }),
          i.alterationData(f));
      },
      provisionalRemovePocket: (t, n, r) => {
        if (!_) {
          _ = !0;
          let { x: t, y: i, width: a, height: o } = e.previewCase[r].pockets[n];
          v = { x: t, y: i, width: a, height: o };
        }
        let i = { caseId: r, pocketId: n, removeData: t };
        e.reMovePocket(i);
      },
      provisionalResizePocket: h,
      confirmedResizePocket: g,
      load: a,
      addItemToPreview: o,
      addItemCount: s,
      addBookmark: c,
      deletePreviewItem: l,
      addListItem: u,
      addCase: d,
      deleteCase: f,
    };
  },
  L = t({
    __name: `PreviewItem`,
    props: {
      item: { type: Object, required: !0 },
      pocketId: { type: String, required: !0 },
      parentItem: { type: String, required: !1 },
      caseId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = e,
        r = O(),
        i = I(),
        a = r.iconMap;
      function o(e) {
        let t = {
          originalId: n.item.originalId,
          popCaseId: n.caseId,
          popPocketId: n.pocketId,
        };
        e.dataTransfer?.setData(`originalId`, JSON.stringify(t));
      }
      let s = {
        props: n,
        createStore: r,
        createWork: i,
        iconMap: a,
        onDragStart: o,
        onDrop: (e) => {
          let t = e.dataTransfer?.getData(`itemId`);
          if (!t) return;
          let r = {
            itemId: t,
            pocketId: n.pocketId,
            parentItemId: n.item.originalId,
            caseId: n.caseId,
          };
          i.addItemToPreview(r);
        },
        onPlue: (e) => {
          n.item.count + e >= 99 ||
            n.item.count + e <= 0 ||
            i.addItemCount({
              originalId: n.item.originalId,
              pulse: e,
              pocketId: n.pocketId,
              parentItemId: n.parentItem ? n.parentItem : void 0,
              caseId: n.caseId,
            });
        },
        onDelete: () => {
          let e = [];
          n.item.innerItems?.forEach((t) => {
            e?.push({
              pocketId: n.pocketId,
              caseId: n.caseId,
              parentItemId: n.item.originalId,
              itemId: t.id,
            });
          });
          let t = {
            originalId: n.item.originalId,
            pocketId: n.pocketId,
            parentItemId: n.parentItem ? n.parentItem : void 0,
            itemId: n.item.id,
            caseId: n.caseId,
            innnerItemToken: e,
          };
          i.deletePreviewItem(t);
        },
        icon: a[n.item.iconId] ?? `📦`,
        get CirclePlus() {
          return E;
        },
        get CircleMinus() {
          return T;
        },
        get BaseButton() {
          return ee;
        },
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
  R = { class: `item-card` },
  z = { class: `header` },
  B = { class: `count` },
  V = { key: 0, class: `drop-text` };
function H(t, r, i, c, l, u) {
  let p = o(`previewItem`, !0);
  return (
    e(),
    x(`div`, R, [
      f(`section`, z, [
        f(`div`, null, b(c.icon.src), 1),
        f(`div`, null, b(c.props.item.name), 1),
        f(`div`, B, [
          a(c.CirclePlus, {
            class: `countIcon`,
            onClick: (r[0] ||= (e) => c.onPlue(1)),
          }),
          y(` ` + b(c.props.item.count) + ` `, 1),
          a(c.CircleMinus, {
            class: `countIcon`,
            onClick: (r[1] ||= (e) => c.onPlue(-1)),
          }),
        ]),
        a(
          c.BaseButton,
          { class: `delete-button`, onClick: c.onDelete },
          { default: s(() => [...(r[3] ||= [y(`削除`, -1)])]), _: 1 },
        ),
      ]),
      c.props.item.isStorage
        ? (e(),
          x(
            `section`,
            {
              key: 0,
              class: `storage innerItems`,
              onDrop: [c.onDrop, (r[2] ||= m(() => {}, [`stop`]))],
            },
            [
              (e(!0),
              x(
                d,
                null,
                n(
                  c.props.item.innerItems,
                  ([t, n]) => (
                    e(),
                    x(`div`, { key: t }, [
                      a(
                        p,
                        {
                          item: n,
                          pocketId: c.props.pocketId,
                          parentItem: c.props.item.originalId,
                          caseId: c.props.caseId,
                        },
                        null,
                        8,
                        [`item`, `pocketId`, `parentItem`, `caseId`],
                      ),
                    ])
                  ),
                ),
                128,
              )),
              c.props.item.innerItems?.size === 0
                ? (e(), x(`p`, V, b(`ここにドロップ`)))
                : _(``, !0),
            ],
            32,
          ))
        : _(``, !0),
    ])
  );
}
var U = g(L, [
    [`render`, H],
    [`__scopeId`, `data-v-126205df`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PreviewItem.vue`,
    ],
  ]),
  W = t({
    __name: `PocketModal`,
    props: { pocket: { type: Object, required: !0 } },
    emits: [`close`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = h(!1),
        i = I(),
        a = n,
        o = () => {
          ((r.value = !0),
            setTimeout(() => {
              a(`close`);
            }, 300));
        },
        s = (e) => {
          let t = e.dataTransfer?.getData(`itemId`),
            n = e.dataTransfer?.getData(`positionChangeData`);
          if (!(!t && !n) && t) {
            let e = {
              itemId: t,
              pocketId: l.pocket.id,
              caseId: l.pocket.caseId,
            };
            i.addItemToPreview(e);
          }
        },
        c = () => {},
        l = e,
        u = {
          isClose: r,
          createWork: i,
          emit: a,
          close: o,
          onDrop: s,
          handleDrop: c,
          props: l,
          get X() {
            return D;
          },
          PreviewItem: U,
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
  G = { class: `modal` },
  K = { class: `header` },
  q = { class: `name` },
  J = { class: `drop-area` },
  Y = { key: 0, style: { "font-size": `12px`, "text-align": `center` } };
function X(t, r, i, o, s, c) {
  return (
    e(),
    x(
      `div`,
      {
        class: v([`overlay`, [`overlay`, { close: o.isClose }]]),
        onDrop: [o.onDrop, (r[0] ||= m(() => {}, [`stop`]))],
        onDragover: m(o.handleDrop, [`prevent`]),
      },
      [
        f(`div`, G, [
          f(`header`, K, [
            f(`div`, q, b(`#` + i.pocket.name), 1),
            f(`div`, { onClick: o.close, class: `close-button` }, [
              a(o.X, { size: 20, color: `black`, "stroke-width": `2.5` }),
            ]),
          ]),
          f(`div`, J, [
            i.pocket.items.size === 0
              ? (e(), x(`p`, Y, ` ここに持ち物をドラッグ `))
              : _(``, !0),
            (e(!0),
            x(
              d,
              null,
              n(
                i.pocket.items,
                ([t, n]) => (
                  e(),
                  x(`div`, { key: t, class: `item-card` }, [
                    a(
                      o.PreviewItem,
                      {
                        caseId: i.pocket.caseId,
                        item: n,
                        pocketId: i.pocket.id,
                      },
                      null,
                      8,
                      [`caseId`, `item`, `pocketId`],
                    ),
                  ])
                ),
              ),
              128,
            )),
          ]),
        ]),
      ],
      34,
    )
  );
}
var Z = g(W, [
    [`render`, X],
    [`__scopeId`, `data-v-f42593c0`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PocketModal.vue`,
    ],
  ]),
  Q = S(`caseDragStore`, {
    state: () => ({ isDrag: !1 }),
    getters: { isDragging: (e) => e.isDrag },
    actions: {
      drag(e) {
        this.isDrag = e;
      },
    },
  }),
  re = t({
    __name: `dropCaseArea`,
    setup(e, { expose: t }) {
      t();
      let n = I(),
        r = Q(),
        { isDrag: i } = C(r),
        a = {
          createWork: n,
          casecardDragStore: r,
          isDrag: i,
          handleDrop: () => {},
          onDrop: (e) => {
            let t = e.dataTransfer?.getData(`caseId`);
            t && n.addCase(t);
          },
        };
      return (
        Object.defineProperty(a, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  });
function ie(t, n, r, i, a, o) {
  return c(
    (e(),
    x(
      `div`,
      {
        onDrop: [i.onDrop, (n[0] ||= m(() => {}, [`stop`]))],
        onDragover: m(i.handleDrop, [`prevent`]),
        class: `drop-area`,
      },
      [...(n[1] ||= [f(`h1`, null, `ここにドロップ`, -1)])],
      544,
    )),
    [[u, i.isDrag]],
  );
}
var ae = g(re, [
    [`render`, ie],
    [`__scopeId`, `data-v-4322c95e`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/components/dropCaseArea.vue`,
    ],
  ]),
  oe = t({
    __name: `svgResizeHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = I(),
        a = e,
        o = !1,
        s = { x: 0, y: 0 },
        c = 0,
        l = 0,
        u = (e, t, n) => {
          ((o = !0),
            (s = { x: t, y: n }),
            (c = e.clientX),
            (l = e.clientY),
            e.currentTarget.setPointerCapture(e.pointerId));
        },
        d = () => {
          o = !1;
        },
        f = (e) => {
          if (!o) return;
          let t = e.clientX - c,
            r = e.clientY - l;
          ((c = e.clientX), (l = e.clientY));
          let i = s.x === -1 ? t : 0,
            u = s.y === -1 ? r : 0;
          n.provisionalResizePocket(
            {
              x: a.pocket.x + i,
              y: a.pocket.y + u,
              width: a.pocket.width + t * s.x,
              height: a.pocket.height + r * s.y,
            },
            a.pocketId,
            a.caseId,
          );
        };
      (r(() => {
        (window.addEventListener(`pointermove`, f),
          window.addEventListener(`pointerup`, d));
      }),
        i(() => {
          (window.removeEventListener(`pointermove`, f),
            window.removeEventListener(`pointerup`, d));
        }));
      let p = {
        createWork: n,
        props: a,
        get isResizing() {
          return o;
        },
        set isResizing(e) {
          o = e;
        },
        get resizeDirection() {
          return s;
        },
        set resizeDirection(e) {
          s = e;
        },
        get lastX() {
          return c;
        },
        set lastX(e) {
          c = e;
        },
        get lastY() {
          return l;
        },
        set lastY(e) {
          l = e;
        },
        startResize: u,
        stopResize: d,
        handlePointerMove: f,
      };
      return (
        Object.defineProperty(p, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  se = { class: `resize-handles` },
  ce = [`cx`, `cy`],
  le = [`cx`, `cy`],
  ue = [`cx`, `cy`],
  de = [`cx`, `cy`],
  fe = [`cx`, `cy`],
  pe = [`cx`, `cy`],
  me = [`cx`, `cy`],
  he = [`cx`, `cy`];
function ge(t, n, r, i, a, o) {
  return (
    e(),
    x(`g`, se, [
      f(
        `circle`,
        {
          cx: r.pocket.x,
          cy: r.pocket.y,
          r: `6`,
          onPointerdown: (n[0] ||= (e) => i.startResize(e, -1, -1)),
          class: `resize-handle`,
          style: { cursor: `nwse-resize` },
        },
        null,
        40,
        ce,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x + r.pocket.width,
          cy: r.pocket.y,
          r: `6`,
          onPointerdown: (n[1] ||= (e) => i.startResize(e, 1, -1)),
          class: `resize-handle`,
          style: { cursor: `nesw-resize` },
        },
        null,
        40,
        le,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x,
          cy: r.pocket.y + r.pocket.height,
          r: `6`,
          onPointerdown: (n[2] ||= (e) => i.startResize(e, -1, 1)),
          class: `resize-handle`,
          style: { cursor: `nesw-resize` },
        },
        null,
        40,
        ue,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x + r.pocket.width,
          cy: r.pocket.y + r.pocket.height,
          r: `6`,
          onPointerdown: (n[3] ||= (e) => i.startResize(e, 1, 1)),
          class: `resize-handle`,
          style: { cursor: `nwse-resize` },
        },
        null,
        40,
        de,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x + r.pocket.width / 2,
          cy: r.pocket.y,
          r: `6`,
          onPointerdown: (n[4] ||= (e) => i.startResize(e, 0, -1)),
          class: `resize-handle`,
          style: { cursor: `ns-resize` },
        },
        null,
        40,
        fe,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x + r.pocket.width / 2,
          cy: r.pocket.y + r.pocket.height,
          r: `6`,
          onPointerdown: (n[5] ||= (e) => i.startResize(e, 0, 1)),
          class: `resize-handle`,
          style: { cursor: `ns-resize` },
        },
        null,
        40,
        pe,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x,
          cy: r.pocket.y + r.pocket.height / 2,
          r: `6`,
          onPointerdown: (n[6] ||= (e) => i.startResize(e, -1, 0)),
          class: `resize-handle`,
          style: { cursor: `ew-resize` },
        },
        null,
        40,
        me,
      ),
      f(
        `circle`,
        {
          cx: r.pocket.x + r.pocket.width,
          cy: r.pocket.y + r.pocket.height / 2,
          r: `6`,
          onPointerdown: (n[7] ||= (e) => i.startResize(e, 1, 0)),
          class: `resize-handle`,
          style: { cursor: `ew-resize` },
        },
        null,
        40,
        he,
      ),
    ])
  );
}
var _e = g(oe, [
    [`render`, ge],
    [`__scopeId`, `data-v-95e8907c`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/svgResizeHandle.vue`,
    ],
  ]),
  ve = t({
    __name: `SvgRemoveHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = h(20),
        a = I(),
        o = e,
        s = !1,
        c = 0,
        l = 0,
        u = (e) => {
          ((s = !0),
            (c = e.clientX),
            (l = e.clientY),
            e.currentTarget.setPointerCapture(e.pointerId));
        },
        d = () => {
          s = !1;
        },
        f = (e) => {
          if (!s) return;
          let t = e.clientX - c,
            n = e.clientY - l;
          ((c = e.clientX),
            (l = e.clientY),
            a.provisionalRemovePocket(
              { x: o.pocket.x + t, y: o.pocket.y + n },
              o.pocketId,
              o.caseId,
            ));
        };
      (r(() => {
        (window.addEventListener(`pointermove`, f),
          window.addEventListener(`pointerup`, d));
      }),
        i(() => {
          (window.removeEventListener(`pointermove`, f),
            window.removeEventListener(`pointerup`, d));
        }));
      let p = {
        clickAreaSize: n,
        createWork: a,
        props: o,
        get isRemoveing() {
          return s;
        },
        set isRemoveing(e) {
          s = e;
        },
        get lastX() {
          return c;
        },
        set lastX(e) {
          c = e;
        },
        get lastY() {
          return l;
        },
        set lastY(e) {
          l = e;
        },
        startReMove: u,
        stopResize: d,
        handlePointerMove: f,
      };
      return (
        Object.defineProperty(p, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  ye = [`x`, `y`, `width`, `height`];
function be(t, n, r, i, a, o) {
  return (
    e(),
    x(
      `g`,
      {
        div: ``,
        onPointerdown: (n[0] ||= (e) => i.startReMove(e)),
        class: `remove-handle`,
      },
      [
        f(
          `rect`,
          {
            x: r.pocket.x,
            y: r.pocket.y,
            width: r.pocket.width,
            height: r.pocket.height,
            rx: `1`,
            class: `pocket`,
            fill: `transparent`,
          },
          null,
          8,
          ye,
        ),
      ],
      32,
    )
  );
}
var xe = g(ve, [
    [`render`, be],
    [`__scopeId`, `data-v-c265c640`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/SvgRemoveHandle.vue`,
    ],
  ]),
  Se = t({
    __name: `case`,
    props: {
      pockets: { type: Object, required: !0 },
      case: { type: Object, required: !0 },
      handle: { type: Object, required: !0 },
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
    },
    emits: [`update:selectedPocket`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = e,
        i = p(() =>
          Object.values(r.pockets).map((e) =>
            e.items ? e : { ...e, items: new Map() },
          ),
        ),
        a = n;
      function o(e) {
        a(`update:selectedPocket`, {
          items: e.items,
          id: e.id,
          name: e.name,
          caseId: r.id,
        });
      }
      let s = {
        props: r,
        pockets: i,
        emit: a,
        openPocket: o,
        SvgResizeHandle: _e,
        SvgRemoveHandle: xe,
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
  Ce = { class: `suitcase-wrap` },
  we = { viewBox: `0 0 400 560`, class: `suitcase` },
  Te = [`x`, `y`, `width`, `height`],
  Ee = [`x`, `y`, `width`, `height`],
  De = [`onDblclick`],
  $ = [`x`, `y`, `width`, `height`],
  Oe = [`x`, `y`],
  ke = [`x`, `y`];
function Ae(t, r, i, o, s, c) {
  return (
    e(),
    x(`div`, Ce, [
      (e(),
      x(`svg`, we, [
        f(
          `rect`,
          {
            x: o.props.case.x,
            y: o.props.case.y,
            width: o.props.case.width,
            height: o.props.case.height,
            class: `case-body`,
            rx: `14`,
          },
          null,
          8,
          Te,
        ),
        f(
          `rect`,
          {
            x: o.props.handle.x,
            y: o.props.handle.y,
            width: o.props.handle.width,
            height: o.props.handle.height,
            rx: `12`,
            class: `handle`,
          },
          null,
          8,
          Ee,
        ),
        (e(!0),
        x(
          d,
          null,
          n(
            o.pockets,
            (t) => (
              e(),
              x(
                `g`,
                {
                  key: t.id,
                  class: `pocket-group`,
                  onDblclick: (e) => o.openPocket(t),
                },
                [
                  f(
                    `rect`,
                    {
                      x: t.x,
                      y: t.y,
                      width: t.width,
                      height: t.height,
                      rx: `14`,
                      class: `pocket`,
                    },
                    null,
                    8,
                    $,
                  ),
                  f(
                    `text`,
                    {
                      x: t.x + t.width / 2,
                      y: t.y + t.height / 2,
                      "text-anchor": `middle`,
                      "dominant-baseline": `middle`,
                      class: `pocket-label`,
                    },
                    b(t.name),
                    9,
                    Oe,
                  ),
                  a(
                    o.SvgRemoveHandle,
                    {
                      class: `svg-removehandle`,
                      pocket: t,
                      caseId: i.id,
                      pocketId: t.id,
                    },
                    null,
                    8,
                    [`pocket`, `caseId`, `pocketId`],
                  ),
                  f(
                    `text`,
                    {
                      x: t.x + t.width - 12,
                      y: t.y + 22,
                      "text-anchor": `end`,
                      class: `pocket-count`,
                    },
                    b(t.items?.size),
                    9,
                    ke,
                  ),
                  a(
                    o.SvgResizeHandle,
                    {
                      pocket: t,
                      caseId: i.id,
                      pocketId: t.id,
                      class: `svg-resizehandle`,
                    },
                    null,
                    8,
                    [`pocket`, `caseId`, `pocketId`],
                  ),
                ],
                40,
                De,
              )
            ),
          ),
          128,
        )),
      ])),
    ])
  );
}
var je = g(Se, [
    [`render`, Ae],
    [`__scopeId`, `data-v-06975ad1`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/case.vue`,
    ],
  ]),
  Me = t({
    __name: `Preview`,
    setup(e, { expose: t }) {
      t();
      let n = h(),
        r = O(),
        { getPreviewCasesArray: i } = C(r),
        a = {
          selectedPocket: n,
          createStore: r,
          cases: i,
          PocketModal: Z,
          dropCaseArea: ae,
          Case: je,
        };
      return (
        Object.defineProperty(a, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  Ne = { class: `preview-area` },
  Pe = { class: `pocketModal` };
function Fe(t, r, i, o, s, c) {
  return (
    e(),
    x(`div`, Ne, [
      a(o.dropCaseArea, { class: `drop-area` }),
      (e(!0),
      x(
        d,
        null,
        n(
          o.cases,
          (t) => (
            e(),
            x(`div`, { class: `preview`, key: t.id }, [
              a(
                o.Case,
                {
                  pockets: t.data.pockets,
                  case: t.data.case,
                  name: t.data.name,
                  handle: t.data.handle,
                  id: t.id,
                  selectedPocket: o.selectedPocket,
                  "onUpdate:selectedPocket": (r[0] ||= (e) =>
                    (o.selectedPocket = e)),
                },
                null,
                8,
                [`pockets`, `case`, `name`, `handle`, `id`, `selectedPocket`],
              ),
            ])
          ),
        ),
        128,
      )),
      f(`section`, Pe, [
        o.selectedPocket
          ? (e(),
            l(
              o.PocketModal,
              {
                key: 0,
                pocket: o.selectedPocket,
                onClose: (r[1] ||= (e) => (o.selectedPocket = null)),
              },
              null,
              8,
              [`pocket`],
            ))
          : _(``, !0),
      ]),
    ])
  );
}
var Ie = g(Me, [
  [`render`, Fe],
  [`__scopeId`, `data-v-d64e8ecd`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/Preview.vue`,
  ],
]);
export { O as a, N as i, Q as n, I as r, Ie as t };
