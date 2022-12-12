const t = {
  visible: {
    type: Boolean,
    default: () => !1,
    required: !0
  },
  title: {
    type: String,
    default: () => ""
  },
  appendToBody: {
    type: Boolean,
    default: () => !1
  },
  width: {
    type: [String, Number],
    default: () => ""
  },
  fullscreen: {
    type: Boolean,
    default: () => !1
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
