const l = {
  type: {
    type: String,
    default: () => "default",
    validator: (e) => ["default", "primary", "success", "danger", "warning"].includes(e)
  },
  close: {
    type: Boolean,
    default: () => !1
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  background: {
    type: String,
    default: () => ""
  },
  color: {
    type: String,
    default: () => ""
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  simple: {
    type: Boolean,
    default: () => !1
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  line: {
    type: Boolean,
    default: () => !1
  }
}, t = {
  "close-end": (e) => e
};
export {
  t as Emits,
  l as Props
};
