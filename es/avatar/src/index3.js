const t = {
  src: {
    type: String,
    default: () => ""
  },
  errSrc: {
    type: String,
    default: () => ""
  },
  icon: {
    type: Object,
    default: () => null
  },
  alt: {
    type: String,
    default: () => ""
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  lazy: {
    type: Boolean,
    default: () => !1
  },
  fit: {
    type: String,
    default: () => "",
    validator: (e) => ["fill", "contain", "cover", "none", "scale-down", ""].includes(e)
  },
  size: {
    type: [String, Number],
    default: () => "middle",
    validator: (e) => typeof e == "string" ? ["large", "middle", "small", "mini"].includes(e) : typeof e == "number" ? e >= 1 : !1
  },
  background: {
    type: String,
    default: () => ""
  },
  fontSize: {
    type: [String, Number],
    default: () => "15px"
  },
  fontColor: {
    type: String,
    default: () => "#333"
  },
  text: {
    type: String,
    default: () => ""
  },
  rootMargin: {
    type: [String, Number],
    default: () => "100px"
  },
  loadAnimation: {
    type: Boolean,
    default: () => !1
  }
}, n = {
  load: (e) => e instanceof Event,
  error: (e) => e instanceof Event
};
export {
  n as Emits,
  t as Props
};
