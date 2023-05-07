import { defineComponent as g, useSlots as $, computed as f, provide as y, reactive as z, openBlock as O, createElementBlock as T, normalizeStyle as k, unref as s, createVNode as h, withCtx as V, renderSlot as R, isRef as _ } from "vue";
import { Props as B, SELECT_PROPS_TOKEN as D } from "./index3.js";
import { VInput as I } from "../../input/index.js";
import { getChildren as N } from "../../_utils/get-children/index.js";
import { EMIT_UPDATE as v } from "../../_tokens/emits/index.js";
import { useList as U } from "../../_hooks/use-list/index.js";
import { useRun as A } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VDropdown as K } from "../../dropdown/index.js";
const L = g({
  name: "VSelect"
}), Y = /* @__PURE__ */ g({
  ...L,
  props: B,
  emits: {
    [v]: (i) => !!i
  },
  setup(i, { emit: S }) {
    const l = i, a = $(), { run: b } = A(), { styles: C } = U(l, "select"), u = f(() => a.default ? N(a.default(), "VOption") : []), r = f({
      get: () => {
        var p, m;
        if (!u.value.length)
          return "";
        const e = u.value.filter((c) => {
          const n = c.props;
          return n ? n.value ? `${n.value}` == `${l.modelValue}` : `${n.label}` == `${l.modelValue}` : c.children.default()[0].children === l.modelValue;
        });
        if (!e.length)
          return "";
        const t = e[0], o = t.children && t.children.default()[0].children, P = (p = t.props) == null ? void 0 : p.label, d = (m = t.props) == null ? void 0 : m.value;
        return o || P || d && d.toString() || "";
      },
      set: (e) => e
    });
    y(D, z({ setValue: (e, t, o) => {
      r.value = e.toString(), t !== l.modelValue && b(l.onChange, t, e, o), S(v, t);
    } }));
    const E = C(["width"]);
    return (e, t) => (O(), T("div", {
      class: "v-select",
      style: k(s(E))
    }, [
      h(s(K), {
        trigger: "click",
        disabled: e.disabled
      }, {
        content: V(() => [
          R(e.$slots, "default")
        ]),
        default: V(() => [
          h(s(I), {
            modelValue: s(r),
            "onUpdate:modelValue": t[0] || (t[0] = (o) => _(r) ? r.value = o : null),
            name: e.name,
            size: e.size,
            disabled: e.disabled,
            placeholder: e.placeholder,
            clear: e.clear
          }, null, 8, ["modelValue", "name", "size", "disabled", "placeholder", "clear"])
        ]),
        _: 3
      }, 8, ["disabled"])
    ], 4));
  }
});
export {
  Y as default
};
