import { defineComponent as s, ref as m, computed as v, onMounted as d, openBlock as w, createElementBlock as _, normalizeStyle as N, toDisplayString as b, unref as g } from "vue";
import { Props as y } from "./index3.js";
import { isNumber as i } from "../../_utils/is/index.js";
import { useRun as A } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const S = s({
  name: "VNumberAnimate"
}), z = /* @__PURE__ */ s({
  ...S,
  props: y,
  setup(l, { expose: c }) {
    const e = l, { run: f } = A(), t = m(e.from), r = m(!1), a = (n) => {
      r.value && (t.value = e.from, r.value = !1);
      const o = Number(e.to);
      if (!(!i(Number(t.value)) || !i(o))) {
        if (t.value += o / e.approximateTime * 20, t.value >= o) {
          t.value = o, f(e.onAnimationEnd, n);
          return;
        }
        window && window.requestAnimationFrame(a);
      }
    }, p = v(() => e.localeString ? t.value.toLocaleString() : t.value), u = (n = !0) => {
      r.value = n, window && window.requestAnimationFrame(a);
    };
    return d(() => {
      e.automatic && u(!1);
    }), c({ run: () => {
      u();
    } }), (n, o) => (w(), _("div", {
      class: "v-number-animate",
      style: N(n.styles)
    }, b(g(p)), 5));
  }
});
export {
  z as default
};
