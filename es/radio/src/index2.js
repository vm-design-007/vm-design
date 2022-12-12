import { defineComponent as m, ref as V, computed as n, openBlock as i, createElementBlock as u, normalizeClass as g, unref as c, withDirectives as C, createElementVNode as p, isRef as k, vModelRadio as y, createCommentVNode as R, renderSlot as E, createTextVNode as G, toDisplayString as N, getCurrentInstance as P, inject as j } from "vue";
import { Props as I, Emits as B } from "./index3.js";
import { RadioGroupPropsKey as D } from "../../radio-group/src/index3.js";
const S = ["value", "disabled", "name"], T = {
  key: 0,
  class: "v-radio__circle"
}, q = { class: "v-radio__text" }, w = m({
  name: "VRadio"
}), U = /* @__PURE__ */ m({
  ...w,
  props: I,
  emits: B,
  setup(v, { emit: d }) {
    const o = v, a = V(null);
    (() => {
      const { parent: e } = P(), l = e.type.name;
      l && l === "VRadioGroup" && (a.value = j(D));
    })();
    const r = n(
      () => !!a.value
    ), b = () => {
      o.disabled || d("change", o.modelValue);
    }, t = n({
      get() {
        return r.value ? a.value.modelValue : o.modelValue;
      },
      set(e) {
        if (r.value)
          !a.value.disabled && a.value.changeEvent(e || "");
        else {
          if (o.disabled)
            return;
          d("change", e || ""), d("update:modelValue", e || "");
        }
      }
    }), _ = n(() => t.value === o.label), f = n(() => {
      var l;
      const { disabled: e } = o;
      return [
        "v-radio",
        {
          "v-radio__checked": _.value,
          "v-radio__margin": !a.value,
          "v-radio__disabled": e || ((l = a.value) == null ? void 0 : l.disabled)
        }
      ];
    });
    return (e, l) => {
      var s;
      return i(), u("label", {
        role: "radio",
        "aria-checked": "false",
        tabindex: "0",
        "aria-labelledby": "q25_radio1-label",
        "data-value": "True",
        class: g(c(f))
      }, [
        C(p("input", {
          "onUpdate:modelValue": l[0] || (l[0] = (h) => k(t) ? t.value = h : null),
          hidden: "",
          type: "radio",
          value: e.label,
          disabled: e.disabled,
          name: e.name,
          onChange: b
        }, null, 40, S), [
          [y, c(t)]
        ]),
        (s = a.value) != null && s.border ? R("", !0) : (i(), u("span", T)),
        p("span", q, [
          E(e.$slots, "default", {}, () => [
            G(N(e.label), 1)
          ])
        ])
      ], 2);
    };
  }
});
export {
  U as default
};
