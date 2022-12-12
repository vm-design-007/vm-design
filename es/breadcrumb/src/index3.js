const e = {
  separator: {
    type: Object,
    default: () => null
  },
  itemColor: {
    type: String,
    default: () => ""
  },
  separatorColor: {
    type: String,
    default: () => ""
  },
  fontSize: {
    type: [String, Number],
    default: () => ""
  }
}, t = Symbol("BreadcrumbPropsKey");
export {
  t as BreadcrumbPropsKey,
  e as Props
};
