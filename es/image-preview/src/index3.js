const t = {
  imgList: {
    type: Array,
    default: () => []
  },
  visible: {
    type: Boolean,
    default: () => !1
  },
  modalClose: {
    type: Boolean,
    default: () => !0
  },
  isCloseBtn: {
    type: Boolean,
    default: () => !0
  },
  showIndex: {
    type: Number,
    default: () => 0,
    validator: (e) => e >= 0
  },
  zIndex: {
    type: Number,
    default: () => 999,
    validator: (e) => e >= 0
  },
  isOption: {
    type: Boolean,
    default: () => !0
  },
  round: {
    type: String,
    default: () => ""
  }
}, o = {
  "update:visible": (e) => typeof e == "boolean",
  close: (e) => e
};
export {
  o as Emits,
  t as Props
};
