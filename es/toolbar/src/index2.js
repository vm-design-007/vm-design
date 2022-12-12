import { defineComponent as c, computed as n, openBlock as _, createElementBlock as f, normalizeClass as h, unref as a, normalizeStyle as k, renderSlot as b } from "vue";
import { Props as y, Emits as C } from "./index3.js";
const x = c({
  name: "VToolbar"
}), P = /* @__PURE__ */ c({
  ...x,
  props: y,
  emits: C,
  setup(l, { emit: i }) {
    const r = l, d = n(() => {
      const { size: o, round: e, fixed: t } = r;
      return [
        "v-toolbar",
        {
          [`v-toolbar__${o}`]: o,
          "v-toolbar__round": e,
          "v-toolbar__fixed": t
        }
      ];
    }), m = n(() => {
      const { textColor: o, background: e, width: t, height: s } = r;
      return {
        color: o,
        background: e,
        width: t,
        height: s
      };
    }), p = (o) => {
      const t = (o.path || o.composedPath && o.composedPath() || []).find(
        (u) => u.className === "v-toolbar-item"
      ), s = t ? t.dataset.key : "";
      i("click", { evt: o, key: s });
    };
    return (o, e) => (_(), f("div", {
      class: h(a(d)),
      style: k(a(m)),
      onClick: p
    }, [
      b(o.$slots, "default")
    ], 6));
  }
});
export {
  P as default
};
