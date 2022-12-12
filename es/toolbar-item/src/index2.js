import { defineComponent as n, openBlock as o, createElementBlock as l, normalizeStyle as s, createBlock as t, unref as i, withCtx as c, resolveDynamicComponent as m, createCommentVNode as p, renderSlot as d } from "vue";
import { Props as f, Emits as k } from "./index3.js";
import { VSvgIcon as u } from "../../svg-icon/index.js";
const y = ["data-key"], _ = n({
  name: "VToolbarItem"
}), B = /* @__PURE__ */ n({
  ..._,
  props: f,
  emits: k,
  setup(C, { emit: r }) {
    const a = (e) => {
      r("click", e);
    };
    return (e, h) => (o(), l("span", {
      class: "v-toolbar-item",
      "data-key": e.dataKey,
      style: s({ color: e.color }),
      onClick: a
    }, [
      e.icon ? (o(), t(i(u), {
        key: 0,
        size: e.iconSize
      }, {
        default: c(() => [
          (o(), t(m(e.icon)))
        ]),
        _: 1
      }, 8, ["size"])) : p("", !0),
      d(e.$slots, "default")
    ], 12, y));
  }
});
export {
  B as default
};
