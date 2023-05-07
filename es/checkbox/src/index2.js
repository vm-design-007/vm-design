import { defineComponent as m, inject as y, computed as a, reactive as V, openBlock as r, createElementBlock as c, normalizeClass as g, unref as t, withDirectives as E, createElementVNode as d, isRef as P, vModelCheckbox as D, createCommentVNode as u, renderSlot as B, Fragment as R, createTextVNode as j, toDisplayString as A } from "vue";
import { Props as L } from "./index3.js";
import { isArray as N, isBoolean as O } from "../../_utils/is/index.js";
import { EMIT_UPDATE as b } from "../../_tokens/emits/index.js";
import { useList as S } from "../../_hooks/use-list/index.js";
import { useRun as T } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { CHECKBOX_GROUP_PROPS_KEY as U } from "../../checkbox-group/src/index3.js";
const w = ["value", "disabled"], I = {
  key: 0,
  class: "v-checkbox__box"
}, K = { class: "v-checkbox__text" }, M = m({
  name: "VCheckbox"
}), Q = /* @__PURE__ */ m({
  ...M,
  props: L,
  emits: {
    [b]: (n) => typeof n != "object"
  },
  setup(n, { emit: p }) {
    const s = n, { run: f } = T(), o = y(U, null), l = a({
      get: () => o && o.modelValue || s.modelValue,
      set: (e) => {
        if (!o) {
          p(b, e), f(s.onChange, e);
          return;
        }
        o.setChange(e);
      }
    }), h = a(() => {
      const e = l.value;
      return N(e) ? e.includes(s.label) : O(e) ? e : e === s.label;
    }), k = a(
      () => !!(o && o.disabled)
    ), _ = a(() => s.disabled || k.value), { classes: v } = S(
      V({
        checked: h,
        disabled: _
      }),
      "checkbox"
    ), x = v(["checked", "disabled"], "v-checkbox");
    return (e, i) => (r(), c("label", {
      role: "checkbox",
      "aria-checked": "false",
      tabindex: "0",
      "aria-labelledby": "chk1-label",
      class: g(t(x))
    }, [
      E(d("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (C) => P(l) ? l.value = C : null),
        type: "checkbox",
        class: "v-checkbox__input",
        hidden: "",
        value: e.label,
        disabled: e.disabled || !!t(o) && t(o).disabled
      }, null, 8, w), [
        [D, t(l)]
      ]),
      t(o) && t(o).background ? u("", !0) : (r(), c("span", I)),
      d("span", K, [
        B(e.$slots, "default"),
        !e.$slots.default && e.showLabel ? (r(), c(R, { key: 0 }, [
          j(A(e.label), 1)
        ], 64)) : u("", !0)
      ])
    ], 2));
  }
});
export {
  Q as default
};
