const t = {
  percentage: {
    type: Number,
    default: () => 10,
    validator: (e) => e >= 0 && e <= 100
  },
  type: {
    type: String,
    default: () => "primary",
    validator: (e) => ["primary", "success", "danger", "warning"].includes(
      e
    )
  },
  square: {
    type: Boolean,
    default: () => !1
  },
  linear: {
    type: Boolean,
    default: () => !1
  },
  showText: {
    type: Boolean,
    default: () => !0
  },
  textColor: {
    type: String,
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
  width: {
    type: [String, Number],
    default: () => ""
  },
  height: {
    type: [String, Number],
    default: () => "6px"
  },
  stripe: {
    type: Boolean,
    default: () => !1
  },
  textInside: {
    type: Boolean,
    default: () => !1
  }
};
export {
  t as Props
};
