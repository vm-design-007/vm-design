import { defineComponent as a, ref as i, openBlock as s, createElementBlock as c, normalizeStyle as m, renderSlot as d, createCommentVNode as g } from "vue";
import { Props as v } from "./index3.js";
import { useRun as _ } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const h = {
  key: 0,
  class: "v-infinite-scrolling__loading"
}, S = a({
  name: "VInfiniteScrolling"
}), B = /* @__PURE__ */ a({
  ...S,
  props: v,
  setup(u) {
    const l = u, { run: t } = _(), o = i(!1), r = i(), f = () => {
      if (l.loading)
        return;
      const e = r.value;
      if (!e)
        return;
      const n = Math.ceil(
        e.scrollTop + e.clientHeight + l.distance
      );
      t(l.onScrollWhen, Math.ceil(e.scrollTop)), n >= e.scrollHeight && !o.value && (o.value = !0, t((p) => {
        l.onScrollEnd(p), o.value = !1;
      }, n));
    };
    return (e, n) => (s(), c("div", {
      ref_key: "scrollEl",
      ref: r,
      class: "v-infinite-scrolling",
      style: m(e.styles),
      onScroll: f
    }, [
      d(e.$slots, "default"),
      e.loading ? (s(), c("div", h, "\u52A0\u8F7D\u4E2D...")) : g("", !0)
    ], 36));
  }
});
export {
  B as default
};
