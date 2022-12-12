import { defineComponent as h, ref as u, computed as c, onMounted as b, openBlock as l, createElementBlock as n, normalizeClass as g, normalizeStyle as s, unref as i, createElementVNode as d, toDisplayString as v, createCommentVNode as f } from "vue";
import { Props as S } from "./index3.js";
import { sizeChange as m } from "../../_utils/index3.js";
const C = ["aria-value"], R = {
  key: 0,
  class: "v-progress__text"
}, z = h({
  name: "VProgress"
}), B = /* @__PURE__ */ h({
  ...z,
  props: S,
  setup(_) {
    const o = _, t = u(!1), p = u(
      null
    ), y = c(
      () => {
        const { background: e, height: r, square: a } = o;
        return {
          height: m(r),
          background: e,
          borderRadius: a ? "0px" : "100px"
        };
      }
    ), k = c(
      () => {
        const { percentage: e, color: r, square: a } = o;
        return {
          width: `${e}%`,
          background: r,
          borderRadius: a ? "0px" : "100px"
        };
      }
    ), w = () => t.value = p.value.clientHeight >= 18 && o.textInside;
    return b(() => {
      w();
    }), (e, r) => (l(), n("div", {
      role: "progressbar",
      class: g(["v-progress", { "v-progress__liner": e.linear }]),
      style: s({ width: i(m)(e.width) }),
      "aria-value": e.percentage,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }, [
      d("div", {
        class: "v-progress__bar",
        style: s(i(y))
      }, [
        d("div", {
          ref_key: "fillRef",
          ref: p,
          class: g([
            "v-progress__fill",
            { [`v-progress__fill-${e.type}`]: e.type, "v-progress__stripe": e.stripe }
          ]),
          style: s(i(k))
        }, [
          t.value && e.showText ? (l(), n("span", {
            key: 0,
            class: "v-progress__percentage",
            style: s({ color: e.textColor })
          }, v(e.percentage) + "% ", 5)) : f("", !0)
        ], 6)
      ], 4),
      !t.value && e.showText ? (l(), n("div", R, v(e.percentage) + "% ", 1)) : f("", !0)
    ], 14, C));
  }
});
export {
  B as default
};
