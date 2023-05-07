import { defineComponent as e, inject as u, computed as c, provide as l, openBlock as m, createElementBlock as a, normalizeClass as _, unref as d, renderSlot as f } from "vue";
import { Props as P, BUTTON_GROUP_PROPS_KEY as v } from "./index.js";
import { VM_GLOBAL_PROPS_KEY as z } from "../../vm-global/src/index.js";
import { useList as B } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const G = e({
  name: "VButtonGroup"
}), j = /* @__PURE__ */ e({
  ...G,
  props: P,
  setup(r) {
    const o = r, { classes: s } = B(o, "button-group"), t = u(z, null), n = c(() => o.size || t && t.size || "middle");
    l(v, n.value);
    const p = s(["direction", "size"], "v-button-group");
    return (i, O) => (m(), a("div", {
      role: "group",
      class: _(d(p))
    }, [
      f(i.$slots, "default")
    ], 2));
  }
});
export {
  j as default
};
