import { defineComponent as d, watch as h, computed as $, openBlock as n, createElementBlock as a, normalizeClass as g, renderSlot as u, createCommentVNode as i, createElementVNode as v, normalizeStyle as p, Fragment as N, renderList as w, mergeProps as V, toHandlerKey as B, unref as r, toDisplayString as I, createBlock as E, withModifiers as j, createVNode as L } from "vue";
import { Props as P } from "./index3.js";
import z from "../../../_svg/v-icon-plus/index.js";
import { isBoolean as A } from "../../../_utils/is/index.js";
import { VSvgIcon as T } from "../../../svg-icon/index.js";
import { VCloseBtn as D } from "../../../close-btn/index.js";
import { useRun as F } from "../../../_hooks/use-run/index.js";
import { useTabsNavStyle as H } from "../../../_hooks/use-tabs-nav-style/index.js";
import "../../../loading/src/index2.js";
import "../../../_hooks/use-message/index.js";
const K = {
  key: 0,
  class: "v-tabs-nav__prefix"
}, M = { class: "v-tabs-nav__wrapper" }, R = { class: "v-tabs-nav__item-label" }, q = {
  key: 1,
  class: "v-tabs-nav__suffix"
}, G = d({
  name: "VTabsNav"
}), te = /* @__PURE__ */ d({
  ...G,
  props: P,
  setup(f) {
    const t = f, { run: c } = F(), { setActiveLineStyle: y, activeIndex: _, activeLineStyle: b } = H(t), k = async (e) => {
      let s = !0;
      t.onSwitch && (s = await t.onSwitch(e)), !(A(s) && !s) && c(t.setActiveName, e);
    }, m = (e, s, o) => {
      c(t.setEdit, e, s, o);
    };
    h(
      [
        () => t.position,
        () => t.type,
        () => t.justifyContent,
        () => _.value
      ],
      () => {
        t.type === "line" && y();
      },
      { immediate: !0 }
    );
    const S = $(() => t.trigger === "hover" ? "mouseenter" : "click");
    return (e, s) => (n(), a("div", {
      class: g(["v-tabs-nav", `v-tabs-nav__${e.type}`])
    }, [
      e.$slots.prefix ? (n(), a("div", K, [
        u(e.$slots, "prefix")
      ])) : i("", !0),
      v("div", M, [
        v("div", {
          class: "v-tabs-nav__main",
          style: p({ justifyContent: e.type === "line" ? e.justifyContent : "" })
        }, [
          (n(!0), a(N, null, w(e.navs, (o, l) => (n(), a("div", V({
            key: l,
            role: "tablist",
            class: [
              "v-tabs-nav__item",
              {
                "v-tabs-nav__item-active": o.name === e.activeName
              }
            ]
          }, {
            [B(r(S))]: (C) => k(o.name)
          }), [
            v("span", R, I(o.label || `\u6807\u7B7E ${l}`), 1),
            e.type === "card" && e.editStatus ? (n(), E(r(D), {
              key: 0,
              round: "",
              onClick: j((C) => m("remove", o.name, l), ["stop"])
            }, null, 8, ["onClick"])) : i("", !0)
          ], 16))), 128)),
          e.type === "card" && e.editStatus ? (n(), a("div", {
            key: 0,
            class: "v-tabs-nav__item",
            onClick: s[0] || (s[0] = (o) => m("add"))
          }, [
            L(r(T), {
              icon: r(z),
              color: "#666"
            }, null, 8, ["icon"])
          ])) : i("", !0)
        ], 4),
        e.type === "line" ? (n(), a("div", {
          key: 0,
          class: "v-tabs-nav__line-active",
          style: p(r(b))
        }, null, 4)) : i("", !0)
      ]),
      e.$slots.suffix ? (n(), a("div", q, [
        u(e.$slots, "suffix")
      ])) : i("", !0)
    ], 2));
  }
});
export {
  te as default
};
