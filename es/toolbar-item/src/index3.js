const e = {
  color: {
    type: String,
    default: () => ""
  },
  icon: {
    type: Object,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => "16px"
  },
  dataKey: {
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
