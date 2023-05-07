import { defineComponent as d, ref as f, onMounted as I, openBlock as t, createBlock as a, Transition as S, withCtx as c, createElementBlock as r, normalizeClass as V, unref as l, normalizeStyle as $, renderSlot as n, createCommentVNode as s, createElementVNode as z, createTextVNode as B, toDisplayString as m, Fragment as E, renderList as N } from "vue";
import { Props as M } from "./index3.js";
import { VCloseBtn as w } from "../../close-btn/index.js";
import { VSvgIcon as A } from "../../svg-icon/index.js";
import { isNumber as P } from "../../_utils/is/index.js";
import { useList as T } from "../../_hooks/use-list/index.js";
import { useRun as D } from "../../_hooks/use-run/index.js";
import { useGlobal as F } from "../../_hooks/use-global/index.js";
import { useAlertList as G } from "../../_hooks/use-alert-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const R = { class: "v-alert__content" }, j = {
  key: 0,
  class: "v-alert__title"
}, q = {
  key: 1,
  class: "v-alert__sub-title"
}, H = d({
  name: "VAlert"
}), oe = /* @__PURE__ */ d({
  ...H,
  props: M,
  setup(p) {
    const o = p, { getProp: v } = F(o), { run: y } = D(), { styles: k, classes: L } = T(v(["type"]), "alert"), u = f(!0), i = f(), _ = L(
      ["type", "bold", "simple", "center", "round", "fixed"],
      "v-alert"
    ), b = k(["fontSize", "color", "background", "titleSize", "titleColor"]), h = (e) => {
      u.value = !1, y(o.onClose, e);
    };
    return I(() => {
      o.alertList && o.alertList.length && i.value && G(i.value)(P(o.duration) ? o.duration : 2e3);
    }), (e, J) => (t(), a(S, { name: "v-alert" }, {
      default: c(() => [
        u.value ? (t(), r("div", {
          key: 0,
          role: "alert",
          class: V(l(_)),
          style: $(l(b))
        }, [
          e.$slots.beforeIcon || e.beforeIcon ? (t(), a(l(A), {
            key: 0,
            icon: e.beforeIcon
          }, {
            default: c(() => [
              n(e.$slots, "beforeIcon")
            ]),
            _: 3
          }, 8, ["icon"])) : s("", !0),
          z("div", R, [
            e.title ? (t(), r("div", j, [
              n(e.$slots, "title", {}, () => [
                B(m(e.title), 1)
              ])
            ])) : s("", !0),
            e.$slots.default ? (t(), r("div", q, [
              n(e.$slots, "default")
            ])) : s("", !0),
            e.alertList && e.alertList.length ? (t(), r("div", {
              key: 2,
              ref_key: "alertListEl",
              ref: i,
              class: "v-alert__list"
            }, [
              (t(!0), r(E, null, N(e.alertList, (C, g) => (t(), r("div", {
                key: g,
                class: "v-alert__list-item"
              }, m(C), 1))), 128))
            ], 512)) : s("", !0)
          ]),
          e.close ? (t(), a(l(w), {
            key: 1,
            round: "",
            color: e.type === "default" ? "#333" : "#fff",
            size: 16,
            icon: e.closeIcon,
            "on-click": h
          }, {
            default: c(() => [
              n(e.$slots, "closeIcon")
            ]),
            _: 3
          }, 8, ["color", "icon"])) : s("", !0)
        ], 6)) : s("", !0)
      ]),
      _: 3
    }));
  }
});
export {
  oe as default
};
