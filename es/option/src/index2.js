import { defineComponent as c, useSlots as C, inject as i, openBlock as d, createElementBlock as p, normalizeClass as k, renderSlot as E, Fragment as S, createTextVNode as _, toDisplayString as R, createCommentVNode as V, toRefs as g } from "vue";
import { Props as h } from "./index3.js";
import { useRun as y } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { TRIGGER_CLOSE_KEY as L } from "../../trigger/src/index3.js";
import { SELECT_PROPS_TOKEN as O } from "../../select/src/index3.js";
const T = c({
  name: "VOption"
}), G = /* @__PURE__ */ c({
  ...T,
  props: h,
  setup(m) {
    const l = m, n = C(), { run: a } = y(), o = i(O, null), s = i(L, null), f = (e) => {
      if (!o || l.disabled)
        return;
      const { value: t, label: r } = g(l), u = n.default && n.default()[0].children || "", v = u || r.value || t.value, b = t.value || r.value || u;
      o && a(o.setValue, v, b, e), s && a(s.handelClose);
    };
    return (e, t) => e.$slots.default || e.label || e.value ? (d(), p("div", {
      key: 0,
      class: k(["v-option", { "v-option__disabled": e.disabled }]),
      onClick: f
    }, [
      e.$slots.default ? E(e.$slots, "default", { key: 0 }) : (d(), p(S, { key: 1 }, [
        _(R(e.label || e.value), 1)
      ], 64))
    ], 2)) : V("", !0);
  }
});
export {
  G as default
};
