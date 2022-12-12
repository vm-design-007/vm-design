const e = {
  icon: {
    type: Object,
    default: () => null
  },
  color: {
    type: String,
    default: () => ""
  },
  size: {
    type: [String, Number],
    default: () => ""
  }
}, c = {
  click: (t) => t
};
export {
  c as Emits,
  e as Props
};
