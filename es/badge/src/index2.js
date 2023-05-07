import { defineComponent as l, computed as a, openBlock as c, createElementBlock as i, normalizeClass as y, unref as s, normalizeStyle as b, renderSlot as v, createVNode as h, Transition as k, withCtx as C, toDisplayString as S, createCommentVNode as w } from "vue";
import { Props as x } from "./index3.js";
import { isNumber as r } from "../../_utils/is/index.js";
import { useList as B } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const L = {
  key: 0,
  class: "v-badge__content"
}, N = l({
  name: "VBadge"
}), $ = /* @__PURE__ */ l({
  ...N,
  props: x,
  setup(m) {
    const n = m, { classes: u, styles: d } = B(n, "badge"), p = u(["type", "dot"], "v-badge"), f = d(["background", "color"]), _ = a(() => {
      const { dot: t, max: e, value: o } = n;
      return t ? "" : r(e) && r(o) && o > e ? e + "+" : o;
    }), g = a(() => {
      const { value: t, show: e } = n;
      return !r(t) && e ? !0 : e && r(t) && t > 0;
    });
    return (t, e) => (c(), i("div", {
      class: y(s(p)),
      style: b(s(f))
    }, [
      v(t.$slots, "default"),
      h(k, { name: "v-badge" }, {
        default: C(() => [
          s(g) ? (c(), i("sup", L, S(s(_)), 1)) : w("", !0)
        ]),
        _: 1
      })
    ], 6));
  }
});
export {
  $ as default
};
