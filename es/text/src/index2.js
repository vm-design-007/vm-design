import { defineComponent as i, computed as r, openBlock as _, createElementBlock as v, normalizeClass as m, unref as s, normalizeStyle as u, renderSlot as f } from "vue";
import { Props as g } from "./index3.js";
import { sizeChange as e } from "../../_utils/index3.js";
const h = i({
  name: "VText"
}), y = /* @__PURE__ */ i({
  ...h,
  props: g,
  setup(l) {
    const t = l, c = r(() => {
      const { type: o, block: n, bold: p, ellipsis: d, center: x } = t;
      return [
        "v-text",
        {
          [`v-text__${o}`]: o,
          "v-text__block": n,
          "v-text__bold": p,
          "v-text__center": x,
          "v-text__ellipsis": d
        }
      ];
    }), a = r(() => ({
      "--v-text-color": t.color,
      "--v-text-background": t.background,
      "--v-text-text-decoration": t.decoration,
      "--v-text-width": e(t.width),
      "--v-text-font-size": e(t.size),
      "--v-text-padding": e(t.padding),
      "--v-text-letter-spacing": e(t.spacing),
      "--v-text-line-height": e(t.lineHeight),
      "--v-text-text-indent": e(t.indent)
    }));
    return (o, n) => (_(), v("p", {
      class: m(s(c)),
      style: u(s(a))
    }, [
      f(o.$slots, "default")
    ], 6));
  }
});
export {
  y as default
};
