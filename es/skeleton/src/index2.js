import { defineComponent as a, computed as s, useSlots as p, unref as l, openBlock as u, createElementBlock as d, Fragment as _, renderList as k, mergeProps as f, renderSlot as v } from "vue";
import { Props as g } from "./index3.js";
const y = a({
  name: "VSkeleton"
}), B = /* @__PURE__ */ a({
  ...y,
  props: g,
  setup(c) {
    const r = c, i = s(() => {
      const { rounded: e, animated: n, circled: o, size: t } = r;
      return [
        "v-skeleton",
        {
          "v-skeleton__rounded": e,
          "v-skeleton__animated": n,
          "v-skeleton__circled": o,
          [`v-skeleton__${t}`]: t
        }
      ];
    }), m = s(() => p().default ? r.loading === !0 : !0);
    return (e, n) => l(m) ? (u(!0), d(_, { key: 0 }, k(e.rows, (o, t) => (u(), d("div", f({
      key: t,
      class: l(i)
    }, e.$attrs), null, 16))), 128)) : v(e.$slots, "default", { key: 1 });
  }
});
export {
  B as default
};
