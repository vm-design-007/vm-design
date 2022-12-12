const e = {
  open: {
    type: Boolean,
    default: () => !1
  },
  background: {
    type: String,
    default: () => ""
  },
  openText: {
    type: String,
    default: () => "\u5173\u95ED"
  },
  closeText: {
    type: String,
    default: () => "\u5F00\u542F"
  },
  openHeight: {
    type: [String, Number],
    default: () => "800px"
  },
  borderColor: {
    type: String,
    default: () => "#e5e5e5"
  },
  openEnd: {
    type: Function,
    default: () => null
  },
  closeEnd: {
    type: Function,
    default: () => null
  }
};
export {
  e as Props
};
