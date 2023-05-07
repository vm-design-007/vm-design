import "vue";
import { setStringNumberProp as e, setNumberProp as p, setBooleanProp as o, setStringProp as r } from "../../_utils/props/index.js";
import { VM_TYPE as m } from "../../_tokens/attrs/index.js";
const i = {
  value: e(),
  max: p(99),
  dot: o(),
  show: o(!0),
  type: r("danger", (t) => m.includes(t)),
  background: r(),
  color: r()
};
export {
  i as Props
};
