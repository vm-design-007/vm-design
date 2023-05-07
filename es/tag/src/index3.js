import "vue";
import { setStringProp as r, setBooleanProp as o, setObjectProp as n, setFunctionProp as t } from "../../_utils/props/index.js";
import { VM_TYPE as l, VM_SIZE as s } from "../../_tokens/attrs/index.js";
const u = {
  type: r(null, (e) => l.includes(e)),
  close: o(),
  round: o(),
  background: r(),
  color: r(),
  beforeIcon: n(),
  afterIcon: n(),
  size: r(null, (e) => s.includes(e)),
  simple: o(),
  block: o(),
  line: o(),
  onClose: t()
};
export {
  u as Props
};
