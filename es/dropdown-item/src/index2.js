import { defineComponent as r, inject as i, openBlock as d, createElementBlock as p, normalizeClass as m, renderSlot as a } from "vue";
import { Props as c } from "./index3.js";
import { useRun as u } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { TRIGGER_CLOSE_KEY as f } from "../../trigger/src/index3.js";
const _ = r({
  name: "VDropdownItem"
}), I = /* @__PURE__ */ r({
  ..._,
  props: c,
  setup(l) {
    const e = l, { run: n } = u(), t = i(f, null), s = (o) => {
      e.disabled || (n(t && t.handelClose), n(e.onClick, o));
    };
    return (o, C) => (d(), p("div", {
      class: m([
        "v-dropdown-item",
        {
          "v-dropdown-item__disabled": o.disabled
        }
      ]),
      onClick: s
    }, [
      a(o.$slots, "default")
    ], 2));
  }
});
export {
  I as default
};
