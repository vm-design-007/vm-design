import { isString as t, isNumber as o, isBoolean as r } from "../../_utils/index3.js";
const a = {
  disabled: {
    type: Boolean,
    default: () => !1
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: () => ""
  },
  name: {
    type: String,
    default: () => "v-radio"
  },
  label: {
    type: [String, Number, Boolean],
    default: () => ""
  }
}, l = {
  "update:modelValue": (e) => t(e) || o(e) || r(e),
  change: (e) => t(e) || o(e) || r(e)
};
export {
  l as Emits,
  a as Props
};
