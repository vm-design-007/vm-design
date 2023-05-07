import { defineComponent as e, inject as i, reactive as c, openBlock as m, createElementBlock as p, normalizeStyle as a, unref as u, renderSlot as d } from "vue";
import { Props as f } from "./index3.js";
import { LIST_PROPS_KEY as _ } from "../../list/src/index3.js";
import { useList as C } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const b = e({
  name: "VListItem"
}), P = /* @__PURE__ */ e({
  ...b,
  props: f,
  setup(r) {
    const t = r, o = i(_, null), { styles: l } = C(
      c({
        borderColor: o && o.borderColor,
        textColor: t.color || o && o.textColor,
        background: t.background
      }),
      "list-item"
    ), s = l(["textColor", "borderColor", "background"]);
    return (n, k) => (m(), p("li", {
      role: "listitem",
      class: "v-list-item",
      style: a(u(s))
    }, [
      d(n.$slots, "default")
    ], 4));
  }
});
export {
  P as default
};
