import { defineComponent as h, computed as P, watch as g, openBlock as S, createElementBlock as m, toDisplayString as x, unref as _, createCommentVNode as B, renderSlot as F, normalizeProps as R, guardReactiveProps as V } from "vue";
import { Props as $ } from "./index3.js";
import { useRun as z } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { useCountDown as A } from "../../_hooks/use-count-down/index.js";
const E = { class: "v-count-down" }, N = {
  key: 0,
  class: "v-count-down__text"
}, T = h({
  name: "VCountDown"
}), J = /* @__PURE__ */ h({
  ...T,
  props: $,
  setup(D, { expose: v }) {
    const s = D, { run: w } = z(), { start: u, pause: C, reset: p, current: i } = A({
      time: +s.time,
      millisecond: s.millisecond,
      onFinish: () => {
        w(s.onFinish);
      }
    }), H = (e, l) => {
      const { days: d } = l;
      let { hours: c, minutes: o, seconds: r, milliseconds: a } = l;
      const n = (t, y = 2) => (t + "").padStart(y, "0");
      if (e.includes("DD") ? e = e.replace("DD", n(d)) : c += d * 24, e.includes("HH") ? e = e.replace("HH", n(c)) : o += c * 60, e.includes("mm") ? e = e.replace("mm", n(o)) : r += o * 60, e.includes("ss") ? e = e.replace("ss", n(r)) : a += r * 1e3, e.includes("S")) {
        const t = n(a, 3);
        e.includes("SSS") ? e = e.replace("SSS", t) : e.includes("SS") ? e = e.replace("SS", t.slice(0, 2)) : e = e.replace("S", t.charAt(0));
      }
      return e;
    }, k = P(() => H(s.format, i.value));
    return g(
      () => s.time,
      () => {
        p(+s.time), s.autoStart && u();
      },
      { immediate: !0 }
    ), v({ start: u, pause: C, reset: p, current: i }), (e, l) => (S(), m("div", E, [
      e.$slots.default ? B("", !0) : (S(), m("span", N, x(_(k)), 1)),
      F(e.$slots, "default", R(V(_(i))))
    ]));
  }
});
export {
  J as default
};
