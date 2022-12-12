const l = {
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  vertical: {
    type: Boolean,
    default: () => !1
  }
};
export {
  l as Props
};
