const t = {
  round: {
    type: Boolean,
    default: () => !1
  },
  size: {
    type: String,
    default: () => "large",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  background: {
    type: String,
    default: () => ""
  },
  textColor: {
    type: String,
    default: () => ""
  },
  fixed: {
    type: Boolean,
    default: () => !1
  },
  width: {
    type: String,
    default: () => ""
  },
  height: {
    type: String,
    default: () => ""
  }
}, l = {
  click: (e) => e
};
export {
  l as Emits,
  t as Props
};
