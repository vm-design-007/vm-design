import { defineComponent as k, ref as S, computed as d, openBlock as t, createElementBlock as u, normalizeClass as m, unref as o, normalizeStyle as V, createBlock as v, withCtx as _, renderSlot as s, createCommentVNode as l, createElementVNode as g, createTextVNode as w, toDisplayString as B, withModifiers as E } from "vue";
import { Props as L, Emits as N } from "./index3.js";
import { VCloseBtn as A } from "../../close-btn/index.js";
import { VSvgIcon as D } from "../../svg-icon/index.js";
import { sizeChange as p } from "../../_utils/index3.js";
const M = {
  key: 0,
  class: "v-alert__title"
}, P = {
  key: 1,
  class: "v-alert__sub-title"
}, T = k({
  name: "VAlert"
}), J = /* @__PURE__ */ k({
  ...T,
  props: L,
  emits: N,
  setup(C, { emit: y }) {
    const n = C, f = S(!0), b = d(() => {
      const { type: e, bold: r, simple: i, center: a, round: c, fixed: I } = n;
      return [
        "v-alert",
        {
          [`v-alert__${e}`]: e,
          "v-alert__bold": r,
          "v-alert__simple": i,
          "v-alert__center": a,
          "v-alert__round": c,
          "v-alert__fixed": I
        }
      ];
    }), h = d(() => {
      const { overflow: e } = n;
      return [
        "v-alert__content",
        {
          [`v-alert__content-${e}`]: e
        }
      ];
    }), $ = d(() => {
      const { fontSize: e, color: r, background: i, titleSize: a, titleColor: c } = n;
      return {
        "--v-alert-color": r,
        "--v-alert-title-color": c,
        "--v-alert-background": i,
        "--v-alert-font-size": p(e),
        "--v-alert-title-size": p(a)
      };
    }), z = (e) => {
      f.value = !1, y("close-end", e);
    };
    return (e, r) => f.value ? (t(), u("div", {
      key: 0,
      role: "alert",
      class: m(o(b)),
      style: V(o($))
    }, [
      e.$slots.beforeIcon || e.beforeIcon ? (t(), v(o(D), {
        key: 0,
        icon: e.beforeIcon
      }, {
        default: _(() => [
          s(e.$slots, "beforeIcon")
        ]),
        _: 3
      }, 8, ["icon"])) : l("", !0),
      g("div", {
        class: m(o(h))
      }, [
        e.title ? (t(), u("div", M, [
          s(e.$slots, "title", {}, () => [
            w(B(e.title), 1)
          ])
        ])) : l("", !0),
        e.$slots.default ? (t(), u("div", P, [
          s(e.$slots, "default")
        ])) : l("", !0)
      ], 2),
      e.close ? (t(), v(o(A), {
        key: 1,
        icon: e.closeIcon,
        onClick: E(z, ["stop"])
      }, {
        default: _(() => [
          s(e.$slots, "closeIcon")
        ]),
        _: 3
      }, 8, ["icon", "onClick"])) : l("", !0)
    ], 6)) : l("", !0);
  }
});
export {
  J as default
};
