const t = {
  size: {
    type: [String, Number],
    default: () => ""
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  color: {
    type: String,
    default: () => ""
  },
  icon: {
    type: Object,
    default: () => null
  }
}, l = {
  click: (e) => e
};
export {
  l as Emits,
  t as Props
};
