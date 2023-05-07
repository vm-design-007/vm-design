import { ref as m, watch as i } from "vue";
import { EMIT_VISIBLE as n } from "../../_tokens/emits/index.js";
import { useRun as a } from "../use-run/index.js";
import "../../loading/src/index2.js";
import "../use-message/index.js";
const I = (r, s, u) => {
  const { run: l } = a(), e = m(r.value), t = (o) => {
    s(n, !1), l(u, o);
  };
  return i(
    () => e.value,
    (o) => {
      o || t();
    }
  ), i(
    () => r.value,
    (o) => {
      e.value = o;
    }
  ), {
    isVisible: e,
    closeVisible: t
  };
};
export {
  I as useVisible
};
