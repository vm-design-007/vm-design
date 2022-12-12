import { defineComponent as s, computed as d, openBlock as p, createElementBlock as u, normalizeStyle as i, unref as e, createVNode as r, withCtx as f, renderSlot as g, createElementVNode as y, toDisplayString as V, createCommentVNode as _ } from "vue";
import { Props as k, Emits as C } from "./index3.js";
import { VSvgIcon as S } from "../../svg-icon/index.js";
import v from "../../_components/svg/index8.js";
const h = s({
  name: "VLoading"
}), L = /* @__PURE__ */ s({
  ...h,
  props: k,
  emits: C,
  setup(l, { emit: a }) {
    const t = l, c = (o) => {
      t.close && a("close", o);
    }, m = d(() => {
      const { background: o, opacity: n } = t;
      return {
        background: o,
        opacity: n
      };
    });
    return (o, n) => o.show ? (p(), u("div", {
      key: 0,
      class: "v-loading",
      style: i(e(m)),
      onClick: c
    }, [
      r(e(S), {
        size: 20,
        class: "v-loading__animation",
        icon: o.icon
      }, {
        default: f(() => [
          g(o.$slots, "icon", {}, () => [
            r(e(v))
          ])
        ]),
        _: 3
      }, 8, ["icon"]),
      y("span", {
        class: "v-loading__title",
        style: i({ fontSize: o.fontSize, color: o.fontColor })
      }, V(o.text || " \u73A9\u547D\u52A0\u8F7D\u4E2D..."), 5)
    ], 4)) : _("", !0);
  }
});
export {
  L as default
};
