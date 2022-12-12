const t = {
  bold: {
    type: Boolean,
    default: () => !1
  },
  circle: {
    type: Boolean,
    default: () => !1
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  fontSize: {
    type: [String, Number],
    default: () => "14px"
  },
  fontColor: {
    type: String,
    default: () => "#fff"
  },
  size: {
    type: String,
    default: () => "middle",
    validator: (e) => ["large", "middle", "small", "mini"].includes(e)
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  href: {
    type: String,
    default: () => ""
  },
  target: {
    type: String,
    default: () => "_self",
    validator: (e) => ["_blank", "_self", "_parent", "_top"].includes(e)
  },
  loading: {
    type: Boolean,
    default: () => !1
  },
  disabled: {
    type: Boolean,
    default: () => !1
  },
  loadingIcon: {
    type: Object,
    default: () => null
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e) => ["default", "primary", "success", "danger", "warning"].includes(e)
  },
  autofocus: {
    type: Boolean,
    default: () => !1
  },
  name: {
    type: String,
    default: () => "v-button"
  },
  shadow: {
    type: String,
    default: () => ""
  },
  text: {
    type: Boolean,
    default: () => !1
  },
  nativeType: {
    type: String,
    default: () => "button",
    validator: (e) => ["button", "submit", "reset"].includes(e)
  },
  simple: {
    type: Boolean,
    default: () => !1
  },
  beforeIcon: {
    type: Object,
    default: () => null
  },
  afterIcon: {
    type: Object,
    default: () => null
  },
  ripples: {
    type: Boolean,
    default: () => !1
  },
  ripplesColor: {
    type: String,
    default: () => ""
  },
  color: {
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
