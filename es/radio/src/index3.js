import "vue";
import { setBooleanProp as e, setStringProp as o, setFunctionProp as t } from "../../_utils/props/index.js";
const r = {
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null
  },
  disabled: e(),
  name: o("v-radio"),
  label: {
    type: [String, Number, Boolean],
    default: () => null
  },
  onChange: t()
};
export {
  r as Props
};
