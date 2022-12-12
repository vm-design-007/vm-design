import { defineComponent as c, reactive as _, toRefs as f, provide as v, computed as s, openBlock as g, createElementBlock as G, normalizeClass as h, unref as n, normalizeStyle as y, renderSlot as z } from "vue";
import { Props as R, Emits as C, RadioGroupPropsKey as E } from "./index3.js";
import { sizeChange as p } from "../../_utils/index3.js";
const b = c({
  name: "VRadioGroup"
}), L = /* @__PURE__ */ c({
  ...b,
  props: R,
  emits: C,
  setup(i, { emit: t }) {
    const e = i, l = (o) => {
      t("update:modelValue", o), t("change", o);
    }, d = _({
      ...f(e),
      changeEvent: l
    });
    v(E, d);
    const u = s(() => {
      const { vertical: o, border: r, size: a } = e;
      return [
        "v-radio-group",
        {
          "v-radio-group__vertical": o,
          "v-radio-group__border": r,
          [`v-radio-group__${a}`]: a && r
        }
      ];
    }), m = s(() => {
      const { columnGap: o, rowGap: r } = e;
      return {
        columnGap: p(o),
        rowGap: p(r)
      };
    });
    return (o, r) => (g(), G("div", {
      role: "radiogroup",
      class: h(n(u)),
      style: y(n(m))
    }, [
      z(o.$slots, "default")
    ], 6));
  }
});
export {
  L as default
};
