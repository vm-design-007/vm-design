import { defineComponent as n, ref as y, unref as r, openBlock as t, createElementBlock as i, normalizeClass as h, normalizeStyle as l, createElementVNode as a, renderSlot as v, toDisplayString as k } from "vue";
import { Props as S } from "./index3.js";
import { useList as b } from "../../_hooks/use-list/index.js";
import { useProps as E } from "../../_hooks/use-props/index.js";
import { useLoadImg as L } from "../../_hooks/use-load-img/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const z = ["draggable", "referrer-policy", "alt", "title"], D = {
  key: 1,
  class: "v-image__error"
}, P = { class: "v-image__error-text" }, w = n({
  name: "VImage"
}), $ = /* @__PURE__ */ n({
  ...w,
  props: S,
  setup(m) {
    const o = m, s = y(), { filter: c } = E(o), { classes: g, styles: p } = b(o, "image"), { isSuccess: d, isShowNode: f } = L(
      s,
      c([
        "src",
        "errSrc",
        "rootMargin",
        "lazy",
        "onLoad",
        "onError"
      ])
    ), u = g(["fit", "select", "block"], "v-image"), _ = p(["width", "height", "round"]);
    return (e, B) => r(d) ? (t(), i("div", {
      key: 0,
      role: "img",
      class: h(r(u)),
      style: l(r(_))
    }, [
      a("img", {
        ref_key: "imageEl",
        ref: s,
        class: "v-image__img",
        src: "",
        style: l(r(f) ? "" : "visibility: hidden"),
        draggable: e.draggable,
        "referrer-policy": e.referrerPolicy,
        alt: e.alt,
        title: e.title
      }, null, 12, z)
    ], 6)) : (t(), i("div", D, [
      v(e.$slots, "error", {}, () => [
        a("span", P, k(e.alt || "\u52A0\u8F7D\u5931\u8D25"), 1)
      ])
    ]));
  }
});
export {
  $ as default
};
