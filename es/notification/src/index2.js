import { defineComponent as g, computed as T, openBlock as t, createBlock as a, Transition as w, unref as e, withCtx as z, withDirectives as A, createElementVNode as u, normalizeClass as D, normalizeStyle as M, createElementBlock as n, createVNode as E, createCommentVNode as l, Fragment as v, isVNode as y, resolveDynamicComponent as V, toDisplayString as m, createTextVNode as P, vShow as W } from "vue";
import { Props as F } from "./index3.js";
import { isString as U } from "../../_utils/is/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { useMessageWork as j } from "../../_hooks/use-message-work/index.js";
import { VSvgIcon as q } from "../../svg-icon/index.js";
import { VCloseBtn as G } from "../../close-btn/index.js";
import H from "../../_svg/v-icon-circle-cross/index.js";
import J from "../../_svg/v-icon-lightbulb/index.js";
import K from "../../_svg/v-icon-smile-line/index.js";
import O from "../../_svg/v-icon-thumb-up/index.js";
import Q from "../../_svg/v-icon-warning/index.js";
import R from "../../_svg/v-icon-bell/index.js";
const X = {
  key: 0,
  class: "v-notification__icon"
}, Y = { class: "v-notification__content" }, Z = {
  key: 1,
  class: "v-notification__title"
}, $ = {
  key: 2,
  class: "v-notification__message"
}, x = g({
  name: "VNotification"
}), ue = /* @__PURE__ */ g({
  ...x,
  props: F,
  setup(k, { expose: B }) {
    const r = k, {
      classList: C,
      styleList: L,
      visible: _,
      isPosition: I,
      offsetStyle: h,
      offsetVal: S,
      onBeforeLeave: N,
      onAfterLeave: b,
      clearTimer: c,
      startTime: f,
      handelClose: p
    } = j(r, "notification"), d = T(() => r.icon ? r.icon : {
      default: K,
      primary: J,
      success: O,
      danger: H,
      warning: Q,
      info: R
    }[r.type]);
    return B({ offsetVal: S }), (o, i) => (t(), a(w, {
      mode: "out-in",
      name: "v-notification-fade" + (e(I) ? "-right" : "-left"),
      onBeforeLeave: e(N),
      onAfterLeave: e(b)
    }, {
      default: z(() => [
        A(u("div", {
          class: D(e(C)),
          style: M([e(h), e(L)]),
          onMouseleave: i[1] || (i[1] = (...s) => e(f) && e(f)(...s)),
          onMouseenter: i[2] || (i[2] = (...s) => e(c) && e(c)(...s))
        }, [
          e(d) ? (t(), n("div", X, [
            E(e(q), {
              icon: e(d),
              size: 25
            }, null, 8, ["icon"])
          ])) : l("", !0),
          u("div", Y, [
            o.title ? (t(), n(v, { key: 0 }, [
              y(o.title) ? (t(), a(V(o.title), { key: 0 })) : (t(), n("h3", Z, m(o.title), 1))
            ], 64)) : l("", !0),
            y(o.message) ? (t(), a(V(o.message), { key: 1 })) : (t(), n("div", $, m(o.message), 1))
          ]),
          o.close ? (t(), n("div", {
            key: 1,
            class: "v-notification__close",
            onClick: i[0] || (i[0] = (...s) => e(p) && e(p)(...s))
          }, [
            e(U)(o.closeBtn) ? (t(), n(v, { key: 0 }, [
              P(m(o.closeBtn), 1)
            ], 64)) : (t(), a(e(G), {
              key: 1,
              icon: o.closeBtn,
              size: 15,
              color: "#a4a4a4"
            }, null, 8, ["icon"]))
          ])) : l("", !0)
        ], 38), [
          [W, e(_)]
        ])
      ]),
      _: 1
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
export {
  ue as default
};
