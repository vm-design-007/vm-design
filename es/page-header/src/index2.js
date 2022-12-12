import { defineComponent as m, computed as l, openBlock as s, createElementBlock as n, createElementVNode as o, createVNode as g, unref as t, withCtx as f, renderSlot as a, createBlock as C, resolveDynamicComponent as b, toDisplayString as i, normalizeClass as d, normalizeStyle as k, createTextVNode as c, createCommentVNode as V } from "vue";
import { sizeChange as z } from "../../_utils/index3.js";
import y from "../../_components/svg/index.js";
import { VSvgIcon as S } from "../../svg-icon/index.js";
import { Props as B, Emits as N } from "./index3.js";
const $ = { class: "v-page-header" }, E = { class: "v-page-header__text" }, L = {
  key: 0,
  class: "v-page-header__main-subtitle"
}, T = m({
  name: "VPageHeader"
}), j = /* @__PURE__ */ m({
  ...T,
  props: B,
  emits: N,
  setup(p, { emit: h }) {
    const r = p, _ = () => {
      h("back");
    }, u = l(() => [
      "v-page-header__main",
      { "v-page-header__main-center": r.titleCenter }
    ]), v = l(() => [
      "v-page-header__main-title",
      { "v-page-header__main-title-bold": r.titleBold }
    ]);
    return (e, w) => (s(), n("header", $, [
      o("div", {
        class: "v-page-header__left",
        onClick: _
      }, [
        g(t(S), {
          size: t(z)(e.iconSize)
        }, {
          default: f(() => [
            a(e.$slots, "icon", {}, () => [
              (s(), C(b(e.icon || t(y))))
            ])
          ]),
          _: 3
        }, 8, ["size"]),
        o("div", E, i(e.backText), 1)
      ]),
      o("div", {
        class: d(t(u))
      }, [
        o("div", {
          style: k({ color: e.titleColor }),
          class: d(t(v))
        }, [
          a(e.$slots, "title", {}, () => [
            c(i(e.title), 1)
          ])
        ], 6),
        e.subtitle || e.$slots.subtitle ? (s(), n("div", L, [
          a(e.$slots, "subtitle", {}, () => [
            c(i(e.subtitle), 1)
          ])
        ])) : V("", !0)
      ], 2)
    ]));
  }
});
export {
  j as default
};
