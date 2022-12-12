const t = {
  content: {
    type: String,
    default: () => "\u6682\u65E0\u6570\u636E"
  },
  contentSize: {
    type: String,
    default: () => ""
  },
  contentColor: {
    type: String,
    default: () => ""
  },
  imageSrc: {
    type: String,
    default: () => ""
  },
  imageSize: {
    type: [String, Number],
    default: () => ""
  },
  background: {
    type: String,
    default: () => ""
  }
};
export {
  t as Props
};
