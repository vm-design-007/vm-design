import { defineComponent as a, computed as c, openBlock as r, createElementBlock as t, normalizeClass as i, unref as p, renderSlot as s, createTextVNode as m, toDisplayString as u, createCommentVNode as _, createElementVNode as f, normalizeStyle as v } from "vue";
import { Props as h } from "./index3.js";
const y = {
  key: 0,
  class: "v-card__header"
}, C = a({
  name: "VCard"
}), g = /* @__PURE__ */ a({
  ...C,
  props: h,
  setup(d) {
    const n = d, l = c(() => {
      const { round: e, shadow: o } = n;
      return [
        "v-card",
        {
          "v-card__round": e,
          [`v-card__shadow-${o}`]: o
        }
      ];
    });
    return (e, o) => (r(), t("div", {
      class: i(p(l))
    }, [
      e.$slots.header || e.title ? (r(), t("div", y, [
        s(e.$slots, "header", {}, () => [
          m(u(e.title), 1)
        ])
      ])) : _("", !0),
      f("div", {
        class: "v-card__body",
        style: v({ padding: e.padding })
      }, [
        s(e.$slots, "default")
      ], 4)
    ], 2));
  }
});
export {
  g as default
};
