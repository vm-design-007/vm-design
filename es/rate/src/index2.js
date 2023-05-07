import { defineComponent as c, ref as h, watch as k, computed as i, unref as r, openBlock as a, createElementBlock as s, createElementVNode as y, Fragment as z, renderList as g, normalizeClass as M, createVNode as N, createBlock as S, withCtx as B, createTextVNode as E, toDisplayString as T, createCommentVNode as w } from "vue";
import { Props as I } from "./index3.js";
import { VSvgIcon as A } from "../../svg-icon/index.js";
import D from "../../_svg/v-icon-star-b/index.js";
import { VText as L } from "../../text/index.js";
import { isNumber as P } from "../../_utils/is/index.js";
import { EMIT_UPDATE as m } from "../../_tokens/emits/index.js";
import { useRun as R } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const $ = {
  class: "v-rate",
  role: "slider"
}, b = { class: "v-rate__list" }, F = ["onMouseover", "onClick"], U = c({
  name: "VRate"
}), Z = /* @__PURE__ */ c({
  ...U,
  props: I,
  emits: {
    [m]: (l) => l
  },
  setup(l, { emit: u }) {
    const o = l, { run: d } = R(), t = h(o.modelValue), p = (e) => {
      o.readonly || (t.value = e);
    }, f = () => {
      o.readonly || (t.value = o.modelValue);
    }, v = (e) => {
      o.readonly || (t.value = e, u(m, e), d(o.onChange, e));
    };
    k(
      () => o.modelValue,
      () => {
        t.value = o.modelValue;
      }
    );
    const _ = i(() => o.textArr[r(t) - 1]), V = i(() => P(o.max) ? o.max : 5);
    return (e, j) => (a(), s("div", $, [
      y("div", b, [
        (a(!0), s(z, null, g(r(V), (q, n) => (a(), s("div", {
          key: n,
          class: M(["v-rate__star", { "v-rate__star-readonly": e.readonly }]),
          onMouseout: f,
          onMouseover: (C) => p(n + 1),
          onClick: (C) => v(n + 1)
        }, [
          N(r(A), {
            size: e.size,
            icon: e.icon || r(D),
            color: t.value > n ? e.effectColor : e.invalidColor
          }, null, 8, ["size", "icon", "color"])
        ], 42, F))), 128))
      ]),
      e.textShow ? (a(), S(r(L), {
        key: 0,
        size: e.textSize,
        color: e.textColor
      }, {
        default: B(() => [
          E(T(r(_)), 1)
        ]),
        _: 1
      }, 8, ["size", "color"])) : w("", !0)
    ]));
  }
});
export {
  Z as default
};
