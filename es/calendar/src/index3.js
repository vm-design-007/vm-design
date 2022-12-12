const t = {
  date: {
    type: Date,
    default: () => new Date(),
    required: !0
  },
  lunar: {
    type: Boolean,
    default: () => !1
  },
  showHeader: {
    type: Boolean,
    default: () => !0
  },
  border: {
    type: Boolean,
    default: () => !1
  },
  borderColor: {
    type: String,
    default: () => "#eee"
  },
  dayCellHeight: {
    type: [String, Number],
    default: () => "85px"
  },
  weekCellHeight: {
    type: [String, Number],
    default: () => "50px"
  },
  memorandum: {
    type: Object,
    default: () => null
  }
}, a = {
  "change-date": (e) => e,
  "change-switch": (e) => e
};
export {
  a as Emits,
  t as Props
};
