import "vue";
import { setStringProp as t, setBooleanProp as o, setNumberProp as r, setObjectProp as n, setFunctionProp as l } from "../../_utils/props/index.js";
import { VM_TYPE as p } from "../../_tokens/attrs/index.js";
const c = {
  title: {
    type: [String, Object],
    default: () => null
  },
  message: {
    type: [String, Object],
    default: () => null
  },
  type: t(null, (e) => p.includes(e)),
  close: o(),
  duration: r(2500),
  round: o(),
  showIcon: o(!0),
  icon: n(),
  color: t(),
  background: t(),
  offset: r(20),
  placement: t(
    "top-right",
    (e) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
      e
    )
  ),
  zIndex: r(),
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  onClose: l()
};
export {
  c as Props
};
