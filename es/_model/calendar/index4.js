var j = Object.defineProperty;
var K = (E, t, e) => t in E ? j(E, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : E[t] = e;
var o = (E, t, e) => (K(E, typeof t != "symbol" ? t + "" : t, e), e);
import { LUNAR_INFO as p, DAY_GAN as b, DAY_ZHI as G, ANIMALS as L, SOLAR_CALENDAR_FESTIVE as d, LUNAR_FESTIVE as k, SOLAR_TERM_LIST as _, CHANG_MONTH_LUNAR_CALENDAR as q, DATE_CHANG_LUNAR_CALENDAR as J, CONVERT_DIGIT_CHINES as z, SOLAR_TERM as O } from "./index.js";
const n = class {
  constructor() {
    o(this, "getLunarDetail", (t, e, l) => {
      let a = parseInt(t.toString()), s = parseInt(e.toString()), i = parseInt(l.toString());
      if (a < 1900 || a > 2100 || a === 1900 && s === 1 && i < 31)
        return -1;
      let D;
      a ? D = new Date(a, parseInt(s.toString()) - 1, i) : D = new Date();
      let r, C = 0, g = 0;
      a = D.getFullYear(), s = D.getMonth() + 1, i = D.getDate();
      let c = (Date.UTC(D.getFullYear(), D.getMonth(), D.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
      for (r = 1900; r < 2101 && c > 0; r++)
        g = n.getLunarYearDays(r), c -= g;
      c < 0 && (c += g, r--);
      const F = new Date();
      let m = !1;
      F.getFullYear() === a && F.getMonth() + 1 === s && F.getDate() === i && (m = !0);
      let T = D.getDay();
      const U = z[T];
      T === 0 && (T = 7);
      const h = r;
      C = n.leapMonth(r);
      let f = !1;
      for (r = 1; r < 13 && c > 0; r++)
        C > 0 && r === C + 1 && f === !1 ? (--r, f = !0, g = n.leapDays(h)) : g = n.monthDays(h, r), f === !0 && r === C + 1 && (f = !1), c -= g;
      c === 0 && C > 0 && r === C + 1 && (f ? f = !1 : (f = !0, --r)), c < 0 && (c += g, --r);
      const A = r, y = c + 1, Z = s - 1, B = n.toGanZhiYear(h), R = n.getTerm(a, s * 2 - 1), H = n.getTerm(a, s * 2);
      let S = n.toGanZhi((a - 1900) * 12 + s + 11);
      i >= R && (S = n.toGanZhi((a - 1900) * 12 + s + 12));
      let I = !1, M = null;
      R === i && (I = !0, M = O[s * 2 - 2]), H === i && (I = !0, M = O[s * 2 - 1]);
      const v = Date.UTC(a, Z, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, w = n.toGanZhi(v + i - 1), x = n.toConstellation(s, i), V = a + "-" + s + "-" + i, W = h + "-" + A + "-" + y, Y = s + "-" + i;
      let N = A + "-" + y;
      return A === 12 && y === 29 && n.monthDays(h, A) === 29 && (N = "12-30"), {
        date: V,
        lunarDate: W,
        festival: d[Y] ? d[Y].title : "",
        lunarFestival: k[N] ? k[N].title : "",
        lYear: h,
        lMonth: A,
        lDay: y,
        animal: n.getAnimal(h),
        IMonthCn: (f ? "\u95F0" : "") + n.toChinaMonth(A),
        IDayCn: n.toChinaDay(y),
        cYear: a,
        cMonth: s,
        cDay: i,
        gzYear: B,
        gzMonth: S,
        gzDay: w,
        isToday: m,
        isLeap: f,
        nWeek: T,
        ncWeek: "\u661F\u671F" + U,
        isTerm: I,
        Term: M,
        constellation: x
      };
    });
  }
};
let u = n;
o(u, "getLunarYearDays", (t) => {
  let e, l = 348;
  for (e = 32768; e > 8; e >>= 1)
    l += p[t - 1900] & e ? 1 : 0;
  return l + n.leapDays(t);
}), o(u, "leapMonth", (t) => p[t - 1900] & 15), o(u, "leapDays", (t) => n.leapMonth(t) ? p[t - 1900] & 65536 ? 30 : 29 : 0), o(u, "monthDays", (t, e) => e > 12 || e < 1 ? -1 : p[t - 1900] & 65536 >> e ? 30 : 29), o(u, "toGanZhiYear", (t) => {
  let e = (t - 3) % 10, l = (t - 3) % 12;
  return e === 0 && (e = 10), l === 0 && (l = 12), b[e - 1] + G[l - 1];
}), o(u, "toConstellation", (t, e) => {
  const l = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF", a = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return l.substr(t * 2 - (e < a[t - 1] ? 2 : 0), 2) + "\u5EA7";
}), o(u, "toGanZhi", (t) => b[t % 10] + G[t % 12]), o(u, "getTerm", (t, e) => {
  if (t < 1900 || t > 2100 || e < 1 || e > 24)
    return -1;
  const l = _[t - 1900], a = [];
  for (let s = 0; s < l.length; s += 5) {
    const i = parseInt("0x" + l.substr(s, 5)).toString();
    a.push(i[0], i.substr(1, 2), i[3], i.substr(4, 2));
  }
  return parseInt(a[e - 1]);
}), o(u, "toChinaMonth", (t) => {
  if (t > 12 || t < 1)
    return -1;
  let e = q[t - 1];
  return e += "\u6708", e;
}), o(u, "toChinaDay", (t) => {
  let e;
  switch (t) {
    case 10:
      e = "\u521D\u5341";
      break;
    case 20:
      e = "\u4E8C\u5341";
      break;
    case 30:
      e = "\u4E09\u5341";
      break;
    default:
      e = J[Math.floor(t / 10)], e += z[t % 10];
  }
  return e;
}), o(u, "getAnimal", (t) => L[(t - 4) % 12]);
export {
  u as Lunar
};
