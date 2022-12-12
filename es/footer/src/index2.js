import { defineComponent as r, computed as a, openBlock as c, createElementBlock as f, normalizeStyle as l, unref as i, renderSlot as m } from "vue";
import { Props as d } from "./index3.js";
import { sizeChange as t } from "../../_utils/index3.js";
const u = r({
  name: "VFooter"
}), v = /* @__PURE__ */ r({
  ...u,
  props: d,
  setup(n) {
    const s = n, p = a(() => {
      const { height: e, padding: o } = s;
      return {
        "--v-footer-height": t(e),
        "--v-footer-padding": t(o)
      };
    });
    return (e, o) => (c(), f("footer", {
      class: "v-footer",
      style: l(i(p))
    }, [
      m(e.$slots, "default")
    ], 4));
  }
});
export {
  v as default
};
