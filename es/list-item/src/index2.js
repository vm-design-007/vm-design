import { defineComponent as o, inject as m, computed as p, openBlock as a, createElementBlock as d, normalizeStyle as _, unref as u, createElementVNode as f, renderSlot as y } from "vue";
import { Props as k } from "./index3.js";
import { listPropsKey as v } from "../../list/src/index3.js";
const C = { class: "v-list-item__li" }, L = o({
  name: "VListItem"
}), j = /* @__PURE__ */ o({
  ...L,
  props: k,
  setup(r) {
    const s = r, l = m(v), n = p(() => {
      const { textColor: t, borderColor: e } = l, { background: c, color: i } = s;
      return {
        background: c,
        color: i || t,
        borderColor: e
      };
    });
    return (t, e) => (a(), d("div", {
      role: "listitem",
      class: "v-list-item",
      style: _(u(n))
    }, [
      f("li", C, [
        y(t.$slots, "default")
      ])
    ], 4));
  }
});
export {
  j as default
};
