const l = {
  modelValue: {
    type: String,
    default: () => ""
  },
  type: {
    type: String,
    default: () => "text",
    validator: (e) => ["text", "password"].includes(e)
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  max: {
    type: Number,
    default: () => null
  },
  min: {
    type: Number,
    default: () => null
  },
  maxLength: {
    type: Number,
    default: () => null,
    validator: (e) => e >= 0
  },
  autofocus: {
    type: Boolean,
    default: () => !1
  },
  name: {
    type: String,
    default: () => "v-input"
  },
  placeholder: {
    type: String,
    default: () => ""
  },
  clear: {
    type: Boolean,
    default: () => !1
  },
  search: {
    type: Boolean,
    default: () => !1
  },
  readonly: {
    type: Boolean,
    default: () => !1
  },
  showPassword: {
    type: Boolean,
    default: () => !1
  },
  enterSearch: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: Object,
    default: () => null
  },
  onSearch: {
    type: Function,
    default: () => null
  },
  onChange: {
    type: Function,
    default: () => null
  },
  onBlur: {
    type: Function,
    default: () => null
  },
  onFocus: {
    type: Function,
    default: () => null
  },
  onEnter: {
    type: Function,
    default: () => null
  }
}, t = {
  "update:modelValue": (e) => e
};
export {
  t as Emits,
  l as Props
};
