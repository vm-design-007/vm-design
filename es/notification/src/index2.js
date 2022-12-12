import { defineComponent as z, computed as n, ref as m, onMounted as M, nextTick as O, openBlock as o, createBlock as c, Transition as A, unref as i, withCtx as F, withDirectives as H, createElementVNode as _, normalizeClass as P, normalizeStyle as j, createElementBlock as l, isVNode as g, resolveDynamicComponent as y, createCommentVNode as h, toDisplayString as k, Fragment as q, createTextVNode as x, vShow as G } from "vue";
import { VCloseBtn as J } from "../../close-btn/index.js";
import { isString as K } from "../../_utils/index3.js";
import { Props as Q, Emits as U } from "./index3.js";
import { notificationDefaultIcon as W } from "../../_model/notification/index2.js";
import { massageManage as V } from "../../_model/notification/index.js";
const X = {
  key: 0,
  class: "v-notification__icon"
}, Y = { class: "v-notification__info" }, Z = { class: "v-notification__title" }, ee = {
  key: 1,
  class: "v-notification__title-text"
}, te = {
  key: 1,
  class: "v-notification__text"
}, oe = z({
  name: "VMessage"
}), re = /* @__PURE__ */ z({
  ...oe,
  props: Q,
  emits: U,
  setup(S, { expose: w }) {
    const e = S, u = n(
      () => e.icon ? e.icon : e.type ? W[e.type] : null
    ), C = m(), B = m(0), r = m(!1), D = n(
      () => e.placement.includes("top")
    ), E = n(
      () => e.placement.includes("right")
    ), I = n(
      () => V.getSiblingOffset(e.placement, e.id, !D.value)
    ), v = n(
      () => e.offset + I.value
    ), L = n(
      () => B.value + v.value
    );
    M(() => {
      O(() => {
        B.value = C.value.getBoundingClientRect().height;
      });
    });
    const N = n(() => {
      const { type: t, round: s, close: f, placement: a } = e;
      return [
        "v-notification",
        {
          [`v-notification__${t}`]: t,
          [`v-notification__${a}`]: a,
          "v-notification__round": s,
          "v-notification__hasClose": f
        }
      ];
    }), R = n(() => {
      const { color: t, background: s, zIndex: f } = e, a = {
        color: t,
        background: s,
        zIndex: f
      };
      return e.placement.includes("bottom") ? a.bottom = v.value + "px" : a.top = v.value + "px", a;
    }), d = m(), T = () => {
      !d.value || clearTimeout(d.value);
    }, p = () => {
      T(), r.value = !1;
    }, $ = () => {
      V.removeInstance(e.placement, e.id);
    }, b = () => {
      !e.duration || (d.value = setTimeout(() => {
        p();
      }, e.duration));
    };
    return M(() => {
      b(), r.value = !0;
    }), w({
      visible: r,
      bottom: L,
      close: p
    }), (t, s) => (o(), c(A, {
      mode: "out-in",
      name: "v-notification-fade" + (i(E) ? "-right" : "-left"),
      onBeforeLeave: $,
      onAfterLeave: s[0] || (s[0] = (f) => t.$emit("destroy"))
    }, {
      default: F(() => [
        H(_("div", {
          ref_key: "notificationRef",
          ref: C,
          class: P(i(N)),
          style: j(i(R)),
          onMouseleave: b,
          onMouseenter: T
        }, [
          t.showIcon && i(u) ? (o(), l("div", X, [
            g(i(u)) ? (o(), c(y(i(u)), {
              key: 0,
              size: 28
            })) : h("", !0)
          ])) : h("", !0),
          _("div", Y, [
            _("div", Z, [
              g(t.title) ? (o(), c(y(t.title), { key: 0 })) : (o(), l("h3", ee, k(t.title), 1))
            ]),
            g(t.message) ? (o(), c(y(t.message), { key: 0 })) : (o(), l("div", te, k(t.message), 1))
          ]),
          e.close ? (o(), l("div", {
            key: 1,
            class: "v-notification__close",
            onClick: p
          }, [
            i(K)(t.closeBtn) ? (o(), l(q, { key: 0 }, [
              x(k(t.closeBtn), 1)
            ], 64)) : (o(), c(i(J), {
              key: 1,
              size: 16
            }))
          ])) : h("", !0)
        ], 38), [
          [G, r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  re as default
};
