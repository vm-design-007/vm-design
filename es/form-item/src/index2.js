import { defineComponent as a, inject as u, computed as r, openBlock as s, createElementBlock as l, normalizeClass as p, unref as o, normalizeStyle as b, toDisplayString as n, createCommentVNode as m, createElementVNode as h, renderSlot as v, createVNode as y, Transition as k, withCtx as C } from "vue";
import { Props as V } from "./index3.js";
import { isString as g } from "../../_utils/is/index.js";
import { FORM_PROVIDE_KEY as E } from "../../form/src/index3.js";
const P = {
  key: 0,
  class: "v-form-item__label"
}, S = { class: "v-form-item__content" }, M = {
  key: 0,
  class: "v-form-item__error"
}, N = a({
  name: "VFormItem"
}), F = /* @__PURE__ */ a({
  ...N,
  props: V,
  setup(c) {
    const _ = c, e = u(E, null), i = r(() => {
      const t = e && e.childrenCheckResult[_.name];
      return g(t) ? t : !1;
    }), d = r(() => ({
      "--form-item-label-width": e && e.labelWidth
    })), f = r(() => [
      "v-form-item",
      {
        [`v-form-item__label-${e == null ? void 0 : e.labelPosition}`]: e == null ? void 0 : e.labelPosition
      }
    ]);
    return (t, R) => (s(), l("div", {
      class: p(o(f)),
      style: b(o(d))
    }, [
      t.label ? (s(), l("label", P, n(t.label), 1)) : m("", !0),
      h("div", S, [
        v(t.$slots, "default"),
        y(k, { name: "v-form-item__err-transition" }, {
          default: C(() => [
            o(i) ? (s(), l("div", M, n(o(i)), 1)) : m("", !0)
          ]),
          _: 1
        })
      ])
    ], 6));
  }
});
export {
  F as default
};
