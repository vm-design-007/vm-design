import { defineComponent as k, computed as p, openBlock as u, createElementBlock as v, createBlock as z, unref as n, createCommentVNode as d, createElementVNode as I, createVNode as b, isRef as g, withCtx as N, normalizeClass as w } from "vue";
import { Props as T } from "./index3.js";
import B from "../../_svg/v-icon-chevron-left/index.js";
import D from "../../_svg/v-icon-chevron-right/index.js";
import E from "../../_svg/v-icon-chevron-up/index.js";
import M from "../../_svg/v-icon-chevron-down/index.js";
import { VInput as R } from "../../input/index.js";
import { VButton as a } from "../../button/index.js";
import { isNumber as s } from "../../_utils/is/index.js";
import { EMIT_UPDATE as V } from "../../_tokens/emits/index.js";
import { useRun as U } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const F = {
  role: "input",
  class: "v-input-number"
}, P = { class: "v-input-number__wrapper" }, A = k({
  name: "VInputNumber"
}), Z = /* @__PURE__ */ k({
  ...A,
  props: T,
  emits: {
    [V]: (t) => s(t)
  },
  setup(t, { emit: C }) {
    const r = t, { run: c } = U(), i = p({
      get: () => {
        const { modelValue: e, precision: o } = r;
        return s(e) ? Number(e.toFixed(s(o) ? o : 0)) : 0;
      },
      set: (e) => {
        C(V, Number(e));
      }
    }), f = p(() => {
      const { step: e, min: o } = r;
      return !o && !s(o) ? !1 : i.value - Math.abs(e) < o;
    }), y = p(() => {
      const { step: e, max: o } = r;
      return !o && !s(o) ? !1 : i.value + Math.abs(e) > o;
    }), l = (e) => {
      const { disabled: o, readonly: m, step: h } = r;
      if (o || m)
        return;
      c({
        minus: () => {
          i.value -= h;
        },
        plus: () => {
          i.value += h;
        }
      }[e]), c(r.onChange, i.value);
    };
    return (e, o) => (u(), v("div", F, [
      e.model === "button" ? (u(), z(n(a), {
        key: 0,
        class: "v-input-number__minus",
        type: e.buttonType || "primary",
        size: e.size,
        disabled: e.disabled || n(f),
        "before-icon": n(B),
        "on-click": () => l("minus")
      }, null, 8, ["type", "size", "disabled", "before-icon", "on-click"])) : d("", !0),
      I("div", P, [
        b(n(R), {
          modelValue: n(i),
          "onUpdate:modelValue": o[0] || (o[0] = (m) => g(i) ? i.value = m : null),
          type: "number",
          max: e.max,
          min: e.min,
          disabled: e.disabled,
          readonly: e.readonly,
          autofocus: e.autofocus,
          name: e.name,
          size: e.size,
          clear: e.clear,
          placeholder: e.placeholder,
          "on-blur": e.onBlur,
          "on-focus": e.onFocus,
          "on-input": e.onInput,
          "on-change": e.onChange
        }, {
          after: N(() => [
            e.model === "switch" ? (u(), v("div", {
              key: 0,
              class: w(["v-input-number__switch", `v-input-number__switch-${e.size}`])
            }, [
              b(n(a), {
                disabled: e.disabled || n(y),
                size: e.size,
                type: e.buttonType || "default",
                "before-icon": n(E),
                onclick: () => l("plus")
              }, null, 8, ["disabled", "size", "type", "before-icon", "onclick"]),
              b(n(a), {
                disabled: e.disabled || n(f),
                size: e.size,
                type: e.buttonType || "default",
                "before-icon": n(M),
                "on-click": () => l("minus")
              }, null, 8, ["disabled", "size", "type", "before-icon", "on-click"])
            ], 2)) : d("", !0)
          ]),
          _: 1
        }, 8, ["modelValue", "max", "min", "disabled", "readonly", "autofocus", "name", "size", "clear", "placeholder", "on-blur", "on-focus", "on-input", "on-change"])
      ]),
      e.model === "button" ? (u(), z(n(a), {
        key: 1,
        class: "v-input-number__plus",
        type: e.buttonType || "primary",
        size: e.size,
        disabled: e.disabled || n(y),
        "before-icon": n(D),
        "on-click": () => l("plus")
      }, null, 8, ["type", "size", "disabled", "before-icon", "on-click"])) : d("", !0)
    ]));
  }
});
export {
  Z as default
};
