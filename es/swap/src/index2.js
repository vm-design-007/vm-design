import { defineComponent as _, ref as i, computed as h, resolveComponent as g, openBlock as z, createElementBlock as x, createElementVNode as t, normalizeClass as o, unref as s, normalizeStyle as k, withDirectives as c, createVNode as m, vShow as u, toDisplayString as D } from "vue";
import { Props as F, Emits as E } from "./index3.js";
const q = { class: "v-swap" }, B = _({
  name: "VSwap"
}), P = /* @__PURE__ */ _({
  ...B,
  props: F,
  emits: E,
  setup(S, { emit: V }) {
    const e = S, v = i("\u{1F608}"), p = i("v-icon-sound-filling-fill"), r = i("v-icon-Daytimemode"), d = i("v-icon-zhankai"), f = i("v-icon-favorites");
    e.modelValue || (v.value = "\u{1F607}", p.value = "v-icon-sound-Mute1", r.value = "v-icon-nightmode", d.value = "v-icon-shouqi", f.value = "v-icon-favorites-fill");
    const y = () => {
      V("update:modelValue", !e.modelValue), V("change", !e.modelValue), e.modelValue || (v.value = "\u{1F608}", p.value = "v-icon-sound-filling-fill", r.value = "v-icon-Daytimemode", d.value = "v-icon-zhankai", f.value = "v-icon-favorites"), e.modelValue && (v.value = "\u{1F607}", p.value = "v-icon-sound-Mute1", r.value = "v-icon-nightmode", d.value = "v-icon-shouqi", f.value = "v-icon-favorites-fill");
    }, C = h(() => {
      const { modelValue: a, size: w } = e;
      return {
        right: a ? "0px" : {
          large: "65px",
          middle: "45px",
          small: "25px"
        }[w]
      };
    }), l = h(() => {
      const { size: a } = e;
      return [
        "v-swap-off",
        {
          [`v-swap-${a}`]: a
        }
      ];
    });
    return (a, w) => {
      const n = g("v-icon");
      return z(), x("div", q, [
        t("div", {
          class: o(s(l)),
          onClick: y
        }, [
          t("div", {
            style: k(s(C))
          }, [
            c(m(n, {
              class: o(s(l)),
              icon: p.value
            }, null, 8, ["class", "icon"]), [
              [u, e.type === "sound"]
            ]),
            t("div", {
              class: o([
                e.modelValue === !0 ? "sound-on VSswapClass" : "sound-off VSswapClass"
              ])
            }, [
              c(m(n, {
                class: o(s(l)),
                icon: r.value
              }, null, 8, ["class", "icon"]), [
                [u, e.type === "theme"]
              ])
            ], 2),
            c(m(n, {
              class: o(s(l)),
              icon: d.value
            }, null, 8, ["class", "icon"]), [
              [u, e.type === "flip"]
            ]),
            t("div", {
              class: o([
                e.modelValue === !0 ? "swap-on VSswapClass" : "swap-off VSswapClass"
              ])
            }, [
              c(m(n, {
                class: o(s(l)),
                icon: f.value
              }, null, 8, ["class", "icon"]), [
                [u, e.type === "favorites"]
              ])
            ], 2),
            c(t("div", {
              class: o([
                e.modelValue === !0 ? "swap-on VSswapClass" : "swap-off VSswapClass"
              ])
            }, D(v.value), 3), [
              [u, e.type === "rotate"]
            ])
          ], 4)
        ], 2)
      ]);
    };
  }
});
export {
  P as default
};
