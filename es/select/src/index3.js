import "vue";
import { setStringProp as e, setBooleanProp as r, setFunctionProp as t } from "../../_utils/props/index.js";
import { VM_SIZE as l } from "../../_tokens/attrs/index.js";
const s = {
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null,
    required: !0
  },
  width: {
    type: [Number, String],
    default: () => null
  },
  name: e("v-select"),
  size: e("middle", (o) => l.includes(o)),
  placeholder: e(),
  clear: r(),
  disabled: r(),
  onChange: t()
}, u = Symbol("v-select-props-key");
export {
  s as Props,
  u as SELECT_PROPS_TOKEN
};
