import { defineComponent as s, computed as t, useSlots as v, openBlock as n, createElementBlock as l, normalizeClass as i, normalizeStyle as d, unref as a, renderSlot as m, createCommentVNode as f } from "vue";
import { Props as _ } from "./index3.js";
const y = s({
  name: "VDivider"
}), S = /* @__PURE__ */ s({
  ...y,
  props: _,
  setup(c) {
    const o = c, p = t(() => !o.vertical && Boolean(v().default)), u = t(
      () => {
        const { color: e, margin: r } = o;
        return r ? {
          margin: `${r} 0`,
          borderColor: e
        } : { borderColor: e };
      }
    );
    return (e, r) => (n(), l("div", {
      role: "separator",
      class: i([
        "v-divider",
        { "v-divider__vertical": e.vertical, [`v-divider__${e.type}`]: e.type }
      ]),
      style: d(a(u))
    }, [
      a(p) ? (n(), l("span", {
        key: 0,
        class: i(["v-divider__text", `v-divider__text-${e.position}`]),
        style: d({
          background: e.background,
          color: e.fontColor
        })
      }, [
        m(e.$slots, "default")
      ], 6)) : f("", !0)
    ], 6));
  }
});
export {
  S as default
};
