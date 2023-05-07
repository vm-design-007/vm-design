import { defineComponent as e, openBlock as a, createElementBlock as m, normalizeClass as d, unref as t, normalizeStyle as f, renderSlot as u } from "vue";
import { Props as _ } from "./index3.js";
import { useList as y } from "../../_hooks/use-list/index.js";
import { useGlobal as g } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const b = e({
  name: "VText"
}), P = /* @__PURE__ */ e({
  ...b,
  props: _,
  setup(o) {
    const s = o, { getProp: r } = g(s), { classes: n, styles: l } = y(r(["type"]), "text"), i = n(["type", "block", "bold", "ellipsis", "center"], "v-text"), c = l([
      "color",
      "background",
      "decoration",
      "width",
      "size",
      "padding",
      "spacing",
      "lineHeight",
      "indent"
    ]);
    return (p, k) => (a(), m("p", {
      class: d(t(i)),
      style: f(t(c))
    }, [
      u(p.$slots, "default")
    ], 6));
  }
});
export {
  P as default
};
