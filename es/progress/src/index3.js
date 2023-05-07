import "vue";
import { setNumberProp as o, setStringProp as r, setStringNumberProp as p, setBooleanProp as t } from "../../_utils/props/index.js";
import { VM_TYPE as s } from "../../_tokens/attrs/index.js";
const c = {
  percentage: o(0),
  state: r("line", (e) => ["line", "circle"].includes(e)),
  type: r("primary", (e) => s.includes(e)),
  height: p(),
  showText: t(!0),
  diameter: o(400),
  outsideText: t(),
  textColor: r(),
  color: r(),
  background: r(),
  stripe: t()
}, l = Symbol("progress-props-key");
export {
  l as PROGRESS_PROPS_KEY,
  c as Props
};
