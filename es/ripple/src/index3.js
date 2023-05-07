import "vue";
import { setStringProp as o, setNumberProp as r, setBooleanProp as p } from "../../_utils/props/index.js";
import { VM_TYPE as e } from "../../_tokens/attrs/index.js";
const l = {
  ripplesColor: o(),
  duration: r(400),
  type: o(null, (t) => e.includes(t)),
  disabled: p(),
  startOpacity: r(),
  endOpacity: r()
};
export {
  l as Props
};
