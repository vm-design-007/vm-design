import "vue";
import { setBooleanProp as o, setStringProp as e, setObjectProp as t, setStringNumberProp as i, setFunctionProp as n } from "../../_utils/props/index.js";
import { VM_SIZE as s } from "../../_tokens/attrs/index.js";
const u = {
  modelValue: {
    ...o(),
    required: !0
  },
  size: e(null, (r) => s.includes(r)),
  disabled: o(),
  icon: t(),
  closeColor: e(),
  activeColor: e(),
  activeText: e(),
  closeText: e(),
  square: o(),
  iconSize: i(),
  onChange: n()
};
export {
  u as Props
};
