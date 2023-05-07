import { defineComponent as c, computed as g, openBlock as f, createElementBlock as y, normalizeClass as b, unref as e, createBlock as h, createSlots as _, withCtx as p, renderSlot as o, createCommentVNode as $, createElementVNode as k } from "vue";
import { Props as C } from "./index.js";
import E from "../components/tabs-nav/index2.js";
import { isNumber as N, isString as S } from "../../_utils/is/index.js";
import { EMIT_UPDATE as w } from "../../_tokens/emits/index.js";
import { useTabs as T } from "../../_hooks/use-tabs/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const j = { class: "v-tabs__content" }, B = c({
  name: "VTabs"
}), q = /* @__PURE__ */ c({
  ...B,
  props: C,
  emits: {
    [w]: (s) => N(s) || S(s)
  },
  setup(s, { expose: u, emit: l }) {
    const i = s, { navs: n, activeName: r, setEdit: d, setActiveName: v } = T(i, l), a = g(() => {
      const { position: t, type: m } = i;
      return m === "segment" && (t === "right" || t === "left") ? "top" : t;
    });
    return u({ activeName: r }), (t, m) => (f(), y("div", {
      role: "tab",
      class: b(["v-tabs", `v-tabs__${e(a)}`])
    }, [
      e(n).length ? (f(), h(e(E), {
        key: 0,
        navs: e(n),
        type: t.type,
        "active-name": e(r),
        position: e(a),
        "edit-status": t.editStatus,
        "justify-content": t.justifyContent,
        trigger: t.trigger,
        "set-edit": e(d),
        "set-active-name": e(v),
        "on-switch": t.onSwitch
      }, _({ _: 2 }, [
        t.$slots.prefix ? {
          name: "prefix",
          fn: p(() => [
            o(t.$slots, "prefix")
          ]),
          key: "0"
        } : void 0,
        t.$slots.suffix ? {
          name: "suffix",
          fn: p(() => [
            o(t.$slots, "suffix")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["navs", "type", "active-name", "position", "edit-status", "justify-content", "trigger", "set-edit", "set-active-name", "on-switch"])) : $("", !0),
      k("div", j, [
        o(t.$slots, "default")
      ])
    ], 2));
  }
});
export {
  q as default
};
