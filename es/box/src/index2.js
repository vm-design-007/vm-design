import { defineComponent as e, openBlock as l, createElementBlock as i, normalizeStyle as p, unref as a, renderSlot as c } from "vue";
import { Props as m } from "./index3.js";
import { useList as d } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const f = ["role"], u = e({
  name: "VBox"
}), x = /* @__PURE__ */ e({
  ...u,
  props: m,
  setup(t) {
    const r = t, { styles: s } = d(r, "box"), n = s(["padding", "width", "height", "background", "display"]);
    return (o, _) => (l(), i("div", {
      class: "v-box",
      role: o.role || "none",
      style: p(a(n))
    }, [
      c(o.$slots, "default")
    ], 12, f));
  }
});
export {
  x as default
};
