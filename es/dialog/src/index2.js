import { defineComponent as c, ref as b, watch as p, openBlock as s, createBlock as m, unref as n, withCtx as u, createElementVNode as a, normalizeClass as C, normalizeStyle as g, renderSlot as l, toDisplayString as y, createCommentVNode as i, createElementBlock as f } from "vue";
import { Props as E, Emits as w } from "./index3.js";
import { VCloseBtn as z } from "../../close-btn/index.js";
import { VPopup as B } from "../../popup/index.js";
import { sizeChange as V } from "../../_utils/index3.js";
const _ = { class: "v-dialog__header" }, $ = { class: "v-dialog__header-title" }, I = {
  key: 0,
  class: "v-dialog__body"
}, O = {
  key: 1,
  class: "v-dialog__footer"
}, D = c({
  name: "VDialog"
}), U = /* @__PURE__ */ c({
  ...D,
  props: E,
  emits: w,
  setup(v, { emit: h }) {
    const t = v, o = b(t.visible), d = () => {
      h("update:visible", !1);
    };
    return p(
      () => o.value,
      (e) => {
        e || d();
      }
    ), p(
      () => t.visible,
      (e) => {
        o.value = e;
      }
    ), (e, r) => (s(), m(n(B), {
      visible: o.value,
      "onUpdate:visible": r[0] || (r[0] = (k) => o.value = k),
      "append-to-body": e.appendToBody,
      "show-mask": e.showMask,
      "mask-close": e.maskClose,
      "z-index": e.zIndex,
      "mask-blur": e.maskBlur,
      onOpen: e.open,
      onOpenEnd: e.openEnd,
      onClose: e.close,
      onCloseEnd: e.closeEnd
    }, {
      default: u(() => [
        a("div", {
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
          class: C(["v-dialog", { "v-dialog__fullscreen": e.fullscreen }]),
          style: g({ width: n(V)(e.width) })
        }, [
          a("header", _, [
            l(e.$slots, "header", {}, () => [
              a("span", $, y(e.title), 1),
              e.showCloseIcon ? (s(), m(n(z), {
                key: 0,
                icon: e.closeIcon,
                onClick: d
              }, {
                default: u(() => [
                  l(e.$slots, "closeIcon")
                ]),
                _: 3
              }, 8, ["icon"])) : i("", !0)
            ])
          ]),
          e.$slots.default ? (s(), f("section", I, [
            l(e.$slots, "default")
          ])) : i("", !0),
          e.$slots.footer ? (s(), f("footer", O, [
            l(e.$slots, "footer")
          ])) : i("", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "onOpen", "onOpenEnd", "onClose", "onCloseEnd"]));
  }
});
export {
  U as default
};
