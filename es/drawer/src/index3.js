const t = {
  visible: {
    type: Boolean,
    default: () => !0
  },
  appendToBody: {
    type: Boolean,
    default: () => !1
  },
  direction: {
    type: String,
    default: () => "right",
    validator: (e) => ["left", "top", "right", "bottom"].includes(e)
  },
  size: {
    type: [String, Number],
    default: () => "30%"
  },
  title: {
    type: String,
    default: () => ""
  },
  showMask: {
    type: Boolean,
    default: () => !0
  },
  maskClose: {
    type: Boolean,
    default: () => !0
  },
  maskBlur: {
    type: Boolean,
    default: () => !1
  },
  showCloseIcon: {
    type: Boolean,
    default: () => !0
  },
  closeIcon: {
    type: Object,
    default: () => null
  },
  zIndex: {
    type: Number,
    default: () => 1999,
    validator: (e) => e >= 0
  },
  open: {
    type: Function,
    default: () => null
  },
  openEnd: {
    type: Function,
    default: () => null
  },
  close: {
    type: Function,
    default: () => null
  },
  closeEnd: {
    type: Function,
    default: () => null
  }
}, l = {
  "update:visible": (e) => typeof e == "boolean"
};
export {
  l as Emits,
  t as Props
};
