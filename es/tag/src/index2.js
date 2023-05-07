import { defineComponent as a, ref as g, openBlock as o, createBlock as r, Transition as C, withCtx as v, createElementBlock as b, normalizeClass as z, unref as t, normalizeStyle as I, createCommentVNode as n, renderSlot as h } from "vue";
import { Props as B } from "./index3.js";
import { VSvgIcon as c } from "../../svg-icon/index.js";
import { VCloseBtn as S } from "../../close-btn/index.js";
import { useList as V } from "../../_hooks/use-list/index.js";
import { useRun as L } from "../../_hooks/use-run/index.js";
import { useGlobal as _ } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const w = a({
  name: "VTag"
}), D = /* @__PURE__ */ a({
  ...w,
  props: B,
  setup(i) {
    const s = i, { getProp: m } = _(s), { run: u } = L(), { classes: p, styles: f } = V(m(["size", "type"]), "tag"), l = g(!0), d = p(["simple", "type", "size", "block", "round", "line"], "v-tag"), k = f(["color", "background"]), y = (e) => {
      l.value = !1, u(s.onClose, e);
    };
    return (e, P) => (o(), r(C, { name: "v-tag" }, {
      default: v(() => [
        l.value ? (o(), b("div", {
          key: 0,
          class: z(t(d)),
          style: I(t(k))
        }, [
          e.beforeIcon ? (o(), r(t(c), {
            key: 0,
            icon: e.beforeIcon
          }, null, 8, ["icon"])) : n("", !0),
          h(e.$slots, "default"),
          e.afterIcon ? (o(), r(t(c), {
            key: 1,
            icon: e.afterIcon
          }, null, 8, ["icon"])) : n("", !0),
          e.close ? (o(), r(t(S), {
            key: 2,
            size: 14,
            "on-click": y
          })) : n("", !0)
        ], 6)) : n("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  D as default
};
