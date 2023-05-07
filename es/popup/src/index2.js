import { defineComponent as h, computed as g, openBlock as d, createBlock as z, Teleport as I, createVNode as u, Transition as m, withCtx as c, withDirectives as f, createElementVNode as s, normalizeStyle as i, createElementBlock as O, normalizeClass as a, createCommentVNode as S, withModifiers as V, unref as L, renderSlot as T, vShow as v } from "vue";
import { Props as M } from "./index3.js";
import { sizeChange as p } from "../../_utils/utils/index.js";
import { isBoolean as N } from "../../_utils/is/index.js";
import { EMIT_VISIBLE as _ } from "../../_tokens/emits/index.js";
import { useRun as P } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const $ = ["onClick"], A = h({
  name: "VPopup"
}), K = /* @__PURE__ */ h({
  ...A,
  props: M,
  emits: {
    [_]: (t) => N(t)
  },
  setup(t, { emit: k }) {
    const o = t, { run: n } = P(), y = () => {
      !o.maskClose || k(_, !1);
    }, C = (e) => {
      document.body.style.overflow = "hidden", n(o.onOpen, e);
    }, w = (e) => {
      n(o.onOpenEnd, e);
    }, b = (e) => {
      document.body.style.overflow = "", n(o.onClose, e);
    }, B = (e) => {
      n(o.onCloseEnd, e);
    }, E = g(() => {
      const { direction: e, popupSize: r, padding: l } = o;
      return e === "top" || e === "bottom" ? {
        height: p(r),
        padding: p(l)
      } : {
        width: p(r),
        padding: p(l)
      };
    });
    return (e, r) => (d(), z(I, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      u(m, {
        name: "v-popup__transition",
        onBeforeEnter: C,
        onAfterEnter: w,
        onBeforeLeave: b,
        onAfterLeave: B
      }, {
        default: c(() => [
          f(s("div", {
            class: "v-popup",
            style: i({ zIndex: e.zIndex })
          }, [
            e.showMask ? (d(), O("div", {
              key: 0,
              class: a(["v-popup__mask", { "v-popup__blur": e.maskBlur }]),
              style: i({ background: e.maskBackground, opacity: e.maskOpacity })
            }, null, 6)) : S("", !0),
            s("div", {
              class: a([
                "v-popup__container",
                {
                  [`v-popup__container-${e.direction}`]: e.direction
                }
              ]),
              onClick: V(y, ["self"])
            }, [
              u(m, { name: "v-popup__wrapper-transition" }, {
                default: c(() => [
                  f(s("div", {
                    class: a([
                      "v-popup__wrapper",
                      {
                        [`v-popup__wrapper-${e.direction}`]: e.direction,
                        "v-popup__fullscreen": e.fullscreen
                      }
                    ]),
                    style: i(L(E))
                  }, [
                    T(e.$slots, "default")
                  ], 6), [
                    [v, e.visible]
                  ])
                ]),
                _: 3
              })
            ], 10, $)
          ], 4), [
            [v, e.visible]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
export {
  K as default
};
