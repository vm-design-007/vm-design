import { defineComponent as e, openBlock as c, createElementBlock as p, normalizeClass as m, unref as t, normalizeStyle as d, renderSlot as f, createCommentVNode as u } from "vue";
import { Props as _ } from "./index3.js";
import { useList as y } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const b = ["v-content"], k = e({
  name: "VTooltip"
}), B = /* @__PURE__ */ e({
  ...k,
  props: _,
  setup(s) {
    const n = s, { classes: r, styles: l } = y(n, "tooltip"), i = r(
      ["position", "state", "disabled", "bold", "noArrow", "bright"],
      "v-tooltip"
    ), a = l(["background", "fontColor"]);
    return (o, v) => o.$slots.default ? (c(), p("div", {
      key: 0,
      role: "tooltip",
      "v-content": o.content,
      class: m(t(i)),
      style: d(t(a))
    }, [
      f(o.$slots, "default")
    ], 14, b)) : u("", !0);
  }
});
export {
  B as default
};
