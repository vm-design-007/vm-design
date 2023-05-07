import { defineComponent as k, computed as v, openBlock as h, createElementBlock as E, createVNode as c, unref as a, withCtx as u, createElementVNode as _, isRef as f } from "vue";
import { Props as b } from "./index3.js";
import { VInput as Y } from "../../input/index.js";
import { VTrigger as Z } from "../../trigger/index.js";
import { VCalendar as C } from "../../calendar/index.js";
import { EMIT_DATE as g } from "../../_tokens/emits/index.js";
import { addZero as d } from "../../_utils/utils/index.js";
import { isString as M } from "../../_utils/is/index.js";
import R from "../../_svg/v-icon-calendar/index.js";
const w = { class: "v-date-picker" }, z = { class: "v-date-picker__content" }, B = k({
  name: "VDatePicker"
}), j = /* @__PURE__ */ k({
  ...B,
  props: b,
  emits: {
    [g]: (n) => M(n)
  },
  setup(n, { emit: D }) {
    const r = n, i = new Date(), l = v({
      get: () => r.date,
      set: (e) => {
        D(g, e);
      }
    }), V = ({ year: e, month: t, date: o }) => {
      if (!RegExp(/([Y]{4})|([M]{2})|([D]{2})/).test(r.format)) {
        l.value = `${e}/${r.addZero ? d(t) : t}/${r.addZero ? d(o) : o}`;
        return;
      }
      const m = {
        YYYY: e,
        MM: r.addZero ? d(t) : t,
        DD: r.addZero ? d(o) : o
      };
      let s = r.format;
      for (const p in m)
        s = s.replace(
          p,
          m[p].toString()
        );
      l.value = s;
    };
    return (e, t) => (h(), E("div", w, [
      c(a(Z), {
        trigger: "click",
        disabled: e.disabled
      }, {
        content: u(() => [
          _("div", z, [
            c(a(C), {
              date: a(i),
              "onUpdate:date": t[1] || (t[1] = (o) => f(i) ? i.value = o : null),
              "day-cell-height": 40,
              "week-cell-height": 40,
              "on-change-date": V
            }, null, 8, ["date"])
          ])
        ]),
        default: u(() => [
          c(a(Y), {
            modelValue: a(l),
            "onUpdate:modelValue": t[0] || (t[0] = (o) => f(l) ? l.value = o : null),
            autocomplete: "off",
            readonly: "",
            disabled: e.disabled,
            placeholder: e.placeholder || "\u8BF7\u9009\u62E9\u65E5\u671F",
            clear: e.clear,
            size: e.size,
            "after-icon": a(R)
          }, null, 8, ["modelValue", "disabled", "placeholder", "clear", "size", "after-icon"])
        ]),
        _: 1
      }, 8, ["disabled"])
    ]));
  }
});
export {
  j as default
};
