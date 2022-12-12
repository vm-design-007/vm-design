const t = {
  modelValue: {
    type: Number,
    default: () => 0,
    validator: (e) => e >= 0
  },
  max: {
    type: Number,
    default: () => 5,
    validator: (e) => e > 0
  },
  effectColor: {
    type: String,
    default: () => "#fcc202"
  },
  invalidColor: {
    type: String,
    default: () => "#eef"
  },
  readonly: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: Object,
    default: () => null
  },
  size: {
    type: [String, Number],
    default: () => "25px"
  },
  textShow: {
    type: Boolean,
    default: () => !1
  },
  textColor: {
    type: String,
    default: () => ""
  },
  textArr: {
    type: Array,
    default: () => ["\u6781\u5DEE", "\u5931\u671B", "\u4E00\u822C", "\u4E0D\u9519", "\u5F88\u68D2"]
  },
  textSize: {
    type: [String, Number],
    default: () => ""
  }
}, u = {
  change: (e) => e,
  "update:modelValue": (e) => e
};
export {
  u as Emits,
  t as Props
};
