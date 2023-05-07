import { defineComponent as d, computed as h, openBlock as o, createElementBlock as i, createElementVNode as t, createVNode as f, unref as a, withCtx as g, renderSlot as r, createBlock as C, resolveDynamicComponent as b, toDisplayString as s, normalizeClass as l, normalizeStyle as k, createTextVNode as n, createCommentVNode as V } from "vue";
import { Props as y } from "./index3.js";
import { useRun as z } from "../../_hooks/use-run/index.js";
import { useGlobal as B } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import S from "../../_svg/v-icon-arrow-left/index.js";
import { VSvgIcon as N } from "../../svg-icon/index.js";
const $ = { class: "v-page-header" }, w = { class: "v-page-header__text" }, D = {
  key: 0,
  class: "v-page-header__main-subtitle"
}, E = d({
  name: "VPageHeader"
}), q = /* @__PURE__ */ d({
  ...E,
  props: y,
  setup(c) {
    const m = c, { run: p } = z(), { getLang: u } = B(), _ = h(() => u("pageHeader").value.backText), v = (e) => {
      p(m.onBack, e);
    };
    return (e, H) => (o(), i("header", $, [
      t("div", {
        class: "v-page-header__left",
        onClick: v
      }, [
        f(a(N), { size: e.iconSize }, {
          default: g(() => [
            r(e.$slots, "icon", {}, () => [
              (o(), C(b(e.icon || a(S))))
            ])
          ]),
          _: 3
        }, 8, ["size"]),
        t("div", w, s(a(_)), 1)
      ]),
      t("div", {
        class: l(["v-page-header__main", { "v-page-header__main-center": e.titleCenter }])
      }, [
        t("div", {
          style: k({ color: e.titleColor }),
          class: l([
            "v-page-header__main-title",
            { "v-page-header__main-title-bold": e.titleBold }
          ])
        }, [
          r(e.$slots, "title", {}, () => [
            n(s(e.title), 1)
          ])
        ], 6),
        e.subtitle || e.$slots.subtitle ? (o(), i("div", D, [
          r(e.$slots, "subtitle", {}, () => [
            n(s(e.subtitle), 1)
          ])
        ])) : V("", !0)
      ], 2)
    ]));
  }
});
export {
  q as default
};
