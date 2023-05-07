import "vue";
import { setNumberProp as e, setStringProp as n, setBooleanProp as t, setFunctionProp as r } from "../../_utils/props/index.js";
import { VM_TYPE as u, VM_SIZE as l } from "../../_tokens/attrs/index.js";
const m = {
  modelValue: e(1),
  model: n("default", (o) => ["default", "button", "switch"].includes(o)),
  precision: e(0),
  buttonType: n(null, (o) => u.includes(o)),
  step: e(1),
  size: n("middle", (o) => l.includes(o)),
  disabled: t(),
  max: e(),
  min: e(),
  maxLength: e(),
  autofocus: t(),
  name: n("v-input-number"),
  placeholder: n(),
  clear: t(),
  readonly: t(),
  onChange: r(),
  onBlur: r(),
  onFocus: r(),
  onInput: r()
};
export {
  m as Props
};
