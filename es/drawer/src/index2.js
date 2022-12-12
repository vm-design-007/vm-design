import { defineComponent as f, ref as w, watch as d, openBlock as s, createBlock as p, unref as m, withCtx as u, createElementVNode as l, renderSlot as n, toDisplayString as b, createCommentVNode as r, createElementBlock as c } from "vue";
import { Props as C, Emits as E } from "./index3.js";
import { VCloseBtn as y } from "../../close-btn/index.js";
import { VPopup as z } from "../../popup/index.js";
const B = { class: "v-drawer" }, V = { class: "v-drawer__header" }, _ = { class: "v-drawer__header-title" }, $ = {
  key: 0,
  class: "v-drawer__body"
}, I = {
  key: 1,
  class: "v-drawer__footer"
}, O = f({
  name: "VDrawer"
}), g = /* @__PURE__ */ f({
  ...O,
  props: C,
  emits: E,
  setup(k, { emit: v }) {
    const t = k, o = w(t.visible), a = () => {
      v("update:visible", !1);
    };
    return d(
      () => o.value,
      (e) => {
        e || a();
      }
    ), d(
      () => t.visible,
      (e) => {
        o.value = e;
      }
    ), (e, i) => (s(), p(m(z), {
      visible: o.value,
      "onUpdate:visible": i[0] || (i[0] = (h) => o.value = h),
      "append-to-body": e.appendToBody,
      "show-mask": e.showMask,
      "mask-close": e.maskClose,
      "z-index": e.zIndex,
      "mask-blur": e.maskBlur,
      direction: e.direction,
      "popup-size": e.size,
      onOpen: e.open,
      onOpenEnd: e.openEnd,
      onClose: e.close,
      onCloseEnd: e.closeEnd
    }, {
      default: u(() => [
        l("div", B, [
          l("header", V, [
            n(e.$slots, "header", {}, () => [
              l("span", _, b(e.title), 1),
              e.showCloseIcon ? (s(), p(m(y), {
                key: 0,
                icon: e.closeIcon,
                onClick: a
              }, {
                default: u(() => [
                  n(e.$slots, "closeIcon")
                ]),
                _: 3
              }, 8, ["icon"])) : r("", !0)
            ])
          ]),
          e.$slots.default ? (s(), c("section", $, [
            n(e.$slots, "default")
          ])) : r("", !0),
          e.$slots.footer ? (s(), c("footer", I, [
            n(e.$slots, "footer")
          ])) : r("", !0)
        ])
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "direction", "popup-size", "onOpen", "onOpenEnd", "onClose", "onCloseEnd"]));
  }
});
export {
  g as default
};
