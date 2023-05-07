import { computed as u } from "vue";
import { useLunar as M } from "../use-lunar/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const m = (t) => {
  const s = (o, n) => n === 0 ? 31 : n !== 2 ? [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1] : o % 4 == 0 && o % 100 != 0 || o % 400 == 0 ? 29 : 28, y = u(() => new Date(`${t.year}/${t.month}/1`).getDay()), r = M(), i = u(() => {
    let o = s(t.year, t.month - 1);
    const n = [];
    for (let e = 0; e < y.value; e++) {
      const h = r(
        t.year,
        t.month - 1,
        o
      );
      h !== -1 ? n.push(h) : n.push({
        day: o,
        month: t.month
      }), o--;
    }
    return n.reverse();
  }), l = u(() => {
    const o = s(t.year, t.month), n = [];
    for (let e = 0; e < o; e++) {
      const h = r(
        t.year,
        t.month,
        e + 1
      );
      h !== -1 ? n.push(h) : n.push({
        day: e + 1,
        month: t.month
      });
    }
    return n;
  }), f = u(() => {
    const o = s(t.year, t.month) + y.value, n = o % 7 === 0 ? 0 : 7 - o % 7;
    if (!n)
      return [];
    const e = [];
    for (let h = 0; h < n; h++) {
      const c = r(
        t.year,
        t.month + 1,
        h + 1
      );
      c !== -1 ? e.push(c) : e.push({
        day: h + 1,
        month: t.month + 2
      });
    }
    return e;
  }), D = () => {
    if (t.month > 1) {
      t.month--;
      return;
    }
    t.year--, t.month = 12;
  }, L = () => {
    if (t.month < 12) {
      t.month = t.month + 1;
      return;
    }
    t.year++, t.month = 1;
  };
  return {
    AllMonthDays: u(() => [...i.value, ...l.value, ...f.value]),
    changeLastMonth: D,
    changeNextMonth: L
  };
};
export {
  m as useCalendar
};
