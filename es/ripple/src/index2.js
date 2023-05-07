import { defineComponent as r, ref as d, openBlock as y, createElementBlock as _, normalizeStyle as v, unref as k, renderSlot as C, toRefs as R, reactive as E } from "vue";
import { Props as b } from "./index3.js";
import { useList as g } from "../../_hooks/use-list/index.js";
import { useRipples as h } from "../../_hooks/use-ripples/index.js";
import { useGlobal as B } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const L = r({
  name: "Ripple"
}), T = /* @__PURE__ */ r({
  ...L,
  props: b,
  setup(l) {
    const e = l, { getType: s, getProp: i } = B(e), { styles: n } = g(i(["type"], ["default"]), "ripple"), t = d(), a = n(["startOpacity", "endOpacity"], !1), c = (o) => {
      if (e.disabled)
        return;
      const { ripplesColor: p, duration: m } = R(e), f = E({
        duration: m.value,
        component: "v-ripple",
        className: "v-ripple__animation",
        type: s(),
        ripplesColor: p.value
      });
      if (t.value) {
        const { runRipples: u } = h(o, t.value, f);
        u();
      }
    };
    return (o, p) => (y(), _("div", {
      ref_key: "rippleEl",
      ref: t,
      class: "v-ripple",
      style: v(k(a)),
      onClick: c
    }, [
      C(o.$slots, "default")
    ], 4));
  }
});
export {
  T as default
};
