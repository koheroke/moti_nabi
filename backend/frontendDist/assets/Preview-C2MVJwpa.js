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
  v as ee,
  w as _,
  y as v,
  yt as te,
  z as ne,
} from "./_plugin-vue_export-helper-Bh2CkUK5.js";
import {
  c as y,
  d as re,
  f as ie,
  i as ae,
  l as oe,
  o as b,
  u as se,
} from "./index-Cgu9HEcK.js";
import { t as ce } from "./userAuthStore-XI2PytdW.js";
import { t as le } from "./workPackageStore-DbaQvr4t.js";
var ue = b(`circle-minus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
  ]),
  de = b(`circle-plus`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M8 12h8`, key: `1wcyev` }],
    [`path`, { d: `M12 8v8`, key: `napkw2` }],
  ]),
  fe = b(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]),
  x = y(`create`, {
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
          n = e.parentId ?? e.id,
          r = t.items.get(n);
        if (!r) return;
        if (!e.parentId) {
          r.count += e.pulse;
          return;
        }
        let i = r.innerItems.get(e.id);
        return (i && (i.count += e.pulse), t.items);
      },
      pushpreviewItem(e) {
        if (!this.previewCase || !this.listItem || this.addItemCounter == null)
          return;
        let t = this.previewCase[e.caseId].pockets[e.pocketId];
        this.addItemCounter++;
        let n = {
          ...this.listItem[e.itemId],
          id: e.id,
          count: 1,
          innerItems: new Map(),
        };
        if (e.parentId == null) t.items.set(n.id, n);
        else {
          let r = t.items.get(e.parentId)?.innerItems;
          r && r.set(n.id, n);
        }
        return (console.log(`pocket.items`, t.items), t.items);
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
          n = e.parentId ? e.parentId : e.id;
        if (e.parentId == null) return (t.items.delete(n), t.items);
        if (e.parentId != null)
          return (t.items.get(e.parentId)?.innerItems?.delete(e.id), t.items);
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
  S = Object.create(null);
((S.open = `0`),
  (S.close = `1`),
  (S.ping = `2`),
  (S.pong = `3`),
  (S.message = `4`),
  (S.upgrade = `5`),
  (S.noop = `6`));
var C = Object.create(null);
Object.keys(S).forEach((e) => {
  C[S[e]] = e;
});
var w = { type: `error`, data: `parser error` },
  pe =
    typeof Blob == `function` ||
    (typeof Blob < `u` &&
      Object.prototype.toString.call(Blob) === `[object BlobConstructor]`),
  me = typeof ArrayBuffer == `function`,
  he = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  T = ({ type: e, data: t }, n, r) =>
    pe && t instanceof Blob
      ? n
        ? r(t)
        : ge(t, r)
      : me && (t instanceof ArrayBuffer || he(t))
        ? n
          ? r(t)
          : ge(new Blob([t]), r)
        : r(S[e] + (t || ``)),
  ge = (e, t) => {
    let n = new FileReader();
    return (
      (n.onload = function () {
        let e = n.result.split(`,`)[1];
        t(`b` + (e || ``));
      }),
      n.readAsDataURL(e)
    );
  };
function _e(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
      ? new Uint8Array(e)
      : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
var ve;
function ye(e, t) {
  if (pe && e.data instanceof Blob)
    return e.data.arrayBuffer().then(_e).then(t);
  if (me && (e.data instanceof ArrayBuffer || he(e.data))) return t(_e(e.data));
  T(e, !1, (e) => {
    ((ve ||= new TextEncoder()), t(ve.encode(e)));
  });
}
var be = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,
  E = typeof Uint8Array > `u` ? [] : new Uint8Array(256);
for (let e = 0; e < 64; e++) E[be.charCodeAt(e)] = e;
var xe = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      a,
      o,
      s,
      c;
    e[e.length - 1] === `=` && (t--, e[e.length - 2] === `=` && t--);
    let l = new ArrayBuffer(t),
      u = new Uint8Array(l);
    for (r = 0; r < n; r += 4)
      ((a = E[e.charCodeAt(r)]),
        (o = E[e.charCodeAt(r + 1)]),
        (s = E[e.charCodeAt(r + 2)]),
        (c = E[e.charCodeAt(r + 3)]),
        (u[i++] = (a << 2) | (o >> 4)),
        (u[i++] = ((o & 15) << 4) | (s >> 2)),
        (u[i++] = ((s & 3) << 6) | (c & 63)));
    return l;
  },
  Se = typeof ArrayBuffer == `function`,
  D = (e, t) => {
    if (typeof e != `string`) return { type: `message`, data: we(e, t) };
    let n = e.charAt(0);
    return n === `b`
      ? { type: `message`, data: Ce(e.substring(1), t) }
      : C[n]
        ? e.length > 1
          ? { type: C[n], data: e.substring(1) }
          : { type: C[n] }
        : w;
  },
  Ce = (e, t) => (Se ? we(xe(e), t) : { base64: !0, data: e }),
  we = (e, t) => {
    switch (t) {
      case `blob`:
        return e instanceof Blob ? e : new Blob([e]);
      default:
        return e instanceof ArrayBuffer ? e : e.buffer;
    }
  },
  Te = ``,
  Ee = (e, t) => {
    let n = e.length,
      r = Array(n),
      i = 0;
    e.forEach((e, a) => {
      T(e, !1, (e) => {
        ((r[a] = e), ++i === n && t(r.join(Te)));
      });
    });
  },
  De = (e, t) => {
    let n = e.split(Te),
      r = [];
    for (let e = 0; e < n.length; e++) {
      let i = D(n[e], t);
      if ((r.push(i), i.type === `error`)) break;
    }
    return r;
  };
function Oe() {
  return new TransformStream({
    transform(e, t) {
      ye(e, (n) => {
        let r = n.length,
          i;
        if (r < 126)
          ((i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r));
        else if (r < 65536) {
          i = new Uint8Array(3);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 126), e.setUint16(1, r));
        } else {
          i = new Uint8Array(9);
          let e = new DataView(i.buffer);
          (e.setUint8(0, 127), e.setBigUint64(1, BigInt(r)));
        }
        (e.data && typeof e.data != `string` && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n));
      });
    },
  });
}
var ke;
function O(e) {
  return e.reduce((e, t) => e + t.length, 0);
}
function k(e, t) {
  if (e[0].length === t) return e.shift();
  let n = new Uint8Array(t),
    r = 0;
  for (let i = 0; i < t; i++)
    ((n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0)));
  return (e.length && r < e[0].length && (e[0] = e[0].slice(r)), n);
}
function Ae(e, t) {
  ke ||= new TextDecoder();
  let n = [],
    r = 0,
    i = -1,
    a = !1;
  return new TransformStream({
    transform(o, s) {
      for (n.push(o); ; ) {
        if (r === 0) {
          if (O(n) < 1) break;
          let e = k(n, 1);
          ((a = (e[0] & 128) == 128),
            (i = e[0] & 127),
            (r = i < 126 ? 3 : i === 126 ? 1 : 2));
        } else if (r === 1) {
          if (O(n) < 2) break;
          let e = k(n, 2);
          ((i = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0)),
            (r = 3));
        } else if (r === 2) {
          if (O(n) < 8) break;
          let e = k(n, 8),
            t = new DataView(e.buffer, e.byteOffset, e.length),
            a = t.getUint32(0);
          if (a > 2 ** 21 - 1) {
            s.enqueue(w);
            break;
          }
          ((i = a * 2 ** 32 + t.getUint32(4)), (r = 3));
        } else {
          if (O(n) < i) break;
          let e = k(n, i);
          (s.enqueue(D(a ? e : ke.decode(e), t)), (r = 0));
        }
        if (i === 0 || i > e) {
          s.enqueue(w);
          break;
        }
      }
    },
  });
}
function A(e) {
  if (e) return je(e);
}
function je(e) {
  for (var t in A.prototype) e[t] = A.prototype[t];
  return e;
}
((A.prototype.on = A.prototype.addEventListener =
  function (e, t) {
    return (
      (this._callbacks = this._callbacks || {}),
      (this._callbacks[`$` + e] = this._callbacks[`$` + e] || []).push(t),
      this
    );
  }),
  (A.prototype.once = function (e, t) {
    function n() {
      (this.off(e, n), t.apply(this, arguments));
    }
    return ((n.fn = t), this.on(e, n), this);
  }),
  (A.prototype.off =
    A.prototype.removeListener =
    A.prototype.removeAllListeners =
    A.prototype.removeEventListener =
      function (e, t) {
        if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
          return ((this._callbacks = {}), this);
        var n = this._callbacks[`$` + e];
        if (!n) return this;
        if (arguments.length == 1)
          return (delete this._callbacks[`$` + e], this);
        for (var r, i = 0; i < n.length; i++)
          if (((r = n[i]), r === t || r.fn === t)) {
            n.splice(i, 1);
            break;
          }
        return (n.length === 0 && delete this._callbacks[`$` + e], this);
      }),
  (A.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
      var t = Array(arguments.length - 1), n = this._callbacks[`$` + e], r = 1;
      r < arguments.length;
      r++
    )
      t[r - 1] = arguments[r];
    if (n) {
      n = n.slice(0);
      for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
    }
    return this;
  }),
  (A.prototype.emitReserved = A.prototype.emit),
  (A.prototype.listeners = function (e) {
    return (
      (this._callbacks = this._callbacks || {}),
      this._callbacks[`$` + e] || []
    );
  }),
  (A.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
  }));
var j =
    typeof Promise == `function` && typeof Promise.resolve == `function`
      ? (e) => Promise.resolve().then(e)
      : (e, t) => t(e, 0),
  M =
    typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : Function(`return this`)(),
  Me = `arraybuffer`;
function Ne(e, ...t) {
  return t.reduce((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t), {});
}
var Pe = M.setTimeout,
  Fe = M.clearTimeout;
function N(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = Pe.bind(M)), (e.clearTimeoutFn = Fe.bind(M)))
    : ((e.setTimeoutFn = M.setTimeout.bind(M)),
      (e.clearTimeoutFn = M.clearTimeout.bind(M)));
}
var Ie = 1.33;
function Le(e) {
  return typeof e == `string`
    ? Re(e)
    : Math.ceil((e.byteLength || e.size) * Ie);
}
function Re(e) {
  let t = 0,
    n = 0;
  for (let r = 0, i = e.length; r < i; r++)
    ((t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
          ? (n += 2)
          : t < 55296 || t >= 57344
            ? (n += 3)
            : (r++, (n += 4)));
  return n;
}
function ze() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function Be(e) {
  let t = ``;
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += `&`),
      (t += encodeURIComponent(n) + `=` + encodeURIComponent(e[n])));
  return t;
}
function Ve(e) {
  let t = {},
    n = e.split(`&`);
  for (let e = 0, r = n.length; e < r; e++) {
    let r = n[e].split(`=`);
    t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
  }
  return t;
}
var He = class extends Error {
    constructor(e, t, n) {
      (super(e),
        (this.description = t),
        (this.context = n),
        (this.type = `TransportError`));
    }
  },
  P = class extends A {
    constructor(e) {
      (super(),
        (this.writable = !1),
        N(this, e),
        (this.opts = e),
        (this.query = e.query),
        (this.socket = e.socket),
        (this.supportsBinary = !e.forceBase64));
    }
    onError(e, t, n) {
      return (super.emitReserved(`error`, new He(e, t, n)), this);
    }
    open() {
      return ((this.readyState = `opening`), this.doOpen(), this);
    }
    close() {
      return (
        (this.readyState === `opening` || this.readyState === `open`) &&
          (this.doClose(), this.onClose()),
        this
      );
    }
    send(e) {
      this.readyState === `open` && this.write(e);
    }
    onOpen() {
      ((this.readyState = `open`),
        (this.writable = !0),
        super.emitReserved(`open`));
    }
    onData(e) {
      let t = D(e, this.socket.binaryType);
      this.onPacket(t);
    }
    onPacket(e) {
      super.emitReserved(`packet`, e);
    }
    onClose(e) {
      ((this.readyState = `closed`), super.emitReserved(`close`, e));
    }
    pause(e) {}
    createUri(e, t = {}) {
      return (
        e +
        `://` +
        this._hostname() +
        this._port() +
        this.opts.path +
        this._query(t)
      );
    }
    _hostname() {
      let e = this.opts.hostname;
      return e.indexOf(`:`) === -1 ? e : `[` + e + `]`;
    }
    _port() {
      return this.opts.port &&
        ((this.opts.secure && Number(this.opts.port) !== 443) ||
          (!this.opts.secure && Number(this.opts.port) !== 80))
        ? `:` + this.opts.port
        : ``;
    }
    _query(e) {
      let t = Be(e);
      return t.length ? `?` + t : ``;
    }
  },
  Ue = class extends P {
    constructor() {
      (super(...arguments), (this._polling = !1));
    }
    get name() {
      return `polling`;
    }
    doOpen() {
      this._poll();
    }
    pause(e) {
      this.readyState = `pausing`;
      let t = () => {
        ((this.readyState = `paused`), e());
      };
      if (this._polling || !this.writable) {
        let e = 0;
        (this._polling &&
          (e++,
          this.once(`pollComplete`, function () {
            --e || t();
          })),
          this.writable ||
            (e++,
            this.once(`drain`, function () {
              --e || t();
            })));
      } else t();
    }
    _poll() {
      ((this._polling = !0), this.doPoll(), this.emitReserved(`poll`));
    }
    onData(e) {
      (De(e, this.socket.binaryType).forEach((e) => {
        if (
          (this.readyState === `opening` && e.type === `open` && this.onOpen(),
          e.type === `close`)
        )
          return (
            this.onClose({ description: `transport closed by the server` }),
            !1
          );
        this.onPacket(e);
      }),
        this.readyState !== `closed` &&
          ((this._polling = !1),
          this.emitReserved(`pollComplete`),
          this.readyState === `open` && this._poll()));
    }
    doClose() {
      let e = () => {
        this.write([{ type: `close` }]);
      };
      this.readyState === `open` ? e() : this.once(`open`, e);
    }
    write(e) {
      ((this.writable = !1),
        Ee(e, (e) => {
          this.doWrite(e, () => {
            ((this.writable = !0), this.emitReserved(`drain`));
          });
        }));
    }
    uri() {
      let e = this.opts.secure ? `https` : `http`,
        t = this.query || {};
      return (
        !1 !== this.opts.timestampRequests &&
          (t[this.opts.timestampParam] = ze()),
        !this.supportsBinary && !t.sid && (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  We = !1;
try {
  We = typeof XMLHttpRequest < `u` && `withCredentials` in new XMLHttpRequest();
} catch {}
var Ge = We;
function Ke() {}
var qe = class extends Ue {
    constructor(e) {
      if ((super(e), typeof location < `u`)) {
        let t = location.protocol === `https:`,
          n = location.port;
        ((n ||= t ? `443` : `80`),
          (this.xd =
            (typeof location < `u` && e.hostname !== location.hostname) ||
            n !== e.port));
      }
    }
    doWrite(e, t) {
      let n = this.request({ method: `POST`, data: e });
      (n.on(`success`, t),
        n.on(`error`, (e, t) => {
          this.onError(`xhr post error`, e, t);
        }));
    }
    doPoll() {
      let e = this.request();
      (e.on(`data`, this.onData.bind(this)),
        e.on(`error`, (e, t) => {
          this.onError(`xhr poll error`, e, t);
        }),
        (this.pollXhr = e));
    }
  },
  F = class e extends A {
    constructor(e, t, n) {
      (super(),
        (this.createRequest = e),
        N(this, n),
        (this._opts = n),
        (this._method = n.method || `GET`),
        (this._uri = t),
        (this._data = n.data === void 0 ? null : n.data),
        this._create());
    }
    _create() {
      var t;
      let n = Ne(
        this._opts,
        `agent`,
        `pfx`,
        `key`,
        `passphrase`,
        `cert`,
        `ca`,
        `ciphers`,
        `rejectUnauthorized`,
        `autoUnref`,
      );
      n.xdomain = !!this._opts.xd;
      let r = (this._xhr = this.createRequest(n));
      try {
        r.open(this._method, this._uri, !0);
        try {
          if (this._opts.extraHeaders) {
            r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
            for (let e in this._opts.extraHeaders)
              this._opts.extraHeaders.hasOwnProperty(e) &&
                r.setRequestHeader(e, this._opts.extraHeaders[e]);
          }
        } catch {}
        if (this._method === `POST`)
          try {
            r.setRequestHeader(`Content-type`, `text/plain;charset=UTF-8`);
          } catch {}
        try {
          r.setRequestHeader(`Accept`, `*/*`);
        } catch {}
        ((t = this._opts.cookieJar) == null || t.addCookies(r),
          `withCredentials` in r &&
            (r.withCredentials = this._opts.withCredentials),
          this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout),
          (r.onreadystatechange = () => {
            var e;
            (r.readyState === 3 &&
              ((e = this._opts.cookieJar) == null ||
                e.parseCookies(r.getResponseHeader(`set-cookie`))),
              r.readyState === 4 &&
                (r.status === 200 || r.status === 1223
                  ? this._onLoad()
                  : this.setTimeoutFn(() => {
                      this._onError(typeof r.status == `number` ? r.status : 0);
                    }, 0)));
          }),
          r.send(this._data));
      } catch (e) {
        this.setTimeoutFn(() => {
          this._onError(e);
        }, 0);
        return;
      }
      typeof document < `u` &&
        ((this._index = e.requestsCount++), (e.requests[this._index] = this));
    }
    _onError(e) {
      (this.emitReserved(`error`, e, this._xhr), this._cleanup(!0));
    }
    _cleanup(t) {
      if (!(this._xhr === void 0 || this._xhr === null)) {
        if (((this._xhr.onreadystatechange = Ke), t))
          try {
            this._xhr.abort();
          } catch {}
        (typeof document < `u` && delete e.requests[this._index],
          (this._xhr = null));
      }
    }
    _onLoad() {
      let e = this._xhr.responseText;
      e !== null &&
        (this.emitReserved(`data`, e),
        this.emitReserved(`success`),
        this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  };
if (((F.requestsCount = 0), (F.requests = {}), typeof document < `u`)) {
  if (typeof attachEvent == `function`) attachEvent(`onunload`, Je);
  else if (typeof addEventListener == `function`) {
    let e = `onpagehide` in M ? `pagehide` : `unload`;
    addEventListener(e, Je, !1);
  }
}
function Je() {
  for (let e in F.requests)
    F.requests.hasOwnProperty(e) && F.requests[e].abort();
}
var Ye = (function () {
    let e = Ze({ xdomain: !1 });
    return e && e.responseType !== null;
  })(),
  Xe = class extends qe {
    constructor(e) {
      super(e);
      let t = e && e.forceBase64;
      this.supportsBinary = Ye && !t;
    }
    request(e = {}) {
      return (
        Object.assign(e, { xd: this.xd }, this.opts),
        new F(Ze, this.uri(), e)
      );
    }
  };
function Ze(e) {
  let t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < `u` && (!t || Ge)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new M[[`Active`, `Object`].join(`X`)](`Microsoft.XMLHTTP`);
    } catch {}
}
var Qe =
    typeof navigator < `u` &&
    typeof navigator.product == `string` &&
    navigator.product.toLowerCase() === `reactnative`,
  $e = class extends P {
    get name() {
      return `websocket`;
    }
    doOpen() {
      let e = this.uri(),
        t = this.opts.protocols,
        n = Qe
          ? {}
          : Ne(
              this.opts,
              `agent`,
              `perMessageDeflate`,
              `pfx`,
              `key`,
              `passphrase`,
              `cert`,
              `ca`,
              `ciphers`,
              `rejectUnauthorized`,
              `localAddress`,
              `protocolVersion`,
              `origin`,
              `maxPayload`,
              `family`,
              `checkServerIdentity`,
            );
      this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(e, t, n);
      } catch (e) {
        return this.emitReserved(`error`, e);
      }
      ((this.ws.binaryType = this.socket.binaryType), this.addEventListeners());
    }
    addEventListeners() {
      ((this.ws.onopen = () => {
        (this.opts.autoUnref && this.ws._socket.unref(), this.onOpen());
      }),
        (this.ws.onclose = (e) =>
          this.onClose({
            description: `websocket connection closed`,
            context: e,
          })),
        (this.ws.onmessage = (e) => this.onData(e.data)),
        (this.ws.onerror = (e) => this.onError(`websocket error`, e)));
    }
    write(e) {
      this.writable = !1;
      for (let t = 0; t < e.length; t++) {
        let n = e[t],
          r = t === e.length - 1;
        T(n, this.supportsBinary, (e) => {
          try {
            this.doWrite(n, e);
          } catch {}
          r &&
            j(() => {
              ((this.writable = !0), this.emitReserved(`drain`));
            }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      this.ws !== void 0 &&
        ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
    }
    uri() {
      let e = this.opts.secure ? `wss` : `ws`,
        t = this.query || {};
      return (
        this.opts.timestampRequests && (t[this.opts.timestampParam] = ze()),
        this.supportsBinary || (t.b64 = 1),
        this.createUri(e, t)
      );
    }
  },
  I = M.WebSocket || M.MozWebSocket,
  et = {
    websocket: class extends $e {
      createSocket(e, t, n) {
        return Qe ? new I(e, t, n) : t ? new I(e, t) : new I(e);
      }
      doWrite(e, t) {
        this.ws.send(t);
      }
    },
    webtransport: class extends P {
      get name() {
        return `webtransport`;
      }
      doOpen() {
        try {
          this._transport = new WebTransport(
            this.createUri(`https`),
            this.opts.transportOptions[this.name],
          );
        } catch (e) {
          return this.emitReserved(`error`, e);
        }
        (this._transport.closed
          .then(() => {
            this.onClose();
          })
          .catch((e) => {
            this.onError(`webtransport error`, e);
          }),
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then((e) => {
              let t = Ae(2 ** 53 - 1, this.socket.binaryType),
                n = e.readable.pipeThrough(t).getReader(),
                r = Oe();
              (r.readable.pipeTo(e.writable),
                (this._writer = r.writable.getWriter()));
              let i = () => {
                n.read()
                  .then(({ done: e, value: t }) => {
                    e || (this.onPacket(t), i());
                  })
                  .catch((e) => {});
              };
              i();
              let a = { type: `open` };
              (this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(a).then(() => this.onOpen()));
            });
          }));
      }
      write(e) {
        this.writable = !1;
        for (let t = 0; t < e.length; t++) {
          let n = e[t],
            r = t === e.length - 1;
          this._writer.write(n).then(() => {
            r &&
              j(() => {
                ((this.writable = !0), this.emitReserved(`drain`));
              }, this.setTimeoutFn);
          });
        }
      }
      doClose() {
        var e;
        (e = this._transport) == null || e.close();
      }
    },
    polling: Xe,
  },
  tt =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  nt = [
    `source`,
    `protocol`,
    `authority`,
    `userInfo`,
    `user`,
    `password`,
    `host`,
    `port`,
    `relative`,
    `path`,
    `directory`,
    `file`,
    `query`,
    `anchor`,
  ];
function L(e) {
  if (e.length > 8e3) throw `URI too long`;
  let t = e,
    n = e.indexOf(`[`),
    r = e.indexOf(`]`);
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, `;`) +
      e.substring(r, e.length));
  let i = tt.exec(e || ``),
    a = {},
    o = 14;
  for (; o--; ) a[nt[o]] = i[o] || ``;
  return (
    n != -1 &&
      r != -1 &&
      ((a.source = t),
      (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, `:`)),
      (a.authority = a.authority
        .replace(`[`, ``)
        .replace(`]`, ``)
        .replace(/;/g, `:`)),
      (a.ipv6uri = !0)),
    (a.pathNames = rt(a, a.path)),
    (a.queryKey = it(a, a.query)),
    a
  );
}
function rt(e, t) {
  let n = t.replace(/\/{2,9}/g, `/`).split(`/`);
  return (
    (t.slice(0, 1) == `/` || t.length === 0) && n.splice(0, 1),
    t.slice(-1) == `/` && n.splice(n.length - 1, 1),
    n
  );
}
function it(e, t) {
  let n = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
      t && (n[t] = r);
    }),
    n
  );
}
var R =
    typeof addEventListener == `function` &&
    typeof removeEventListener == `function`,
  z = [];
R &&
  addEventListener(
    `offline`,
    () => {
      z.forEach((e) => e());
    },
    !1,
  );
var B = class e extends A {
  constructor(e, t) {
    if (
      (super(),
      (this.binaryType = Me),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      e && typeof e == `object` && ((t = e), (e = null)),
      e)
    ) {
      let n = L(e);
      ((t.hostname = n.host),
        (t.secure = n.protocol === `https` || n.protocol === `wss`),
        (t.port = n.port),
        n.query && (t.query = n.query));
    } else t.host && (t.hostname = L(t.host).host);
    (N(this, t),
      (this.secure =
        t.secure == null
          ? typeof location < `u` && location.protocol === `https:`
          : t.secure),
      t.hostname && !t.port && (t.port = this.secure ? `443` : `80`),
      (this.hostname =
        t.hostname ||
        (typeof location < `u` ? location.hostname : `localhost`)),
      (this.port =
        t.port ||
        (typeof location < `u` && location.port
          ? location.port
          : this.secure
            ? `443`
            : `80`)),
      (this.transports = []),
      (this._transportsByName = {}),
      t.transports.forEach((e) => {
        let t = e.prototype.name;
        (this.transports.push(t), (this._transportsByName[t] = e));
      }),
      (this.opts = Object.assign(
        {
          path: `/engine.io`,
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: `t`,
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        t,
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, ``) +
        (this.opts.addTrailingSlash ? `/` : ``)),
      typeof this.opts.query == `string` &&
        (this.opts.query = Ve(this.opts.query)),
      R &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            `beforeunload`,
            this._beforeunloadEventListener,
            !1,
          )),
        this.hostname !== `localhost` &&
          ((this._offlineEventListener = () => {
            this._onClose(`transport close`, {
              description: `network connection lost`,
            });
          }),
          z.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open());
  }
  createTransport(e) {
    let t = Object.assign({}, this.opts.query);
    ((t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id));
    let n = Object.assign(
      {},
      this.opts,
      {
        query: t,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[e],
    );
    return new this._transportsByName[e](n);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved(`error`, `No transports available`);
      }, 0);
      return;
    }
    let t =
      this.opts.rememberUpgrade &&
      e.priorWebsocketSuccess &&
      this.transports.indexOf(`websocket`) !== -1
        ? `websocket`
        : this.transports[0];
    this.readyState = `opening`;
    let n = this.createTransport(t);
    (n.open(), this.setTransport(n));
  }
  setTransport(e) {
    (this.transport && this.transport.removeAllListeners(),
      (this.transport = e),
      e
        .on(`drain`, this._onDrain.bind(this))
        .on(`packet`, this._onPacket.bind(this))
        .on(`error`, this._onError.bind(this))
        .on(`close`, (e) => this._onClose(`transport close`, e)));
  }
  onOpen() {
    ((this.readyState = `open`),
      (e.priorWebsocketSuccess = this.transport.name === `websocket`),
      this.emitReserved(`open`),
      this.flush());
  }
  _onPacket(e) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    )
      switch (
        (this.emitReserved(`packet`, e), this.emitReserved(`heartbeat`), e.type)
      ) {
        case `open`:
          this.onHandshake(JSON.parse(e.data));
          break;
        case `ping`:
          (this._sendPacket(`pong`),
            this.emitReserved(`ping`),
            this.emitReserved(`pong`),
            this._resetPingTimeout());
          break;
        case `error`:
          let t = Error(`server error`);
          ((t.code = e.data), this._onError(t));
          break;
        case `message`:
          (this.emitReserved(`data`, e.data),
            this.emitReserved(`message`, e.data));
          break;
      }
  }
  onHandshake(e) {
    (this.emitReserved(`handshake`, e),
      (this.id = e.sid),
      (this.transport.query.sid = e.sid),
      (this._pingInterval = e.pingInterval),
      (this._pingTimeout = e.pingTimeout),
      (this._maxPayload = e.maxPayload),
      this.onOpen(),
      this.readyState !== `closed` && this._resetPingTimeout());
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    let e = this._pingInterval + this._pingTimeout;
    ((this._pingTimeoutTime = Date.now() + e),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose(`ping timeout`);
      }, e)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref());
  }
  _onDrain() {
    (this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0
        ? this.emitReserved(`drain`)
        : this.flush());
  }
  flush() {
    if (
      this.readyState !== `closed` &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      let e = this._getWritablePackets();
      (this.transport.send(e),
        (this._prevBufferLen = e.length),
        this.emitReserved(`flush`));
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === `polling` &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let e = 1;
    for (let t = 0; t < this.writeBuffer.length; t++) {
      let n = this.writeBuffer[t].data;
      if ((n && (e += Le(n)), t > 0 && e > this._maxPayload))
        return this.writeBuffer.slice(0, t);
      e += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    let e = Date.now() > this._pingTimeoutTime;
    return (
      e &&
        ((this._pingTimeoutTime = 0),
        j(() => {
          this._onClose(`ping timeout`);
        }, this.setTimeoutFn)),
      e
    );
  }
  write(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  send(e, t, n) {
    return (this._sendPacket(`message`, e, t, n), this);
  }
  _sendPacket(e, t, n, r) {
    if (
      (typeof t == `function` && ((r = t), (t = void 0)),
      typeof n == `function` && ((r = n), (n = null)),
      this.readyState === `closing` || this.readyState === `closed`)
    )
      return;
    ((n ||= {}), (n.compress = !1 !== n.compress));
    let i = { type: e, data: t, options: n };
    (this.emitReserved(`packetCreate`, i),
      this.writeBuffer.push(i),
      r && this.once(`flush`, r),
      this.flush());
  }
  close() {
    let e = () => {
        (this._onClose(`forced close`), this.transport.close());
      },
      t = () => {
        (this.off(`upgrade`, t), this.off(`upgradeError`, t), e());
      },
      n = () => {
        (this.once(`upgrade`, t), this.once(`upgradeError`, t));
      };
    return (
      (this.readyState === `opening` || this.readyState === `open`) &&
        ((this.readyState = `closing`),
        this.writeBuffer.length
          ? this.once(`drain`, () => {
              this.upgrading ? n() : e();
            })
          : this.upgrading
            ? n()
            : e()),
      this
    );
  }
  _onError(t) {
    if (
      ((e.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === `opening`)
    )
      return (this.transports.shift(), this._open());
    (this.emitReserved(`error`, t), this._onClose(`transport error`, t));
  }
  _onClose(e, t) {
    if (
      this.readyState === `opening` ||
      this.readyState === `open` ||
      this.readyState === `closing`
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners(`close`),
        this.transport.close(),
        this.transport.removeAllListeners(),
        R &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              `beforeunload`,
              this._beforeunloadEventListener,
              !1,
            ),
          this._offlineEventListener))
      ) {
        let e = z.indexOf(this._offlineEventListener);
        e !== -1 && z.splice(e, 1);
      }
      ((this.readyState = `closed`),
        (this.id = null),
        this.emitReserved(`close`, e, t),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0));
    }
  }
};
B.protocol = 4;
var at = class extends B {
    constructor() {
      (super(...arguments), (this._upgrades = []));
    }
    onOpen() {
      if ((super.onOpen(), this.readyState === `open` && this.opts.upgrade))
        for (let e = 0; e < this._upgrades.length; e++)
          this._probe(this._upgrades[e]);
    }
    _probe(e) {
      let t = this.createTransport(e),
        n = !1;
      B.priorWebsocketSuccess = !1;
      let r = () => {
        n ||
          (t.send([{ type: `ping`, data: `probe` }]),
          t.once(`packet`, (e) => {
            if (!n)
              if (e.type === `pong` && e.data === `probe`) {
                if (
                  ((this.upgrading = !0), this.emitReserved(`upgrading`, t), !t)
                )
                  return;
                ((B.priorWebsocketSuccess = t.name === `websocket`),
                  this.transport.pause(() => {
                    n ||
                      (this.readyState !== `closed` &&
                        (l(),
                        this.setTransport(t),
                        t.send([{ type: `upgrade` }]),
                        this.emitReserved(`upgrade`, t),
                        (t = null),
                        (this.upgrading = !1),
                        this.flush()));
                  }));
              } else {
                let e = Error(`probe error`);
                ((e.transport = t.name), this.emitReserved(`upgradeError`, e));
              }
          }));
      };
      function i() {
        n || ((n = !0), l(), t.close(), (t = null));
      }
      let a = (e) => {
        let n = Error(`probe error: ` + e);
        ((n.transport = t.name), i(), this.emitReserved(`upgradeError`, n));
      };
      function o() {
        a(`transport closed`);
      }
      function s() {
        a(`socket closed`);
      }
      function c(e) {
        t && e.name !== t.name && i();
      }
      let l = () => {
        (t.removeListener(`open`, r),
          t.removeListener(`error`, a),
          t.removeListener(`close`, o),
          this.off(`close`, s),
          this.off(`upgrading`, c));
      };
      (t.once(`open`, r),
        t.once(`error`, a),
        t.once(`close`, o),
        this.once(`close`, s),
        this.once(`upgrading`, c),
        this._upgrades.indexOf(`webtransport`) !== -1 && e !== `webtransport`
          ? this.setTimeoutFn(() => {
              n || t.open();
            }, 200)
          : t.open());
    }
    onHandshake(e) {
      ((this._upgrades = this._filterUpgrades(e.upgrades)),
        super.onHandshake(e));
    }
    _filterUpgrades(e) {
      let t = [];
      for (let n = 0; n < e.length; n++)
        ~this.transports.indexOf(e[n]) && t.push(e[n]);
      return t;
    }
  },
  ot = class extends at {
    constructor(e, t = {}) {
      let n = typeof e == `object` ? e : t;
      ((!n.transports ||
        (n.transports && typeof n.transports[0] == `string`)) &&
        (n.transports = (
          n.transports || [`polling`, `websocket`, `webtransport`]
        )
          .map((e) => et[e])
          .filter((e) => !!e)),
        super(e, n));
    }
  };
ot.protocol;
function st(e, t = ``, n) {
  let r = e;
  ((n ||= typeof location < `u` && location),
    (e ??= n.protocol + `//` + n.host),
    typeof e == `string` &&
      (e.charAt(0) === `/` &&
        (e = e.charAt(1) === `/` ? n.protocol + e : n.host + e),
      /^(https?|wss?):\/\//.test(e) ||
        (e = n === void 0 ? `https://` + e : n.protocol + `//` + e),
      (r = L(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = `80`)
        : /^(http|ws)s$/.test(r.protocol) && (r.port = `443`)),
    (r.path = r.path || `/`));
  let i = r.host.indexOf(`:`) === -1 ? r.host : `[` + r.host + `]`;
  return (
    (r.id = r.protocol + `://` + i + `:` + r.port + t),
    (r.href =
      r.protocol + `://` + i + (n && n.port === r.port ? `` : `:` + r.port)),
    r
  );
}
var ct = typeof ArrayBuffer == `function`,
  lt = (e) =>
    typeof ArrayBuffer.isView == `function`
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  ut = Object.prototype.toString,
  dt =
    typeof Blob == `function` ||
    (typeof Blob < `u` && ut.call(Blob) === `[object BlobConstructor]`),
  ft =
    typeof File == `function` ||
    (typeof File < `u` && ut.call(File) === `[object FileConstructor]`);
function V(e) {
  return (
    (ct && (e instanceof ArrayBuffer || lt(e))) ||
    (dt && e instanceof Blob) ||
    (ft && e instanceof File)
  );
}
function H(e, t) {
  if (!e || typeof e != `object`) return !1;
  if (Array.isArray(e)) {
    for (let t = 0, n = e.length; t < n; t++) if (H(e[t])) return !0;
    return !1;
  }
  if (V(e)) return !0;
  if (e.toJSON && typeof e.toJSON == `function` && arguments.length === 1)
    return H(e.toJSON(), !0);
  for (let t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && H(e[t])) return !0;
  return !1;
}
function pt(e) {
  let t = [],
    n = e.data,
    r = e;
  return (
    (r.data = U(n, t)),
    (r.attachments = t.length),
    { packet: r, buffers: t }
  );
}
function U(e, t) {
  if (!e) return e;
  if (V(e)) {
    let n = { _placeholder: !0, num: t.length };
    return (t.push(e), n);
  } else if (Array.isArray(e)) {
    let n = Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = U(e[r], t);
    return n;
  } else if (typeof e == `object` && !(e instanceof Date)) {
    let n = {};
    for (let r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = U(e[r], t));
    return n;
  }
  return e;
}
function mt(e, t) {
  return ((e.data = W(e.data, t)), delete e.attachments, e);
}
function W(e, t) {
  if (!e) return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == `number` && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw Error(`illegal attachments`);
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = W(e[n], t);
  else if (typeof e == `object`)
    for (let n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = W(e[n], t));
  return e;
}
var ht = se((e, t) => {
    var n = 1e3,
      r = n * 60,
      i = r * 60,
      a = i * 24,
      o = a * 7,
      s = a * 365.25;
    t.exports = function (e, t) {
      t ||= {};
      var n = typeof e;
      if (n === `string` && e.length > 0) return c(e);
      if (n === `number` && isFinite(e)) return t.long ? u(e) : l(e);
      throw Error(
        `val is not a non-empty string or a valid number. val=` +
          JSON.stringify(e),
      );
    };
    function c(e) {
      if (((e = String(e)), !(e.length > 100))) {
        var t =
          /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e,
          );
        if (t) {
          var c = parseFloat(t[1]);
          switch ((t[2] || `ms`).toLowerCase()) {
            case `years`:
            case `year`:
            case `yrs`:
            case `yr`:
            case `y`:
              return c * s;
            case `weeks`:
            case `week`:
            case `w`:
              return c * o;
            case `days`:
            case `day`:
            case `d`:
              return c * a;
            case `hours`:
            case `hour`:
            case `hrs`:
            case `hr`:
            case `h`:
              return c * i;
            case `minutes`:
            case `minute`:
            case `mins`:
            case `min`:
            case `m`:
              return c * r;
            case `seconds`:
            case `second`:
            case `secs`:
            case `sec`:
            case `s`:
              return c * n;
            case `milliseconds`:
            case `millisecond`:
            case `msecs`:
            case `msec`:
            case `ms`:
              return c;
            default:
              return;
          }
        }
      }
    }
    function l(e) {
      var t = Math.abs(e);
      return t >= a
        ? Math.round(e / a) + `d`
        : t >= i
          ? Math.round(e / i) + `h`
          : t >= r
            ? Math.round(e / r) + `m`
            : t >= n
              ? Math.round(e / n) + `s`
              : e + `ms`;
    }
    function u(e) {
      var t = Math.abs(e);
      return t >= a
        ? d(e, t, a, `day`)
        : t >= i
          ? d(e, t, i, `hour`)
          : t >= r
            ? d(e, t, r, `minute`)
            : t >= n
              ? d(e, t, n, `second`)
              : e + ` ms`;
    }
    function d(e, t, n, r) {
      var i = t >= n * 1.5;
      return Math.round(e / n) + ` ` + r + (i ? `s` : ``);
    }
  }),
  gt = se((e, t) => {
    function n(e) {
      ((n.debug = n),
        (n.default = n),
        (n.coerce = c),
        (n.disable = o),
        (n.enable = i),
        (n.enabled = s),
        (n.humanize = ht()),
        (n.destroy = l),
        Object.keys(e).forEach((t) => {
          n[t] = e[t];
        }),
        (n.names = []),
        (n.skips = []),
        (n.formatters = {}));
      function t(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++)
          ((t = (t << 5) - t + e.charCodeAt(n)), (t |= 0));
        return n.colors[Math.abs(t) % n.colors.length];
      }
      n.selectColor = t;
      function n(e) {
        let t,
          i = null,
          a,
          o;
        function s(...e) {
          if (!s.enabled) return;
          let r = s,
            i = Number(new Date());
          ((r.diff = i - (t || i)),
            (r.prev = t),
            (r.curr = i),
            (t = i),
            (e[0] = n.coerce(e[0])),
            typeof e[0] != `string` && e.unshift(`%O`));
          let a = 0;
          ((e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, i) => {
            if (t === `%%`) return `%`;
            a++;
            let o = n.formatters[i];
            if (typeof o == `function`) {
              let n = e[a];
              ((t = o.call(r, n)), e.splice(a, 1), a--);
            }
            return t;
          })),
            n.formatArgs.call(r, e),
            (r.log || n.log).apply(r, e));
        }
        return (
          (s.namespace = e),
          (s.useColors = n.useColors()),
          (s.color = n.selectColor(e)),
          (s.extend = r),
          (s.destroy = n.destroy),
          Object.defineProperty(s, "enabled", {
            enumerable: !0,
            configurable: !1,
            get: () =>
              i === null
                ? (a !== n.namespaces &&
                    ((a = n.namespaces), (o = n.enabled(e))),
                  o)
                : i,
            set: (e) => {
              i = e;
            },
          }),
          typeof n.init == `function` && n.init(s),
          s
        );
      }
      function r(e, t) {
        let r = n(this.namespace + (t === void 0 ? `:` : t) + e);
        return ((r.log = this.log), r);
      }
      function i(e) {
        (n.save(e), (n.namespaces = e), (n.names = []), (n.skips = []));
        let t = (typeof e == `string` ? e : ``)
          .trim()
          .replace(/\s+/g, `,`)
          .split(`,`)
          .filter(Boolean);
        for (let e of t)
          e[0] === `-` ? n.skips.push(e.slice(1)) : n.names.push(e);
      }
      function a(e, t) {
        let n = 0,
          r = 0,
          i = -1,
          a = 0;
        for (; n < e.length; )
          if (r < t.length && (t[r] === e[n] || t[r] === `*`))
            t[r] === `*` ? ((i = r), (a = n), r++) : (n++, r++);
          else if (i !== -1) ((r = i + 1), a++, (n = a));
          else return !1;
        for (; r < t.length && t[r] === `*`; ) r++;
        return r === t.length;
      }
      function o() {
        let e = [...n.names, ...n.skips.map((e) => `-` + e)].join(`,`);
        return (n.enable(``), e);
      }
      function s(e) {
        for (let t of n.skips) if (a(e, t)) return !1;
        for (let t of n.names) if (a(e, t)) return !0;
        return !1;
      }
      function c(e) {
        return e instanceof Error ? e.stack || e.message : e;
      }
      function l() {
        console.warn(
          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
        );
      }
      return (n.enable(n.load()), n);
    }
    t.exports = n;
  }),
  _t = se((e, t) => {
    ((e.formatArgs = r),
      (e.save = i),
      (e.load = a),
      (e.useColors = n),
      (e.storage = o()),
      (e.destroy = (() => {
        let e = !1;
        return () => {
          e ||
            ((e = !0),
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            ));
        };
      })()),
      (e.colors =
        `#0000CC.#0000FF.#0033CC.#0033FF.#0066CC.#0066FF.#0099CC.#0099FF.#00CC00.#00CC33.#00CC66.#00CC99.#00CCCC.#00CCFF.#3300CC.#3300FF.#3333CC.#3333FF.#3366CC.#3366FF.#3399CC.#3399FF.#33CC00.#33CC33.#33CC66.#33CC99.#33CCCC.#33CCFF.#6600CC.#6600FF.#6633CC.#6633FF.#66CC00.#66CC33.#9900CC.#9900FF.#9933CC.#9933FF.#99CC00.#99CC33.#CC0000.#CC0033.#CC0066.#CC0099.#CC00CC.#CC00FF.#CC3300.#CC3333.#CC3366.#CC3399.#CC33CC.#CC33FF.#CC6600.#CC6633.#CC9900.#CC9933.#CCCC00.#CCCC33.#FF0000.#FF0033.#FF0066.#FF0099.#FF00CC.#FF00FF.#FF3300.#FF3333.#FF3366.#FF3399.#FF33CC.#FF33FF.#FF6600.#FF6633.#FF9900.#FF9933.#FFCC00.#FFCC33`.split(
          `.`,
        )));
    function n() {
      if (
        typeof window < `u` &&
        window.process &&
        (window.process.type === `renderer` || window.process.__nwjs)
      )
        return !0;
      if (
        typeof navigator < `u` &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      )
        return !1;
      let e;
      return (
        (typeof document < `u` &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) ||
        (typeof window < `u` &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) ||
        (typeof navigator < `u` &&
          navigator.userAgent &&
          (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
          parseInt(e[1], 10) >= 31) ||
        (typeof navigator < `u` &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }
    function r(e) {
      if (
        ((e[0] =
          (this.useColors ? `%c` : ``) +
          this.namespace +
          (this.useColors ? ` %c` : ` `) +
          e[0] +
          (this.useColors ? `%c ` : ` `) +
          `+` +
          t.exports.humanize(this.diff)),
        !this.useColors)
      )
        return;
      let n = `color: ` + this.color;
      e.splice(1, 0, n, `color: inherit`);
      let r = 0,
        i = 0;
      (e[0].replace(/%[a-zA-Z%]/g, (e) => {
        e !== `%%` && (r++, e === `%c` && (i = r));
      }),
        e.splice(i, 0, n));
    }
    e.log = console.debug || console.log || (() => {});
    function i(t) {
      try {
        t ? e.storage.setItem(`debug`, t) : e.storage.removeItem(`debug`);
      } catch {}
    }
    function a() {
      let t;
      try {
        t = e.storage.getItem(`debug`) || e.storage.getItem(`DEBUG`);
      } catch {}
      return (
        !t && typeof process < `u` && `env` in process && (t = {}.DEBUG),
        t
      );
    }
    function o() {
      try {
        return localStorage;
      } catch {}
    }
    t.exports = gt()(e);
    var { formatters: s } = t.exports;
    s.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return `[UnexpectedJSONParseError]: ` + e.message;
      }
    };
  }),
  vt = re({
    Decoder: () => xt,
    Encoder: () => bt,
    PacketType: () => K,
    isPacketValid: () => Dt,
    protocol: () => 5,
  }),
  G = (0, ie(_t()).default)(`socket.io-parser`),
  yt = [
    `connect`,
    `connect_error`,
    `disconnect`,
    `disconnecting`,
    `newListener`,
    `removeListener`,
  ],
  K;
(function (e) {
  ((e[(e.CONNECT = 0)] = `CONNECT`),
    (e[(e.DISCONNECT = 1)] = `DISCONNECT`),
    (e[(e.EVENT = 2)] = `EVENT`),
    (e[(e.ACK = 3)] = `ACK`),
    (e[(e.CONNECT_ERROR = 4)] = `CONNECT_ERROR`),
    (e[(e.BINARY_EVENT = 5)] = `BINARY_EVENT`),
    (e[(e.BINARY_ACK = 6)] = `BINARY_ACK`));
})((K ||= {}));
var bt = class {
    constructor(e) {
      this.replacer = e;
    }
    encode(e) {
      return (
        G(`encoding packet %j`, e),
        (e.type === K.EVENT || e.type === K.ACK) && H(e)
          ? this.encodeAsBinary({
              type: e.type === K.EVENT ? K.BINARY_EVENT : K.BINARY_ACK,
              nsp: e.nsp,
              data: e.data,
              id: e.id,
            })
          : [this.encodeAsString(e)]
      );
    }
    encodeAsString(e) {
      let t = `` + e.type;
      return (
        (e.type === K.BINARY_EVENT || e.type === K.BINARY_ACK) &&
          (t += e.attachments + `-`),
        e.nsp && e.nsp !== `/` && (t += e.nsp + `,`),
        e.id != null && (t += e.id),
        e.data != null && (t += JSON.stringify(e.data, this.replacer)),
        G(`encoded %j as %s`, e, t),
        t
      );
    }
    encodeAsBinary(e) {
      let t = pt(e),
        n = this.encodeAsString(t.packet),
        r = t.buffers;
      return (r.unshift(n), r);
    }
  },
  xt = class e extends A {
    constructor(e) {
      (super(),
        (this.opts = Object.assign(
          { reviver: void 0, maxAttachments: 10 },
          typeof e == `function` ? { reviver: e } : e,
        )));
    }
    add(e) {
      let t;
      if (typeof e == `string`) {
        if (this.reconstructor)
          throw Error(`got plaintext data when reconstructing a packet`);
        t = this.decodeString(e);
        let n = t.type === K.BINARY_EVENT;
        n || t.type === K.BINARY_ACK
          ? ((t.type = n ? K.EVENT : K.ACK),
            (this.reconstructor = new St(t)),
            t.attachments === 0 && super.emitReserved(`decoded`, t))
          : super.emitReserved(`decoded`, t);
      } else if (V(e) || e.base64)
        if (this.reconstructor)
          ((t = this.reconstructor.takeBinaryData(e)),
            t &&
              ((this.reconstructor = null), super.emitReserved(`decoded`, t)));
        else throw Error(`got binary data when not reconstructing a packet`);
      else throw Error(`Unknown type: ` + e);
    }
    decodeString(t) {
      let n = 0,
        r = { type: Number(t.charAt(0)) };
      if (K[r.type] === void 0) throw Error(`unknown packet type ` + r.type);
      if (r.type === K.BINARY_EVENT || r.type === K.BINARY_ACK) {
        let e = n + 1;
        for (; t.charAt(++n) !== `-` && n != t.length; );
        let i = t.substring(e, n);
        if (i != Number(i) || t.charAt(n) !== `-`)
          throw Error(`Illegal attachments`);
        let a = Number(i);
        if (!wt(a) || a < 0) throw Error(`Illegal attachments`);
        if (a > this.opts.maxAttachments) throw Error(`too many attachments`);
        r.attachments = a;
      }
      if (t.charAt(n + 1) === `/`) {
        let e = n + 1;
        for (; ++n && !(t.charAt(n) === `,` || n === t.length); );
        r.nsp = t.substring(e, n);
      } else r.nsp = `/`;
      let i = t.charAt(n + 1);
      if (i !== `` && Number(i) == i) {
        let e = n + 1;
        for (; ++n; ) {
          let e = t.charAt(n);
          if (e == null || Number(e) != e) {
            --n;
            break;
          }
          if (n === t.length) break;
        }
        r.id = Number(t.substring(e, n + 1));
      }
      if (t.charAt(++n)) {
        let i = this.tryParse(t.substr(n));
        if (e.isPayloadValid(r.type, i)) r.data = i;
        else throw Error(`invalid payload`);
      }
      return (G(`decoded %s as %j`, t, r), r);
    }
    tryParse(e) {
      try {
        return JSON.parse(e, this.opts.reviver);
      } catch {
        return !1;
      }
    }
    static isPayloadValid(e, t) {
      switch (e) {
        case K.CONNECT:
          return q(t);
        case K.DISCONNECT:
          return t === void 0;
        case K.CONNECT_ERROR:
          return typeof t == `string` || q(t);
        case K.EVENT:
        case K.BINARY_EVENT:
          return (
            Array.isArray(t) &&
            (typeof t[0] == `number` ||
              (typeof t[0] == `string` && yt.indexOf(t[0]) === -1))
          );
        case K.ACK:
        case K.BINARY_ACK:
          return Array.isArray(t);
      }
    }
    destroy() {
      this.reconstructor &&=
        (this.reconstructor.finishedReconstruction(), null);
    }
  },
  St = class {
    constructor(e) {
      ((this.packet = e), (this.buffers = []), (this.reconPack = e));
    }
    takeBinaryData(e) {
      if (
        (this.buffers.push(e),
        this.buffers.length === this.reconPack.attachments)
      ) {
        let e = mt(this.reconPack, this.buffers);
        return (this.finishedReconstruction(), e);
      }
      return null;
    }
    finishedReconstruction() {
      ((this.reconPack = null), (this.buffers = []));
    }
  };
function Ct(e) {
  return typeof e == `string`;
}
var wt =
  Number.isInteger ||
  function (e) {
    return typeof e == `number` && isFinite(e) && Math.floor(e) === e;
  };
function Tt(e) {
  return e === void 0 || wt(e);
}
function q(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function Et(e, t) {
  switch (e) {
    case K.CONNECT:
      return t === void 0 || q(t);
    case K.DISCONNECT:
      return t === void 0;
    case K.EVENT:
      return (
        Array.isArray(t) &&
        (typeof t[0] == `number` ||
          (typeof t[0] == `string` && yt.indexOf(t[0]) === -1))
      );
    case K.ACK:
      return Array.isArray(t);
    case K.CONNECT_ERROR:
      return typeof t == `string` || q(t);
    default:
      return !1;
  }
}
function Dt(e) {
  return Ct(e.nsp) && Tt(e.id) && Et(e.type, e.data);
}
function J(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n);
    }
  );
}
var Ot = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
  }),
  kt = class extends A {
    constructor(e, t, n) {
      (super(),
        (this.connected = !1),
        (this.recovered = !1),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this._queue = []),
        (this._queueSeq = 0),
        (this.ids = 0),
        (this.acks = {}),
        (this.flags = {}),
        (this.io = e),
        (this.nsp = t),
        n && n.auth && (this.auth = n.auth),
        (this._opts = Object.assign({}, n)),
        this.io._autoConnect && this.open());
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      let e = this.io;
      this.subs = [
        J(e, `open`, this.onopen.bind(this)),
        J(e, `packet`, this.onpacket.bind(this)),
        J(e, `error`, this.onerror.bind(this)),
        J(e, `close`, this.onclose.bind(this)),
      ];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected
        ? this
        : (this.subEvents(),
          this.io._reconnecting || this.io.open(),
          this.io._readyState === `open` && this.onopen(),
          this);
    }
    open() {
      return this.connect();
    }
    send(...e) {
      return (e.unshift(`message`), this.emit.apply(this, e), this);
    }
    emit(e, ...t) {
      if (Ot.hasOwnProperty(e))
        throw Error(`"` + e.toString() + `" is a reserved event name`);
      if (
        (t.unshift(e),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      )
        return (this._addToQueue(t), this);
      let n = { type: K.EVENT, data: t };
      if (
        ((n.options = {}),
        (n.options.compress = this.flags.compress !== !1),
        typeof t[t.length - 1] == `function`)
      ) {
        let e = this.ids++,
          r = t.pop();
        (this._registerAckCallback(e, r), (n.id = e));
      }
      let r = this.io.engine?.transport?.writable,
        i = this.connected && !this.io.engine?._hasPingExpired();
      return (
        (this.flags.volatile && !r) ||
          (i
            ? (this.notifyOutgoingListeners(n), this.packet(n))
            : this.sendBuffer.push(n)),
        (this.flags = {}),
        this
      );
    }
    _registerAckCallback(e, t) {
      let n = this.flags.timeout ?? this._opts.ackTimeout;
      if (n === void 0) {
        this.acks[e] = t;
        return;
      }
      let r = this.io.setTimeoutFn(() => {
          delete this.acks[e];
          for (let t = 0; t < this.sendBuffer.length; t++)
            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
          t.call(this, Error(`operation has timed out`));
        }, n),
        i = (...e) => {
          (this.io.clearTimeoutFn(r), t.apply(this, e));
        };
      ((i.withError = !0), (this.acks[e] = i));
    }
    emitWithAck(e, ...t) {
      return new Promise((n, r) => {
        let i = (e, t) => (e ? r(e) : n(t));
        ((i.withError = !0), t.push(i), this.emit(e, ...t));
      });
    }
    _addToQueue(e) {
      let t;
      typeof e[e.length - 1] == `function` && (t = e.pop());
      let n = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: !1,
        args: e,
        flags: Object.assign({ fromQueue: !0 }, this.flags),
      };
      (e.push(
        (e, ...r) => (
          this._queue[0],
          e === null
            ? (this._queue.shift(), t && t(null, ...r))
            : n.tryCount > this._opts.retries &&
              (this._queue.shift(), t && t(e)),
          (n.pending = !1),
          this._drainQueue()
        ),
      ),
        this._queue.push(n),
        this._drainQueue());
    }
    _drainQueue(e = !1) {
      if (!this.connected || this._queue.length === 0) return;
      let t = this._queue[0];
      (t.pending && !e) ||
        ((t.pending = !0),
        t.tryCount++,
        (this.flags = t.flags),
        this.emit.apply(this, t.args));
    }
    packet(e) {
      ((e.nsp = this.nsp), this.io._packet(e));
    }
    onopen() {
      typeof this.auth == `function`
        ? this.auth((e) => {
            this._sendConnectPacket(e);
          })
        : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
      this.packet({
        type: K.CONNECT,
        data: this._pid
          ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
          : e,
      });
    }
    onerror(e) {
      this.connected || this.emitReserved(`connect_error`, e);
    }
    onclose(e, t) {
      ((this.connected = !1),
        delete this.id,
        this.emitReserved(`disconnect`, e, t),
        this._clearAcks());
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((e) => {
        if (!this.sendBuffer.some((t) => String(t.id) === e)) {
          let t = this.acks[e];
          (delete this.acks[e],
            t.withError && t.call(this, Error(`socket has been disconnected`)));
        }
      });
    }
    onpacket(e) {
      if (e.nsp === this.nsp)
        switch (e.type) {
          case K.CONNECT:
            e.data && e.data.sid
              ? this.onconnect(e.data.sid, e.data.pid)
              : this.emitReserved(
                  `connect_error`,
                  Error(
                    `It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`,
                  ),
                );
            break;
          case K.EVENT:
          case K.BINARY_EVENT:
            this.onevent(e);
            break;
          case K.ACK:
          case K.BINARY_ACK:
            this.onack(e);
            break;
          case K.DISCONNECT:
            this.ondisconnect();
            break;
          case K.CONNECT_ERROR:
            this.destroy();
            let t = Error(e.data.message);
            ((t.data = e.data.data), this.emitReserved(`connect_error`, t));
            break;
        }
    }
    onevent(e) {
      let t = e.data || [];
      (e.id != null && t.push(this.ack(e.id)),
        this.connected
          ? this.emitEvent(t)
          : this.receiveBuffer.push(Object.freeze(t)));
    }
    emitEvent(e) {
      if (this._anyListeners && this._anyListeners.length) {
        let t = this._anyListeners.slice();
        for (let n of t) n.apply(this, e);
      }
      (super.emit.apply(this, e),
        this._pid &&
          e.length &&
          typeof e[e.length - 1] == `string` &&
          (this._lastOffset = e[e.length - 1]));
    }
    ack(e) {
      let t = this,
        n = !1;
      return function (...r) {
        n || ((n = !0), t.packet({ type: K.ACK, id: e, data: r }));
      };
    }
    onack(e) {
      let t = this.acks[e.id];
      typeof t == `function` &&
        (delete this.acks[e.id],
        t.withError && e.data.unshift(null),
        t.apply(this, e.data));
    }
    onconnect(e, t) {
      ((this.id = e),
        (this.recovered = t && this._pid === t),
        (this._pid = t),
        (this.connected = !0),
        this.emitBuffered(),
        this._drainQueue(!0),
        this.emitReserved(`connect`));
    }
    emitBuffered() {
      (this.receiveBuffer.forEach((e) => this.emitEvent(e)),
        (this.receiveBuffer = []),
        this.sendBuffer.forEach((e) => {
          (this.notifyOutgoingListeners(e), this.packet(e));
        }),
        (this.sendBuffer = []));
    }
    ondisconnect() {
      (this.destroy(), this.onclose(`io server disconnect`));
    }
    destroy() {
      ((this.subs &&= (this.subs.forEach((e) => e()), void 0)),
        this.io._destroy(this));
    }
    disconnect() {
      return (
        this.connected && this.packet({ type: K.DISCONNECT }),
        this.destroy(),
        this.connected && this.onclose(`io client disconnect`),
        this
      );
    }
    close() {
      return this.disconnect();
    }
    compress(e) {
      return ((this.flags.compress = e), this);
    }
    get volatile() {
      return ((this.flags.volatile = !0), this);
    }
    timeout(e) {
      return ((this.flags.timeout = e), this);
    }
    onAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.push(e),
        this
      );
    }
    prependAny(e) {
      return (
        (this._anyListeners = this._anyListeners || []),
        this._anyListeners.unshift(e),
        this
      );
    }
    offAny(e) {
      if (!this._anyListeners) return this;
      if (e) {
        let t = this._anyListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.push(e),
        this
      );
    }
    prependAnyOutgoing(e) {
      return (
        (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
        this._anyOutgoingListeners.unshift(e),
        this
      );
    }
    offAnyOutgoing(e) {
      if (!this._anyOutgoingListeners) return this;
      if (e) {
        let t = this._anyOutgoingListeners;
        for (let n = 0; n < t.length; n++)
          if (e === t[n]) return (t.splice(n, 1), this);
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        let t = this._anyOutgoingListeners.slice();
        for (let n of t) n.apply(this, e.data);
      }
    }
  };
function Y(e) {
  ((e ||= {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0));
}
((Y.prototype.duration = function () {
  var e = this.ms * this.factor ** +this.attempts++;
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + n : e - n;
  }
  return Math.min(e, this.max) | 0;
}),
  (Y.prototype.reset = function () {
    this.attempts = 0;
  }),
  (Y.prototype.setMin = function (e) {
    this.ms = e;
  }),
  (Y.prototype.setMax = function (e) {
    this.max = e;
  }),
  (Y.prototype.setJitter = function (e) {
    this.jitter = e;
  }));
var At = class extends A {
    constructor(e, t) {
      (super(),
        (this.nsps = {}),
        (this.subs = []),
        e && typeof e == `object` && ((t = e), (e = void 0)),
        (t ||= {}),
        (t.path = t.path || `/socket.io`),
        (this.opts = t),
        N(this, t),
        this.reconnection(t.reconnection !== !1),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(t.randomizationFactor ?? 0.5),
        (this.backoff = new Y({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(t.timeout == null ? 2e4 : t.timeout),
        (this._readyState = `closed`),
        (this.uri = e));
      let n = t.parser || vt;
      ((this.encoder = new n.Encoder()),
        (this.decoder = new n.Decoder()),
        (this._autoConnect = t.autoConnect !== !1),
        this._autoConnect && this.open());
    }
    reconnection(e) {
      return arguments.length
        ? ((this._reconnection = !!e), e || (this.skipReconnect = !0), this)
        : this._reconnection;
    }
    reconnectionAttempts(e) {
      return e === void 0
        ? this._reconnectionAttempts
        : ((this._reconnectionAttempts = e), this);
    }
    reconnectionDelay(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelay
        : ((this._reconnectionDelay = e),
          (t = this.backoff) == null || t.setMin(e),
          this);
    }
    randomizationFactor(e) {
      var t;
      return e === void 0
        ? this._randomizationFactor
        : ((this._randomizationFactor = e),
          (t = this.backoff) == null || t.setJitter(e),
          this);
    }
    reconnectionDelayMax(e) {
      var t;
      return e === void 0
        ? this._reconnectionDelayMax
        : ((this._reconnectionDelayMax = e),
          (t = this.backoff) == null || t.setMax(e),
          this);
    }
    timeout(e) {
      return arguments.length ? ((this._timeout = e), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting &&
        this._reconnection &&
        this.backoff.attempts === 0 &&
        this.reconnect();
    }
    open(e) {
      if (~this._readyState.indexOf(`open`)) return this;
      this.engine = new ot(this.uri, this.opts);
      let t = this.engine,
        n = this;
      ((this._readyState = `opening`), (this.skipReconnect = !1));
      let r = J(t, `open`, function () {
          (n.onopen(), e && e());
        }),
        i = (t) => {
          (this.cleanup(),
            (this._readyState = `closed`),
            this.emitReserved(`error`, t),
            e ? e(t) : this.maybeReconnectOnOpen());
        },
        a = J(t, `error`, i);
      if (!1 !== this._timeout) {
        let e = this._timeout,
          n = this.setTimeoutFn(() => {
            (r(), i(Error(`timeout`)), t.close());
          }, e);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
      return (this.subs.push(r), this.subs.push(a), this);
    }
    connect(e) {
      return this.open(e);
    }
    onopen() {
      (this.cleanup(), (this._readyState = `open`), this.emitReserved(`open`));
      let e = this.engine;
      this.subs.push(
        J(e, `ping`, this.onping.bind(this)),
        J(e, `data`, this.ondata.bind(this)),
        J(e, `error`, this.onerror.bind(this)),
        J(e, `close`, this.onclose.bind(this)),
        J(this.decoder, `decoded`, this.ondecoded.bind(this)),
      );
    }
    onping() {
      this.emitReserved(`ping`);
    }
    ondata(e) {
      try {
        this.decoder.add(e);
      } catch (e) {
        this.onclose(`parse error`, e);
      }
    }
    ondecoded(e) {
      j(() => {
        this.emitReserved(`packet`, e);
      }, this.setTimeoutFn);
    }
    onerror(e) {
      this.emitReserved(`error`, e);
    }
    socket(e, t) {
      let n = this.nsps[e];
      return (
        n
          ? this._autoConnect && !n.active && n.connect()
          : ((n = new kt(this, e, t)), (this.nsps[e] = n)),
        n
      );
    }
    _destroy(e) {
      let t = Object.keys(this.nsps);
      for (let e of t) if (this.nsps[e].active) return;
      this._close();
    }
    _packet(e) {
      let t = this.encoder.encode(e);
      for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
    }
    cleanup() {
      (this.subs.forEach((e) => e()),
        (this.subs.length = 0),
        this.decoder.destroy());
    }
    _close() {
      ((this.skipReconnect = !0),
        (this._reconnecting = !1),
        this.onclose(`forced close`));
    }
    disconnect() {
      return this._close();
    }
    onclose(e, t) {
      var n;
      (this.cleanup(),
        (n = this.engine) == null || n.close(),
        this.backoff.reset(),
        (this._readyState = `closed`),
        this.emitReserved(`close`, e, t),
        this._reconnection && !this.skipReconnect && this.reconnect());
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      let e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        (this.backoff.reset(),
          this.emitReserved(`reconnect_failed`),
          (this._reconnecting = !1));
      else {
        let t = this.backoff.duration();
        this._reconnecting = !0;
        let n = this.setTimeoutFn(() => {
          e.skipReconnect ||
            (this.emitReserved(`reconnect_attempt`, e.backoff.attempts),
            !e.skipReconnect &&
              e.open((t) => {
                t
                  ? ((e._reconnecting = !1),
                    e.reconnect(),
                    this.emitReserved(`reconnect_error`, t))
                  : e.onreconnect();
              }));
        }, t);
        (this.opts.autoUnref && n.unref(),
          this.subs.push(() => {
            this.clearTimeoutFn(n);
          }));
      }
    }
    onreconnect() {
      let e = this.backoff.attempts;
      ((this._reconnecting = !1),
        this.backoff.reset(),
        this.emitReserved(`reconnect`, e));
    }
  },
  X = {};
function Z(e, t) {
  (typeof e == `object` && ((t = e), (e = void 0)), (t ||= {}));
  let n = st(e, t.path || `/socket.io`),
    r = n.source,
    i = n.id,
    a = n.path,
    o = X[i] && a in X[i].nsps,
    s = t.forceNew || t[`force new connection`] || !1 === t.multiplex || o,
    c;
  return (
    s ? (c = new At(r, t)) : (X[i] || (X[i] = new At(r, t)), (c = X[i])),
    n.query && !t.query && (t.query = n.queryKey),
    c.socket(n.path, t)
  );
}
Object.assign(Z, { Manager: At, Socket: kt, io: Z, connect: Z });
var jt = `http://localhost:3000`,
  Mt = x(),
  Nt = Z(jt),
  Pt = {
    sendAlteration: (e) => {
      Nt.emit(`work:alteration`, e);
    },
    sendDb: (e) => {
      (console.log(`createStore.workIdGetter`, Mt.workIdGetter),
        console.log(`data`, e),
        Mt.workIdGetter &&
          Nt.emit(`work:save`, { workId: Mt.workIdGetter, data: e }));
    },
  },
  Ft = x(),
  It = () => {
    if (Ft.workIdGetter == null) return;
    let e = [],
      t = (t) => {
        let n = {
          id: `id_${e.length}`,
          workId: Ft.workIdGetter,
          userId: t.user,
          type: t.token.type,
          path: t.token.path,
          beforeValue: null,
          value: t.token,
          createdAt: Date.now(),
        };
        (console.log(`ZushDBtoken`, n),
          e.length == 0 && r(),
          e.push(n),
          console.log(`queue`, e));
      },
      n = () => {
        (console.log(`queue`, e), Pt.sendDb(e), (e.length = 0));
      },
      r = () => {
        setTimeout(() => {
          n();
        }, 3e3);
      };
    return { push: t, pop: n };
  },
  Q = () => {
    let e = It(),
      t = x();
    return {
      hydrateCreateState: (e) => {
        console.log(`hydrateCreateState_data`, e);
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
                        id: t.id,
                      }
                    : { ...r, count: t.count, id: t.id },
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
              i.id,
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
            console.log(`token.token`, n.token);
            let e = t.addPreviewCase(n.token);
            (console.log(`res`, e),
              (r.path = [`previewDatas`, `mainLuggage`]),
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
        (console.log(`casesData`, o),
          Object.keys(o).forEach((e) => {
            let t = o[e].pockets;
            Object.keys(t).forEach((e) => {
              let n = t[e];
              n.items = new Map(Object.entries(n.items));
            });
          }),
          console.log(`casesData`, o),
          t.setStaticItemData(i),
          t.setIconMap(a.iconMap),
          t.setCategoryColor(a.color),
          t.setCategories(a.categoryData),
          t.setStaticCases(o),
          t.setStaticLoaded(!0));
      },
    };
  },
  Lt = y(`alterationLog`, () => {
    let e = Q(),
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
  Rt = {
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
              id: `mesh`,
              count: 0,
              innerItems: new Map([
                [`item_1`, { id: `item_1`, id: `item_1`, count: 3 }],
                [
                  `item_2`,
                  {
                    id: `inner_1`,
                    count: 1,
                    id: `item_2`,
                    innerItems: new Map([
                      [`item_3`, { id: `item_6`, id: `item_3`, count: 2 }],
                      [`item_4`, { id: `item_6`, id: `item_4`, count: 1 }],
                    ]),
                  },
                ],
              ]),
            },
            main: {
              id: `main`,
              id: `main`,
              count: 0,
              innerItems: new Map([
                [`item_5`, { id: `item_5`, id: `inner_1`, count: 3 }],
              ]),
            },
          },
        },
      },
    },
  },
  zt = `http://localhost:3000/work`,
  Bt = () => ({
    load: () => Rt,
    getWork: async (e) =>
      await (
        await fetch(`${zt}/get`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ theWorkId: e }),
        })
      ).json(),
    createNewWork: async (e) => {
      let t = await (
        await fetch(`${zt}/create`, {
          method: `POST`,
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify({ userId: e }),
        })
      ).json();
      if (t == `error`) return null;
      let n = await JSON.parse(t.data);
      return { workName: t.workName, workId: t.workId, ...n };
    },
  }),
  Vt = le(),
  $ = () => {
    let e = x(),
      t = ce(),
      n = Lt(),
      r = Bt(),
      i = Q(),
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
        if (a == null) return `damagedData`;
        await Q().initCreateStaticData();
        let l = i.hydrateCreateState(a);
        ((o = l.vuepreviewData), (s = l.vueItemList), (c = l.addItemCounter));
        try {
          if ((console.log(`newWork`, a), a == null)) return `damagedData`;
          await Q().initCreateStaticData();
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
          Vt.selectWorkPackage(a.workId),
          `none`
        );
      },
      o = async () => {
        let t = Vt.selectedPackageIdGetter.id;
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
          await Q().initCreateStaticData();
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
        if (s.isStorage == 1 && r.parentId != null) return `isRegulatedAction`;
        let c = r.id == null ? `item_${e.addItemCounter}` : r.id,
          l = {
            id: c,
            caseId: r.caseId,
            pocketId: r.pocketId,
            parentId: r.parentId,
            itemId: r.itemId,
          },
          u = {
            alterationType: `previewItems_additem`,
            token: { ...r, id: c },
            user: t.userId,
          },
          d = {
            alterationType: `previewItems_delete`,
            token: l,
            user: t.userId,
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
            user: t.userId,
          },
          a = {
            alterationType: `previewItems_addcount`,
            token: { ...e, pulse: e.pulse * -1 },
            user: t.userId,
          };
        (n.saveState({ forwardToken: r, reverseToken: a }),
          i.alterationData(r));
      },
      l = (e) => {
        let n = {
          alterationType: `itemlistItems_bookmark`,
          token: e,
          user: t.userId,
        };
        i.alterationData(n);
      },
      u = (r) => {
        if (!e.listItemGetter) return;
        let a = {
            alterationType: `previewItems_delete`,
            token: r,
            user: t.userId,
          },
          { innnerItemToken: o, ...s } = r,
          c = [];
        (c.push({
          alterationType: `previewItems_additem`,
          token: s,
          user: t.userId,
        }),
          r.innnerItemToken &&
            r.innnerItemToken.forEach((e) => {
              c.push({
                alterationType: `previewItems_additem`,
                token: e,
                user: t.userId,
              });
            }),
          i.alterationData(a),
          n.saveState({ forwardToken: a, reverseToken: c }));
      },
      d = (e) => {
        let n = {
          alterationType: `itemlistItems_additem`,
          token: e,
          user: t.userId,
        };
        i.alterationData(n);
      },
      f = (r) => {
        let a = `caseID_${e.getPreviewCasesArray.length}`,
          o = {
            alterationType: `previewCases_addCase`,
            token: { case: { caseType: r, caseId: a }, reverse: !1 },
            user: t.userId,
          },
          s = {
            alterationType: `previewCases_deleteCase`,
            token: { id: a, deletecase: e.staticCasesGetter[r] },
            user: t.userId,
          };
        (i.alterationData(o),
          n.saveState({ forwardToken: o, reverseToken: s }));
      },
      p = (r) => {
        let i = e.previewItemGetter[r],
          a = { case: i, reverse: !0 },
          o = {
            alterationType: `previewCases_deleteCase`,
            token: { id: r, deletecase: i },
            user: t.userId,
          },
          s = {
            alterationType: `previewCases_addCase`,
            token: a,
            user: t.userId,
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
      ee = (r, a) => {
        let { x: o, y: s, width: c, height: l } = e.previewCase[r].pockets[a],
          u = {
            pos: { x: o, y: s, width: c, height: l },
            caseId: r,
            pocketId: a,
          },
          d = {
            alterationType: `confirmed_resizePocket`,
            token: { pos: h, caseId: r, pocketId: a },
            user: t.userId,
          },
          f = {
            token: u,
            alterationType: `confirmed_resizePocket`,
            user: t.userId,
          };
        ((m = !1),
          n.saveState({ forwardToken: f, reverseToken: d }),
          i.alterationData(f));
      },
      _ = !1,
      v = { x: 0, y: 0, width: 0, height: 0 };
    return {
      createNewwork: a,
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
            user: t.userId,
          },
          p = {
            alterationType: `confirmed_resizePocket`,
            token: d,
            user: t.userId,
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
      provisionalResizePocket: g,
      confirmedResizePocket: ee,
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
  Ht = _({
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
        r = x(),
        i = $(),
        a = r.iconMap;
      function o(e) {
        let t = {
          id: n.item.id,
          popCaseId: n.caseId,
          popPocketId: n.pocketId,
        };
        e.dataTransfer?.setData(`id`, JSON.stringify(t));
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
            parentId: n.item.id,
            caseId: n.caseId,
            id: n.item.id,
          };
          i.addItemToPreview(r);
        },
        onPlue: (e) => {
          n.item.count + e >= 99 ||
            n.item.count + e <= 0 ||
            i.addItemCount({
              id: n.item.id,
              pulse: e,
              pocketId: n.pocketId,
              parentId: n.parentItem ? n.parentItem : void 0,
              caseId: n.caseId,
            });
        },
        onDelete: () => {
          let e = [];
          n.item.innerItems?.forEach((t) => {
            e?.push({
              pocketId: n.pocketId,
              caseId: n.caseId,
              parentId: n.item.id,
              itemId: t.id,
              id: n.item.id,
            });
          });
          let t = {
            id: n.item.id,
            pocketId: n.pocketId,
            parentId: n.parentItem ? n.parentItem : void 0,
            itemId: n.item.id,
            caseId: n.caseId,
            innnerItemToken: e,
          };
          i.deletePreviewItem(t);
        },
        icon: a[n.item.iconId] ?? `📦`,
        get CirclePlus() {
          return de;
        },
        get CircleMinus() {
          return ue;
        },
        get BaseButton() {
          return ae;
        },
      };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  Ut = { class: `item-card` },
  Wt = { class: `header` },
  Gt = { class: `count` },
  Kt = { key: 0, class: `drop-text` };
function qt(n, r, d, p, m, h) {
  let ee = t(`previewItem`, !0);
  return (
    s(),
    u(`div`, Ut, [
      l(`section`, Wt, [
        l(`div`, null, a(p.icon.src), 1),
        l(`div`, null, a(p.props.item.name), 1),
        l(`div`, Gt, [
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
                        ee,
                        {
                          item: n,
                          pocketId: p.props.pocketId,
                          parentItem: p.props.item.id,
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
                ? (s(), u(`p`, Kt, a(`ここにドロップ`)))
                : v(``, !0),
            ],
            32,
          ))
        : v(``, !0),
    ])
  );
}
var Jt = h(Ht, [
    [`render`, qt],
    [`__scopeId`, `data-v-126205df`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PreviewItem.vue`,
    ],
  ]),
  Yt = _({
    __name: `PocketModal`,
    props: { pocket: { type: Object, required: !0 } },
    emits: [`close`],
    setup(e, { expose: t, emit: n }) {
      t();
      let r = d(!1),
        i = $(),
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
              id: null,
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
            return fe;
          },
          PreviewItem: Jt,
        };
      return (
        Object.defineProperty(u, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        u
      );
    },
  }),
  Xt = { class: `modal` },
  Zt = { class: `header` },
  Qt = { class: `name` },
  $t = { class: `drop-area` },
  en = { key: 0, style: { "font-size": `12px`, "text-align": `center` } };
function tn(t, n, r, i, c, d) {
  return (
    s(),
    u(
      `div`,
      {
        class: te([`overlay`, [`overlay`, { close: i.isClose }]]),
        onDrop: [i.onDrop, (n[0] ||= g(() => {}, [`stop`]))],
        onDragover: g(i.handleDrop, [`prevent`]),
      },
      [
        l(`div`, Xt, [
          l(`header`, Zt, [
            l(`div`, Qt, a(`#` + r.pocket.name), 1),
            l(`div`, { onClick: i.close, class: `close-button` }, [
              e(i.X, { size: 20, color: `black`, "stroke-width": `2.5` }),
            ]),
          ]),
          l(`div`, $t, [
            r.pocket.items.size === 0
              ? (s(), u(`p`, en, ` ここに持ち物をドラッグ `))
              : v(``, !0),
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
var nn = h(Yt, [
    [`render`, tn],
    [`__scopeId`, `data-v-f42593c0`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/PocketModal.vue`,
    ],
  ]),
  rn = y(`caseDragStore`, {
    state: () => ({ isDrag: !1 }),
    getters: { isDragging: (e) => e.isDrag },
    actions: {
      drag(e) {
        this.isDrag = e;
      },
    },
  }),
  an = _({
    __name: `dropCaseArea`,
    setup(e, { expose: t }) {
      t();
      let n = $(),
        r = rn(),
        { isDrag: i } = oe(r),
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
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  });
function on(e, t, r, i, a, o) {
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
var sn = h(an, [
    [`render`, on],
    [`__scopeId`, `data-v-4322c95e`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/sideBar/caseBar/components/dropCaseArea.vue`,
    ],
  ]),
  cn = _({
    __name: `svgResizeHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = $(),
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
        ne(() => {
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
        Object.defineProperty(f, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        f
      );
    },
  }),
  ln = { class: `resize-handles` },
  un = [`cx`, `cy`],
  dn = [`cx`, `cy`],
  fn = [`cx`, `cy`],
  pn = [`cx`, `cy`],
  mn = [`cx`, `cy`],
  hn = [`cx`, `cy`],
  gn = [`cx`, `cy`],
  _n = [`cx`, `cy`];
function vn(e, t, n, r, i, a) {
  return (
    s(),
    u(`g`, ln, [
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
        un,
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
        dn,
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
        fn,
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
        pn,
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
        mn,
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
        hn,
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
        gn,
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
        _n,
      ),
    ])
  );
}
var yn = h(cn, [
    [`render`, vn],
    [`__scopeId`, `data-v-95e8907c`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/svgResizeHandle.vue`,
    ],
  ]),
  bn = _({
    __name: `SvgRemoveHandle`,
    props: {
      pocket: { type: Object, required: !0 },
      caseId: { type: String, required: !0 },
      pocketId: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      let n = $(),
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
        ne(() => {
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
        Object.defineProperty(d, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  }),
  xn = [`x`, `y`, `width`, `height`];
function Sn(e, t, n, r, i, a) {
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
          xn,
        ),
      ],
      32,
    )
  );
}
var Cn = h(bn, [
    [`render`, Sn],
    [`__scopeId`, `data-v-c265c640`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/SvgRemoveHandle.vue`,
    ],
  ]),
  wn = _({
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
        SvgResizeHandle: yn,
        SvgRemoveHandle: Cn,
      };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  Tn = { class: `suitcase-wrap` },
  En = { viewBox: `0 0 400 560`, class: `suitcase` },
  Dn = [`x`, `y`, `width`, `height`],
  On = [`x`, `y`, `width`, `height`],
  kn = [`onDblclick`],
  An = [`x`, `y`, `width`, `height`],
  jn = [`x`, `y`],
  Mn = [`x`, `y`];
function Nn(t, n, r, i, c, d) {
  return (
    s(),
    u(`div`, Tn, [
      (s(),
      u(`svg`, En, [
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
          Dn,
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
          On,
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
                    An,
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
                    jn,
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
                    Mn,
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
                kn,
              )
            ),
          ),
          128,
        )),
      ])),
    ])
  );
}
var Pn = h(wn, [
    [`render`, Nn],
    [`__scopeId`, `data-v-06975ad1`],
    [
      `__file`,
      `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/svgUi/case.vue`,
    ],
  ]),
  Fn = _({
    __name: `Preview`,
    setup(e, { expose: t }) {
      t();
      let n = d(),
        r = x(),
        { getPreviewCasesArray: i } = oe(r),
        a = {
          selectedPocket: n,
          createStore: r,
          cases: i,
          PocketModal: nn,
          dropCaseArea: sn,
          Case: Pn,
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
  In = { class: `preview-area` },
  Ln = { class: `pocketModal` };
function Rn(t, n, r, i, a, c) {
  return (
    s(),
    u(`div`, In, [
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
      l(`section`, Ln, [
        i.selectedPocket
          ? (s(),
            ee(
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
          : v(``, !0),
      ]),
    ])
  );
}
var zn = h(Fn, [
  [`render`, Rn],
  [`__scopeId`, `data-v-d64e8ecd`],
  [
    `__file`,
    `/Users/azumakoutaira/workspace/moti_nabi/frontend/src/features/create/components/Preview.vue`,
  ],
]);
export { x as a, Lt as i, rn as n, $ as r, zn as t };
//# sourceMappingURL=Preview-C2MVJwpa.js.map
