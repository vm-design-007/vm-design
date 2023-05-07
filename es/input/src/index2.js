import { defineComponent as C, ref as V, computed as K, openBlock as l, createElementBlock as g, normalizeClass as M, unref as o, normalizeStyle as O, createElementVNode as k, renderSlot as d, createBlock as u, createCommentVNode as i, withDirectives as R, isRef as U, withKeys as $, vModelDynamic as A, createVNode as G, withCtx as j, createTextVNode as q, toDisplayString as H, toRefs as J } from "vue";
import { Props as Q } from "./index3.js";
import { VSvgIcon as c } from "../../svg-icon/index.js";
import { VButton as W } from "../../button/index.js";
import { VSwap as X } from "../../swap/index.js";
import Y from "../../_svg/v-icon-cross/index.js";
import Z from "../../_svg/v-icon-eye-off-outline/index.js";
import _ from "../../_svg/v-icon-eye-outline/index.js";
import { EMIT_UPDATE as z } from "../../_tokens/emits/index.js";
import { useInput as x } from "../../_hooks/use-input/index.js";
import { useList as ee } from "../../_hooks/use-list/index.js";
import { useRun as oe } from "../../_hooks/use-run/index.js";
import { useGlobal as ne } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { useModel as te } from "../../_hooks/use-model/index.js";
const se = { class: "v-input__wrapper" }, le = ["type", "max", "min", "maxlength", "disabled", "readonly", "autofocus", "autocomplete", "name", "placeholder", "onKeyup"], re = C({
  name: "VInput"
}), Ce = /* @__PURE__ */ C({
  ...re,
  props: Q,
  emits: {
    [z]: (p) => !!p
  },
  setup(p, { emit: f }) {
    const s = p, { run: v } = oe(), { getLang: I, getProp: B } = ne(s), { styles: S, classes: b } = ee(B(["size"]), "input"), { keyword: r } = te(s, "modelValue", f, z), { handleInput: y, handleClear: E, handleChange: h } = x(s, f, r), a = V(!1), m = V(s.type), P = K(() => I("input").value.search), w = (e) => {
      v(s.onSearch, r.value, e);
    }, L = (e) => {
      const { search: n, enterSearch: t, onEnter: F } = J(s);
      n.value && t.value && w(e), v(F.value, e.target.value, e);
    }, T = () => {
      if (a.value) {
        m.value = "text", a.value = !0;
        return;
      }
      m.value = "password", a.value = !1;
    }, D = S([
      "placeholderColor",
      "background",
      "textColor",
      "activeBackground",
      "activeBorderColor",
      "width",
      "height",
      "fontSize"
    ]), N = b(["size", "disabled"], "v-input");
    return (e, n) => (l(), g("div", {
      role: "input",
      class: M(o(N)),
      style: O(o(D))
    }, [
      k("div", se, [
        d(e.$slots, "before"),
        e.icon ? (l(), u(o(c), {
          key: 0,
          class: "v-input__icon",
          icon: e.icon,
          size: 13
        }, null, 8, ["icon"])) : i("", !0),
        R(k("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (t) => U(r) ? r.value = t : null),
          class: "v-input__input",
          type: m.value,
          max: e.max,
          min: e.min,
          maxlength: e.maxLength,
          disabled: e.disabled,
          readonly: e.readonly,
          autofocus: e.autofocus,
          autocomplete: e.autocomplete,
          name: e.name,
          placeholder: e.placeholder,
          onInput: n[1] || (n[1] = (...t) => o(y) && o(y)(...t)),
          onChange: n[2] || (n[2] = (...t) => o(h) && o(h)(...t)),
          onKeyup: $(L, ["enter"]),
          onBlur: n[3] || (n[3] = (...t) => e.onBlur && e.onBlur(...t)),
          onFocus: n[4] || (n[4] = (...t) => e.onFocus && e.onFocus(...t))
        }, null, 40, le), [
          [A, o(r)]
        ]),
        e.clear ? (l(), u(o(c), {
          key: 1,
          class: "v-input__clear-btn",
          icon: o(Y),
          size: 14,
          "on-click": o(E)
        }, null, 8, ["icon", "on-click"])) : i("", !0),
        e.afterIcon ? (l(), u(o(c), {
          key: 2,
          icon: e.afterIcon,
          size: 14
        }, null, 8, ["icon"])) : i("", !0),
        e.showPassword ? (l(), u(o(X), {
          key: 3,
          modelValue: a.value,
          "onUpdate:modelValue": n[5] || (n[5] = (t) => a.value = t),
          class: "v-input__show-password",
          type: "swap",
          "icon-on": o(_),
          "icon-off": o(Z),
          size: 14,
          "on-change": T
        }, null, 8, ["modelValue", "icon-on", "icon-off"])) : i("", !0),
        d(e.$slots, "after")
      ]),
      e.search ? (l(), g("div", {
        key: 0,
        class: "v-input__search",
        onClick: w
      }, [
        d(e.$slots, "searchBtn", {}, () => [
          G(o(W), {
            type: "primary",
            size: e.size
          }, {
            default: j(() => [
              q(H(o(P)), 1)
            ]),
            _: 1
          }, 8, ["size"])
        ])
      ])) : i("", !0)
    ], 6));
  }
});
export {
  Ce as default
};
