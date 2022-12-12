const t = {
  icon: {
    type: Object,
    default: () => null
  },
  iconSize: {
    type: [String, Number],
    default: () => "16px"
  },
  backText: {
    type: String,
    default: () => "\u8FD4\u56DE"
  },
  title: {
    type: String,
    default: () => ""
  },
  titleBold: {
    type: Boolean,
    default: () => !1
  },
  titleColor: {
    type: String,
    default: () => ""
  },
  titleCenter: {
    type: Boolean,
    default: () => !1
  },
  subtitle: {
    type: String,
    default: () => ""
  }
}, e = {
  back: () => !0
};
export {
  e as Emits,
  t as Props
};
