import { defineComponent as a, openBlock as t, createElementBlock as o, Fragment as _, renderList as v, unref as r, withDirectives as u, createElementVNode as f, normalizeStyle as h, createBlock as k, normalizeClass as C, createCommentVNode as g, createTextVNode as V, toDisplayString as y, vShow as D } from "vue";
import { Props as x } from "./index3.js";
import { VSvgIcon as S } from "../../svg-icon/index.js";
import T from "../../_svg/v-icon-chevron-right/index.js";
import { useTreeData as w } from "../../_hooks/use-tree-data/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const z = {
  role: "tree",
  class: "v-tree"
}, B = ["onClick"], I = a({
  name: "VTree"
}), q = /* @__PURE__ */ a({
  ...I,
  props: x,
  setup(l) {
    const s = l, { getItem: c, treeData: i, flatTreeData: m } = w(
      s.data
    ), p = (n) => {
      c(i.value, n.id);
    };
    return (n, N) => (t(), o("div", z, [
      (t(!0), o(_, null, v(r(m), (e, d) => (t(), o("div", {
        key: d,
        role: "treeitem",
        class: "v-tree__data"
      }, [
        u(f("div", {
          class: "v-tree__label",
          style: h({ paddingLeft: 30 * (e.level - 1) + 5 + "px" }),
          onClick: (b) => p(e)
        }, [
          e.isChild ? (t(), k(r(S), {
            key: 0,
            class: C({ "v-tree__icon-animation": e.open }),
            size: 17,
            icon: r(T)
          }, null, 8, ["class", "icon"])) : g("", !0),
          V(" " + y(e.label), 1)
        ], 12, B), [
          [D, e.show]
        ])
      ]))), 128))
    ]));
  }
});
export {
  q as default
};
