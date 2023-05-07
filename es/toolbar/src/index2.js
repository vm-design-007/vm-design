import { defineComponent as r, useSlots as d, openBlock as _, createElementBlock as C, normalizeClass as b, unref as s, normalizeStyle as k, renderSlot as L } from "vue";
import { Props as g } from "./index3.js";
import { TOOLBAR_ITEM_CLASS_NAME as h, TOOLBAR_INDEX as A } from "../../_tokens/key/index.js";
import { useList as S } from "../../_hooks/use-list/index.js";
import { useRun as x } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const y = r({
  name: "VToolbar"
}), I = /* @__PURE__ */ r({
  ...y,
  props: g,
  setup(n) {
    const e = n, l = d(), { run: i } = x(), { classes: a, styles: c } = S(e, "toolbar"), m = (t) => {
      if (!l.default)
        return;
      const o = t.target;
      if (o.className === h) {
        const f = o.getAttribute(A);
        i(e.onClick, f, t);
      }
    }, u = a(["size", "round", "fixed"], "v-toolbar"), p = c(["textColor", "background", "width", "height"]);
    return (t, o) => (_(), C("div", {
      role: "toolbar",
      class: b(s(u)),
      style: k(s(p)),
      onClick: m
    }, [
      L(t.$slots, "default")
    ], 6));
  }
});
export {
  I as default
};
