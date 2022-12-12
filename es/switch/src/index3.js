const t = {
  modelValue: {
    type: Boolean,
    default: () => !1,
    required: !0
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small"].includes(e)
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: Object,
    default: () => null
  },
  closeColor: {
    type: String,
    default: () => ""
  },
  openColor: {
    type: String,
    default: () => ""
  },
  openText: {
    type: String,
    default: () => ""
  },
  closeText: {
    type: String,
    default: () => ""
  },
  square: {
    type: Boolean,
    default: () => !1
  }
}, l = {
  "update:modelValue": (e) => String(e),
  change: (e) => String(e)
};
export {
  l as Emits,
  t as Props
};
