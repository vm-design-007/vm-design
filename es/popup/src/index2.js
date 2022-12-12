import { defineComponent as l, computed as y, openBlock as i, createBlock as C, Teleport as _, createVNode as b, Transition as w, withCtx as B, withDirectives as g, createElementVNode as t, normalizeStyle as r, createElementBlock as E, normalizeClass as d, createCommentVNode as z, withModifiers as S, unref as V, renderSlot as L, vShow as N } from "vue";
import { Props as O, Emits as P } from "./index3.js";
import { sizeChange as n } from "../../_utils/index3.js";
const T = ["onClick"], A = l({
  name: "VPopup"
}), D = /* @__PURE__ */ l({
  ...A,
  props: O,
  emits: P,
  setup(c, { emit: o }) {
    const s = c, u = () => {
      !s.maskClose || o("update:visible", !1);
    }, m = (e) => {
      o("open", e);
    }, f = (e) => {
      o("open-end", e);
    }, v = (e) => {
      o("close", e);
    }, h = (e) => {
      o("close-end", e);
    }, k = y(
      () => {
        const { direction: e, popupSize: p, padding: a } = s;
        return e === "top" || e === "bottom" ? {
          height: n(p),
          padding: n(a)
        } : {
          width: n(p),
          padding: n(a)
        };
      }
    );
    return (e, p) => (i(), C(_, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      b(w, {
        name: e.direction === "center" ? "v-popup-center" : "v-popup-other",
        onBeforeEnter: m,
        onAfterEnter: f,
        onBeforeLeave: v,
        onAfterLeave: h
      }, {
        default: B(() => [
          g(t("div", {
            class: "v-popup",
            style: r({ zIndex: e.zIndex })
          }, [
            e.showMask ? (i(), E("div", {
              key: 0,
              class: d(["v-popup__mask", { "v-popup__blur": e.maskBlur }]),
              style: r({ background: e.maskBackground, opacity: e.maskOpacity })
            }, null, 6)) : z("", !0),
            t("div", {
              class: d([
                "v-popup__container",
                { [`v-popup__container-${e.direction}`]: e.direction }
              ]),
              onClick: S(u, ["self"])
            }, [
              t("div", {
                class: "v-popup__wrapper",
                style: r(V(k))
              }, [
                L(e.$slots, "default")
              ], 4)
            ], 10, T)
          ], 4), [
            [N, e.visible]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled"]));
  }
});
export {
  D as default
};
