import {
  C as e,
  G as t,
  Q as n,
  R as r,
  S as i,
  St as a,
  U as o,
  V as s,
  Z as c,
  _ as l,
  b as u,
  ct as d,
  f,
  g as p,
  l as m,
  t as h,
  u as g,
  v as _,
  w as v,
  y,
  yt as ee,
  z as b,
} from "./_plugin-vue_export-helper-qA28kd7_.js";
import { n as x, r as S } from "./pinia-DB58mGSn.js";
import { t as te } from "./BaseButton-BOvMoO14.js";
import { a as C } from "./index-C7S0O4kR.js";
import { t as w } from "./userAuthstore-CclVSd_h.js";
import { t as T } from "./workPackageStore-CHuZhDEm.js";
import "three/tsl";
var E = C(`circle-minus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
  ]),
  D = C(`circle-plus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
    [`path`, { d: `M12 8v8`, key: `napkw2` }],
  ]),
  O = C(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  k = x(`create`, {
    state: () => ({
      workId: ``,
      workName: ``,
      userLuggage_SaveDBData: null,
      listItem: null,
      previewCase: {},
      searchText: ``,
      staticItemData: {},
      category: null,
      addItemCounter: 0,
      staticCases: {},
      iconMap: {},
      categoryColor: {},
      categories: [],
      isStaticLoaded: !1,
    }),
    getters: {
      staticCasesGetter: (e) => e.staticCases,
      workNameGetter: (e) => e.workName,
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
      setWorkName(e) {
        this.workName = e;
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
        if (
          (console.log(e),
          !this.previewCase || !this.listItem || !this.addItemCounter)
        )
          return;
        let t = this.previewCase[e.caseId].pockets[e.pocketId];
        this.addItemCounter++;
        let n = {
          ...this.listItem[e.itemId],
          originalId: e.originalId,
          count: 1,
          innerItems: new Map(),
        };
        if (e.parentItemId == null) t.items.set(n.originalId, n);
        else {
          let r = t.items.get(e.parentItemId)?.innerItems;
          r && r.set(n.originalId, n);
        }
        return (console.log(t.items), t.items);
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
        console.log(e);
        let t = this.previewCase[e.caseId].pockets[e.pocketId],
          n = e.parentItemId ? e.parentItemId : e.originalId;
        if (e.parentItemId == null) return (t.items.delete(n), t.items);
        if (e.parentItemId != null)
          return (
            t.items.get(e.parentItemId)?.innerItems?.delete(e.originalId),
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
  A = k(),
  ne = () => {
    if (!A.workIdGetter == null) return;
    let e = [],
      t = (t) => {
        let n = {
          id: `id_${e.length}`,
          workId: A.workIdGetter,
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
  j = () => {
    let e = ne(),
      t = k();
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
            ((r.path = [
              `previewDatas`,
              `mainLuggage`,
              i.caseId,
              `pockets`,
              i.pocketId,
              `innerItems`,
            ]),
              (r.value = e),
              (r.type = `mapPush`));
            break;
          }
          case `previewItems_addcount`: {
            let e = t.addCount(n.token),
              i = n.token;
            ((r.path = [
              `previewDatas`,
              `mainLuggage`,
              i.caseId,
              `pockets`,
              i.pocketId,
              `innerItems`,
              i.originalId,
            ]),
              (r.value = e),
              (r.type = `set`));
            break;
          }
          case `itemlistItems_bookmark`: {
            let e = t.addBookmark(n.token);
            ((r.path = [`itemListDatas`, `bookmarks`]),
              (r.value = e),
              (r.type = `arrayPush`));
            break;
          }
          case `previewItems_delete`: {
            let e = t.deletepreviewItem(n.token),
              i = n.token;
            ((r.path = [
              `previewDatas`,
              `mainLuggage`,
              i.caseId,
              `pockets`,
              i.pocketId,
              `innerItems`,
            ]),
              (r.value = e),
              (r.type = `mapRemove`));
            break;
          }
          case `itemlistItems_additem`: {
            let e = t.addListItem(n.token);
            ((r.path = [`itemListDatas`, `addedItems`]),
              (r.value = e),
              (r.type = `objectPush`));
            break;
          }
          case `previewCases_addCase`: {
            let e = t.addPreviewCase(n.token);
            ((r.path = [`previewDatas`, `mainLuggage`]),
              (r.value = e),
              (r.type = `objectPush`));
            break;
          }
          case `confirmed_removePocket`: {
            let e = t.reMovePocket(n.token),
              i = n.token;
            ((r.path = [
              `previewDatas`,
              `mainLuggage`,
              i.caseId,
              `pockets`,
              i.pocketId,
              `innerItems`,
            ]),
              (r.value = e),
              (r.type = `mapPush`));
            break;
          }
          case `confirmed_resizePocket`: {
            let e = t.reSizePocket(n.token),
              i = n.token;
            ((r.path = [
              `previewDatas`,
              `mainLuggage`,
              i.caseId,
              `pockets`,
              i.pocketId,
              `innerItems`,
            ]),
              (r.value = e),
              (r.type = `mapPush`));
            break;
          }
          case `previewCases_deleteCase`:
            t.deleteCase(n.token);
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
  M = x(`alterationLog`, () => {
    let e = j(),
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
  N = {
    workId: `work_1`,
    workName: `test`,
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
  P = `http://localhost:3000/work`,
  F = () => ({
    load: () => N,
    getWork: async (e) =>
      await (
        await fetch(`${P}/get`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ theWorkId: e }),
        })
      ).json(),
    createNewWork: async (e) => {
      let t = await (
        await fetch(`${P}/create`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ userId: e }),
        })
      ).json();
      return {
        workId: t.workId,
        workName: t.workName,
        itemListDatas: { addedItems: {}, bookmarks: [], addItemCounter: 0 },
        previewDatas: { mainLuggage: {}, addItemCounter: 0 },
      };
    },
  }),
  I = T(),
  L = () => {
    let e = k(),
      t = w(),
      n = M(),
      r = F(),
      i = j(),
      a = async () => {
        let n = t.userId,
          a = null,
          o = {},
          s = {},
          c = 0;
        try {
          a = await r.createNewWork(n);
        } catch {
          return `fallLoadData`;
        }
        try {
          if (a == null) throw Error();
          await j().initCreateStaticData();
          let e = i.hydrateCreateState(a);
          ((o = e.vuepreviewData), (s = e.vueItemList), (c = e.addItemCounter));
        } catch {
          return `damagedData`;
        }
        return (
          e.setAddItemCounter(c),
          e.setSaveDBData(a),
          e.setlistItem(s),
          e.setpreviewData(o),
          e.setWorkId(a.workId),
          e.setWorkName(a.workName),
          I.selectWorkPackage(a.workId),
          `none`
        );
      },
      o = async () => {
        let t = I.selectedPackageGetter.id;
        if (!t) return `noneNameorWorkId`;
        let n = null,
          a = {},
          o = {},
          s = 0;
        try {
          n = await r.getWork(t);
        } catch {
          return `fallLoadData`;
        }
        try {
          if (n == null) throw Error();
          await j().initCreateStaticData();
          let e = i.hydrateCreateState(n);
          ((a = e.vuepreviewData), (o = e.vueItemList), (s = e.addItemCounter));
        } catch {
          return `damagedData`;
        }
        return (
          e.setAddItemCounter(s),
          e.setSaveDBData(n),
          e.setlistItem(o),
          e.setpreviewData(a),
          e.setWorkId(n.workId),
          e.setWorkName(n.workName),
          `none`
        );
      },
      s = async (r) => {
        let { itemId: a } = r,
          o = e?.listItemGetter;
        if (!o) return `nonePreview`;
        let s = o[a];
        if (!s) return `noneItem`;
        if (s.isStorage == 1 && r.parentItemId != null)
          return `isRegulatedAction`;
        let c =
            r.originalId == null ? `item_${e.addItemCounter}` : r.originalId,
          l = {
            originalId: c,
            caseId: r.caseId,
            pocketId: r.pocketId,
            parentItemId: r.parentItemId,
            itemId: r.itemId,
          },
          u = {
            alterationType: `previewItems_additem`,
            token: { ...r, originalId: c },
            user: t.userName,
          },
          d = {
            alterationType: `previewItems_delete`,
            token: l,
            user: t.userName,
          };
        return (
          n.saveState({ forwardToken: u, reverseToken: d }),
          i.alterationData(u),
          `addPreview`
        );
      },
      c = (e) => {
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
      l = (e) => {
        let n = {
          alterationType: `itemlistItems_bookmark`,
          token: e,
          user: t.userName,
        };
        i.alterationData(n);
      },
      u = (r) => {
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
      d = (e) => {
        let n = {
          alterationType: `itemlistItems_additem`,
          token: e,
          user: t.userName,
        };
        i.alterationData(n);
      },
      f = (r) => {
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
      p = (r) => {
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
      m = !1,
      h = { x: 0, y: 0, width: 0, height: 0 },
      g = (t, n, r) => {
        if (!m) {
          m = !0;
          let { x: t, y: i, width: a, height: o } = e.previewCase[r].pockets[n];
          h = { x: t, y: i, width: a, height: o };
        }
        let i = { caseId: r, pocketId: n, resizeData: t };
        e.reSizePocket(i);
      },
      _ = (r, a) => {
        let { x: o, y: s, width: c, height: l } = e.previewCase[r].pockets[a],
          u = {
            pos: { x: o, y: s, width: c, height: l },
            caseId: r,
            pocketId: a,
          },
          d = {
            alterationType: `confirmed_resizePocket`,
            token: { pos: h, caseId: r, pocketId: a },
            user: t.userName,
          },
          f = {
            token: u,
            alterationType: `confirmed_resizePocket`,
            user: t.userName,
          };
        ((m = !1),
          n.saveState({ forwardToken: f, reverseToken: d }),
          i.alterationData(f));
      },
      v = !1,
      y = { x: 0, y: 0, width: 0, height: 0 };
    return {
      createNewwork: a,
      confirmedRemovePocket: (r, a) => {
        let { x: o, y: s, width: c, height: l } = e.previewCase[r].pockets[a],
          u = {
            pos: { x: o, y: s, width: c, height: l },
            caseId: r,
            pocketId: a,
          },
          d = { pos: y, caseId: r, pocketId: a },
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
        ((v = !1),
          n.saveState({ forwardToken: f, reverseToken: p }),
          i.alterationData(f));
      },
      provisionalRemovePocket: (t, n, r) => {
        if (!v) {
          v = !0;
          let { x: t, y: i, width: a, height: o } = e.previewCase[r].pockets[n];
          y = { x: t, y: i, width: a, height: o };
        }
        let i = { caseId: r, pocketId: n, removeData: t };
        e.reMovePocket(i);
      },
      provisionalResizePocket: g,
      confirmedResizePocket: _,
      loadWork: o,
      addItemToPreview: s,
      addItemCount: c,
      addBookmark: l,
      deletePreviewItem: u,
      addListItem: d,
      addCase: f,
      deleteCase: p,
    };
  },
  R = v({
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
        r = k(),
        i = L(),
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
            originalId: n.item.originalId,
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
              originalId: n.item.originalId,
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
          return D;
        },
        get CircleMinus() {
          return E;
        },
        get BaseButton() {
          return te;
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
  z = { class: `item-card` },
  B = { class: `header` },
  V = { class: `count` },
  H = { key: 0, class: `drop-text` };
function U(n, r, d, p, m, h) {
  let _ = t(`previewItem`, !0);
  return (
    s(),
    u(`div`, z, [
      l(`section`, B, [
        l(`div`, null, a(p.icon.src), 1),
        l(`div`, null, a(p.props.item.name), 1),
        l(`div`, V, [
          e(p.CirclePlus, {
            class: `countIcon`,
            onClick: (r[0] ||= (e) => p.onPlue(1)),
          }),
          i(` ` + a(p.props.item.count) + ` `, 1),
          e(p.CircleMinus, {
            class: `countIcon`,
            onClick: (r[1] ||= (e) => p.onPlue(-1)),
          }),
        ]),
        e(
          p.BaseButton,
          { class: `delete-button`, onClick: p.onDelete },
          { default: c(() => [...(r[3] ||= [i(`削除`, -1)])]), _: 1 },
        ),
      ]),
      p.props.item.isStorage
        ? (s(),
          u(
            `section`,
            {
              key: 0,
              class: `storage innerItems`,
              onDrop: [p.onDrop, (r[2] ||= g(() => {}, [`stop`]))],
            },
            [
              (s(!0),
              u(
                f,
                null,
                o(
                  p.props.item.innerItems,
                  ([t, n]) => (
                    s(),
                    u(`div`, { key: t }, [
                      e(
                        _,
                        {
                          item: n,
                          pocketId: p.props.pocketId,
                          parentItem: p.props.item.originalId,
                          caseId: p.props.caseId,
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
              p.props.item.innerItems?.size === 0
                ? (s(), u(`p`, H, a(`ここにドロップ`)))
                : y(``, !0),
            ],
            32,
          ))
        : y(``, !0),
    ])
  );
}
var W = h(R, [
    [`render`, U],
    [`__scopeId`, `data-v-126205df`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PreviewItem.vue`,
    ],
  ]),
  G = v({
    __name: `PocketModal`,
    props: { pocket: { type: Object, required: !0 } },
    emits: [`close`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = d(!1),
        i = L(),
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
              originalId: null,
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
            return O;
          },
          PreviewItem: W,
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
  K = { class: `modal` },
  q = { class: `header` },
  J = { class: `name` },
  Y = { class: `drop-area` },
  X = { key: 0, style: { "font-size": `12px`, "text-align": `center` } };
function Z(t, n, r, i, c, d) {
  return (
    s(),
    u(
      `div`,
      {
        class: ee([`overlay`, [`overlay`, { close: i.isClose }]]),
        onDrop: [i.onDrop, (n[0] ||= g(() => {}, [`stop`]))],
        onDragover: g(i.handleDrop, [`prevent`]),
      },
      [
        l(`div`, K, [
          l(`header`, q, [
            l(`div`, J, a(`#` + r.pocket.name), 1),
            l(`div`, { onClick: i.close, class: `close-button` }, [
              e(i.X, { size: 20, color: `black`, "stroke-width": `2.5` }),
            ]),
          ]),
          l(`div`, Y, [
            r.pocket.items.size === 0
              ? (s(), u(`p`, X, ` ここに持ち物をドラッグ `))
              : y(``, !0),
            (s(!0),
            u(
              f,
              null,
              o(
                r.pocket.items,
                ([t, n]) => (
                  s(),
                  u(`div`, { key: t, class: `item-card` }, [
                    e(
                      i.PreviewItem,
                      {
                        caseId: r.pocket.caseId,
                        item: n,
                        pocketId: r.pocket.id,
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
var re = h(G, [
    [`render`, Z],
    [`__scopeId`, `data-v-f42593c0`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PocketModal.vue`,
    ],
  ]),
  Q = x(`caseDragStore`, {
    state: () => ({ isDrag: !1 }),
    getters: { isDragging: (e) => e.isDrag },
    actions: {
      drag(e) {
        this.isDrag = e;
      },
    },
  }),
  ie = v({
    __name: `dropCaseArea`,
    setup(e, { expose: t }) {
      t();
      let n = L(),
        r = Q(),
        { isDrag: i } = S(r),
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
function ae(e, t, r, i, a, o) {
  return n(
    (s(),
    u(
      `div`,
      {
        onDrop: [i.onDrop, (t[0] ||= g(() => {}, [`stop`]))],
        onDragover: g(i.handleDrop, [`prevent`]),
        class: `drop-area`,
      },
      [...(t[1] ||= [l(`h1`, null, `ここにドロップ`, -1)])],
      544,
    )),
    [[m, i.isDrag]],
  );
}
var oe = h(ie, [
    [`render`, ae],
    [`__scopeId`, `data-v-4322c95e`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/components/dropCaseArea.vue`,
    ],
  ]),
  se = v({
    __name: `svgResizeHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = L(),
        i = e,
        a = !1,
        o = { x: 0, y: 0 },
        s = 0,
        c = 0,
        l = (e, t, n) => {
          ((a = !0),
            (o = { x: t, y: n }),
            (s = e.clientX),
            (c = e.clientY),
            e.currentTarget.setPointerCapture(e.pointerId));
        },
        u = () => {
          a = !1;
        },
        d = (e) => {
          if (!a) return;
          let t = e.clientX - s,
            r = e.clientY - c;
          ((s = e.clientX), (c = e.clientY));
          let l = o.x === -1 ? t : 0,
            u = o.y === -1 ? r : 0;
          n.provisionalResizePocket(
            {
              x: i.pocket.x + l,
              y: i.pocket.y + u,
              width: i.pocket.width + t * o.x,
              height: i.pocket.height + r * o.y,
            },
            i.pocketId,
            i.caseId,
          );
        };
      (r(() => {
        (window.addEventListener(`pointermove`, d),
          window.addEventListener(`pointerup`, u));
      }),
        b(() => {
          (window.removeEventListener(`pointermove`, d),
            window.removeEventListener(`pointerup`, u));
        }));
      let f = {
        createWork: n,
        props: i,
        get isResizing() {
          return a;
        },
        set isResizing(e) {
          a = e;
        },
        get resizeDirection() {
          return o;
        },
        set resizeDirection(e) {
          o = e;
        },
        get lastX() {
          return s;
        },
        set lastX(e) {
          s = e;
        },
        get lastY() {
          return c;
        },
        set lastY(e) {
          c = e;
        },
        startResize: l,
        stopResize: u,
        handlePointerMove: d,
      };
      return (
        Object.defineProperty(f, `__isScriptSetup`, {
          enumerable: !1,
          value: !0,
        }),
        f
      );
    },
  }),
  ce = { class: `resize-handles` },
  le = [`cx`, `cy`],
  ue = [`cx`, `cy`],
  de = [`cx`, `cy`],
  fe = [`cx`, `cy`],
  pe = [`cx`, `cy`],
  me = [`cx`, `cy`],
  he = [`cx`, `cy`],
  ge = [`cx`, `cy`];
function _e(e, t, n, r, i, a) {
  return (
    s(),
    u(`g`, ce, [
      l(
        `circle`,
        {
          cx: n.pocket.x,
          cy: n.pocket.y,
          r: `6`,
          onPointerdown: (t[0] ||= (e) => r.startResize(e, -1, -1)),
          class: `resize-handle`,
          style: { cursor: `nwse-resize` },
        },
        null,
        40,
        le,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x + n.pocket.width,
          cy: n.pocket.y,
          r: `6`,
          onPointerdown: (t[1] ||= (e) => r.startResize(e, 1, -1)),
          class: `resize-handle`,
          style: { cursor: `nesw-resize` },
        },
        null,
        40,
        ue,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x,
          cy: n.pocket.y + n.pocket.height,
          r: `6`,
          onPointerdown: (t[2] ||= (e) => r.startResize(e, -1, 1)),
          class: `resize-handle`,
          style: { cursor: `nesw-resize` },
        },
        null,
        40,
        de,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x + n.pocket.width,
          cy: n.pocket.y + n.pocket.height,
          r: `6`,
          onPointerdown: (t[3] ||= (e) => r.startResize(e, 1, 1)),
          class: `resize-handle`,
          style: { cursor: `nwse-resize` },
        },
        null,
        40,
        fe,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x + n.pocket.width / 2,
          cy: n.pocket.y,
          r: `6`,
          onPointerdown: (t[4] ||= (e) => r.startResize(e, 0, -1)),
          class: `resize-handle`,
          style: { cursor: `ns-resize` },
        },
        null,
        40,
        pe,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x + n.pocket.width / 2,
          cy: n.pocket.y + n.pocket.height,
          r: `6`,
          onPointerdown: (t[5] ||= (e) => r.startResize(e, 0, 1)),
          class: `resize-handle`,
          style: { cursor: `ns-resize` },
        },
        null,
        40,
        me,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x,
          cy: n.pocket.y + n.pocket.height / 2,
          r: `6`,
          onPointerdown: (t[6] ||= (e) => r.startResize(e, -1, 0)),
          class: `resize-handle`,
          style: { cursor: `ew-resize` },
        },
        null,
        40,
        he,
      ),
      l(
        `circle`,
        {
          cx: n.pocket.x + n.pocket.width,
          cy: n.pocket.y + n.pocket.height / 2,
          r: `6`,
          onPointerdown: (t[7] ||= (e) => r.startResize(e, 1, 0)),
          class: `resize-handle`,
          style: { cursor: `ew-resize` },
        },
        null,
        40,
        ge,
      ),
    ])
  );
}
var ve = h(se, [
    [`render`, _e],
    [`__scopeId`, `data-v-95e8907c`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/svgResizeHandle.vue`,
    ],
  ]),
  ye = v({
    __name: `SvgRemoveHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = L(),
        i = e,
        a = !1,
        o = 0,
        s = 0,
        c = (e) => {
          ((a = !0),
            (o = e.clientX),
            (s = e.clientY),
            e.currentTarget.setPointerCapture(e.pointerId));
        },
        l = () => {
          a = !1;
        },
        u = (e) => {
          if (!a) return;
          let t = e.clientX - o,
            r = e.clientY - s;
          ((o = e.clientX),
            (s = e.clientY),
            n.provisionalRemovePocket(
              { x: i.pocket.x + t, y: i.pocket.y + r },
              i.pocketId,
              i.caseId,
            ));
        };
      (r(() => {
        (window.addEventListener(`pointermove`, u),
          window.addEventListener(`pointerup`, l));
      }),
        b(() => {
          (window.removeEventListener(`pointermove`, u),
            window.removeEventListener(`pointerup`, l));
        }));
      let d = {
        createWork: n,
        props: i,
        get isRemoveing() {
          return a;
        },
        set isRemoveing(e) {
          a = e;
        },
        get lastX() {
          return o;
        },
        set lastX(e) {
          o = e;
        },
        get lastY() {
          return s;
        },
        set lastY(e) {
          s = e;
        },
        startReMove: c,
        stopResize: l,
        handlePointerMove: u,
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
  be = [`x`, `y`, `width`, `height`];
function xe(e, t, n, r, i, a) {
  return (
    s(),
    u(
      `g`,
      {
        div: ``,
        onPointerdown: (t[0] ||= (e) => r.startReMove(e)),
        class: `remove-handle`,
      },
      [
        l(
          `rect`,
          {
            x: n.pocket.x,
            y: n.pocket.y,
            width: n.pocket.width,
            height: n.pocket.height,
            rx: `1`,
            class: `pocket`,
            fill: `transparent`,
          },
          null,
          8,
          be,
        ),
      ],
      32,
    )
  );
}
var Se = h(ye, [
    [`render`, xe],
    [`__scopeId`, `data-v-c265c640`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/SvgRemoveHandle.vue`,
    ],
  ]),
  Ce = v({
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
        SvgResizeHandle: ve,
        SvgRemoveHandle: Se,
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
  we = { class: `suitcase-wrap` },
  Te = { viewBox: `0 0 400 560`, class: `suitcase` },
  Ee = [`x`, `y`, `width`, `height`],
  De = [`x`, `y`, `width`, `height`],
  $ = [`onDblclick`],
  Oe = [`x`, `y`, `width`, `height`],
  ke = [`x`, `y`],
  Ae = [`x`, `y`];
function je(t, n, r, i, c, d) {
  return (
    s(),
    u(`div`, we, [
      (s(),
      u(`svg`, Te, [
        l(
          `rect`,
          {
            x: i.props.case.x,
            y: i.props.case.y,
            width: i.props.case.width,
            height: i.props.case.height,
            class: `case-body`,
            rx: `14`,
          },
          null,
          8,
          Ee,
        ),
        l(
          `rect`,
          {
            x: i.props.handle.x,
            y: i.props.handle.y,
            width: i.props.handle.width,
            height: i.props.handle.height,
            rx: `12`,
            class: `handle`,
          },
          null,
          8,
          De,
        ),
        (s(!0),
        u(
          f,
          null,
          o(
            i.pockets,
            (t) => (
              s(),
              u(
                `g`,
                {
                  key: t.id,
                  class: `pocket-group`,
                  onDblclick: (e) => i.openPocket(t),
                },
                [
                  l(
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
                    Oe,
                  ),
                  l(
                    `text`,
                    {
                      x: t.x + t.width / 2,
                      y: t.y + t.height / 2,
                      "text-anchor": `middle`,
                      "dominant-baseline": `middle`,
                      class: `pocket-label`,
                    },
                    a(t.name),
                    9,
                    ke,
                  ),
                  e(
                    i.SvgRemoveHandle,
                    {
                      class: `svg-removehandle`,
                      pocket: t,
                      caseId: r.id,
                      pocketId: t.id,
                    },
                    null,
                    8,
                    [`pocket`, `caseId`, `pocketId`],
                  ),
                  l(
                    `text`,
                    {
                      x: t.x + t.width - 12,
                      y: t.y + 22,
                      "text-anchor": `end`,
                      class: `pocket-count`,
                    },
                    a(t.items?.size),
                    9,
                    Ae,
                  ),
                  e(
                    i.SvgResizeHandle,
                    {
                      pocket: t,
                      caseId: r.id,
                      pocketId: t.id,
                      class: `svg-resizehandle`,
                    },
                    null,
                    8,
                    [`pocket`, `caseId`, `pocketId`],
                  ),
                ],
                40,
                $,
              )
            ),
          ),
          128,
        )),
      ])),
    ])
  );
}
var Me = h(Ce, [
    [`render`, je],
    [`__scopeId`, `data-v-06975ad1`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/case.vue`,
    ],
  ]),
  Ne = v({
    __name: `Preview`,
    setup(e, { expose: t }) {
      t();
      let n = d(),
        r = k(),
        { getPreviewCasesArray: i } = S(r),
        a = {
          selectedPocket: n,
          createStore: r,
          cases: i,
          PocketModal: re,
          dropCaseArea: oe,
          Case: Me,
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
  Pe = { class: `preview-area` },
  Fe = { class: `pocketModal` };
function Ie(t, n, r, i, a, c) {
  return (
    s(),
    u(`div`, Pe, [
      e(i.dropCaseArea, { class: `drop-area` }),
      (s(!0),
      u(
        f,
        null,
        o(
          i.cases,
          (t) => (
            s(),
            u(`div`, { class: `preview`, key: t.id }, [
              e(
                i.Case,
                {
                  pockets: t.data.pockets,
                  case: t.data.case,
                  name: t.data.name,
                  handle: t.data.handle,
                  id: t.id,
                  selectedPocket: i.selectedPocket,
                  "onUpdate:selectedPocket": (n[0] ||= (e) =>
                    (i.selectedPocket = e)),
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
      l(`section`, Fe, [
        i.selectedPocket
          ? (s(),
            _(
              i.PocketModal,
              {
                key: 0,
                pocket: i.selectedPocket,
                onClose: (n[1] ||= (e) => (i.selectedPocket = null)),
              },
              null,
              8,
              [`pocket`],
            ))
          : y(``, !0),
      ]),
    ])
  );
}
var Le = h(Ne, [
  [`render`, Ie],
  [`__scopeId`, `data-v-d64e8ecd`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/Preview.vue`,
  ],
]);
export { k as a, M as i, Q as n, L as r, Le as t };
