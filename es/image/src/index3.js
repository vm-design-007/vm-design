const t = {
  src: {
    type: String,
    default: () => ""
  },
  alt: {
    type: String,
    default: () => ""
  },
  draggable: {
    type: Boolean,
    default: () => !0
  },
  lazy: {
    type: Boolean,
    default: () => !1
  },
  rootMargin: {
    type: [String, Number],
    default: () => "100px"
  },
  width: {
    type: [String, Number],
    default: () => ""
  },
  height: {
    type: [String, Number],
    default: () => ""
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  fit: {
    type: String,
    default: () => "",
    validator: (e) => ["fill", "contain", "cover", "none", "scale-down", ""].includes(e)
  },
  noSelect: {
    type: Boolean,
    default: () => !1
  },
  referrerPolicy: {
    type: String,
    default: () => ""
  },
  round: {
    type: [String, Number],
    default: () => 0
  },
  errSrc: {
    type: String,
    default: () => ""
  },
  title: {
    type: String,
    default: () => ""
  }
}, r = {
  load: (e) => e instanceof Event,
  error: (e) => e instanceof Event,
  click: (e) => e
};
export {
  r as Emits,
  t as Props
};
