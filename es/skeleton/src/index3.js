const a = {
  rounded: {
    type: Boolean,
    default: !1
  },
  animated: {
    type: Boolean,
    default: !1
  },
  circled: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    default: () => "default",
    validator: (e) => ["default", "small", "large"].includes(e)
  }
};
export {
  a as Props
};
