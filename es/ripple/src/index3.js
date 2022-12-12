const t = {
  ripplesColor: {
    type: String,
    default: () => ""
  },
  duration: {
    type: Number,
    default: () => 400,
    validator: (e) => e > 0
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e) => ["default", "primary", "success", "danger", "warning"].includes(e)
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  startOpacity: {
    type: Number,
    default: () => 0.5,
    validator: (e) => [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].includes(e)
  },
  endOpacity: {
    type: Number,
    default: () => 0,
    validator: (e) => [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].includes(e)
  },
  noSelect: {
    type: Boolean,
    default: () => !0
  }
};
export {
  t as Props
};
