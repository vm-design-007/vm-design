import { defineComponent as y, ref as z, openBlock as r, createElementBlock as f, normalizeClass as v, createElementVNode as h, createBlock as t, unref as s, createCommentVNode as u, withKeys as g, renderSlot as B, createVNode as b, withCtx as E, createTextVNode as I } from "vue";
import { Props as S, Emits as N } from "./index3.js";
import { VSvgIcon as i } from "../../svg-icon/index.js";
import { VButton as $ } from "../../button/index.js";
import F from "../../_components/svg/index5.js";
import K from "../../_components/svg/index17.js";
import O from "../../_components/svg/index18.js";
const P = ["type", "max", "min", "maxlength", "value", "disabled", "readonly", "autofocus", "name", "placeholder", "onKeyup"], M = y({
  name: "VInput"
}), H = /* @__PURE__ */ y({
  ...M,
  props: S,
  emits: N,
  setup(V, { emit: p }) {
    const o = V, l = z(o.type), w = (e) => {
      p("update:modelValue", e.target.value), o.onChange && o.onChange(e.target.value);
    }, d = (e) => {
      o.onSearch && o.onSearch({ evt: e, value: o.modelValue });
    }, C = () => {
      o.disabled || p("update:modelValue", "");
    }, k = (e) => {
      const { search: n, enterSearch: a, onEnter: c } = o;
      n && a && d(e), c && c(e);
    }, m = (e) => {
      if (e === "down") {
        l.value = "text";
        return;
      }
      l.value = "password";
    };
    return (e, n) => (r(), f("div", {
      class: v(["v-input", { [`v-input__${e.size}`]: e.size }])
    }, [
      h("div", {
        class: v(["v-input__wrapper", { "v-input__disabled": e.disabled }])
      }, [
        e.icon ? (r(), t(s(i), {
          key: 0,
          class: "v-input__icon",
          icon: e.icon,
          size: 13
        }, null, 8, ["icon"])) : u("", !0),
        h("input", {
          class: "v-input__input",
          type: l.value,
          max: e.max,
          min: e.min,
          maxlength: e.maxLength,
          value: e.modelValue,
          disabled: e.disabled,
          readonly: e.readonly,
          autofocus: e.autofocus,
          name: e.name,
          placeholder: e.placeholder,
          onInput: w,
          onKeyup: g(k, ["enter"]),
          onBlur: n[0] || (n[0] = (...a) => e.onBlur && e.onBlur(...a)),
          onFocus: n[1] || (n[1] = (...a) => e.onFocus && e.onFocus(...a))
        }, null, 40, P),
        e.clear ? (r(), t(s(i), {
          key: 1,
          class: "v-input__clear-btn",
          icon: s(F),
          size: 14,
          onClick: C
        }, null, 8, ["icon"])) : u("", !0),
        e.type === "password" && e.showPassword ? (r(), t(s(i), {
          key: 2,
          class: "v-input__show-password",
          icon: l.value === "text" ? s(O) : s(K),
          size: 14,
          onMousedown: n[2] || (n[2] = (a) => m("down")),
          onMouseup: n[3] || (n[3] = (a) => m("up"))
        }, null, 8, ["icon"])) : u("", !0)
      ], 2),
      e.search ? (r(), f("div", {
        key: 0,
        class: "v-input__search",
        onClick: d
      }, [
        B(e.$slots, "searchBtn", {}, () => [
          b(s($), {
            type: "primary",
            size: e.size
          }, {
            default: E(() => [
              I("\u641C\u7D22")
            ]),
            _: 1
          }, 8, ["size"])
        ])
      ])) : u("", !0)
    ], 2));
  }
});
export {
  H as default
};
