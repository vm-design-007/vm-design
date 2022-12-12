const e = {
  imageList: {
    type: Array,
    default: () => []
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  expandIndex: {
    type: Number,
    default: () => 0
  },
  color: {
    type: String,
    default: () => "#fff"
  },
  width: {
    type: [String, Number],
    default: () => ""
  },
  height: {
    type: [String, Number],
    default: () => ""
  }
};
export {
  e as Props
};
