import { notificationTypes as e, notificationPlacements as l } from "../../_model/notification/index2.js";
const u = {
  id: {
    type: String,
    default: () => ""
  },
  title: {
    type: [String, Object],
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
    validator: (t) => e.includes(t)
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
  showIcon: {
    type: Boolean,
    default: () => !0
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
    default: () => "top-right",
    validator: (t) => l.includes(t)
  },
  zIndex: {
    type: Number,
    default: () => 1e3
  },
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  closeEnd: {
    type: Function,
    default: () => null
  }
}, a = ["destroy"];
export {
  a as Emits,
  u as Props
};
