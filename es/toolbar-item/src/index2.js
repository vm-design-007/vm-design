import { defineComponent as r, openBlock as n, createElementBlock as a, normalizeProps as u, unref as e, createBlock as f, createCommentVNode as d, renderSlot as _ } from "vue";
import { Props as k } from "./index3.js";
import { VSvgIcon as C } from "../../svg-icon/index.js";
import { TOOLBAR_ITEM_CLASS_NAME as E, TOOLBAR_INDEX as A } from "../../_tokens/key/index.js";
import { useList as B } from "../../_hooks/use-list/index.js";
import { useRun as L } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const S = r({
  name: "VToolbarItem"
}), h = /* @__PURE__ */ r({
  ...S,
  props: k,
  setup(s) {
    const t = s, { run: i } = L(), { styles: c } = B(t, "toolbar-item"), l = (o) => {
      i(t.onClick, o);
    }, m = c(["color"]), p = A;
    return (o, T) => (n(), a("span", u({
      class: e(E),
      [e(p) || ""]: o.index,
      style: e(m),
      onClick: l
    }), [
      o.icon ? (n(), f(e(C), {
        key: 0,
        size: o.iconSize,
        icon: o.icon
      }, null, 8, ["size", "icon"])) : d("", !0),
      _(o.$slots, "default")
    ], 16));
  }
});
export {
  h as default
};
