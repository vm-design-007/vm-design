import { defineComponent as S, ref as m, computed as n, onMounted as C, nextTick as I, openBlock as t, createBlock as a, Transition as R, unref as l, withCtx as d, withDirectives as O, createElementVNode as A, normalizeClass as F, normalizeStyle as H, isVNode as T, resolveDynamicComponent as g, createCommentVNode as M, createElementBlock as p, toDisplayString as V, Fragment as P, createTextVNode as j, vShow as q } from "vue";
import { VSvgIcon as x } from "../../svg-icon/index.js";
import { VCloseBtn as G } from "../../close-btn/index.js";
import { Props as J, Emits as K } from "./index3.js";
import { isString as Q } from "../../_utils/index3.js";
import { massageManage as h } from "../../_model/message/index.js";
const U = {
  key: 2,
  class: "v-message__text"
}, W = S({
  name: "VMessage"
}), oe = /* @__PURE__ */ S({
  ...W,
  props: J,
  emits: K,
  setup(z, { expose: E }) {
    const s = z, y = m(), _ = m(0), r = m(!1), k = n(
      () => s.placement.includes("top")
    ), L = n(
      () => h.getSiblingOffset(s.placement, s.id, !k.value)
    ), c = n(
      () => s.offset + L.value
    ), N = n(
      () => _.value + c.value
    );
    C(() => {
      I(() => {
        _.value = y.value.getBoundingClientRect().height;
      });
    });
    const $ = n(() => {
      const { type: e, round: o, placement: i } = s;
      return [
        "v-message",
        {
          [`v-message__${e}`]: e,
          [`v-message__${i}`]: i,
          "v-message__round": o
        }
      ];
    }), w = n(() => {
      const { color: e, background: o, zIndex: i } = s, v = {
        color: e,
        background: o,
        zIndex: i
      };
      return s.placement.includes("bottom") ? v.bottom = c.value + "px" : v.top = c.value + "px", v;
    }), u = m(), B = () => {
      !u.value || clearTimeout(u.value);
    }, f = () => {
      B(), r.value = !1;
    }, D = () => {
      h.removeInstance(s.placement, s.id);
    }, b = () => {
      !s.duration || (u.value = setTimeout(() => {
        f();
      }, s.duration));
    };
    return C(() => {
      b(), r.value = !0;
    }), E({
      visible: r,
      bottom: N,
      close: f
    }), (e, o) => (t(), a(R, {
      mode: "out-in",
      name: "v-message-fade" + (l(k) ? "-top" : "-bottom"),
      onBeforeLeave: D,
      onAfterLeave: o[0] || (o[0] = (i) => e.$emit("destroy"))
    }, {
      default: d(() => [
        O(A("div", {
          ref_key: "messageRef",
          ref: y,
          class: F(l($)),
          style: H(l(w)),
          onMouseleave: b,
          onMouseenter: B
        }, [
          T(e.icon) ? (t(), a(l(x), {
            key: 0,
            size: 24,
            class: "v-message__icon"
          }, {
            default: d(() => [
              (t(), a(g(e.icon)))
            ]),
            _: 1
          })) : M("", !0),
          T(e.message) ? (t(), a(g(e.message), { key: 1 })) : (t(), p("div", U, V(e.message), 1)),
          s.close ? (t(), p("div", {
            key: 3,
            class: "v-message__close",
            onClick: f
          }, [
            l(Q)(e.closeBtn) ? (t(), p(P, { key: 0 }, [
              j(V(e.closeBtn), 1)
            ], 64)) : (t(), a(l(G), {
              key: 1,
              size: 16
            }, {
              default: d(() => [
                (t(), a(g(e.closeBtn)))
              ]),
              _: 1
            }))
          ])) : M("", !0)
        ], 38), [
          [q, r.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
export {
  oe as default
};
