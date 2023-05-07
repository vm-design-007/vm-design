import { defineComponent as _, inject as g, computed as i, reactive as D, openBlock as u, createElementBlock as p, normalizeClass as E, unref as n, withDirectives as P, createElementVNode as f, isRef as C, vModelRadio as N, createCommentVNode as S, renderSlot as y, createTextVNode as B, toDisplayString as I } from "vue";
import { Props as O } from "./index3.js";
import { isString as T, isNumber as U, isBoolean as j } from "../../_utils/is/index.js";
import { EMIT_UPDATE as b } from "../../_tokens/emits/index.js";
import { useList as A } from "../../_hooks/use-list/index.js";
import { useRun as L } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { RADIO_GROUP_PROPS_kEY as M } from "../../radio-group/src/index3.js";
const w = ["value", "disabled", "name"], z = {
  key: 0,
  class: "v-radio__circle"
}, G = { class: "v-radio__text" }, Y = _({
  name: "VRadio"
}), X = /* @__PURE__ */ _({
  ...Y,
  props: O,
  emits: {
    [b]: (t) => T(t) || U(t) || j(t)
  },
  setup(t, { emit: h }) {
    const s = t, { run: r } = L(), o = g(M, null), v = i(() => a.value === s.label), l = i(
      () => !!(o && o.disabled)
    ), d = i(() => s.disabled || l.value), a = i({
      get: () => o && o.modelValue || s.modelValue,
      set: (e) => {
        if (o && !l.value) {
          r(o.changeEvent, e);
          return;
        }
        d.value || (h(b, e), r(s.onChange, e));
      }
    }), { classes: k } = A(
      D({
        checked: v,
        disabled: d
      }),
      "radio"
    ), V = k(["checked", "disabled"], "v-radio");
    return (e, c) => {
      var m;
      return u(), p("label", {
        role: "radio",
        "aria-checked": "false",
        tabindex: "0",
        class: E(n(V))
      }, [
        P(f("input", {
          "onUpdate:modelValue": c[0] || (c[0] = (R) => C(a) ? a.value = R : null),
          hidden: "",
          type: "radio",
          value: e.label,
          disabled: e.disabled,
          name: e.name
        }, null, 8, w), [
          [N, n(a)]
        ]),
        (m = n(o)) != null && m.background ? S("", !0) : (u(), p("span", z)),
        f("span", G, [
          y(e.$slots, "default", {}, () => [
            B(I(e.label), 1)
          ])
        ])
      ], 2);
    };
  }
});
export {
  X as default
};
