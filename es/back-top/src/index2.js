import { defineComponent as c, ref as f, onMounted as h, openBlock as b, createBlock as k, Transition as _, withCtx as E, withDirectives as w, createElementVNode as S, normalizeClass as g, unref as i, normalizeStyle as y, withModifiers as C, renderSlot as L, vShow as T, toRefs as x } from "vue";
import { Props as z } from "./index3.js";
import { debounce as N } from "../../_utils/utils/index.js";
import { isString as B, isNumber as H } from "../../_utils/is/index.js";
import { useList as q } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const I = ["onClick"], M = c({
  name: "VBackTop"
}), F = /* @__PURE__ */ c({
  ...M,
  props: z,
  setup(a) {
    const o = a, { styles: d, classes: u } = q(o, "back-top"), n = f(!1), l = (e) => N(() => {
      const t = (e || document.documentElement).scrollTop, s = H(o.visibleHeight) ? o.visibleHeight : 200;
      n.value = t > s;
    }, 200), m = () => {
      const { top: e, behavior: t, listenEl: s } = x(o);
      if (s.value) {
        const r = document.querySelector(s.value);
        r && r.scrollTo({ top: e.value, behavior: t.value });
        return;
      }
      window && window.scrollTo({ top: e.value, behavior: t.value });
    };
    h(() => {
      if (o.listenEl) {
        if (!B(o.listenEl)) {
          document.addEventListener("scroll", l());
          return;
        }
        const e = document.querySelector(o.listenEl);
        e && e.addEventListener("scroll", l(e));
      } else
        document.addEventListener("scroll", l());
    });
    const p = d(["right", "bottom", "background", "color", "zIndex"], "zIndex"), v = u(["round"], "v-back-top");
    return (e, t) => (b(), k(_, { name: "v-back-top" }, {
      default: E(() => [
        w(S("div", {
          class: g(i(v)),
          style: y(i(p)),
          onClick: C(m, ["stop"])
        }, [
          L(e.$slots, "default")
        ], 14, I), [
          [T, n.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  F as default
};
