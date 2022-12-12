const t = {
  type: {
    type: String,
    default: () => "primary",
    validator: (e) => ["default", "primary", "success", "danger", "warning"].includes(e)
  },
  href: {
    type: String,
    default: () => ""
  },
  size: {
    type: [String, Number],
    default: () => ""
  },
  state: {
    type: String,
    default: () => "",
    validator: (e) => ["line", "bag", ""].includes(e)
  },
  prohibit: {
    type: Boolean,
    default: () => !1
  },
  target: {
    type: String,
    default: () => "",
    validator: (e) => ["_self", "_blank", "_parent", "_top", ""].includes(e)
  },
  color: {
    type: String,
    default: () => ""
  },
  noCopy: {
    type: Boolean,
    default: () => !1
  },
  noLink: {
    type: Boolean,
    default: () => !1
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  }
}, a = {
  click: (e) => e
};
export {
  a as Emits,
  t as Props
};
