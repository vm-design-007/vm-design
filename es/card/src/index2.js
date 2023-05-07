import { defineComponent as m, ref as y, openBlock as o, createBlock as a, Transition as k, withCtx as B, createElementBlock as n, normalizeClass as d, unref as r, normalizeStyle as V, createElementVNode as c, renderSlot as i, createTextVNode as b, toDisplayString as g, createCommentVNode as s } from "vue";
import { Props as S } from "./index3.js";
import { useList as w } from "../../_hooks/use-list/index.js";
import { useRun as L } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VCloseBtn as N } from "../../close-btn/index.js";
const $ = {
  key: 0,
  role: "heading",
  class: "v-card__header"
}, z = {
  role: "none",
  class: "v-card__body"
}, E = m({
  name: "VCard"
}), G = /* @__PURE__ */ m({
  ...E,
  props: S,
  setup(u) {
    const l = u, t = y(!0), { run: p } = L(), { classes: f, styles: _ } = w(l, "card"), h = f(["round", "shadow"], "v-card"), v = _(["padding", "borderColor", "background", "titleColor"]), C = () => {
      t.value = !1, p(l.onClose, t.value);
    };
    return (e, T) => (o(), a(k, { name: "v-card" }, {
      default: B(() => [
        t.value ? (o(), n("div", {
          key: 0,
          class: d(r(h)),
          style: V(r(v))
        }, [
          e.$slots.header || e.title ? (o(), n("header", $, [
            c("span", {
              class: d(["v-card__title", { "v-card__title-bold": e.titleBold }])
            }, [
              i(e.$slots, "header", {}, () => [
                b(g(e.title), 1)
              ])
            ], 2),
            e.close ? (o(), a(r(N), {
              key: 0,
              "on-click": C
            })) : s("", !0)
          ])) : s("", !0),
          c("main", z, [
            i(e.$slots, "default")
          ])
        ], 6)) : s("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  G as default
};
