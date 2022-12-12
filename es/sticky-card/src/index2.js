import { defineComponent as k, ref as h, computed as r, unref as t, openBlock as l, createElementBlock as d, normalizeStyle as C, renderSlot as i, createCommentVNode as g, createElementVNode as c, normalizeClass as _, withModifiers as p, toDisplayString as b } from "vue";
import { Props as $ } from "./index3.js";
import { sizeChange as x } from "../../_utils/index3.js";
const E = {
  key: 0,
  class: "v-sticky-card__source"
}, S = { class: "v-sticky-card__content" }, z = ["onClick"], L = { class: "v-sticky-card__option-left" }, T = ["onClick"], V = { class: "v-sticky-card__option-right" }, B = k({
  name: "VStickyCard"
}), H = /* @__PURE__ */ k({
  ...B,
  props: $,
  setup(u) {
    const n = u, s = h(n.open), a = () => {
      s.value = !t(s);
      const { openEnd: o, closeEnd: e } = n;
      t(s) ? o(!0) : e(!1);
    }, y = r(() => {
      const { openText: o, closeText: e } = n;
      return `${t(s) ? o : e}`;
    }), f = r(() => {
      const { background: o, openHeight: e, borderColor: v } = n;
      return {
        "--sticky-card-content-background": o,
        "--sticky-card-border-color": v,
        "--sticky-card-max-height": x(e)
      };
    }), m = r(() => [
      "v-sticky-card__box",
      {
        "v-sticky-card__box-open": t(s)
      }
    ]);
    return (o, e) => (l(), d("div", {
      class: "v-sticky-card",
      style: C(t(f))
    }, [
      o.$slots.source ? (l(), d("div", E, [
        i(o.$slots, "source")
      ])) : g("", !0),
      c("div", {
        class: _(t(m))
      }, [
        c("div", S, [
          i(o.$slots, "default")
        ])
      ], 2),
      c("div", {
        class: _([
          "v-sticky-card__option",
          { "v-sticky-card__option-open": s.value }
        ]),
        onClick: p(a, ["self"])
      }, [
        c("span", L, [
          i(o.$slots, "optionLeft")
        ]),
        c("span", {
          class: "v-sticky-card__option-text",
          onClick: p(a, ["self"])
        }, b(t(y)), 9, T),
        c("span", V, [
          i(o.$slots, "optionRight")
        ])
      ], 10, z)
    ], 4));
  }
});
export {
  H as default
};
