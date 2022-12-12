import { defineComponent as a, reactive as d, toRefs as h, provide as f, computed as s, openBlock as b, createElementBlock as k, normalizeClass as v, unref as n, normalizeStyle as g, renderSlot as x } from "vue";
import { Props as G, Emits as y, checkboxGroupPropsKey as z } from "./index3.js";
import { sizeChange as p } from "../../_utils/index3.js";
const C = a({
  name: "VCheckboxGroup"
}), B = /* @__PURE__ */ a({
  ...C,
  props: G,
  emits: y,
  setup(l, { emit: t }) {
    const r = l, u = (o) => {
      t("update:modelValue", o), t("change", o);
    }, i = d({
      ...h(r),
      changeEvent: u
    });
    f(z, i);
    const m = s(() => {
      const { columnGap: o, rowGap: e } = r;
      return {
        columnGap: p(o),
        rowGap: p(e)
      };
    }), _ = s(() => {
      const { border: o, vertical: e, size: c } = r;
      return [
        "v-checkbox-group",
        {
          "v-checkbox-group__border": o,
          "v-checkbox-group__vertical": e,
          [`v-checkbox-group__${c}`]: c && o
        }
      ];
    });
    return (o, e) => (b(), k("div", {
      role: "group",
      class: v(n(_)),
      style: g(n(m))
    }, [
      x(o.$slots, "default")
    ], 6));
  }
});
export {
  B as default
};
