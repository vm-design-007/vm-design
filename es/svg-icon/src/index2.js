import { defineComponent as n, computed as l, openBlock as t, createElementBlock as m, normalizeStyle as a, unref as p, createBlock as d, resolveDynamicComponent as f, renderSlot as u } from "vue";
import { Props as k, Emits as y } from "./index3.js";
import { sizeChange as C } from "../../_utils/index3.js";
const _ = n({
  name: "VSvgIcon"
}), h = /* @__PURE__ */ n({
  ..._,
  props: k,
  emits: y,
  setup(r, { emit: c }) {
    const o = r, s = (e) => {
      c("click", e);
    }, i = l(() => ({
      fontSize: C(o.size),
      color: o.color
    }));
    return (e, v) => (t(), m("i", {
      class: "v-svg-icon",
      style: a(p(i)),
      "text-indent": "middle",
      onClick: s
    }, [
      e.icon ? (t(), d(f(e.icon), { key: 0 })) : u(e.$slots, "default", { key: 1 })
    ], 4));
  }
});
export {
  h as default
};
