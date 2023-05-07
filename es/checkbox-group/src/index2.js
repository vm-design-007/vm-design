import { defineComponent as c, provide as f, reactive as _, toRefs as d, openBlock as g, createElementBlock as h, normalizeClass as k, unref as t, normalizeStyle as C, renderSlot as b } from "vue";
import { Props as x, CHECKBOX_GROUP_PROPS_KEY as y } from "./index3.js";
import { isArray as E } from "../../_utils/is/index.js";
import { EMIT_UPDATE as s } from "../../_tokens/emits/index.js";
import { useList as P } from "../../_hooks/use-list/index.js";
import { useRun as v } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const G = c({
  name: "VCheckboxGroup"
}), U = /* @__PURE__ */ c({
  ...G,
  props: x,
  emits: {
    [s]: (e) => E(e)
  },
  setup(e, { emit: n }) {
    const r = e, { run: p } = v(), { classes: a, styles: i } = P(r, "checkbox-group"), l = (o) => {
      n(s, o), p(r.onChange, o);
    };
    f(
      y,
      _({
        ...d(r),
        setChange: l
      })
    );
    const m = i(["columnGap", "rowGap"]), u = a(["background", "vertical", "size"], "v-checkbox-group");
    return (o, R) => (g(), h("div", {
      role: "group",
      "aria-label": "checkbox-group",
      class: k(t(u)),
      style: C(t(m))
    }, [
      b(o.$slots, "default")
    ], 6));
  }
});
export {
  U as default
};
