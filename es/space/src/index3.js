const t = {
  vertical: {
    type: Boolean,
    default: () => !1
  },
  wrap: {
    type: Boolean,
    default: () => !0
  },
  spacing: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  rowGap: {
    type: String,
    default: () => ""
  },
  columnGap: {
    type: String,
    default: () => ""
  }
};
export {
  t as Props
};
