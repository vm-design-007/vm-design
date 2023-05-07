import { ref as k, computed as F, onBeforeUnmount as S, onActivated as U, onDeactivated as g } from "vue";
import { isBrowser as u } from "../../_utils/is/index.js";
const R = (e) => u ? window.requestAnimationFrame(e) : -1, x = (e) => {
  u && window.cancelAnimationFrame(e);
}, s = 1e3, f = 60 * s, l = 60 * f, T = 24 * l, B = (e) => {
  const r = Math.floor(e / T), i = Math.floor(e % T / l), t = Math.floor(e % l / f), a = Math.floor(e % f / s), n = Math.floor(e % s);
  return {
    total: e,
    days: r,
    hours: i,
    minutes: t,
    seconds: a,
    milliseconds: n
  };
}, E = (e, r) => Math.floor(e / s) === Math.floor(r / s), O = (e) => {
  let r, i, t, a;
  const n = k(e.time), A = F(() => B(n.value)), m = () => Math.max(i - performance.now(), 0), d = (o) => {
    var w;
    n.value = o, o === 0 && (c(), (w = e.onFinish) == null || w.call(e));
  }, h = () => {
    !u || (e.millisecond ? v() : M());
  }, C = () => {
    t || (i = performance.now() + n.value, t = !0, h());
  }, D = (o = e.time) => {
    c(), n.value = o;
  }, c = () => {
    t = !1, x(r);
  }, v = () => {
    r = R(() => {
      t && (d(m()), n.value > 0 && v());
    });
  }, M = () => {
    r = R(() => {
      if (t) {
        const o = m();
        (!E(o, n.value) || o === 0) && d(o), n.value > 0 && M();
      }
    });
  };
  return S(c), U(() => {
    a && (t = !0, a = !1, h());
  }), g(() => {
    t && (c(), a = !0);
  }), {
    start: C,
    pause: c,
    reset: D,
    current: A
  };
};
export {
  O as useCountDown
};
