import { defineComponent as p, ref as k, computed as C, unref as s, openBlock as a, createElementBlock as l, normalizeStyle as x, renderSlot as i, createCommentVNode as h, createElementVNode as n, createVNode as T, withCtx as V, normalizeClass as g, toDisplayString as S } from "vue";
import { Props as b } from "./index3.js";
import { useList as L } from "../../_hooks/use-list/index.js";
import { useRun as N } from "../../_hooks/use-run/index.js";
import { useGlobal as $ } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VCollapseAnimation as z } from "../../collapse-animation/index.js";
const B = {
  key: 0,
  class: "v-sticky-card__source"
}, E = { class: "v-sticky-card__box" }, O = { class: "v-sticky-card__option-text" }, w = p({
  name: "VStickyCard"
}), H = /* @__PURE__ */ p({
  ...w,
  props: b,
  setup(d) {
    const o = d, { getLang: u } = $(), { run: m } = N(), { styles: _ } = L(o, "sticky-card"), e = k(o.open), v = () => {
      e.value = !e.value, m(e.value ? o.onClose : o.onOpen, e.value);
    }, y = C(() => {
      const { openText: t, closeText: r } = o, c = u("stickyCard").value;
      return s(e) ? t || c.openText : r || c.closeText;
    }), f = _(["borderColor"]);
    return (t, r) => (a(), l("div", {
      class: "v-sticky-card",
      style: x(s(f))
    }, [
      t.$slots.source ? (a(), l("div", B, [
        i(t.$slots, "source")
      ])) : h("", !0),
      n("div", E, [
        T(s(z), { opened: e.value }, {
          default: V(() => [
            i(t.$slots, "default")
          ]),
          _: 3
        }, 8, ["opened"])
      ]),
      n("div", {
        class: g(["v-sticky-card__option", { "v-sticky-card__option-open": e.value }]),
        onClick: v
      }, [
        n("span", O, S(s(y)), 1)
      ], 2)
    ], 4));
  }
});
export {
  H as default
};
