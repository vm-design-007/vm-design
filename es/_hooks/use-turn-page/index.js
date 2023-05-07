import { ref as d } from "vue";
import { EMIT_CURRENT as l, EMIT_PAGESIZE as h } from "../../_tokens/emits/index.js";
import { PAGINATION_ITEM as I, PAGINATION_PREV as b, PAGINATION_NEXT as C } from "../../_tokens/key/index2.js";
import { useRun as T } from "../use-run/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const S = (e, u, s, c) => {
  const { run: o } = T(), f = (a) => {
    const t = Math.ceil(e.total / Number(a));
    e.current > t && u(l, t), u(h, Number(a));
  }, m = (a, t) => {
    e.disabled || (u(l, a), o(e.onChange, a, e.pageSize, t));
  }, r = d("1");
  return {
    jumpCurrent: r,
    selectChange: f,
    handelChange: m,
    handleInput: () => {
      e.disabled || (Number(r.value) > s.value.length && (r.value = String(s.value.length)), u(l, Number(r.value)));
    },
    handelClick: (a) => {
      if (e.disabled)
        return;
      const t = a.target;
      if (t.className.includes(I)) {
        let n = Number(t.textContent);
        const g = e.pagerCount, i = e.current, N = g - 2;
        t.className.includes(b) && (n = i - N), t.className.includes(C) && (n = i + N), Number.isNaN(n) || (n < 1 && (n = 1), n > c.value && (n = c.value)), n !== i && (u(l, n), o(e.onChange, n, e.pageSize, a));
      }
    }
  };
};
export {
  S as useTurnPage
};
