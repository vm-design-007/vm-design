import { defineComponent as p, computed as i, openBlock as r, createElementBlock as y, normalizeClass as C, unref as n, normalizeStyle as b, createBlock as l, withCtx as a, renderSlot as s, createCommentVNode as c } from "vue";
import { Props as _, Emits as $ } from "./index3.js";
import { VSvgIcon as f } from "../../svg-icon/index.js";
import { sizeChange as v } from "../../_utils/index3.js";
const g = ["href", "target"], L = p({
  name: "VLink"
}), w = /* @__PURE__ */ p({
  ...L,
  props: _,
  emits: $,
  setup(m, { emit: k }) {
    const t = m, u = (e) => {
      if (t.prohibit || t.noLink) {
        e.preventDefault();
        return;
      }
      k("click", e);
    }, d = i(() => {
      const { type: e, state: o, prohibit: z, noCopy: I } = t;
      return [
        "v-link",
        {
          [`v-link__${o}`]: o,
          [`v-link__${e}`]: e,
          "v-link__prohibit": z,
          "v-link__no-copy": I
        }
      ];
    }), h = i(() => {
      const { size: e, color: o } = t;
      return {
        color: o,
        fontSize: v(e)
      };
    });
    return (e, o) => (r(), y("a", {
      role: "link",
      class: C(n(d)),
      style: b(n(h)),
      href: e.href,
      target: e.target,
      onClick: u
    }, [
      e.$slots.beforeIcon || e.beforeIcon ? (r(), l(n(f), {
        key: 0,
        icon: e.beforeIcon,
        size: e.size || 16
      }, {
        default: a(() => [
          s(e.$slots, "beforeIcon")
        ]),
        _: 3
      }, 8, ["icon", "size"])) : c("", !0),
      s(e.$slots, "default"),
      e.$slots.afterIcon || e.afterIcon ? (r(), l(n(f), {
        key: 1,
        icon: e.afterIcon,
        size: e.size
      }, {
        default: a(() => [
          s(e.$slots, "afterIcon")
        ]),
        _: 3
      }, 8, ["icon", "size"])) : c("", !0)
    ], 14, g));
  }
});
export {
  w as default
};
