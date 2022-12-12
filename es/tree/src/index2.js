import { defineComponent as a, computed as _, openBlock as t, createElementBlock as o, Fragment as i, renderList as m, unref as u, createElementVNode as f, normalizeStyle as v, toDisplayString as k } from "vue";
import { Props as g } from "./index3.js";
import { treeToFlat as h, treeAddLevel as y } from "../../_utils/index7.js";
const C = { class: "v-tree" }, L = ["onClick"], b = a({
  name: "VTree"
}), F = /* @__PURE__ */ a({
  ...b,
  props: g,
  setup(s) {
    const c = s, d = _(() => h(y(c.data))), p = (r, n) => {
      console.log(r, n);
    };
    return (r, n) => (t(), o("div", C, [
      (t(!0), o(i, null, m(u(d), (e, l) => (t(), o("div", {
        key: l,
        class: "v-tree__data",
        onClick: (x) => p(e, l)
      }, [
        f("div", {
          class: "v-tree__label",
          style: v({ paddingLeft: 25 * (e.level - 1) + "px" })
        }, k(e.label), 5)
      ], 8, L))), 128))
    ]));
  }
});
export {
  F as default
};
