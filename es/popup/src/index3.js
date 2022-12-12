const t = {
  visible: {
    type: Boolean,
    default: () => !1,
    required: !0
  },
  appendToBody: {
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
  zIndex: {
    type: Number,
    default: () => 1999,
    validator: (e) => e >= 0
  },
  maskBackground: {
    type: String,
    default: () => ""
  },
  maskOpacity: {
    type: Number,
    default: () => null,
    validator: (e) => e >= 0 && e <= 1
  },
  direction: {
    type: String,
    default: () => "center",
    validator: (e) => ["left", "right", "top", "bottom", "center"].includes(e)
  },
  popupSize: {
    type: [String, Number],
    default: () => ""
  },
  padding: {
    type: [String, Number],
    default: () => ""
  }
}, a = {
  "update:visible": (e) => typeof e == "boolean",
  open: (e) => e,
  close: (e) => e,
  "open-end": (e) => e,
  "close-end": (e) => e
};
export {
  a as Emits,
  t as Props
};
