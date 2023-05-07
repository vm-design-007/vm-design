import { defineComponent as n, computed as m, useSlots as p, unref as o, openBlock as s, createElementBlock as r, Fragment as d, renderList as f, normalizeClass as k, renderSlot as _ } from "vue";
import { Props as y } from "./index3.js";
import { useList as L } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const S = n({
  name: "VSkeleton"
}), w = /* @__PURE__ */ n({
  ...S,
  props: y,
  setup(l) {
    const t = l, { classes: u } = L(t, "skeleton"), a = u(["round", "animated", "size"], "v-skeleton"), i = m(() => p().default ? t.loading === !0 : !0);
    return (e, g) => o(i) ? (s(!0), r(d, { key: 0 }, f(e.rows, (c) => (s(), r("div", {
      key: c,
      role: "section",
      class: k(o(a))
    }, null, 2))), 128)) : _(e.$slots, "default", { key: 1 });
  }
});
export {
  w as default
};
