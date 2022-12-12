import { defineComponent as b, ref as f, computed as z, watch as j, openBlock as n, createElementBlock as o, normalizeClass as A, normalizeStyle as I, unref as c, createElementVNode as s, toDisplayString as u, renderSlot as y, createVNode as k, withCtx as m, createTextVNode as _, createCommentVNode as g, Fragment as C, renderList as w, createBlock as K } from "vue";
import { Props as O, Emits as P } from "./index3.js";
import { VButton as E } from "../../button/index.js";
import { VText as W } from "../../text/index.js";
import { addZero as V, sizeChange as x } from "../../_utils/index3.js";
import { WEEK_DATA as Z } from "../../_model/calendar/index.js";
import { diffDay as q } from "../../_model/calendar/index2.js";
const G = {
  key: 0,
  class: "v-calendar__header"
}, J = { class: "v-calendar__time" }, Q = { class: "v-calendar__time-now" }, R = { class: "v-calendar__option" }, U = { class: "v-calendar__week" }, X = { class: "v-calendar__day" }, ee = ["onClick"], te = { class: "v-calendar__solar" }, ae = {
  key: 0,
  class: "v-calendar__lunar"
}, ne = {
  key: 1,
  class: "v-calendar__memorandum"
}, le = b({
  name: "VCalendar"
}), me = /* @__PURE__ */ b({
  ...le,
  props: O,
  emits: P,
  setup(B, { emit: D }) {
    const l = B, d = f(l.date.getFullYear()), r = f(l.date.getMonth()), i = f(l.date.getDate()), { AllMonthDays: N, changeLastMonth: $, changeNextMonth: M } = q(
      d,
      r
    ), L = (e, a) => a === i.value && e === r.value + 1 ? "v-calendar__day-today" : e !== r.value + 1 ? "v-calendar__not-month" : "", v = (e) => {
      ({
        last: () => $(),
        next: () => M(),
        now: () => {
          r.value = l.date.getMonth(), d.value = l.date.getFullYear(), i.value = l.date.getDate();
        }
      })[e]();
    }, T = z(() => `${d.value}\u5E74 ${V(r.value + 1)}\u6708 ${V(
      i.value
    )}\u65E5`), F = (e, a) => {
      i.value = a, e < r.value + 1 ? $() : e > r.value + 1 && M(), D("change-date", {
        year: d.value,
        month: e || r.value,
        date: a
      });
    }, H = z(() => {
      const { borderColor: e, dayCellHeight: a, weekCellHeight: t } = l;
      return {
        "--v-calendar-border-color": e,
        "--v-calendar-day-height": x(a),
        "--v-calendar-week-height": x(t)
      };
    }), S = (e) => l.memorandum ? Object.keys(l.memorandum).includes(e) : !1;
    return j(
      () => r.value,
      (e) => {
        D("change-switch", {
          year: d.value,
          month: e + 1,
          date: i.value
        });
      }
    ), (e, a) => (n(), o("div", {
      class: A(["v-calendar", { "v-calendar__border": e.border }]),
      style: I(c(H))
    }, [
      e.showHeader ? (n(), o("header", G, [
        s("div", J, [
          s("span", Q, u(c(T)), 1)
        ]),
        s("div", R, [
          s("div", {
            class: "v-calendar__last",
            onClick: a[0] || (a[0] = (t) => v("last"))
          }, [
            y(e.$slots, "last-change", {}, () => [
              k(c(E), {
                text: "",
                size: "mini",
                type: "primary"
              }, {
                default: m(() => [
                  _("\u4E0A\u4E2A\u6708")
                ]),
                _: 1
              })
            ])
          ]),
          s("div", {
            class: "v-calendar__now",
            onClick: a[1] || (a[1] = (t) => v("now"))
          }, [
            y(e.$slots, "now-change", {}, () => [
              k(c(E), {
                text: "",
                size: "mini",
                type: "primary"
              }, {
                default: m(() => [
                  _("\u4ECA\u5929")
                ]),
                _: 1
              })
            ])
          ]),
          s("div", {
            class: "v-calendar__next",
            onClick: a[2] || (a[2] = (t) => v("next"))
          }, [
            y(e.$slots, "next-change", {}, () => [
              k(c(E), {
                text: "",
                size: "mini",
                type: "primary"
              }, {
                default: m(() => [
                  _("\u4E0B\u4E2A\u6708")
                ]),
                _: 1
              })
            ])
          ])
        ])
      ])) : g("", !0),
      s("ul", U, [
        (n(!0), o(C, null, w(c(Z), (t, h) => (n(), o("li", {
          key: h,
          class: "v-calendar__week-li"
        }, u(t), 1))), 128))
      ]),
      s("ul", X, [
        (n(!0), o(C, null, w(c(N), (t, h) => (n(), o("li", {
          key: h,
          class: A([
            "v-calendar__day-li",
            L(t.cMonth, t.cDay)
          ]),
          onClick: (p) => F(t.cMonth, t.cDay)
        }, [
          s("span", te, u(t.cDay), 1),
          e.lunar ? (n(), o("span", ae, u(t.festival || t.IDayCn), 1)) : g("", !0),
          S(t.date) ? (n(), o("div", ne, [
            (n(!0), o(C, null, w(e.memorandum[t.date], (p, Y) => (n(), K(c(W), {
              key: Y,
              type: p.type || "default",
              size: 14,
              center: "",
              class: "v-calendar__memorandum-item"
            }, {
              default: m(() => [
                _(u(p.content), 1)
              ]),
              _: 2
            }, 1032, ["type"]))), 128))
          ])) : g("", !0)
        ], 10, ee))), 128))
      ])
    ], 6));
  }
});
export {
  me as default
};
