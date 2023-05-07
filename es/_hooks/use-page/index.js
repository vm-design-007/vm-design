import { computed as v, ref as m, watchEffect as w } from "vue";
import { EMIT_CURRENT as C } from "../../_tokens/emits/index.js";
import { useRun as N } from "../use-run/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const E = (e, h) => {
  const { run: c } = N(), u = v(() => {
    const t = Math.floor(e.total / e.pageSize);
    return e.total % e.pageSize === 0 ? t : t + 1;
  }), P = v(() => {
    const t = Number(e.pagerCount), n = Number(e.current), g = (t - 1) / 2;
    let a = !1, o = !1;
    const s = [];
    if (u.value > t)
      e.current > t - g && (a = !0), e.current < u.value - g && (o = !0);
    else {
      for (let r = 2; r < u.value; r++)
        s.push(r);
      return s;
    }
    if (!a && o)
      for (let r = 2; r < t; r++)
        s.push(r);
    else if (a && !o) {
      const r = u.value - (t - 2);
      for (let l = r; l < u.value; l++)
        s.push(l);
    } else if (a && o) {
      const r = Math.floor(t / 2) - 1;
      for (let l = n - r; l <= n + r; l++)
        s.push(l);
    } else
      for (let r = 2; r < t; r++)
        s.push(r);
    return s;
  }), M = (t) => {
    if (e.disabled)
      return;
    let n;
    c({
      next: () => {
        const a = e.current === u.value ? u.value : e.current + 1;
        h(C, a), c(e.onNext, a, e.pageSize);
      },
      prev: () => {
        n = e.current === 1 ? 1 : e.current - 1, h(C, n), c(e.onPrev, n, e.pageSize);
      }
    }[t]);
  }, f = m(!1), i = m(!1);
  return w(() => {
    const t = Number(e.pagerCount), n = (t - 1) / 2;
    f.value = !1, i.value = !1, u.value > t && (e.current > t - n && (f.value = !0), e.current < u.value - n && (i.value = !0));
  }), { pages: P, showNextMore: i, showPrevMore: f, maxCount: u, handelTurnPages: M };
};
export {
  E as usePage
};
