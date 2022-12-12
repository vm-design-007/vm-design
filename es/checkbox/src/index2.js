import { defineComponent as p, ref as _, computed as s, openBlock as n, createElementBlock as c, normalizeClass as x, unref as d, withDirectives as y, createElementVNode as i, isRef as V, vModelCheckbox as g, createCommentVNode as b, renderSlot as C, Fragment as G, createTextVNode as E, toDisplayString as N, getCurrentInstance as j, inject as I } from "vue";
import { Props as P, Emits as A } from "./index3.js";
import { checkboxGroupPropsKey as B } from "../../checkbox-group/src/index3.js";
const D = ["value"], S = {
  key: 0,
  class: "v-checkbox__box"
}, $ = { class: "v-checkbox__text" }, w = p({
  name: "VCheckbox"
}), M = /* @__PURE__ */ p({
  ...w,
  props: P,
  emits: A,
  setup(m, { emit: v }) {
    const o = m, l = _(null);
    (() => {
      const { parent: e } = j(), t = e.type.name;
      t && t === "VCheckboxGroup" && (l.value = I(B));
    })();
    const u = s(() => !!l.value || !1), r = s({
      get() {
        var e;
        return u.value ? (e = l.value) == null ? void 0 : e.modelValue : o.modelValue;
      },
      set(e) {
        var t, a;
        if (u.value)
          !o.disabled && !((t = l.value) != null && t.disabled) && ((a = l.value) == null || a.changeEvent(e));
        else {
          if (o.disabled)
            return;
          v("update:modelValue", e);
        }
      }
    }), f = s(() => {
      const e = r.value;
      return Array.isArray(e) ? e.includes(o.label) : typeof e == "boolean" ? e : e === o.label;
    }), h = s(() => {
      var e, t;
      return [
        "v-checkbox",
        {
          "v-checkbox__selected": f.value,
          "v-checkbox__bordered": (e = l.value) == null ? void 0 : e.border,
          "v-checkbox__disabled": o.disabled || ((t = l.value) == null ? void 0 : t.disabled)
        }
      ];
    });
    return (e, t) => {
      var a;
      return n(), c("label", {
        role: "checkbox",
        "aria-checked": "false",
        tabindex: "0",
        "aria-labelledby": "chk1-label",
        class: x(d(h))
      }, [
        y(i("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (k) => V(r) ? r.value = k : null),
          type: "checkbox",
          class: "v-checkbox__input",
          hidden: "",
          value: e.label
        }, null, 8, D), [
          [g, d(r)]
        ]),
        (a = l.value) != null && a.border ? b("", !0) : (n(), c("span", S)),
        i("span", $, [
          C(e.$slots, "default"),
          e.$slots.default ? b("", !0) : (n(), c(G, { key: 0 }, [
            E(N(e.label), 1)
          ], 64))
        ])
      ], 2);
    };
  }
});
export {
  M as default
};
