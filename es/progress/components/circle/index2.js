import { defineComponent as d, inject as _, computed as a, openBlock as i, createElementBlock as n, normalizeClass as f, unref as e, normalizeStyle as h, createElementVNode as g, toDisplayString as v, createCommentVNode as y } from "vue";
import { PROGRESS_PROPS_KEY as x } from "../../src/index3.js";
import { isNumber as S } from "../../../_utils/is/index.js";
import { PROGRESS_CIRCLE_PADDING as l } from "../../../_tokens/key/index3.js";
import { useList as k } from "../../../_hooks/use-list/index.js";
import "../../../loading/src/index2.js";
import "../../../_hooks/use-message/index.js";
const E = ["width", "height", "aria-value"], P = ["cx", "cy", "r"], R = ["x", "y"], O = /* @__PURE__ */ d({
  __name: "index",
  setup(C) {
    const t = _(x), { classes: c } = k(t, "progress"), m = c(["type", "state"], "v-progress"), r = a(() => S(t.diameter) ? t.diameter / 2 : 100), s = a(() => (r.value - l) * 2 * Math.PI), u = a(() => {
      const o = s.value - s.value * (t.percentage / 100);
      return o <= 0 ? 0 : o > s.value ? s.value : o;
    }), p = a(() => ({
      "--progress-stroke-dasharray": s.value,
      "--progress-stroke-dashoffset": u.value
    }));
    return (o, w) => (i(), n("svg", {
      role: "progressbar",
      class: f(e(m)),
      width: e(t).diameter,
      height: e(t).diameter,
      style: h(e(p)),
      "aria-value": e(t).percent,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }, [
      g("circle", {
        class: "v-progress__girth",
        fill: "transparent",
        "stroke-width": "12",
        stroke: "green",
        cx: e(r),
        cy: e(r),
        r: e(r) - e(l)
      }, null, 8, P),
      e(t).showText ? (i(), n("text", {
        key: 0,
        "font-size": "24",
        fill: "grey",
        "text-anchor": "middle",
        "alignment-baseline": "middle",
        x: e(r),
        y: e(r)
      }, v(e(t).percent) + "% ", 9, R)) : y("", !0)
    ], 14, E));
  }
});
export {
  O as default
};
