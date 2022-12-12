const e = {
  position: {
    type: String,
    default: () => "center",
    validator: (t) => ["left", "center", "right"].includes(t)
  },
  vertical: {
    type: Boolean,
    default: () => !1
  },
  color: {
    type: String,
    default: () => ""
  },
  fontColor: {
    type: String,
    default: () => ""
  },
  margin: {
    type: String,
    default: () => ""
  },
  background: {
    type: String,
    default: () => ""
  },
  type: {
    type: String,
    validator: (t) => ["dashed", "dotted", "double", "solid"].includes(t),
    default: () => "solid"
  }
};
export {
  e as Props
};
