import { defineComponent as d, ref as v, onMounted as k, computed as b, withDirectives as f, openBlock as h, createElementBlock as _, normalizeClass as E, normalizeStyle as g, unref as C, withModifiers as S, renderSlot as w, vShow as y } from "vue";
import { Props as z, Emits as T } from "./index3.js";
import { sizeChange as i, debounce as B } from "../../_utils/index3.js";
const L = ["onClick"], N = d({
  name: "VBackTop"
}), D = /* @__PURE__ */ d({
  ...N,
  props: z,
  emits: T,
  setup(a, { emit: u }) {
    const t = a, r = v(!1), c = (o) => B(() => {
      const e = (o || document.documentElement).scrollTop;
      r.value = e > t.visibleHeight;
    }, 200), p = (o) => {
      const { top: e, behavior: n, listenEl: l } = t;
      if (l) {
        document.querySelector(
          l
        ).scrollTo({
          top: e,
          behavior: n
        });
        return;
      }
      window.scrollTo({
        top: e,
        behavior: n
      }), u("click", o);
    };
    k(() => {
      if (t.listenEl) {
        const o = document.querySelector(
          t.listenEl
        );
        o.addEventListener(
          "scroll",
          c(o)
        );
      }
      document.addEventListener("scroll", c(null));
    });
    const m = b(() => {
      const { right: o, bottom: e, zIndex: n, background: l, color: s } = t;
      return {
        "--v-back-top-right": i(o),
        "--v-back-top-bottom": i(e),
        "--v-back-top-z-index": n,
        "--v-back-top-background": l,
        "--v-back-top-color": s
      };
    });
    return (o, e) => f((h(), _("div", {
      class: E(["v-back-top", { "v-back-top__round": o.round }]),
      style: g(C(m)),
      onClick: S(p, ["stop"])
    }, [
      w(o.$slots, "default")
    ], 14, L)), [
      [y, r.value]
    ]);
  }
});
export {
  D as default
};
