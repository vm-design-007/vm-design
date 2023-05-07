import { defineComponent as E, ref as R, openBlock as l, createElementBlock as r, normalizeClass as i, unref as e, createBlock as g, withCtx as $, Fragment as N, renderList as h, createCommentVNode as s, createElementVNode as b, createVNode as d, toDisplayString as P, isRef as F } from "vue";
import { Props as j } from "./index3.js";
import { isNumber as T } from "../../_utils/is/index.js";
import { EMIT_CURRENT as B, EMIT_PAGESIZE as U } from "../../_tokens/emits/index.js";
import { PAGINATION as _, PAGINATION_ITEM as a, PAGINATION_PREV as D, PAGINATION_NEXT as X } from "../../_tokens/key/index2.js";
import { useList as Z } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import { usePage as q } from "../../_hooks/use-page/index.js";
import { useTurnPage as H } from "../../_hooks/use-turn-page/index.js";
import "../../_hooks/use-message/index.js";
import J from "../../_svg/v-icon-chevron-left/index.js";
import K from "../../_svg/v-icon-chevron-right/index.js";
import y from "../../_svg/v-icon-menu-meatball/index.js";
import { VInput as Q } from "../../input/index.js";
import { VSelect as W } from "../../select/index.js";
import { VOption as Y } from "../../option/index.js";
import { VSvgIcon as p } from "../../svg-icon/index.js";
const x = ["disabled"], ee = ["onClick"], oe = ["disabled"], ne = E({
  name: "VPagination"
}), Ce = /* @__PURE__ */ E({
  ...ne,
  props: j,
  emits: {
    [B]: (u) => T(u),
    [U]: (u) => T(u)
  },
  setup(u, { emit: f }) {
    const m = u, { pages: I, showNextMore: A, showPrevMore: z, maxCount: c, handelTurnPages: k } = q(
      m,
      f
    ), { jumpCurrent: v, selectChange: S, handelChange: M, handleInput: C, handelClick: w } = H(m, f, I, c), { classes: G } = Z(m, "pagination"), V = R(10), L = G(["background", "round", "disabled"], _);
    return (n, t) => (l(), r("div", {
      class: i(e(L))
    }, [
      n.pageSizes && n.pageSizes.length ? (l(), g(e(W), {
        key: 0,
        modelValue: V.value,
        "onUpdate:modelValue": t[0] || (t[0] = (o) => V.value = o),
        width: 120,
        disabled: n.disabled,
        "on-change": e(S)
      }, {
        default: $(() => [
          (l(!0), r(N, null, h(n.pageSizes, (o) => (l(), g(e(Y), {
            key: o,
            value: o,
            label: o + "/\u9875"
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "on-change"])) : s("", !0),
      b("button", {
        class: "v-pagination__button",
        disabled: n.disabled,
        onClick: t[1] || (t[1] = (o) => e(k)("prev"))
      }, [
        d(e(p), {
          size: 14,
          icon: n.prevIcon || e(J)
        }, null, 8, ["icon"])
      ], 8, x),
      n.total > 0 ? (l(), r("div", {
        key: 1,
        class: "v-pagination__pages",
        onClick: t[2] || (t[2] = (o) => e(w)(o))
      }, [
        b("div", {
          class: i([
            e(a),
            {
              [`${e(a)}-active`]: n.current === 1
            }
          ])
        }, " 1 ", 2),
        e(z) ? (l(), r("div", {
          key: 0,
          class: i([e(a), e(D)])
        }, [
          d(e(p), {
            size: 15,
            icon: e(y)
          }, null, 8, ["icon"])
        ], 2)) : s("", !0),
        (l(!0), r(N, null, h(e(I), (o) => (l(), r("div", {
          key: o,
          class: i([
            e(a),
            {
              [`${e(a)}-active`]: n.current === o
            }
          ]),
          onClick: (O) => e(M)(o, O)
        }, P(o), 11, ee))), 128)),
        e(A) ? (l(), r("div", {
          key: 1,
          class: i([e(a), e(X)])
        }, [
          d(e(p), {
            size: 15,
            icon: e(y)
          }, null, 8, ["icon"])
        ], 2)) : s("", !0),
        n.total > 1 ? (l(), r("div", {
          key: 2,
          class: i([
            e(a),
            {
              [`${e(a)}-active`]: n.current === e(c)
            }
          ])
        }, P(e(c)), 3)) : s("", !0)
      ])) : s("", !0),
      b("button", {
        class: "v-pagination__button",
        disabled: n.disabled,
        onClick: t[3] || (t[3] = (o) => e(k)("next"))
      }, [
        d(e(p), {
          size: 14,
          icon: n.nextIcon || e(K)
        }, null, 8, ["icon"])
      ], 8, oe),
      n.jumpSearch ? (l(), g(e(Q), {
        key: 2,
        modelValue: e(v),
        "onUpdate:modelValue": t[4] || (t[4] = (o) => F(v) ? v.value = o : null),
        placeholder: "\u8F93\u5165\u8DF3\u8F6C\u7684\u9875\u6570",
        class: "v-pagination__jump",
        style: { width: "80px" },
        disabled: n.disabled,
        "on-blur": e(C),
        "on-enter": e(C)
      }, null, 8, ["modelValue", "disabled", "on-blur", "on-enter"])) : s("", !0)
    ], 2));
  }
});
export {
  Ce as default
};
