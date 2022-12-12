import { defineComponent as h, computed as d, openBlock as s, createElementBlock as r, normalizeClass as t, toDisplayString as m, createCommentVNode as n, createElementVNode as p, unref as a, normalizeStyle as u, createBlock as f } from "vue";
import { Props as k, Emits as y } from "./index3.js";
import { VSvgIcon as g } from "../../svg-icon/index.js";
const z = h({
  name: "VSwitch"
}), E = /* @__PURE__ */ h({
  ...z,
  props: k,
  emits: y,
  setup(_, { emit: c }) {
    const o = _, v = () => {
      o.disabled || (c("update:modelValue", !o.modelValue), c("change", !o.modelValue));
    }, w = d(() => {
      const { modelValue: e, closeColor: l, openColor: i, size: C } = o;
      return {
        right: e ? "0px" : {
          large: "24px",
          middle: "20px",
          small: "16px"
        }[C],
        borderColor: e ? i : l
      };
    }), V = d(() => {
      const { size: e, modelValue: l, square: i } = o;
      return [
        "v-switch__input",
        {
          [`v-switch__${e}`]: e,
          "v-switch__close": !l,
          "v-switch__square": i
        }
      ];
    });
    return (e, l) => (s(), r("div", {
      role: "switch",
      class: t(["v-switch", { "v-switch__disabled": e.disabled }])
    }, [
      e.closeText ? (s(), r("span", {
        key: 0,
        class: t([
          "v-switch__right-text",
          { "v-switch__text-active": !e.modelValue }
        ])
      }, m(e.closeText), 3)) : n("", !0),
      p("div", {
        class: t(a(V)),
        style: u({ background: e.modelValue ? e.openColor : e.closeColor }),
        onClick: v
      }, [
        p("span", {
          class: "v-switch__roll",
          style: u(a(w))
        }, [
          e.icon ? (s(), f(a(g), {
            key: 0,
            icon: e.icon,
            size: 14
          }, null, 8, ["icon"])) : n("", !0)
        ], 4)
      ], 6),
      e.openText ? (s(), r("span", {
        key: 1,
        class: t(["v-switch__left-text", { "v-switch__text-active": e.modelValue }])
      }, m(e.openText), 3)) : n("", !0)
    ], 2));
  }
});
export {
  E as default
};
