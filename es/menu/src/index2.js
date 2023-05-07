import { defineComponent as c, ref as f, computed as _, provide as p, toRef as v, openBlock as t, createElementBlock as s, normalizeClass as k, unref as C, renderSlot as n, createCommentVNode as m, createElementVNode as b } from "vue";
import { Props as E, MENU_PROVIDE_KEY as N } from "./index3.js";
import { useList as $ } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const h = {
  key: 0,
  class: "v-menu__before"
}, M = { class: "v-menu__content" }, V = {
  key: 1,
  class: "v-menu__after"
}, I = c({
  name: "VMenu"
}), R = /* @__PURE__ */ c({
  ...I,
  props: E,
  setup(l) {
    const o = l, { classes: a } = $(o, "menu"), r = f(o.activeName), u = _(() => r.value), i = (e) => {
      r.value = e;
    };
    p(N, {
      mode: v(o, "mode"),
      defaultActive: u,
      setActiveName: i,
      onMenuItemClick: o.onMenuItemClick,
      onSubmenuClick: o.onSubmenuClick
    });
    const d = a(["mode"], "v-menu");
    return (e, S) => (t(), s("div", {
      role: "menu",
      class: k(C(d))
    }, [
      e.$slots.before ? (t(), s("div", h, [
        n(e.$slots, "before")
      ])) : m("", !0),
      b("div", M, [
        n(e.$slots, "default")
      ]),
      e.$slots.after ? (t(), s("div", V, [
        n(e.$slots, "after")
      ])) : m("", !0)
    ], 2));
  }
});
export {
  R as default
};
