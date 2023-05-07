import { defineComponent as c, computed as f, openBlock as t, createElementBlock as n, normalizeStyle as y, unref as o, createElementVNode as s, renderSlot as m, Fragment as _, createBlock as i, toDisplayString as g, createCommentVNode as S } from "vue";
import { Props as k } from "./index3.js";
import v from "../../_svg/v-icon-full-sharp/index.js";
import { useList as h } from "../../_hooks/use-list/index.js";
import { useGlobal as z } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VSvgIcon as V } from "../../svg-icon/index.js";
import { VImage as $ } from "../../image/index.js";
const w = { class: "v-empty__wrapper" }, B = { class: "v-empty__content" }, C = {
  key: 0,
  class: "v-empty__footer"
}, E = c({
  name: "VEmpty"
}), q = /* @__PURE__ */ c({
  ...E,
  props: k,
  setup(l) {
    const r = l, { styles: p } = h(r, "empty"), { getLang: a } = z(), d = f(() => r.content || a("empty").value.content), u = p(["contentColor", "contentSize", "background"]);
    return (e, I) => (t(), n("div", {
      class: "v-empty",
      style: y(o(u))
    }, [
      s("div", w, [
        e.$slots.default ? m(e.$slots, "default", { key: 0 }) : (t(), n(_, { key: 1 }, [
          e.imageSrc ? (t(), i(o($), {
            key: 0,
            src: e.imageSrc,
            width: e.imageSize
          }, null, 8, ["src", "width"])) : (t(), i(o(V), {
            key: 1,
            icon: o(v),
            size: e.iconSize
          }, null, 8, ["icon", "size"]))
        ], 64))
      ]),
      s("span", B, g(o(d)), 1),
      e.$slots.footer ? (t(), n("div", C, [
        m(e.$slots, "footer")
      ])) : S("", !0)
    ], 4));
  }
});
export {
  q as default
};
