import { defineComponent as c, computed as a, openBlock as m, createElementBlock as u, normalizeClass as i, unref as r, normalizeStyle as _, renderSlot as d, createCommentVNode as f } from "vue";
import { Props as v } from "./index3.js";
const y = c({
  name: "VSpace"
}), k = /* @__PURE__ */ c({
  ...y,
  props: v,
  setup(n) {
    const s = n, p = a(() => {
      const { wrap: e, vertical: t, spacing: o } = s;
      return [
        "v-space",
        {
          [`v-space__${o}`]: o,
          "v-space__wrap": e,
          "v-space__vertical": t
        }
      ];
    }), l = a(
      () => {
        const { rowGap: e, columnGap: t } = s;
        return { rowGap: e, columnGap: t };
      }
    );
    return (e, t) => e.$slots.default ? (m(), u("div", {
      key: 0,
      class: i(r(p)),
      style: _(r(l))
    }, [
      d(e.$slots, "default")
    ], 6)) : f("", !0);
  }
});
export {
  k as default
};
