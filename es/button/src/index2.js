import { defineComponent as k, ref as S, computed as T, openBlock as t, createElementBlock as d, normalizeClass as l, unref as e, normalizeStyle as m, createBlock as r, createCommentVNode as s, renderSlot as b, toRefs as g, reactive as $ } from "vue";
import { Props as A } from "./index3.js";
import { VSvgIcon as a } from "../../svg-icon/index.js";
import y from "../../_svg/v-icon-loading-a/index.js";
import { useRipples as D } from "../../_hooks/use-ripples/index.js";
import { useRun as G } from "../../_hooks/use-run/index.js";
import { useGlobal as P } from "../../_hooks/use-global/index.js";
import { useButton as j } from "../../_hooks/use-button/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const q = ["href", "target"], w = ["disabled", "autofocus", "name", "type"], F = k({
  name: "VButton"
}), Z = /* @__PURE__ */ k({
  ...F,
  props: A,
  setup(v) {
    const n = v, { getType: I } = P(n), { run: C } = G(), { classList: u, styleList: c } = j(n), i = S(), f = (o) => {
      const { disabled: p, loading: B, ripples: V } = g(n);
      if (p.value || B.value) {
        o.preventDefault();
        return;
      }
      if (V.value) {
        const { ripplesColor: z, simple: E, text: R } = g(n), L = $({
          duration: 700,
          component: "v-button",
          className: "v-button__ripples",
          ripplesColor: z.value,
          simple: E.value,
          text: R.value,
          type: I()
        }), { runRipples: N } = D(
          o,
          i.value,
          L
        );
        N();
      }
      C(n.onClick, o);
    }, h = T(() => n.loading ? n.loadingIcon || y : n.beforeIcon);
    return (o, p) => o.href ? (t(), d("a", {
      key: 0,
      ref_key: "VButtonEl",
      ref: i,
      role: "link",
      tabindex: "0",
      class: l(e(u)),
      href: o.href,
      target: o.target,
      style: m(e(c)),
      onClick: f
    }, [
      o.loading || o.beforeIcon ? (t(), r(e(a), {
        key: 0,
        class: l({ "v-button__loading-animation": o.loading }),
        icon: e(h),
        size: 16
      }, null, 8, ["class", "icon"])) : s("", !0),
      b(o.$slots, "default"),
      o.afterIcon ? (t(), r(e(a), {
        key: 1,
        icon: o.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : s("", !0)
    ], 14, q)) : (t(), d("button", {
      key: 1,
      ref_key: "VButtonEl",
      ref: i,
      role: "button",
      tabindex: "0",
      class: l(e(u)),
      disabled: o.disabled || o.loading,
      autofocus: o.autofocus,
      name: o.name,
      type: o.nativeType,
      style: m(e(c)),
      onClick: f
    }, [
      o.loading || o.beforeIcon ? (t(), r(e(a), {
        key: 0,
        class: l(["v-button_before-icon", { "v-button__loading-animation": o.loading }]),
        icon: o.loading ? o.loadingIcon || e(y) : o.beforeIcon,
        size: 16
      }, null, 8, ["class", "icon"])) : s("", !0),
      b(o.$slots, "default"),
      o.afterIcon ? (t(), r(e(a), {
        key: 1,
        class: "v-button_after-icon",
        icon: o.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : s("", !0)
    ], 14, w));
  }
});
export {
  Z as default
};
