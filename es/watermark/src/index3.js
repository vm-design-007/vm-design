const e = {
  content: {
    type: String,
    default: () => ""
  },
  width: {
    type: Number,
    default: () => 280
  },
  height: {
    type: Number,
    default: () => 200
  },
  fontSize: {
    type: [String, Number],
    default: () => "30px"
  },
  fontColor: {
    type: String,
    default: () => "#333"
  },
  image: {
    type: String,
    default: () => ""
  },
  block: {
    type: Boolean,
    default: () => !1
  },
  zIndex: {
    type: Number,
    default: () => 100
  }
};
export {
  e as Props
};
