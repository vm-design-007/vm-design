import "vue";
import { setStringProp as o, setStringNumberProp as n, setBooleanProp as e, setNumberProp as a, setFunctionProp as r } from "../../_utils/props/index.js";
const u = {
  modelValue: o(),
  rows: n(3),
  disabled: e(),
  maxLength: a(),
  autofocus: e(),
  name: o("v-textarea"),
  placeholder: o(),
  readonly: e(),
  fontSize: n(),
  onInput: r(),
  resize: o(null, (t) => ["none", "both", "horizontal", "vertical"].includes(t)),
  clear: e(),
  onChange: r(),
  onBlur: r(),
  onFocus: r()
};
export {
  u as Props
};
