import { defineComponent as w, ref as D, computed as h, openBlock as s, createElementBlock as C, normalizeClass as b, unref as e, normalizeStyle as I, createBlock as f, h as z, createCommentVNode as p, renderSlot as V } from "vue";
import { VSvgIcon as m } from "../../svg-icon/index.js";
import B from "../../_components/svg/index8.js";
import { Props as E, Emits as N } from "./index3.js";
import { sizeChange as R } from "../../_utils/index3.js";
import { Ripples as A } from "../../_utils/index4.js";
import { ChangeColor as P } from "../../_utils/index5.js";
const T = ["href", "target"], j = ["disabled", "autofocus", "name", "type"], q = w({
  name: "VButton"
}), Q = /* @__PURE__ */ w({
  ...q,
  props: E,
  emits: N,
  setup(L, { emit: S }) {
    const c = L, v = D(
      null
    ), g = h(() => {
      const {
        type: o,
        round: l,
        simple: a,
        block: n,
        disabled: t,
        loading: r,
        bold: u,
        size: i,
        text: _,
        circle: $,
        color: d
      } = c;
      return [
        "v-button",
        {
          [`v-button__${i}`]: i,
          [`v-button__${o}`]: !d,
          "v-button__disabled": t || r,
          "v-button__simple": a && !d,
          "v-button__circle": $,
          "v-button__round": l,
          "v-button__block": n,
          "v-button__bold": u,
          "v-button__color": d,
          "v-button__text": _ && !d
        }
      ];
    }), k = (o) => {
      const { disabled: l, loading: a, ripples: n } = c;
      if (l || a) {
        o.preventDefault();
        return;
      }
      if (n) {
        const { ripplesColor: t, simple: r, text: u, type: i } = c;
        new A(
          o,
          v.value,
          {
            duration: 700,
            component: "v-button",
            className: "v-button__ripples",
            ripplesColor: t,
            simple: r,
            text: u,
            type: i
          }
        ).clickRipples();
      }
      S("click", o);
    }, y = h(() => {
      const { fontSize: o, fontColor: l, shadow: a, color: n } = c, t = {
        "--v-button-font-size": R(o),
        "--v-button-font-color": l,
        "--v-button-box-shadow": a
      };
      if (n) {
        const r = new P(n), u = r.getLightColor(0.4), i = r.getDarkColor(0.2);
        t["--v-button-default-color"] = n, t["--v-button-hover-color"] = u, t["--v-button-active-color"] = i;
      }
      return t;
    });
    return (o, l) => o.href ? (s(), C("a", {
      key: 0,
      ref_key: "VButton",
      ref: v,
      role: "button",
      tabindex: "0",
      class: b(e(g)),
      href: o.href,
      target: o.target,
      style: I(e(y)),
      onClick: k
    }, [
      o.loading || o.beforeIcon ? (s(), f(e(m), {
        key: 0,
        class: b([
          "v-button__before-icon",
          { "v-button__loading-animation": o.loading }
        ]),
        icon: o.loading ? o.loadingIcon || z(e(B)) : o.beforeIcon,
        size: 16
      }, null, 8, ["class", "icon"])) : p("", !0),
      V(o.$slots, "default"),
      o.afterIcon ? (s(), f(e(m), {
        key: 1,
        icon: o.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : p("", !0)
    ], 14, T)) : (s(), C("button", {
      key: 1,
      ref_key: "VButton",
      ref: v,
      role: "button",
      tabindex: "0",
      class: b(e(g)),
      disabled: o.disabled || o.loading,
      autofocus: o.autofocus,
      name: o.name,
      type: o.nativeType,
      style: I(e(y)),
      onClick: k
    }, [
      o.loading || o.beforeIcon ? (s(), f(e(m), {
        key: 0,
        class: b([
          "v-button__before-icon",
          { "v-button__loading-animation": o.loading }
        ]),
        icon: o.loading ? o.loadingIcon || z(e(B)) : o.beforeIcon,
        size: 16
      }, null, 8, ["class", "icon"])) : p("", !0),
      V(o.$slots, "default"),
      o.afterIcon ? (s(), f(e(m), {
        key: 1,
        icon: o.afterIcon,
        size: 16
      }, null, 8, ["icon"])) : p("", !0)
    ], 14, j));
  }
});
export {
  Q as default
};
