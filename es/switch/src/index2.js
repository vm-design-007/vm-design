import { defineComponent as p, openBlock as o, createElementBlock as l, normalizeClass as s, normalizeStyle as k, unref as r, toDisplayString as a, createCommentVNode as c, createElementVNode as n, createBlock as y } from "vue";
import { Props as C } from "./index3.js";
import { VSvgIcon as z } from "../../svg-icon/index.js";
import { EMIT_UPDATE as m } from "../../_tokens/emits/index.js";
import { useList as g } from "../../_hooks/use-list/index.js";
import { useRun as S } from "../../_hooks/use-run/index.js";
import { useGlobal as T } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const b = p({
  name: "VSwitch"
}), M = /* @__PURE__ */ p({
  ...b,
  props: C,
  emits: {
    [m]: (i) => String(i)
  },
  setup(i, { emit: u }) {
    const t = i, { run: d } = S(), { getProp: v } = T(t), { styles: h, classes: _ } = g(v(["size"]), "switch"), f = () => {
      t.disabled || (u(m, !t.modelValue), d(t.onChange, !t.modelValue));
    }, w = h(["closeColor", "activeColor"]), V = _(["size", "square"], "v-switch__input");
    return (e, E) => (o(), l("div", {
      role: "switch",
      class: s(["v-switch", { "v-switch__disabled": e.disabled }]),
      style: k(r(w))
    }, [
      e.closeText ? (o(), l("span", {
        key: 0,
        class: s(["v-switch__right-text", { "v-switch__text-active": !e.modelValue }])
      }, a(e.closeText), 3)) : c("", !0),
      n("div", {
        class: s([r(V), { "v-switch__active": e.modelValue }]),
        onClick: f
      }, [
        n("span", {
          class: s(["v-switch__roll", { "v-switch__roll-active": e.modelValue }])
        }, [
          e.icon ? (o(), y(r(z), {
            key: 0,
            icon: e.icon,
            size: e.iconSize
          }, null, 8, ["icon", "size"])) : c("", !0)
        ], 2)
      ], 2),
      e.activeText ? (o(), l("span", {
        key: 1,
        class: s(["v-switch__left-text", { "v-switch__text-active": e.modelValue }])
      }, a(e.activeText), 3)) : c("", !0)
    ], 6));
  }
});
export {
  M as default
};
