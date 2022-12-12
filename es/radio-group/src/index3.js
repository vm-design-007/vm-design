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
  vertical: {
    type: Boolean,
    default: () => !1
  },
  columnGap: {
    type: [String, Number],
    default: () => ""
  },
  rowGap: {
    type: [String, Number],
    default: () => ""
  },
  border: {
    type: Boolean,
    default: () => !1
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  }
}, d = {
  "update:modelValue": (e) => t(e) || o(e) || r(e),
  change: (e) => t(e) || o(e) || r(e)
}, i = Symbol("");
export {
  d as Emits,
  a as Props,
  i as RadioGroupPropsKey
};
