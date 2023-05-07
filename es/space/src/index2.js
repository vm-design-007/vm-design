import { defineComponent as s, openBlock as p, createElementBlock as m, normalizeClass as i, unref as o, normalizeStyle as u, renderSlot as f, createCommentVNode as d } from "vue";
import { Props as _ } from "./index3.js";
import { useList as y } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const k = s({
  name: "VSpace"
}), B = /* @__PURE__ */ s({
  ...k,
  props: _,
  setup(t) {
    const r = t, { classes: n, styles: a } = y(r, "space"), l = n(["spacing", "nowrap", "vertical"], "v-space"), c = a(["rowGap", "columnGap"]);
    return (e, v) => e.$slots.default ? (p(), m("div", {
      key: 0,
      role: "none",
      class: i(o(l)),
      style: u(o(c))
    }, [
      f(e.$slots, "default")
    ], 6)) : d("", !0);
  }
});
export {
  B as default
};
