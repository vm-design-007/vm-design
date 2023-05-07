import { defineComponent as c, toRef as b, openBlock as e, createBlock as a, unref as s, isRef as v, withCtx as p, createElementVNode as l, renderSlot as n, toDisplayString as w, createCommentVNode as t, createElementBlock as m } from "vue";
import { Props as V } from "./index3.js";
import { isBoolean as y } from "../../_utils/is/index.js";
import { EMIT_VISIBLE as B } from "../../_tokens/emits/index.js";
import { useVisible as C } from "../../_hooks/use-visible/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VCloseBtn as I } from "../../close-btn/index.js";
import { VPopup as _ } from "../../popup/index.js";
const z = { class: "v-drawer" }, E = { class: "v-drawer__header" }, $ = { class: "v-drawer__header-title" }, S = {
  key: 0,
  class: "v-drawer__body"
}, D = {
  key: 1,
  class: "v-drawer__footer"
}, M = c({
  name: "VDrawer"
}), q = /* @__PURE__ */ c({
  ...M,
  props: V,
  emits: {
    [B]: (r) => y(r)
  },
  setup(r, { emit: f }) {
    const u = r, { isVisible: i, closeVisible: k } = C(b(u, "visible"), f);
    return (o, d) => (e(), a(s(_), {
      visible: s(i),
      "onUpdate:visible": d[0] || (d[0] = (h) => v(i) ? i.value = h : null),
      "append-to-body": o.appendToBody,
      "show-mask": o.showMask,
      "mask-close": o.maskClose,
      "z-index": o.zIndex,
      "mask-blur": o.maskBlur,
      direction: o.direction,
      "popup-size": o.size,
      "on-open": o.onOpen,
      "on-open-end": o.onOpenEnd,
      "on-close": o.onClose,
      "on-close-end": o.onCloseEnd
    }, {
      default: p(() => [
        l("div", z, [
          l("header", E, [
            n(o.$slots, "header", {}, () => [
              l("span", $, w(o.title), 1),
              o.showCloseIcon ? (e(), a(s(I), {
                key: 0,
                icon: o.closeIcon,
                "on-click": s(k)
              }, {
                default: p(() => [
                  n(o.$slots, "closeIcon")
                ]),
                _: 3
              }, 8, ["icon", "on-click"])) : t("", !0)
            ])
          ]),
          o.$slots.default ? (e(), m("section", S, [
            n(o.$slots, "default")
          ])) : t("", !0),
          o.$slots.footer ? (e(), m("footer", D, [
            n(o.$slots, "footer")
          ])) : t("", !0)
        ])
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "show-mask", "mask-close", "z-index", "mask-blur", "direction", "popup-size", "on-open", "on-open-end", "on-close", "on-close-end"]));
  }
});
export {
  q as default
};
