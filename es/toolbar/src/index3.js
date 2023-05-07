import "vue";
import { setBooleanProp as r, setStringProp as o, setStringNumberProp as t, setFunctionProp as i } from "../../_utils/props/index.js";
import { VM_SIZE as n } from "../../_tokens/attrs/index.js";
const m = {
  round: r(),
  size: o("middle", (e) => n.includes(e)),
  background: o(),
  textColor: o(),
  fixed: r(),
  width: t(),
  height: t(),
  onClick: i()
};
export {
  m as Props
};
