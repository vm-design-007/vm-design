import { defineComponent as V, ref as P, openBlock as m, createBlock as w, Teleport as Z, createVNode as i, Transition as _, withCtx as p, withDirectives as h, createElementVNode as s, normalizeStyle as I, unref as e, withModifiers as A, vShow as k, createCommentVNode as b, createElementBlock as $, Fragment as D } from "vue";
import { Props as F } from "./index3.js";
import { VButton as v } from "../../button/index.js";
import { VToolbar as j } from "../../toolbar/index.js";
import { VToolbarItem as t } from "../../toolbar-item/index.js";
import { isBoolean as q, isArray as G } from "../../_utils/is/index.js";
import H from "../../_svg/v-icon-chevron-left/index.js";
import J from "../../_svg/v-icon-chevron-right/index.js";
import K from "../../_svg/v-icon-cross/index.js";
import Q from "../../_svg/v-icon-layout-rows/index.js";
import U from "../../_svg/v-icon-rotate-anti-clockwise/index.js";
import W from "../../_svg/v-icon-rotate-clockwise/index.js";
import X from "../../_svg/v-icon-zoom-in/index.js";
import Y from "../../_svg/v-icon-zoom-out/index.js";
import { useOperationImg as ee } from "../../_hooks/use-operation-img/index.js";
import { EMIT_VISIBLE as C } from "../../_tokens/emits/index.js";
import { useRun as oe } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const ie = /* @__PURE__ */ s("div", { class: "v-image-preview__mask" }, null, -1), re = ["onClick"], ne = { class: "v-image-preview__wrapper" }, te = ["src"], se = V({
  name: "VImagePreview"
}), Le = /* @__PURE__ */ V({
  ...se,
  props: F,
  emits: {
    [C]: (c) => q(c)
  },
  setup(c, { emit: y }) {
    const r = c, { run: a } = oe(), {
      scale: L,
      rotate: B,
      smaller: x,
      bigger: E,
      scrollZoom: f,
      recovery: d,
      rotateClockwise: R,
      rotateCounterClock: T
    } = ee(), n = P(
      r.showIndex > r.imgList.length - 1 ? 0 : r.showIndex
    ), M = () => {
      G(r.imgList) && r.imgList.forEach((o) => {
        const l = new Image();
        l.src = o;
      });
    }, S = {
      next: () => {
        if (n.value < r.imgList.length - 1) {
          n.value++;
          return;
        }
        n.value = 0;
      },
      prev: () => {
        if (n.value > 0) {
          n.value--;
          return;
        }
        n.value = r.imgList.length - 1;
      }
    }, u = (o) => {
      d(), a(S[o]);
    }, z = {
      1: () => x(),
      2: () => E(),
      3: () => d(),
      4: () => R(),
      5: () => T()
    }, N = (o) => {
      !o || a(z[o]);
    }, g = (o) => {
      y(C, !1), a(r.onClose, o);
    };
    return (o, l) => (m(), w(Z, {
      to: "body",
      disabled: !o.appendToBody
    }, [
      i(_, {
        name: "v-image-preview__transition",
        onBeforeEnter: M
      }, {
        default: p(() => [
          h(s("div", {
            class: "v-image-preview",
            style: I({ zIndex: o.zIndex }),
            onMousewheel: l[0] || (l[0] = (...O) => e(f) && e(f)(...O))
          }, [
            ie,
            s("div", {
              class: "v-image-preview__container",
              onClick: A(g, ["self"])
            }, [
              i(_, { name: "v-image-preview__wrapper-transition" }, {
                default: p(() => [
                  h(s("div", ne, [
                    s("img", {
                      class: "v-image-preview__node",
                      draggable: "false",
                      src: o.imgList[n.value],
                      style: I({
                        transform: `scale(${e(L)}) rotate(${e(B)}deg)`,
                        borderRadius: o.round
                      })
                    }, null, 12, te)
                  ], 512), [
                    [k, o.visible]
                  ])
                ]),
                _: 1
              }),
              o.isOption ? (m(), w(e(j), {
                key: 0,
                class: "v-image-preview__option",
                round: "",
                "on-click": N
              }, {
                default: p(() => [
                  i(e(t), {
                    icon: e(Y),
                    index: 1
                  }, null, 8, ["icon"]),
                  i(e(t), {
                    icon: e(X),
                    index: 2
                  }, null, 8, ["icon"]),
                  i(e(t), {
                    icon: e(Q),
                    index: 3
                  }, null, 8, ["icon"]),
                  i(e(t), {
                    icon: e(W),
                    index: 4
                  }, null, 8, ["icon"]),
                  i(e(t), {
                    icon: e(U),
                    index: 5
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : b("", !0),
              o.imgList.length > 1 ? (m(), $(D, { key: 1 }, [
                i(e(v), {
                  class: "v-image-preview__next",
                  circle: "",
                  "before-icon": e(J),
                  "on-click": () => u("next")
                }, null, 8, ["before-icon", "on-click"]),
                i(e(v), {
                  class: "v-image-preview__prev",
                  circle: "",
                  "before-icon": e(H),
                  "on-click": () => u("prev")
                }, null, 8, ["before-icon", "on-click"])
              ], 64)) : b("", !0),
              i(e(v), {
                class: "v-image-preview__close",
                circle: "",
                "before-icon": e(K),
                "on-click": g
              }, null, 8, ["before-icon"])
            ], 8, re)
          ], 36), [
            [k, o.visible]
          ])
        ]),
        _: 1
      })
    ], 8, ["disabled"]));
  }
});
export {
  Le as default
};
