import { defineComponent as o, provide as t, openBlock as s, createElementBlock as n, renderSlot as p, createCommentVNode as a } from "vue";
import { Props as c, BREADCRUMB_PROPS_KEY as d } from "./index3.js";
const m = {
  key: 0,
  class: "v-breadcrumb"
}, l = o({
  name: "VBreadcrumb"
}), B = /* @__PURE__ */ o({
  ...l,
  props: c,
  setup(r) {
    return t(d, r), (e, _) => e.$slots.default ? (s(), n("div", m, [
      p(e.$slots, "default")
    ])) : a("", !0);
  }
});
export {
  B as default
};
