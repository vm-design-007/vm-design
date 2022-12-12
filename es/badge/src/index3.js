const t = {
  value: {
    type: [String, Number],
    default: () => ""
  },
  max: {
    type: Number,
    default: () => 99
  },
  dot: {
    type: Boolean,
    default: () => !1
  },
  show: {
    type: Boolean,
    default: () => !1
  },
  type: {
    type: String,
    default: () => "danger",
    validator: (e) => ["primary", "success", "danger", "warning"].includes(
      e
    )
  },
  color: {
    type: String,
    default: () => ""
  },
  textColor: {
    type: String,
    default: () => ""
  }
};
export {
  t as Props
};
