import { isString as i, isNumber as s } from "../../_utils/is/index.js";
import "vue";
import { setStringProp as r, setObjectProp as u, setBooleanProp as t, setStringNumberProp as e, setFunctionProp as n } from "../../_utils/props/index.js";
import { VM_FIT as p, VM_SIZE as m } from "../../_tokens/attrs/index.js";
const a = {
  src: r(),
  errSrc: r(),
  icon: u(),
  alt: r(),
  round: t(),
  lazy: t(),
  fit: r(null, (o) => p.includes(o)),
  size: {
    type: [String, Number],
    default: () => "middle",
    validator: (o) => i(o) ? m.includes(o) : s(o) ? o >= 1 : !1
  },
  background: r(),
  fontSize: e(),
  fontColor: r(),
  text: r(),
  rootMargin: e("100px"),
  onLoad: n(),
  onError: n()
};
export {
  a as Props
};
