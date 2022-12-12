import { ref as h, watch as p, computed as n } from "vue";
import { dayMonth as c } from "./index3.js";
import { Lunar as y } from "./index4.js";
const $ = (a, e) => {
  const v = h(
    new Date(`${a.value}/${e.value + 1}/1`).getDay()
  ), o = new y();
  p(
    () => e.value,
    (u) => {
      v.value = new Date(`${a.value}/${u + 1}/1`).getDay();
    }
  );
  const i = n(() => {
    let u = c(a.value, e.value - 1);
    const l = [];
    for (let t = 0; t < v.value; t++) {
      const s = o.getLunarDetail(a.value, e.value, u);
      s !== -1 ? l.push(s) : l.push({
        cDay: u,
        cMonth: e.value
      }), u--;
    }
    return l.reverse();
  }), D = n(() => {
    const u = c(a.value, e.value) + v.value, l = u % 7 === 0 ? 0 : 7 - u % 7;
    if (!l)
      return [];
    const t = [];
    for (let s = 0; s < l; s++) {
      const r = o.getLunarDetail(a.value, e.value + 2, s + 1);
      r !== -1 ? t.push(r) : t.push({
        cDay: s + 1,
        cMonth: e.value + 2
      });
    }
    return t;
  }), f = n(() => {
    const u = c(a.value, e.value), l = [];
    for (let t = 0; t < u; t++) {
      const s = o.getLunarDetail(a.value, e.value + 1, t + 1);
      s !== -1 ? l.push(s) : l.push({
        cDay: t + 1,
        cMonth: e.value + 1
      });
    }
    return l;
  }), L = () => {
    if (e.value > 0) {
      e.value--;
      return;
    }
    a.value--, e.value = 11;
  }, M = () => {
    if (e.value < 11) {
      e.value++;
      return;
    }
    a.value++, e.value = 0;
  };
  return {
    AllMonthDays: n(() => [
      ...i.value,
      ...f.value,
      ...D.value
    ]),
    changeLastMonth: L,
    changeNextMonth: M
  };
};
export {
  $ as diffDay
};
