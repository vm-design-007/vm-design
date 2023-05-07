import { defineComponent as l, openBlock as t, createElementBlock as y, normalizeClass as z, unref as r, normalizeStyle as C, createElementVNode as h, createBlock as n, createCommentVNode as s, renderSlot as b } from "vue";
import { Props as g } from "./index3.js";
import { VSvgIcon as i } from "../../svg-icon/index.js";
import { useList as v } from "../../_hooks/use-list/index.js";
import { useRun as I } from "../../_hooks/use-run/index.js";
import { useGlobal as L } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const V = ["href", "target"], B = l({
  name: "VLink"
}), j = /* @__PURE__ */ l({
  ...B,
  props: g,
  setup(a) {
    const o = a, { getProp: c } = L(o), { run: m } = I(), { classes: p, styles: f } = v(c(["type"], ["primary"]), "link"), u = (e) => {
      if (o.disabled || o.noLink) {
        e.preventDefault();
        return;
      }
      m(o.onClick, e);
    }, d = p(["type", "state", "disabled", "noCopy"], "v-link"), k = f(["size", "color", "hoverColor"]);
    return (e, S) => (t(), y("div", {
      role: "link",
      class: z(r(d)),
      style: C(r(k))
    }, [
      h("a", {
        class: "v-link__a",
        href: e.href,
        target: e.target,
        onClick: u
      }, [
        e.beforeIcon ? (t(), n(r(i), {
          key: 0,
          icon: e.beforeIcon,
          size: e.size
        }, null, 8, ["icon", "size"])) : s("", !0),
        b(e.$slots, "default"),
        e.afterIcon ? (t(), n(r(i), {
          key: 1,
          icon: e.afterIcon,
          size: e.size
        }, null, 8, ["icon", "size"])) : s("", !0)
      ], 8, V)
    ], 6));
  }
});
export {
  j as default
};
