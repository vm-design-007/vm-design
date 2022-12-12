import { messageTypes as t, messagePlacements as l } from "../../_model/message/index2.js";
const a = {
  id: {
    type: String,
    default: () => ""
  },
  message: {
    type: [String, Object],
    default: () => "",
    required: !0
  },
  type: {
    type: String,
    default: () => "default",
    validator: (e) => t.includes(e)
  },
  close: {
    type: Boolean,
    default: () => !1
  },
  duration: {
    type: Number,
    default: () => 3e3
  },
  round: {
    type: Boolean,
    default: () => !1
  },
  icon: {
    type: Object,
    default: () => null
  },
  color: {
    type: String,
    default: () => ""
  },
  background: {
    type: String,
    default: () => ""
  },
  offset: {
    type: Number,
    default: () => 20
  },
  placement: {
    type: String,
    default: () => "top",
    validator: (e) => l.includes(e)
  },
  zIndex: {
    type: Number,
    default: () => null
  },
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  closeEnd: {
    type: Function,
    default: () => null
  }
}, n = ["destroy"];
export {
  n as Emits,
  a as Props
};
