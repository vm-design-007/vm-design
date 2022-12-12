import { defineComponent as y, ref as s, onMounted as w, computed as u, openBlock as p, createElementBlock as _, normalizeClass as v, normalizeStyle as f, unref as l, withDirectives as z, createElementVNode as h, vShow as C, renderSlot as D, toDisplayString as P } from "vue";
import { Props as V, Emits as E } from "./index3.js";
import { loadImage as A } from "../../_utils/index2.js";
import { sizeChange as i } from "../../_utils/index3.js";
import { useFilterProps as B } from "../../_hooks/use-filter-props/index.js";
const F = ["draggable", "referrer-policy", "alt", "title"], L = {
  key: 1,
  class: "v-image__error"
}, M = { class: "v-image__error-text" }, N = y({
  name: "VImage"
}), J = /* @__PURE__ */ y({
  ...N,
  props: V,
  emits: E,
  setup(k, { emit: a }) {
    const r = k, n = s(!0), c = s(
      null
    ), m = s(r.lazy), S = (e) => {
      a("click", e);
    }, b = () => {
      const e = c.value, o = (d) => {
        n.value = d, m.value = d;
      }, t = B(r, [
        "src",
        "errSrc",
        "rootMargin",
        "lazy"
      ]);
      A(e, t, a, o);
    };
    w(() => {
      b();
    });
    const I = u(() => {
      const { fit: e, noSelect: o } = r;
      return [
        "v-image__img",
        {
          [`v-image__${e}`]: e,
          "v-image__select": o
        }
      ];
    }), g = u(() => {
      const { width: e, height: o, round: t } = r;
      return {
        "--v-image-width": i(e),
        "--v-image-height": i(o),
        "--v-image-border-radius": i(t)
      };
    });
    return (e, o) => n.value ? (p(), _("div", {
      key: 0,
      role: "img",
      class: v(["v-image", { "v-image__block": e.block }]),
      style: f(l(g))
    }, [
      z(h("img", {
        ref_key: "VImageImg",
        ref: c,
        src: "",
        class: v(l(I)),
        style: f(l(g)),
        draggable: e.draggable,
        "referrer-policy": e.referrerPolicy,
        alt: e.alt,
        title: e.title,
        onClick: S
      }, null, 14, F), [
        [C, m.value]
      ])
    ], 6)) : (p(), _("div", L, [
      D(e.$slots, "error", {}, () => [
        h("span", M, P(e.alt || "\u52A0\u8F7D\u5931\u8D25"), 1)
      ])
    ]));
  }
});
export {
  J as default
};
