import { defineComponent as c, openBlock as s, createBlock as i, Transition as N, unref as e, withCtx as _, withDirectives as z, createElementVNode as M, normalizeClass as T, normalizeStyle as b, createElementBlock as r, createVNode as w, createCommentVNode as f, isVNode as A, resolveDynamicComponent as D, toDisplayString as p, Fragment as E, createTextVNode as P, vShow as h } from "vue";
import { Props as F } from "./index3.js";
import { isString as I } from "../../_utils/is/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { useMessageWork as W } from "../../_hooks/use-message-work/index.js";
import { VSvgIcon as j } from "../../svg-icon/index.js";
import { VCloseBtn as q } from "../../close-btn/index.js";
const G = {
  key: 0,
  class: "v-message__before_icon"
}, H = {
  key: 2,
  class: "v-message__text"
}, J = c({
  name: "VMessage"
}), $ = /* @__PURE__ */ c({
  ...J,
  props: F,
  setup(v, { expose: d }) {
    const u = v, {
      classList: g,
      styleList: y,
      visible: k,
      isPosition: B,
      offsetStyle: V,
      offsetVal: C,
      onBeforeLeave: L,
      onAfterLeave: S,
      clearTimer: a,
      startTime: l,
      handelClose: m
    } = W(u, "message");
    return d({ offsetVal: C }), (o, t) => (s(), i(N, {
      mode: "out-in",
      appear: "",
      name: "v-message-fade" + (e(B) ? "-top" : "-bottom"),
      onBeforeLeave: e(L),
      onAfterLeave: e(S)
    }, {
      default: _(() => [
        z(M("div", {
          class: T(e(g)),
          style: b([e(V), e(y)]),
          onMouseleave: t[1] || (t[1] = (...n) => e(l) && e(l)(...n)),
          onMouseenter: t[2] || (t[2] = (...n) => e(a) && e(a)(...n))
        }, [
          o.icon ? (s(), r("div", G, [
            w(e(j), {
              icon: o.icon,
              size: 16
            }, null, 8, ["icon"])
          ])) : f("", !0),
          A(o.message) ? (s(), i(D(o.message), { key: 1 })) : (s(), r("div", H, p(o.message), 1)),
          o.close ? (s(), r("div", {
            key: 3,
            class: "v-message__close",
            onClick: t[0] || (t[0] = (...n) => e(m) && e(m)(...n))
          }, [
            e(I)(o.closeBtn) ? (s(), r(E, { key: 0 }, [
              P(p(o.closeBtn), 1)
            ], 64)) : (s(), i(e(q), {
              key: 1,
              icon: o.closeBtn,
              size: 15,
              color: "#a4a4a4"
            }, null, 8, ["icon"]))
          ])) : f("", !0)
        ], 38), [
          [h, e(k)]
        ])
      ]),
      _: 1
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
export {
  $ as default
};
