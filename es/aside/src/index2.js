import { defineComponent as s, computed as d, openBlock as i, createElementBlock as p, normalizeStyle as c, unref as l, renderSlot as m } from "vue";
import { Props as f } from "./index3.js";
import { sizeChange as o } from "../../_utils/index3.js";
const u = s({
  name: "VAside"
}), v = /* @__PURE__ */ s({
  ...u,
  props: f,
  setup(n) {
    const r = n, a = d(() => {
      const { width: e, padding: t } = r;
      return {
        "--v-aside-width": o(e),
        "--v-aside-padding": o(t)
      };
    });
    return (e, t) => (i(), p("aside", {
      class: "v-aside",
      style: c(l(a))
    }, [
      m(e.$slots, "default")
    ], 4));
  }
});
export {
  v as default
};
