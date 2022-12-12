import { defineComponent as r, provide as t, openBlock as n, createElementBlock as s, normalizeStyle as a, unref as m, renderSlot as p, createCommentVNode as l } from "vue";
import { sizeChange as c } from "../../_utils/index3.js";
import { Props as d, BreadcrumbPropsKey as f } from "./index3.js";
const u = r({
  name: "VBreadcrumb"
}), B = /* @__PURE__ */ r({
  ...u,
  props: d,
  setup(o) {
    return t(f, o), (e, _) => e.$slots.default ? (n(), s("div", {
      key: 0,
      class: "v-breadcrumb",
      style: a({ fontSize: m(c)(e.fontSize) })
    }, [
      p(e.$slots, "default")
    ], 4)) : l("", !0);
  }
});
export {
  B as default
};
