import { defineComponent as i, computed as y, openBlock as o, createElementBlock as t, normalizeStyle as s, createElementVNode as n, renderSlot as m, Fragment as u, createBlock as a, unref as c, toDisplayString as f, createCommentVNode as g } from "vue";
import k from "../../_components/index.js";
import { Props as S } from "./index3.js";
import { VImage as _ } from "../../image/index.js";
const v = { class: "v-empty__pic-wrap" }, h = {
  key: 0,
  class: "v-empty__footer"
}, V = i({
  name: "VEmpty"
}), B = /* @__PURE__ */ i({
  ...V,
  props: S,
  setup(l) {
    const p = l, d = y(
      () => {
        const { contentColor: e, contentSize: r } = p;
        return {
          color: e,
          fontSize: r
        };
      }
    );
    return (e, r) => (o(), t("div", {
      class: "v-empty",
      style: s({ background: e.background })
    }, [
      n("div", v, [
        e.$slots.image ? m(e.$slots, "image", { key: 0 }) : (o(), t(u, { key: 1 }, [
          e.imageSrc ? (o(), a(c(_), {
            key: 0,
            src: e.imageSrc,
            width: e.imageSize
          }, null, 8, ["src", "width"])) : (o(), a(k, { key: 1 }))
        ], 64))
      ]),
      n("span", {
        class: "v-empty__desc",
        style: s(c(d))
      }, f(e.content), 5),
      e.$slots.footer ? (o(), t("div", h, [
        m(e.$slots, "footer")
      ])) : g("", !0)
    ], 4));
  }
});
export {
  B as default
};
