import "vue";
import { setArrayProp as p, setBooleanProp as o, setStringProp as r, setStringNumberProp as e, setFunctionProp as n } from "../../_utils/props/index.js";
import { VM_SIZE as s } from "../../_tokens/attrs/index.js";
const m = {
  modelValue: p([]),
  disabled: o(),
  vertical: o(),
  label: r(),
  background: o(),
  size: r("middle", (t) => s.includes(t)),
  columnGap: e(),
  rowGap: e(),
  onChange: n()
}, c = Symbol(
  "v-checkbox-group-props-key"
);
export {
  c as CHECKBOX_GROUP_PROPS_KEY,
  m as Props
};
