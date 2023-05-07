import { defineComponent as n, provide as f, reactive as d, toRefs as _, openBlock as g, createElementBlock as R, normalizeClass as E, unref as t, normalizeStyle as P, renderSlot as k } from "vue";
import { Props as y, RADIO_GROUP_PROPS_kEY as G } from "./index3.js";
import { isString as S, isNumber as h, isBoolean as v } from "../../_utils/is/index.js";
import { EMIT_UPDATE as s } from "../../_tokens/emits/index.js";
import { useList as z } from "../../_hooks/use-list/index.js";
import { useRun as B } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const C = n({
  name: "VRadioGroup"
}), x = /* @__PURE__ */ n({
  ...C,
  props: y,
  emits: {
    [s]: (o) => S(o) || h(o) || v(o)
  },
  setup(o, { emit: i }) {
    const e = o, { run: p } = B(), { styles: a, classes: m } = z(e, "radio-group"), c = (r) => {
      i(s, r), p(e.onChange, r);
    }, l = m(["vertical", "background", "size"], "v-radio-group"), u = a(["columnGap", "rowGap"]);
    return f(
      G,
      d({
        ..._(e),
        changeEvent: c
      })
    ), (r, L) => (g(), R("div", {
      role: "radiogroup",
      class: E(t(l)),
      style: P(t(u))
    }, [
      k(r.$slots, "default")
    ], 6));
  }
});
export {
  x as default
};
