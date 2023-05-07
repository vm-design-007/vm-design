import { SOLAR_CALENDAR_FESTIVE as N, LUNAR_FESTIVE as R, ANIMALS as d, SOLAR_TERM as k, LUNAR_INFO as A, SOLAR_TERM_LIST as O, DATE_CHANG_LUNAR_CALENDAR as U, CONVERT_DIGIT_CHINES as v } from "./src/index.js";
const V = () => {
  const T = (t) => {
    let e, l = 348;
    for (e = 32768; e > 8; e >>= 1)
      l += A[t - 1900] & e ? 1 : 0;
    return l + p(t);
  }, L = (t) => A[t - 1900] & 15, p = (t) => L(t) ? A[t - 1900] & 65536 ? 30 : 29 : 0, F = (t, e) => e > 12 || e < 1 ? -1 : A[t - 1900] & 65536 >> e ? 30 : 29, m = (t, e) => {
    const l = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF", n = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return l.substr(t * 2 - (e < n[t - 1] ? 2 : 0), 2) + "\u5EA7";
  }, b = (t, e) => {
    if (t < 1900 || t > 2100 || e < 1 || e > 24)
      return -1;
    const l = O[t - 1900], n = [];
    for (let u = 0; u < l.length; u += 5) {
      const s = parseInt("0x" + l.substr(u, 5)).toString();
      n.push(s[0], s.substr(1, 2), s[3], s.substr(4, 2));
    }
    return parseInt(n[e - 1]);
  }, h = (t) => {
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
        e = U[Math.floor(t / 10)], e += v[t % 10];
    }
    return e;
  }, y = (t) => d[(t - 4) % 12];
  return (t, e, l) => {
    let n = parseInt(t.toString()), u = parseInt(e.toString()), s = parseInt(l.toString());
    if (n < 1900 || n > 2100 || n === 1900 && u === 1 && s < 31)
      return -1;
    let o;
    n ? o = new Date(n, parseInt(u.toString()) - 1, s) : o = new Date();
    let r, c = 0, i = 0;
    n = o.getFullYear(), u = o.getMonth() + 1, s = o.getDate();
    let a = (Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
    for (r = 1900; r < 2101 && a > 0; r++)
      i = T(r), a -= i;
    a < 0 && (a += i, r--);
    let C = o.getDay();
    C === 0 && (C = 7);
    const D = r;
    c = L(r);
    let f = !1;
    for (r = 1; r < 13 && a > 0; r++)
      c > 0 && r === c + 1 && f === !1 ? (--r, f = !0, i = p(D)) : i = F(D, r), f === !0 && r === c + 1 && (f = !1), a -= i;
    a === 0 && c > 0 && r === c + 1 && (f ? f = !1 : (f = !0, --r)), a < 0 && (a += i, --r);
    const E = r, g = a + 1, B = b(n, u * 2);
    let _ = null;
    B === s && (_ = k[u * 2 - 1]);
    const M = m(u, s), S = u + "-" + s;
    let I = E + "-" + g;
    return E === 12 && g === 29 && F(D, E) === 29 && (I = "12-30"), {
      festival: N[S] ? N[S].title : "",
      lunarFestival: R[I] ? R[I].title : "",
      animal: y(D),
      IDayCn: h(g),
      year: n,
      month: u,
      day: s,
      week: C,
      term: _,
      constellation: M
    };
  };
};
export {
  V as useLunar
};
