import { defineComponent as r, openBlock as t, createElementBlock as o, normalizeClass as d, unref as s, normalizeStyle as m, renderSlot as f, createCommentVNode as u } from "vue";
import { Props as v } from "./index3.js";
import { useList as _ } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const y = {
  key: 0,
  class: "v-divider__text"
}, h = r({
  name: "VDivider"
}), S = /* @__PURE__ */ r({
  ...h,
  props: v,
  setup(i) {
    const l = i, { classes: n, styles: a } = _(l, "divider"), c = n(["vertical", "position"], "v-divider"), p = a([
      "color",
      "margin",
      "background",
      "fontColor",
      "height",
      "type"
    ]);
    return (e, k) => (t(), o("div", {
      role: "separator",
      class: d(s(c)),
      style: m(s(p))
    }, [
      !e.vertical || !e.$slots.default ? (t(), o("span", y, [
        f(e.$slots, "default")
      ])) : u("", !0)
    ], 6));
  }
});
export {
  S as default
};
