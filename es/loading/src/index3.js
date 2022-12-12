const e = {
  show: {
    type: Boolean,
    default: () => !1
  },
  close: {
    type: Boolean,
    default: () => !1
  },
  text: {
    type: String,
    default: () => ""
  },
  fontColor: {
    type: String,
    default: () => ""
  },
  iconColor: {
    type: String,
    default: () => ""
  },
  fontSize: {
    type: String,
    default: () => ""
  },
  background: {
    type: String,
    default: () => ""
  },
  opacity: {
    type: Number,
    default: () => null
  },
  icon: {
    type: Object,
    default: () => null
  }
}, l = {
  close: (t) => t
};
export {
  l as Emits,
  e as Props
};
