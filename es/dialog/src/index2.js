import { defineComponent as f, toRef as y, openBlock as n, createBlock as c, unref as e, isRef as B, withCtx as m, createElementVNode as s, normalizeClass as C, normalizeStyle as V, renderSlot as l, toDisplayString as I, createCommentVNode as r, createElementBlock as p } from "vue";
import { Props as $ } from "./index3.js";
import { VCloseBtn as w } from "../../close-btn/index.js";
import { VPopup as z } from "../../popup/index.js";
import { isBoolean as E } from "../../_utils/is/index.js";
import { EMIT_VISIBLE as L } from "../../_tokens/emits/index.js";
import { useList as S } from "../../_hooks/use-list/index.js";
import { useVisible as D } from "../../_hooks/use-visible/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const M = { class: "v-dialog__header" }, N = { class: "v-dialog__header-before" }, O = { class: "v-dialog__header-center" }, P = { class: "v-dialog__header-after" }, R = {
  key: 0,
  class: "v-dialog__body"
}, T = { class: "v-dialog__section" }, A = {
  key: 0,
  class: "v-dialog__footer"
}, U = f({
  name: "VDialog"
}), Y = /* @__PURE__ */ f({
  ...U,
  props: $,
  emits: {
    [L]: (i) => E(i)
  },
  setup(i, { emit: u }) {
    const a = i, { styles: h, classes: k } = S(a, "dialog"), { isVisible: t, closeVisible: v } = D(y(a, "visible"), u), _ = h(["width", "height"]), b = k(["fullscreen"], "v-dialog");
    return (o, d) => (n(), c(e(z), {
      visible: e(t),
      "onUpdate:visible": d[0] || (d[0] = (g) => B(t) ? t.value = g : null),
      "append-to-body": o.appendToBody,
      "show-mask": o.showMask,
      "mask-close": o.maskClose,
      "z-index": o.zIndex,
      "mask-blur": o.maskBlur,
      fullscreen: o.fullscreen,
      "on-open": o.onOpen,
      "on-open-end": o.onOpenEnd,
      "on-close": o.onClose,
      "on-close-end": o.onCloseEnd
    }, {
      default: m(() => [
        s("div", {
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          class: C(e(b)),
          style: V(e(_))
        }, [
          s("header", M, [
            s("div", N, [
              l(o.$slots, "headerBefore")
            ]),
            s("h2", O, I(o.title), 1),
            s("div", P, [
              l(o.$slots, "headerAfter", {}, () => [
                o.showCloseIcon ? (n(), c(e(w), {
                  key: 0,
                  round: "",
                  color: "#3c4043",
                  size: 30,
                  icon: o.closeIcon,
                  "on-click": e(v)
                }, {
                  default: m(() => [
                    l(o.$slots, "closeIcon")
                  ]),
                  _: 3
                }, 8, ["icon", "on-click"])) : r("", !0)
              ])
            ])
          ]),
          o.$slots.default ? (n(), p("div", R, [
            s("section", T, [
              l(o.$slots, "default")
            ]),
            o.$slots.footer ? (n(), p("footer", A, [
              l(o.$slots, "footer")
            ])) : r("", !0)
          ])) : r("", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "fullscreen", "on-open", "on-open-end", "on-close", "on-close-end"]));
  }
});
export {
  Y as default
};
