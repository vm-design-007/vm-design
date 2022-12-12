import { defineComponent as m, provide as u, computed as a, openBlock as r, createElementBlock as l, normalizeClass as h, unref as c, normalizeStyle as v, renderSlot as n, createCommentVNode as _ } from "vue";
import { Props as y, listPropsKey as z } from "./index3.js";
import { sizeChange as $ } from "../../_utils/index3.js";
const C = {
  key: 0,
  class: "v-list__header"
}, g = {
  key: 1,
  class: "v-list__footer"
}, k = m({
  name: "VList"
}), S = /* @__PURE__ */ m({
  ...k,
  props: y,
  setup(d) {
    const s = d;
    u(z, s);
    const p = a(() => {
      const { maxHeight: e, zebra: t, center: o, size: i } = s;
      return [
        "v-list",
        {
          [`v-list__${i}`]: i,
          "v-list__scroll": e,
          "v-list__zebra": t,
          "v-list__center": o
        }
      ];
    }), f = a(() => {
      const { maxHeight: e, borderColor: t, listStyle: o } = s;
      return {
        borderColor: t,
        maxHeight: $(e),
        listStyle: o
      };
    });
    return (e, t) => (r(), l("ul", {
      role: "list",
      class: h(c(p)),
      style: v(c(f))
    }, [
      e.$slots.header ? (r(), l("header", C, [
        n(e.$slots, "header")
      ])) : _("", !0),
      n(e.$slots, "default"),
      e.$slots.footer ? (r(), l("footer", g, [
        n(e.$slots, "footer")
      ])) : _("", !0)
    ], 6));
  }
});
export {
  S as default
};
