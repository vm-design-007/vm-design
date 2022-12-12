import { defineComponent as u, ref as p, watch as V, computed as _, unref as r, openBlock as a, createElementBlock as n, createElementVNode as C, Fragment as h, renderList as k, normalizeClass as y, createVNode as z, createBlock as S, withCtx as g, createTextVNode as B, toDisplayString as M, createCommentVNode as N } from "vue";
import { Props as w, Emits as E } from "./index3.js";
import { VSvgIcon as I } from "../../svg-icon/index.js";
import T from "../../_components/svg/index12.js";
import { VText as $ } from "../../text/index.js";
const A = {
  class: "v-rate",
  role: "slider"
}, D = { class: "v-rate__list" }, F = ["onMouseover", "onClick"], L = u({
  name: "VRate"
}), J = /* @__PURE__ */ u({
  ...L,
  props: w,
  emits: E,
  setup(c, { emit: s }) {
    const o = c, t = p(o.modelValue), i = (e) => {
      o.readonly || (t.value = e);
    }, m = () => {
      o.readonly || (t.value = o.modelValue);
    }, d = (e) => {
      o.readonly || (t.value = e, s("update:modelValue", e), s("change", e));
    };
    V(
      () => o.modelValue,
      () => {
        t.value = o.modelValue;
      }
    );
    const v = _(() => o.textArr[r(t) - 1]);
    return (e, P) => (a(), n("div", A, [
      C("div", D, [
        (a(!0), n(h, null, k(e.max, (R, l) => (a(), n("div", {
          key: l,
          class: y(["v-rate__star", { "v-rate__star-readonly": e.readonly }]),
          onMouseout: m,
          onMouseover: (f) => i(l + 1),
          onClick: (f) => d(l + 1)
        }, [
          z(r(I), {
            size: e.size,
            icon: e.icon || r(T),
            color: t.value > l ? e.effectColor : e.invalidColor
          }, null, 8, ["size", "icon", "color"])
        ], 42, F))), 128))
      ]),
      e.textShow ? (a(), S(r($), {
        key: 0,
        size: e.textSize,
        color: e.textColor
      }, {
        default: g(() => [
          B(M(r(v)), 1)
        ]),
        _: 1
      }, 8, ["size", "color"])) : N("", !0)
    ]));
  }
});
export {
  J as default
};
