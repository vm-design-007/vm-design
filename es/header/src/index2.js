import { defineComponent as e, openBlock as a, createElementBlock as l, normalizeStyle as p, unref as m, renderSlot as c } from "vue";
import { Props as i } from "./index3.js";
import { useList as d } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const f = e({
  name: "VHeader"
}), B = /* @__PURE__ */ e({
  ...f,
  props: i,
  setup(t) {
    const r = t, { styles: o } = d(r, "header"), s = o(["height", "padding"]);
    return (n, u) => (a(), l("header", {
      role: "banner",
      class: "v-header",
      style: p(m(s))
    }, [
      c(n.$slots, "default")
    ], 4));
  }
});
export {
  B as default
};
