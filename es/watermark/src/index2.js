import { defineComponent as a, ref as c, onMounted as i, openBlock as u, createElementBlock as p, normalizeClass as d, normalizeStyle as k, renderSlot as f } from "vue";
import { Props as g } from "./index3.js";
import { createBase64 as h } from "../../_utils/index6.js";
import { useFilterProps as w } from "../../_hooks/use-filter-props/index.js";
const _ = a({
  name: "VWatermark"
}), $ = /* @__PURE__ */ a({
  ..._,
  props: g,
  setup(n) {
    const r = n, o = c(
      null
    ), m = () => {
      const e = w(r, [
        "content",
        "width",
        "height",
        "fontSize",
        "fontColor"
      ]);
      return {
        backgroundImage: `url(${h(e)})`
      };
    }, s = () => {
      const { image: e, width: t, height: l } = r;
      return {
        backgroundImage: `url(${e})`,
        backgroundSize: `${t}px ${l}px`
      };
    };
    return i(() => {
      o.value = r.image ? s() : m();
    }), (e, t) => (u(), p("div", {
      class: d(["v-watermark", { "v-watermark__block": e.block }]),
      style: k([o.value, { zIndex: e.zIndex }])
    }, [
      f(e.$slots, "default")
    ], 6));
  }
});
export {
  $ as default
};
