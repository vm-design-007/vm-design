import "vue";
import { setStringProp as e, setStringNumberProp as r, setBooleanProp as o, setObjectProp as t, setArrayProp as i, setNumberProp as l, setFunctionProp as s } from "../../_utils/props/index.js";
import { VM_TYPE as p } from "../../_tokens/attrs/index.js";
const m = {
  type: e(null, (n) => p.includes(n)),
  fontSize: r(),
  titleSize: r(),
  bold: o(),
  center: o(),
  close: o(),
  simple: o(),
  title: e(),
  round: o(),
  background: e(),
  color: e(),
  titleColor: e(),
  fixed: o(),
  closeIcon: t(),
  beforeIcon: t(),
  alertList: i(),
  duration: l(),
  onClose: s()
};
export {
  m as Props
};
