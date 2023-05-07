import { defineComponent as r, openBlock as u, createElementBlock as d, normalizeClass as f, unref as e, normalizeStyle as C, createVNode as t, withCtx as _, renderSlot as b } from "vue";
import { Props as k } from "./index3.js";
import { VSvgIcon as z } from "../../svg-icon/index.js";
import h from "../../_svg/v-icon-cross/index.js";
import { useList as v } from "../../_hooks/use-list/index.js";
import { useRun as y } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const V = r({
  name: "VCloseBtn"
}), R = /* @__PURE__ */ r({
  ...V,
  props: k,
  setup(n) {
    const s = n, { styles: l, classes: i } = v(s, "close-btn"), { run: c } = y(), m = (o) => {
      s.disabled || c(s.onClick, o);
    }, a = i(["round", "disabled"], "v-close-btn"), p = l(["color", "hoverColor"]);
    return (o, B) => (u(), d("div", {
      role: "button",
      class: f(e(a)),
      style: C(e(p)),
      onClick: m
    }, [
      t(e(z), {
        size: o.size,
        icon: o.icon
      }, {
        default: _(() => [
          b(o.$slots, "default", {}, () => [
            t(e(h))
          ])
        ]),
        _: 3
      }, 8, ["size", "icon"])
    ], 6));
  }
});
export {
  R as default
};
