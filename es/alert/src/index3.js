const t = {
  type: {
    type: String,
    default: () => "default",
    validator: (e) => ["primary", "success", "danger", "warning", "default"].includes(e)
  },
  fontSize: {
    type: [String, Number],
    default: () => "15px"
  },
  titleSize: {
    type: [String, Number],
    default: () => "17px"
  },
  bold: {
    type: Boolean,
    default: () => !1
  },
  center: {
    type: Boolean,
    default: () => !1
  },
  close: {
    type: Boolean,
    default: () => !1
  },
  simple: {
    type: Boolean,
    default: () => !1
  },
  title: {
    type: String,
    default: () => ""
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  background: {
    type: String,
    default: () => ""
  },
  color: {
    type: String,
    default: () => ""
  },
  titleColor: {
    type: String,
    default: () => ""
  },
  fixed: {
    type: Boolean,
    default: () => !1
  },
  overflow: {
    type: String,
    default: () => "",
    validator: (e) => ["hidden", ""].includes(e)
  },
  closeIcon: {
    type: Object,
    default: () => null
  },
  beforeIcon: {
    type: Object,
    default: () => null
  }
}, l = {
  "close-end": (e) => e
};
export {
  l as Emits,
  t as Props
};
