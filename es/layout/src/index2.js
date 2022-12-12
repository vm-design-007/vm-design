import { defineComponent as s, useSlots as c, computed as u, openBlock as i, createElementBlock as f, normalizeClass as d, unref as m, renderSlot as p } from "vue";
import { Props as _ } from "./index3.js";
const v = s({
  name: "VLayout"
}), h = /* @__PURE__ */ s({
  ...v,
  props: _,
  setup(a) {
    const t = a, e = c(), l = u(() => t.direction === "vertical" ? !0 : t.direction === "horizontal" ? !1 : e && e.default ? e.default().some((r) => {
      const n = r.type.name;
      return n === "VHeader" || n === "VFooter";
    }) : !1);
    return (o, r) => (i(), f("section", {
      class: d([
        "v-layout",
        {
          "v-layout__vertical": m(l)
        }
      ])
    }, [
      p(o.$slots, "default")
    ], 2));
  }
});
export {
  h as default
};
