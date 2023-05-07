import { defineComponent as n, ref as u, computed as a, onMounted as p, openBlock as d, createElementBlock as k, normalizeClass as f, normalizeStyle as g, renderSlot as v } from "vue";
import { Props as h } from "./index3.js";
import { useProps as _ } from "../../_hooks/use-props/index.js";
import { useCanvas as b } from "../../_hooks/use-canvas/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const w = n({
  name: "VWatermark"
}), x = /* @__PURE__ */ n({
  ...w,
  props: h,
  setup(m) {
    const r = m, { filter: s } = _(r), t = u({}), l = a(() => ({ backgroundImage: `url(${b().createWatermark(
      s([
        "content",
        "width",
        "height",
        "fontSize",
        "fontColor"
      ])
    )})` })), c = a(() => {
      const { image: e, width: o, height: i } = r;
      return {
        backgroundImage: `url(${e})`,
        backgroundSize: `${o}px ${i}px`
      };
    });
    return p(() => {
      t.value = r.image ? c.value : l.value;
    }), (e, o) => (d(), k("div", {
      class: f(["v-watermark", { "v-watermark__block": e.block }]),
      style: g([t.value, { zIndex: e.zIndex }])
    }, [
      v(e.$slots, "default")
    ], 6));
  }
});
export {
  x as default
};
