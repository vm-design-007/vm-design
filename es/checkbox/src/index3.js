const t = {
  modelValue: {
    type: Boolean,
    default: () => !1
  },
  label: {
    type: String,
    default: () => ""
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  border: {
    type: Boolean,
    default: () => !1
  }
}, o = {
  "update:modelValue": (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean"
};
export {
  o as Emits,
  t as Props
};
