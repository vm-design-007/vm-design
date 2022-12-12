import { defineComponent as u, ref as y, computed as b, openBlock as o, createElementBlock as h, normalizeClass as I, unref as r, normalizeStyle as B, createBlock as t, withCtx as c, resolveDynamicComponent as i, createCommentVNode as n, renderSlot as S, withModifiers as V } from "vue";
import { Props as w, Emits as z } from "./index3.js";
import { VSvgIcon as m } from "../../svg-icon/index.js";
import { VCloseBtn as $ } from "../../close-btn/index.js";
const E = u({
  name: "VTag"
}), P = /* @__PURE__ */ u({
  ...E,
  props: w,
  emits: z,
  setup(f, { emit: p }) {
    const d = f, s = y(!0), _ = b(() => {
      const { simple: e, type: l, size: a, block: v, round: g, line: C } = d;
      return [
        "v-tag",
        {
          [`v-tag__${l}`]: l,
          [`v-tag__${a}`]: a,
          "v-tag__simple": e,
          "v-tag__block": v,
          "v-tag__round": g,
          "v-tag__line": C
        }
      ];
    }), k = (e) => {
      s.value = !1, p("close-end", e);
    };
    return (e, l) => s.value ? (o(), h("div", {
      key: 0,
      class: I(r(_)),
      style: B({ background: e.background, color: e.color })
    }, [
      e.beforeIcon ? (o(), t(r(m), { key: 0 }, {
        default: c(() => [
          (o(), t(i(e.beforeIcon)))
        ]),
        _: 1
      })) : n("", !0),
      S(e.$slots, "default"),
      e.afterIcon ? (o(), t(r(m), { key: 1 }, {
        default: c(() => [
          (o(), t(i(e.afterIcon)))
        ]),
        _: 1
      })) : n("", !0),
      e.close ? (o(), t(r($), {
        key: 2,
        onClick: V(k, ["stop"])
      }, null, 8, ["onClick"])) : n("", !0)
    ], 6)) : n("", !0);
  }
});
export {
  P as default
};
