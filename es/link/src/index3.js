import "vue";
import { setStringProp as o, setStringNumberProp as n, setBooleanProp as e, setObjectProp as t, setFunctionProp as i } from "../../_utils/props/index.js";
import { VM_TYPE as l, VM_TARGET as s } from "../../_tokens/attrs/index.js";
const P = {
  type: o(null, (r) => l.includes(r)),
  href: o(),
  size: n(),
  state: o(null, (r) => ["line", "background"].includes(r)),
  disabled: e(),
  target: o("_self", (r) => s.includes(r)),
  color: o(),
  hoverColor: o(),
  noCopy: e(),
  noLink: e(),
  beforeIcon: t(),
  afterIcon: t(),
  onClick: i()
};
export {
  P as Props
};
