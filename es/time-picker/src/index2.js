import { defineComponent as F, reactive as L, computed as I, ref as a, watch as P, resolveComponent as q, openBlock as u, createElementBlock as d, createVNode as s, unref as n, withCtx as l, createElementVNode as c, Fragment as b, renderList as C, normalizeClass as y, withModifiers as E, toDisplayString as w, createTextVNode as T, isRef as x, nextTick as A } from "vue";
import { Props as R } from "./index3.js";
import { VInput as U } from "../../input/index.js";
import { VTrigger as Z } from "../../trigger/index.js";
import { addZero as i } from "../../_utils/utils/index.js";
import { isString as $, isBoolean as j } from "../../_utils/is/index.js";
import G from "../../_svg/v-icon-clock-time/index.js";
import { EMIT_TIME as B } from "../../_tokens/emits/index.js";
const J = { class: "v-time-picker" }, K = { class: "v-time-picker__content" }, O = ["onClick"], Q = ["onClick"], W = ["onClick"], X = { class: "v-time-picker__option" }, Y = F({
  name: "VTimePicker"
}), le = /* @__PURE__ */ F({
  ...Y,
  props: R,
  emits: {
    [B]: (p) => $(p)
  },
  setup(p, { emit: M }) {
    const H = p, _ = new Date(), t = L({
      hour: i(_.getHours()),
      minute: i(_.getMinutes()),
      second: i(_.getSeconds())
    }), m = I({
      get: () => H.time,
      set: (o) => {
        M(B, o);
      }
    }), V = a(), v = (o = !0) => {
      if (o && !$(o) && (m.value = `${t.hour}:${t.minute}:${t.second}`), o === "now") {
        const r = new Date();
        t.hour = i(r.getHours()), t.minute = i(r.getMinutes()), t.second = i(r.getSeconds());
      }
      j(o) && V.value.handelClose();
    }, N = a(), S = a(), k = a(), f = I(() => k.value.querySelector(
      ".v-time-picker__second-item"
    ).offsetHeight), z = async () => {
      await A(), N.value.scrollTo({
        top: (Number(t.hour) === 0 ? 24 : Number(t.hour) - 2) * f.value,
        behavior: "smooth"
      }), S.value.scrollTo({
        top: (Number(t.minute) - 2) * f.value,
        behavior: "smooth"
      }), k.value.scrollTo({
        top: (Number(t.second) - 2) * f.value,
        behavior: "smooth"
      });
    }, h = (o, r) => {
      t[r] = i(o);
    };
    return P(
      () => t,
      () => {
        z();
      },
      { deep: !0 }
    ), (o, r) => {
      const g = q("v-button");
      return u(), d("div", J, [
        s(n(Z), {
          ref_key: "triggerInstance",
          ref: V,
          trigger: "click",
          disabled: o.disabled,
          "on-open": z
        }, {
          content: l(() => [
            c("div", K, [
              c("div", {
                ref_key: "hoverEl",
                ref: N,
                class: "v-time-picker__hour"
              }, [
                (u(), d(b, null, C(24, (e) => c("div", {
                  key: e,
                  class: y([
                    "v-time-picker__hour-item",
                    {
                      "v-time-picker__hour-active": n(i)(e === 24 ? 0 : e).toString() === t.hour
                    }
                  ]),
                  onClick: E((D) => h(e === 24 ? 0 : e, "hour"), ["stop"])
                }, w(n(i)(e === 24 ? 0 : e)), 11, O)), 64))
              ], 512),
              c("div", {
                ref_key: "minuteEl",
                ref: S,
                class: "v-time-picker__minute"
              }, [
                (u(), d(b, null, C(59, (e) => c("div", {
                  key: e,
                  class: y([
                    "v-time-picker__minute-item",
                    {
                      "v-time-picker__minute-active": n(i)(e).toString() === t.minute
                    }
                  ]),
                  onClick: E((D) => h(e, "minute"), ["stop"])
                }, w(n(i)(e)), 11, Q)), 64))
              ], 512),
              c("div", {
                ref_key: "secondEl",
                ref: k,
                class: "v-time-picker__second"
              }, [
                (u(), d(b, null, C(59, (e) => c("div", {
                  key: e,
                  class: y([
                    "v-time-picker__second-item",
                    {
                      "v-time-picker__second-active": n(i)(e).toString() === t.second
                    }
                  ]),
                  onClick: E((D) => h(e, "second"), ["stop"])
                }, w(n(i)(e)), 11, W)), 64))
              ], 512)
            ]),
            c("div", X, [
              s(g, {
                size: "mini",
                "on-click": () => v("now")
              }, {
                default: l(() => [
                  T("\u5F53\u524D")
                ]),
                _: 1
              }, 8, ["on-click"]),
              s(g, {
                size: "mini",
                "on-click": () => v(!1)
              }, {
                default: l(() => [
                  T("\u53D6\u6D88")
                ]),
                _: 1
              }, 8, ["on-click"]),
              s(g, {
                type: "primary",
                size: "mini",
                "on-click": () => v(!0)
              }, {
                default: l(() => [
                  T("\u786E\u5B9A")
                ]),
                _: 1
              }, 8, ["on-click"])
            ])
          ]),
          default: l(() => [
            s(n(U), {
              modelValue: n(m),
              "onUpdate:modelValue": r[0] || (r[0] = (e) => x(m) ? m.value = e : null),
              autocomplete: "off",
              type: "text",
              placeholder: o.placeholder || "\u8BF7\u9009\u62E9\u65F6\u95F4",
              disabled: o.disabled,
              size: o.size,
              clear: o.clear,
              "after-icon": n(G)
            }, null, 8, ["modelValue", "placeholder", "disabled", "size", "clear", "after-icon"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
});
export {
  le as default
};
