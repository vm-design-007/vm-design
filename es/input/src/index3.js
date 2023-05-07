import "vue";
import { setStringNumberProp as t, setStringProp as e, setBooleanProp as o, setNumberProp as a, setObjectProp as c, setFunctionProp as r } from "../../_utils/props/index.js";
import { VM_SIZE as s } from "../../_tokens/attrs/index.js";
const p = {
  modelValue: t(),
  type: e("text", (n) => ["text", "password", "number"].includes(n)),
  size: e(null, (n) => s.includes(n)),
  disabled: o(),
  max: a(),
  min: a(),
  maxLength: a(),
  fontSize: t(),
  autofocus: o(),
  name: e("v-input"),
  placeholder: e(),
  placeholderColor: e(),
  clear: o(),
  width: t(),
  height: t(),
  search: o(),
  background: e(),
  textColor: e(),
  activeBackground: e(),
  activeBorderColor: e(),
  readonly: o(),
  showPassword: o(),
  enterSearch: o(),
  icon: c(),
  afterIcon: c(),
  autocomplete: e(),
  onSearch: r(),
  onChange: r(),
  onInput: r(),
  onBlur: r(),
  onFocus: r(),
  onEnter: r()
};
export {
  p as Props
};
