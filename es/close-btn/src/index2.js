import { defineComponent as t, computed as d, openBlock as r, createElementBlock as m, normalizeClass as p, unref as n, createVNode as s, withCtx as u, createBlock as f, resolveDynamicComponent as b, renderSlot as k } from "vue";
import { Props as C, Emits as _ } from "./index3.js";
import { VSvgIcon as v } from "../../svg-icon/index.js";
import V from "../../_components/svg/index5.js";
const z = t({
  name: "VCloseBtn"
}), S = /* @__PURE__ */ t({
  ...z,
  props: C,
  emits: _,
  setup(l, { emit: c }) {
    const e = l, i = (o) => {
      e.disabled || c("click", o);
    }, a = d(() => [
      {
        "v-close-btn": !e.disabled,
        "v-close-btn__round": e.round,
        "v-close-btn__disabled": e.disabled
      }
    ]);
    return (o, B) => (r(), m("div", {
      role: "button",
      class: p(n(a)),
      onClick: i
    }, [
      s(n(v), {
        size: o.size,
        color: o.color
      }, {
        default: u(() => [
          o.icon ? (r(), f(b(o.icon), { key: 0 })) : k(o.$slots, "default", { key: 1 }, () => [
            s(n(V))
          ])
        ]),
        _: 3
      }, 8, ["size", "color"])
    ], 2));
  }
});
export {
  S as default
};
