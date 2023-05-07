import "vue";
import { setStringProp as r, setBooleanProp as e } from "../../_utils/props/index.js";
import { VM_SIZE as t } from "../../_tokens/attrs/index.js";
const m = {
  time: r(),
  disabled: e(),
  clear: e(),
  placeholder: r(),
  size: r("middle", (o) => t.includes(o))
};
export {
  m as Props
};
