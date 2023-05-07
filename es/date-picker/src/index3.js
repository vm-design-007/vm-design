import "vue";
import { setStringProp as r, setBooleanProp as o } from "../../_utils/props/index.js";
import { VM_SIZE as t } from "../../_tokens/attrs/index.js";
const a = {
  date: r(),
  disabled: o(),
  clear: o(),
  size: r("middle", (e) => t.includes(e)),
  format: r("YYYY/MM/DD"),
  placeholder: r(),
  addZero: o()
};
export {
  a as Props
};
