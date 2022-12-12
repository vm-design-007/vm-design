const e = {
  content: {
    type: String,
    default: () => ""
  },
  position: {
    type: String,
    default: () => "bottom",
    validator: (t) => ["top", "bottom", "right", "left"].includes(t)
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  state: {
    type: String,
    default: () => "hover",
    validator: (t) => ["hover", "active", "always"].includes(t)
  },
  noArrow: {
    type: Boolean,
    default: () => !1
  },
  bold: {
    type: Boolean,
    default: () => !1
  },
  bright: {
    type: Boolean,
    default: () => !1
  },
  background: {
    type: String,
    default: () => ""
  },
  fontColor: {
    type: String,
    default: () => ""
  }
};
export {
  e as Props
};
