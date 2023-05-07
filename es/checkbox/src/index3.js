import "vue";
import { setBooleanProp as e, setFunctionProp as o } from "../../_utils/props/index.js";
const r = {
  modelValue: {
    type: Boolean,
    default: () => !1
  },
  label: {
    type: [String, Number, Boolean],
    default: () => null
  },
  disabled: e(),
  border: e(),
  showLabel: e(!0),
  onChange: o()
};
export {
  r as Props
};
