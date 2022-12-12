const t = {
  modelValue: {
    type: [String, Number, Array],
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  vertical: {
    type: Boolean,
    default: () => !1
  },
  label: {
    type: String,
    default: () => ""
  },
  changeEvent: {
    type: Function,
    default: () => null
  },
  border: {
    type: Boolean,
    default: () => !1
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  columnGap: {
    type: [String, Number],
    default: () => ""
  },
  rowGap: {
    type: [String, Number],
    default: () => ""
  }
}, l = {
  "update:modelValue": (e) => Array.isArray(e),
  change: (e) => typeof e == "object"
}, a = Symbol("v-checkbox-group-props-key");
export {
  l as Emits,
  t as Props,
  a as checkboxGroupPropsKey
};
