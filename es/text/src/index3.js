const t = {
  type: {
    type: String,
    default: () => "default",
    validator: (e) => ["default", "primary", "success", "danger", "warning"].includes(e)
  },
  size: {
    type: [String, Number],
    default: () => ""
  },
  color: {
    type: String,
    default: () => ""
  },
  background: {
    type: String,
    default: () => ""
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  spacing: {
    type: [String, Number],
    default: () => ""
  },
  lineHeight: {
    type: [String, Number],
    default: () => ""
  },
  indent: {
    type: [String, Number],
    default: () => ""
  },
  bold: {
    type: Boolean,
    default: () => !1
  },
  decoration: {
    type: String,
    default: () => ""
  },
  padding: {
    type: [String, Number],
    default: () => ""
  },
  width: {
    type: [String, Number],
    default: () => ""
  },
  ellipsis: {
    type: Boolean,
    default: () => !1
  },
  center: {
    type: Boolean,
    default: () => !1
  }
};
export {
  t as Props
};
