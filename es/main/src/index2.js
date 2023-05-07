import { defineComponent as s, openBlock as m, createElementBlock as i, normalizeStyle as a, unref as p, renderSlot as l } from "vue";
import { Props as c } from "./index3.js";
import { useList as f } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const L = /* @__PURE__ */ s({
  __name: "main",
  props: c,
  setup(e) {
    const t = e, { styles: o } = f(t, "main"), n = o(["padding"]);
    return (r, u) => (m(), i("main", {
      role: "main",
      class: "v-main",
      style: a(p(n))
    }, [
      l(r.$slots, "default")
    ], 4));
  }
});
export {
  L as default
};
