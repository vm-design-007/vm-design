const t = {
  listStyle: {
    type: String,
    default: () => ""
  },
  zebra: {
    type: Boolean,
    default: () => !1
  },
  center: {
    type: Boolean,
    default: () => !1
  },
  textColor: {
    type: String,
    default: () => ""
  },
  borderColor: {
    type: String,
    default: () => ""
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small"].includes(e)
  },
  maxHeight: {
    type: [String, Number],
    default: () => ""
  }
}, l = Symbol("list-props");
export {
  t as Props,
  l as listPropsKey
};
