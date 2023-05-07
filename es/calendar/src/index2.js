import { defineComponent as M, computed as u, reactive as A, watch as B, openBlock as s, createElementBlock as l, normalizeClass as C, unref as a, normalizeStyle as P, createVNode as y, withModifiers as c, createElementVNode as i, toDisplayString as d, createCommentVNode as k, Fragment as g, renderList as w } from "vue";
import { Props as R } from "./index3.js";
import { VSvgIcon as D } from "../../svg-icon/index.js";
import Y from "../../_svg/v-icon-chevron-left/index.js";
import G from "../../_svg/v-icon-chevron-right/index.js";
import { addZero as L } from "../../_utils/utils/index.js";
import { isDate as T } from "../../_utils/is/index.js";
import { useCalendar as Z } from "../../_hooks/use-calendar/index.js";
import { useList as j } from "../../_hooks/use-list/index.js";
import { useRun as q } from "../../_hooks/use-run/index.js";
import { useGlobal as J } from "../../_hooks/use-global/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const K = {
  key: 0,
  class: "v-calendar__header"
}, O = { class: "v-calendar__option" }, Q = { class: "v-calendar__now-time" }, U = { class: "v-calendar__week" }, W = { class: "v-calendar__day" }, X = ["onClick"], ee = { class: "v-calendar__solar" }, te = {
  key: 0,
  class: "v-calendar__lunar"
}, ne = M({
  name: "VCalendar"
}), fe = /* @__PURE__ */ M({
  ...ne,
  props: R,
  setup(V) {
    const r = V, m = u(() => T(r.date) ? r.date : new Date()), e = A({
      year: m.value.getFullYear(),
      month: m.value.getMonth() + 1,
      date: m.value.getDate()
    }), { AllMonthDays: $, changeLastMonth: p, changeNextMonth: v } = Z(e), { getLang: F } = J(), { run: f } = q(), { styles: I, classes: N } = j(r, "calendar"), b = u(() => F("calendar").value.weekList), x = (t, n) => n === e.date && t === e.month ? "v-calendar__day-today" : t !== e.month ? "v-calendar__not-month" : "", _ = (t) => {
      const n = {
        last: () => p(),
        next: () => v(),
        now: () => {
          e.month = r.date.getMonth(), e.year = r.date.getFullYear(), e.date = r.date.getDate();
        }
      };
      n[t] && n[t]();
    }, E = u(() => `${e.year} / ${L(e.month)} / ${L(
      e.date
    )}`), H = (t) => {
      const n = e.date;
      e.date = t.day, t.year > e.year || t.month > e.month ? v() : (t.year > e.year || t.month < e.month) && p(), n !== t.day && f(r.onChangeDate, {
        year: e.year,
        month: t.month || e.month,
        date: t.day
      });
    };
    B(
      () => e.month,
      (t) => {
        f(r.onChangeMonth, {
          year: e.year,
          month: t,
          date: e.date
        });
      }
    );
    const S = I(["borderColor", "dayCellHeight", "weekCellHeight"]), z = N(["border"], "v-calendar");
    return (t, n) => (s(), l("div", {
      class: C(a(z)),
      style: P(a(S))
    }, [
      t.showHeader ? (s(), l("header", K, [
        y(a(D), {
          icon: a(Y),
          onClick: n[0] || (n[0] = c((o) => _("last"), ["stop"]))
        }, null, 8, ["icon"]),
        i("div", O, [
          i("span", Q, d(a(E)), 1),
          i("span", {
            class: "v-calendar__now-date",
            onClick: n[1] || (n[1] = c((o) => _("now"), ["stop"]))
          }, "\u4ECA\u5929")
        ]),
        y(a(D), {
          icon: a(G),
          onClick: n[2] || (n[2] = c((o) => _("next"), ["stop"]))
        }, null, 8, ["icon"])
      ])) : k("", !0),
      i("div", U, [
        (s(!0), l(g, null, w(a(b), (o, h) => (s(), l("div", {
          key: h,
          class: "v-calendar__week-item"
        }, d(o), 1))), 128))
      ]),
      i("div", W, [
        (s(!0), l(g, null, w(a($), (o, h) => (s(), l("div", {
          key: h,
          class: C(["v-calendar__day-item", x(o.month, o.day)]),
          onClick: c((oe) => H(o), ["stop"])
        }, [
          i("span", ee, d(o.day), 1),
          t.lunar ? (s(), l("span", te, d(o.lunarFestival || o.festival || o.term || o.IDayCn), 1)) : k("", !0)
        ], 10, X))), 128))
      ])
    ], 6));
  }
});
export {
  fe as default
};
