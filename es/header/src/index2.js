import { defineComponent as o, computed as d, openBlock as p, createElementBlock as c, normalizeStyle as l, unref as i, renderSlot as m } from "vue";
import { Props as h } from "./index3.js";
import { sizeChange as r } from "../../_utils/index3.js";
const f = o({
  name: "VHeader"
}), v = /* @__PURE__ */ o({
  ...f,
  props: h,
  setup(n) {
    const a = n, s = d(() => {
      const { height: e, padding: t } = a;
      return {
        "--v-header-height": r(e),
        "--v-header-padding": r(t)
      };
    });
    return (e, t) => (p(), c("header", {
      class: "v-header",
      style: l(i(s))
    }, [
      m(e.$slots, "default")
    ], 4));
  }
});
export {
  v as default
};
