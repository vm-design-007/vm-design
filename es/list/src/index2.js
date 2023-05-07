import { defineComponent as i, provide as f, openBlock as s, createElementBlock as o, normalizeClass as _, unref as l, normalizeStyle as u, renderSlot as t, createCommentVNode as a } from "vue";
import { Props as h, LIST_PROPS_KEY as y } from "./index3.js";
import { useList as z } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const C = {
  key: 0,
  class: "v-list__header"
}, L = {
  key: 1,
  class: "v-list__footer"
}, $ = i({
  name: "VList"
}), E = /* @__PURE__ */ i({
  ...$,
  props: h,
  setup(n) {
    const r = n;
    f(y, r);
    const { classes: c, styles: m } = z(r, "list"), p = m(["borderColor", "maxHeight", "zebraColor"]), d = c(["zebra", "center", "size"], "v-list");
    return (e, k) => (s(), o("ul", {
      role: "list",
      class: _(l(d)),
      style: u(l(p))
    }, [
      e.$slots.header ? (s(), o("header", C, [
        t(e.$slots, "header")
      ])) : a("", !0),
      t(e.$slots, "default"),
      e.$slots.footer ? (s(), o("footer", L, [
        t(e.$slots, "footer")
      ])) : a("", !0)
    ], 6));
  }
});
export {
  E as default
};
