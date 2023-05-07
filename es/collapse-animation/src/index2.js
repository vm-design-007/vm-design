import { defineComponent as n, computed as f, openBlock as y, createBlock as g, Transition as m, withCtx as u, withDirectives as _, createElementVNode as v, renderSlot as w, vShow as x, unref as B } from "vue";
import { Props as E } from "./index3.js";
const H = { class: "v-collapse-animation" }, A = n({
  name: "VCollapseAnimation"
}), $ = /* @__PURE__ */ n({
  ...A,
  props: E,
  setup(s) {
    const e = s, i = e.opened, r = f(() => e.disabled ? i : e.opened), o = "0.3s height ease-in-out", c = (t) => {
      t.style.transition = o, t.style.height = "0";
    }, l = (t) => {
      t.scrollHeight !== 0 ? t.style.height = `${t.scrollHeight}px` : t.style.height = "", t.style.overflow = "hidden";
    }, a = (t) => {
      t.style.transition = "", t.style.height = "";
    }, h = (t) => {
      t.style.height = `${t.scrollHeight}px`;
    }, p = (t) => {
      t.scrollHeight !== 0 && (t.style.transition = o, t.style.height = "0");
    }, d = (t) => {
      t.style.transition = "", t.style.height = "";
    };
    return (t, C) => (y(), g(m, {
      onBeforeEnter: c,
      onEnter: l,
      onAfterEnter: a,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: d
    }, {
      default: u(() => [
        _(v("div", H, [
          w(t.$slots, "default")
        ], 512), [
          [x, B(r)]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  $ as default
};
