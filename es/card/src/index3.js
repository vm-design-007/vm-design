const t = {
  title: {
    type: String,
    default: () => ""
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  padding: {
    type: String,
    default: () => "20px"
  },
  shadow: {
    type: String,
    default: () => "never",
    validator: (e) => ["never", "hover", "always"].includes(e)
  }
};
export {
  t as Props
};
