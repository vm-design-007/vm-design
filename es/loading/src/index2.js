import { defineComponent as r, openBlock as t, createElementBlock as s, normalizeClass as f, unref as e, normalizeStyle as u, createVNode as n, withCtx as _, renderSlot as g, toDisplayString as y, createCommentVNode as i } from "vue";
import { Props as v } from "./index3.js";
import { VSvgIcon as k } from "../../svg-icon/index.js";
import L from "../../_svg/v-icon-loading-a/index.js";
import { useList as V } from "../../_hooks/use-list/index.js";
import "../../_hooks/use-message/index.js";
const C = {
  key: 0,
  class: "v-loading__title"
}, S = r({
  name: "VLoading"
}), A = /* @__PURE__ */ r({
  ...S,
  props: v,
  setup(l) {
    const a = l, { styles: c, classes: m } = V(a, "loading"), p = c(["background", "color"]), d = m(["fullscreen"], "v-loading");
    return (o, h) => o.visible ? (t(), s("div", {
      key: 0,
      class: f(e(d)),
      style: u(e(p))
    }, [
      n(e(k), {
        size: 20,
        class: "v-loading__animation",
        icon: o.icon
      }, {
        default: _(() => [
          g(o.$slots, "icon", {}, () => [
            n(e(L))
          ])
        ]),
        _: 3
      }, 8, ["icon"]),
      o.text ? (t(), s("span", C, y(o.text), 1)) : i("", !0)
    ], 6)) : i("", !0);
  }
});
export {
  A as default
};
