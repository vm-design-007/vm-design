const e = {
  round: {
    type: Boolean,
    default: () => !1
  },
  behavior: {
    type: String,
    default: () => "smooth",
    validator: (t) => ["smooth", "auto"].includes(t)
  },
  visibleHeight: {
    type: Number,
    default: () => 200,
    validator: (t) => t >= 0
  },
  right: {
    type: [String, Number],
    default: () => "40px"
  },
  bottom: {
    type: [String, Number],
    default: () => "40px"
  },
  zIndex: {
    type: Number,
    default: () => 900,
    validator: (t) => t >= 0
  },
  top: {
    type: Number,
    default: () => 0,
    validator: (t) => t >= 0
  },
  listenEl: {
    type: String,
    default: () => ""
  },
  background: {
    type: String,
    default: () => "#fff"
  },
  color: {
    type: String,
    default: () => "#333"
  }
}, r = {
  click: (t) => t
};
export {
  r as Emits,
  e as Props
};
