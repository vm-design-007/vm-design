import { defineComponent as r, computed as a, openBlock as m, createElementBlock as s, normalizeStyle as i, unref as p, renderSlot as l } from "vue";
import { Props as c } from "./index3.js";
import { sizeChange as d } from "../../_utils/index3.js";
const y = /* @__PURE__ */ r({
  __name: "main",
  props: c,
  setup(n) {
    const o = n, t = a(() => {
      const { padding: e } = o;
      return {
        "--v-main-padding": d(e)
      };
    });
    return (e, f) => (m(), s("main", {
      role: "main",
      class: "v-main",
      style: i(p(t))
    }, [
      l(e.$slots, "default")
    ], 4));
  }
});
export {
  y as default
};
