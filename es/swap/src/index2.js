import { defineComponent as t, openBlock as p, createElementBlock as u, normalizeClass as f, unref as s, createVNode as d } from "vue";
import { Props as V } from "./index3.js";
import { VSvgIcon as C } from "../../svg-icon/index.js";
import { EMIT_UPDATE as r } from "../../_tokens/emits/index.js";
import { useList as _ } from "../../_hooks/use-list/index.js";
import { useRun as h } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const k = t({
  name: "VSwap"
}), O = /* @__PURE__ */ t({
  ...k,
  props: V,
  emits: {
    [r]: (n) => typeof n == "boolean"
  },
  setup(n, { emit: i }) {
    const e = n, { run: l } = h(), { classes: m } = _(e, "swap"), a = (o) => {
      i(r, !e.modelValue), l(e.onChange, o, !e.modelValue);
    }, c = m(["type", "modelValue"], "v-swap");
    return (o, w) => (p(), u("div", {
      role: "switch",
      class: f(s(c)),
      onClick: a
    }, [
      d(s(C), {
        icon: o.modelValue ? o.iconOn : o.iconOff,
        size: o.size
      }, null, 8, ["icon", "size"])
    ], 2));
  }
});
export {
  O as default
};
