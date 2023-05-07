import { defineComponent as f, ref as a, onMounted as h, openBlock as k, createElementBlock as b, normalizeClass as L, unref as s, normalizeStyle as o, createElementVNode as i } from "vue";
import { Props as x } from "./index3.js";
import { isNumber as C } from "../../_utils/is/index.js";
import { EMIT_UPDATE as P } from "../../_tokens/emits/index.js";
import { useList as S } from "../../_hooks/use-list/index.js";
import { useSlider as V } from "../../_hooks/use-slider/index.js";
import "../../loading/src/index2.js";
import { useOffset as g } from "../../_hooks/use-offset/index.js";
import "../../_hooks/use-message/index.js";
const w = { class: "v-slider__road" }, z = f({
  name: "VSlider"
}), U = /* @__PURE__ */ f({
  ...z,
  props: x,
  emits: {
    [P]: (t) => C(t)
  },
  setup(t, { emit: p }) {
    const e = t, { styles: u, classes: _ } = S(e, "slider"), r = a(), l = a(), { offset: n, offsetLeft: v, setPosition: c } = g(r, e, p);
    h(() => {
      l.value && (V(l.value, v, (d) => {
        if (e.disabled)
          return;
        const m = d * 100 / r.value.clientWidth;
        c(m);
      }), c((e.modelValue - e.min) * 100 / (e.max - e.min)));
    });
    const y = _(["disabled"], "v-slider"), E = u(["background", "activeColor", "width"]);
    return (d, m) => (k(), b("div", {
      ref_key: "sliderEl",
      ref: r,
      role: "slider",
      class: L(s(y)),
      style: o(s(E))
    }, [
      i("div", w, [
        i("div", {
          class: "v-slider__selected",
          style: o(`width: ${s(n)}%`)
        }, null, 4),
        i("div", {
          ref_key: "circleEl",
          ref: l,
          class: "v-slider__icon",
          style: o(`left: ${s(n)}%`)
        }, null, 4)
      ])
    ], 6));
  }
});
export {
  U as default
};
