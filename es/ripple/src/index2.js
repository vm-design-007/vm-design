import { defineComponent as n, ref as f, computed as r, openBlock as _, createElementBlock as y, normalizeClass as v, unref as o, normalizeStyle as k, renderSlot as C } from "vue";
import { Props as R } from "./index3.js";
import { Ripples as S } from "../../_utils/index4.js";
const h = n({
  name: "Ripple"
}), V = /* @__PURE__ */ n({
  ...h,
  props: R,
  setup(s) {
    const p = s, l = f(null), i = r(() => {
      const { startOpacity: e, endOpacity: t } = p;
      return {
        "--v-ripple-start-opacity": e,
        "--v-ripple-end-opacity": t
      };
    }), c = r(() => {
      const { noSelect: e } = p;
      return ["v-ripple", { "v-ripple__select": e }];
    }), a = (e) => {
      const { type: t, ripplesColor: m, duration: u, disabled: d } = p;
      if (d)
        return;
      new S(
        e,
        l.value,
        {
          duration: u,
          component: "v-ripple",
          className: "v-ripple__animation",
          type: t,
          ripplesColor: m
        }
      ).clickRipples();
    };
    return (e, t) => (_(), y("div", {
      ref_key: "VRipple",
      ref: l,
      class: v(o(c)),
      style: k(o(i)),
      onClick: a
    }, [
      C(e.$slots, "default")
    ], 6));
  }
});
export {
  V as default
};
