import { defineComponent as r, computed as u, openBlock as p, createElementBlock as c, normalizeClass as l, unref as a, renderSlot as i } from "vue";
import { Props as _ } from "./index3.js";
const m = r({
  name: "VButtonGroup"
}), v = /* @__PURE__ */ r({
  ...m,
  props: _,
  setup(e) {
    const n = e, s = u(() => {
      const { vertical: o, size: t } = n;
      return [
        "v-button-group",
        `v-button-group__${o ? "vertical" : "horizontal"}`,
        {
          [`v-button-group__${t}`]: t
        }
      ];
    });
    return (o, t) => (p(), c("div", {
      role: "group",
      class: l(a(s))
    }, [
      i(o.$slots, "default")
    ], 2));
  }
});
export {
  v as default
};
