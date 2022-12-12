import { defineComponent as r, computed as n, openBlock as u, createElementBlock as m, normalizeClass as v, unref as l, normalizeStyle as f, renderSlot as b, createCommentVNode as k } from "vue";
import { Props as g } from "./index3.js";
const h = ["v-content"], y = r({
  name: "VTooltip"
}), w = /* @__PURE__ */ r({
  ...y,
  props: g,
  setup(s) {
    const e = s, i = n(() => {
      const { position: o, state: t, disabled: c, bold: a, noArrow: _, bright: d } = e;
      return [
        "v-tooltip",
        {
          [`v-tooltip__${o}`]: o,
          [`v-tooltip__${t}`]: t,
          "v-tooltip__disabled ": c,
          "v-tooltip__bold": a,
          "v-tooltip__no-arrow": _,
          "v-tooltip__bright": d
        }
      ];
    }), p = n(() => {
      const { background: o, fontColor: t } = e;
      return {
        "--v-tooltip-background": o,
        "--v-tooltip-font-color": t
      };
    });
    return (o, t) => o.$slots.default ? (u(), m("div", {
      key: 0,
      "v-content": o.content,
      class: v(l(i)),
      style: f(l(p))
    }, [
      b(o.$slots, "default")
    ], 14, h)) : k("", !0);
  }
});
export {
  w as default
};
