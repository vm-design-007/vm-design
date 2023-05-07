import { defineComponent as m, ref as C, computed as L, unref as s, openBlock as o, createElementBlock as a, normalizeClass as u, normalizeStyle as d, Fragment as E, renderList as I, toDisplayString as S, createCommentVNode as p } from "vue";
import { Props as b } from "./index3.js";
import { isArray as z, isString as A, isObject as B } from "../../_utils/is/index.js";
import { useList as V } from "../../_hooks/use-list/index.js";
import { useRun as j } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const w = ["onClick"], D = {
  key: 0,
  class: "v-expand-card__title"
}, F = m({
  name: "VExpandCard"
}), H = /* @__PURE__ */ m({
  ...F,
  props: b,
  setup(_) {
    const n = _, { classes: f, styles: v } = V(n, "expand-card"), { run: x } = j(), l = C(n.expandIndex), g = (e, r, t) => {
      l.value = r, x(n.onChange, e, r, t);
    }, i = L(() => {
      const { imageList: e } = n;
      return z(e) ? e.map(
        (r) => A(r) ? { url: r } : B(r) && r.url ? r : { url: "" }
      ) : [];
    }), y = f(["round", "vertical"], "v-expand-card"), h = v(["width", "height", "color"]);
    return (e, r) => s(i).length ? (o(), a("div", {
      key: 0,
      class: u(s(y)),
      style: d(s(h))
    }, [
      (o(!0), a(E, null, I(s(i), (t, c) => (o(), a("div", {
        key: c,
        class: u([
          "v-expand-card__item",
          { "v-expand-card__active": c === l.value }
        ]),
        style: d({ backgroundImage: `url(${t.url})` }),
        onClick: (k) => g(k, c, t)
      }, [
        t.text ? (o(), a("div", D, S(t.text), 1)) : p("", !0)
      ], 14, w))), 128))
    ], 6)) : p("", !0);
  }
});
export {
  H as default
};
