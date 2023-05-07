import { defineComponent as C, openBlock as t, createElementBlock as o, normalizeClass as $, unref as i, normalizeStyle as D, createElementVNode as a, Fragment as r, createVNode as b, createCommentVNode as n, renderList as h, createBlock as m, resolveDynamicComponent as c, createTextVNode as k, toDisplayString as y, renderSlot as p, h as g } from "vue";
import { Props as H } from "./index3.js";
import { isFunction as f } from "../../_utils/is/index.js";
import { useList as w } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import v from "../components/table-colgroup/index2.js";
const T = { class: "v-table__container" }, P = {
  key: 0,
  class: "v-table__header"
}, j = { class: "v-table__table" }, q = ["align"], A = { key: 0 }, G = { class: "v-table__body" }, I = { class: "v-table__table" }, J = ["align"], K = { key: 0 }, M = ["align"], O = { key: 0 }, Q = { key: 2 }, R = { key: 1 }, U = C({
  name: "VTable"
}), oe = /* @__PURE__ */ C({
  ...U,
  props: H,
  setup(F) {
    const S = F, { styles: V, classes: z } = w(S, "table"), B = (e, d, s, l) => e(g, d, s, l), _ = (e, d, s) => e(g, d, s), E = V(["zebraColor", "bgColor", "headBgColor", "height"]), L = z(["border", "zebra"], "v-table");
    return (e, d) => (t(), o("div", {
      role: "table",
      class: $(i(L)),
      style: D(i(E))
    }, [
      a("div", T, [
        e.columns || e.data ? (t(), o(r, { key: 0 }, [
          e.height && e.showHead ? (t(), o("header", P, [
            a("table", j, [
              b(i(v), { columns: e.columns }, null, 8, ["columns"]),
              a("thead", { align: e.align }, [
                a("tr", null, [
                  e.num ? (t(), o("th", A, "\u5E8F\u53F7")) : n("", !0),
                  (t(!0), o(r, null, h(e.columns, (s, l) => (t(), o("th", { key: l }, [
                    i(f)(s.title) ? (t(), m(c(_(s.title, s, l)), { key: 0 })) : (t(), o(r, { key: 1 }, [
                      k(y(s.title), 1)
                    ], 64))
                  ]))), 128))
                ])
              ], 8, q)
            ])
          ])) : n("", !0),
          a("main", G, [
            a("table", I, [
              b(i(v), { columns: e.columns }, null, 8, ["columns"]),
              !e.height && e.showHead ? (t(), o("thead", {
                key: 0,
                align: e.align
              }, [
                a("tr", null, [
                  e.num ? (t(), o("th", K, "\u5E8F\u53F7")) : n("", !0),
                  (t(!0), o(r, null, h(e.columns, (s, l) => (t(), o("th", { key: l }, [
                    i(f)(s.title) ? (t(), m(c(_(s.title, s, l)), { key: 0 })) : (t(), o(r, { key: 1 }, [
                      k(y(s.title), 1)
                    ], 64))
                  ]))), 128))
                ])
              ], 8, J)) : n("", !0),
              e.data.length ? (t(), o("tbody", {
                key: 1,
                align: e.align
              }, [
                (t(!0), o(r, null, h(e.data, (s, l) => (t(), o("tr", { key: l }, [
                  e.num ? (t(), o("td", O, y(l + 1), 1)) : n("", !0),
                  (t(!0), o(r, null, h(e.columns, (u, N) => (t(), o("td", { key: N }, [
                    u.render ? (t(), m(c(B(u.render, s, l, u)), { key: 0 })) : (t(), o(r, { key: 1 }, [
                      u.key ? (t(), o(r, { key: 0 }, [
                        k(y(s[u.key]), 1)
                      ], 64)) : n("", !0)
                    ], 64))
                  ]))), 128))
                ]))), 128))
              ], 8, M)) : n("", !0),
              e.$slots.tfoot ? (t(), o("tfoot", Q, [
                p(e.$slots, "tfoot")
              ])) : n("", !0)
            ])
          ])
        ], 64)) : (t(), o("table", R, [
          p(e.$slots, "default")
        ]))
      ])
    ], 6));
  }
});
export {
  oe as default
};
