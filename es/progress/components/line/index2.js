import { defineComponent as m, inject as d, computed as u, openBlock as s, createElementBlock as r, normalizeClass as v, unref as e, normalizeStyle as g, createElementVNode as o, toDisplayString as a, createCommentVNode as i } from "vue";
import { PROGRESS_PROPS_KEY as h } from "../../src/index3.js";
import { useList as x } from "../../../_hooks/use-list/index.js";
import "../../../loading/src/index2.js";
import "../../../_hooks/use-message/index.js";
const y = ["aria-value"], f = { class: "v-progress__bar" }, S = { class: "v-progress__fill" }, k = {
  key: 0,
  class: "v-progress__percentage"
}, b = {
  key: 0,
  class: "v-progress__text"
}, B = /* @__PURE__ */ m({
  __name: "index",
  setup(C) {
    const t = d(h), { classes: c, styles: n } = x(t, "progress"), l = c(["type", "stripe", "state"], "v-progress"), p = n(["height", "color", "textColor", "background"]), _ = u(() => ({ "--progress-width": `${t.percent}%` }));
    return (E, L) => (s(), r("div", {
      role: "progressbar",
      class: v(e(l)),
      style: g([e(p), e(_)]),
      "aria-value": e(t).percent,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }, [
      o("div", f, [
        o("div", S, [
          !e(t).outsideText && e(t).showText ? (s(), r("div", k, a(e(t).percent) + "% ", 1)) : i("", !0)
        ])
      ]),
      e(t).outsideText && e(t).showText ? (s(), r("div", b, a(e(t).percent) + "% ", 1)) : i("", !0)
    ], 14, y));
  }
});
export {
  B as default
};
