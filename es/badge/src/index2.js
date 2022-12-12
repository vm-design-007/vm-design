import { defineComponent as l, computed as s, openBlock as m, createElementBlock as p, normalizeStyle as f, unref as r, renderSlot as _, withDirectives as v, createElementVNode as g, normalizeClass as b, toDisplayString as y, vShow as $ } from "vue";
import { Props as h } from "./index3.js";
import { isNumber as c } from "../../_utils/index3.js";
const S = l({
  name: "VBadge"
}), C = /* @__PURE__ */ l({
  ...S,
  props: h,
  setup(d) {
    const n = d, i = s(() => {
      const { type: e, dot: t } = n;
      return [
        "v-badge__content",
        {
          [`v-badge__${e}`]: e,
          "v-badge__dot": t
        }
      ];
    }), a = s(() => {
      const { dot: e, max: t, value: o } = n;
      return e ? "" : c(t) && c(o) ? t > o ? `${o}` : `${t}+` : `${o}`;
    }), u = s(() => {
      const { color: e, textColor: t } = n;
      return {
        "--v-badge-background": e,
        "--v-badge-text-color": t
      };
    });
    return (e, t) => (m(), p("div", {
      class: "v-badge",
      style: f(r(u))
    }, [
      _(e.$slots, "default"),
      v(g("sup", {
        class: b(r(i))
      }, y(r(a)), 3), [
        [$, !e.show && (r(a) || e.dot)]
      ])
    ], 4));
  }
});
export {
  C as default
};
