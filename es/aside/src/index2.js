import { defineComponent as e, openBlock as i, createElementBlock as a, normalizeStyle as p, unref as l, renderSlot as c } from "vue";
import { Props as d } from "./index3.js";
import { useList as m } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const f = e({
  name: "VAside"
}), B = /* @__PURE__ */ e({
  ...f,
  props: d,
  setup(t) {
    const o = t, { styles: s } = m(o, "aside"), r = s(["width", "padding", "background"]);
    return (n, u) => (i(), a("aside", {
      class: "v-aside",
      style: p(l(r))
    }, [
      c(n.$slots, "default")
    ], 4));
  }
});
export {
  B as default
};
