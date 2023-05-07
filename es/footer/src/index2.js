import { defineComponent as o, openBlock as p, createElementBlock as l, normalizeStyle as m, unref as c, renderSlot as f } from "vue";
import { Props as i } from "./index3.js";
import { useList as a } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const u = o({
  name: "VFooter"
}), B = /* @__PURE__ */ o({
  ...u,
  props: i,
  setup(t) {
    const e = t, { styles: r } = a(e, "footer"), s = r(["height", "padding"]);
    return (n, d) => (p(), l("footer", {
      class: "v-footer",
      style: m(c(s))
    }, [
      f(n.$slots, "default")
    ], 4));
  }
});
export {
  B as default
};
