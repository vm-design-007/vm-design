import { computed as u, ref as h, reactive as $ } from "vue";
import { convertFormat as c, sizeChange as f } from "../../_utils/utils/index.js";
import { isBoolean as m, isNumber as a, isString as g, isArray as k } from "../../_utils/is/index.js";
import { useProps as _ } from "../use-props/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const F = (p, n) => {
  const { filter: i } = _(p), y = (t, e) => u(() => {
    const r = h([]), s = i(t);
    e && r.value.push(e);
    for (const o in s)
      s[o] && r.value.push(
        `v-${n}__${m(s[o]) ? c(o) : s[o]}`
      );
    return r.value;
  }), L = (t, e, r = !0) => {
    if (m(r))
      return a(t) && r ? f(t) : t;
    if (g(r)) {
      if (r === e)
        return t;
    } else
      k(r) && r.forEach((s) => {
        if (s === t)
          return t;
      });
    return f(t);
  };
  return { classes: y, styles: (t, e = !0) => u(() => {
    const r = $({}), s = i(t);
    for (const o in s)
      s[o] && (r[`--${n}-${c(o)}`] = L(
        s[o],
        o,
        e
      ));
    return r;
  }) };
};
export {
  F as useList
};
