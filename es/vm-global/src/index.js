import "vue";
import { setStringProp as n } from "../../_utils/props/index.js";
import { VM_SIZE as o, VM_TYPE as e } from "../../_tokens/attrs/index.js";
const s = {
  size: n(null, (r) => o.includes(r)),
  type: n(null, (r) => e.includes(r)),
  lang: n("zh-CN", (r) => ["en-US", "zh-CN"].includes(r))
}, i = Symbol("vm-global-props-key");
export {
  s as Props,
  i as VM_GLOBAL_PROPS_KEY
};
