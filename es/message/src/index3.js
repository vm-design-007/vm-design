import "vue";
import { setStringProp as t, setBooleanProp as r, setNumberProp as e, setObjectProp as n, setFunctionProp as p } from "../../_utils/props/index.js";
import { VM_TYPE as l } from "../../_tokens/attrs/index.js";
const i = {
  message: {
    type: [String, Object],
    default: () => null
  },
  type: t("default", (o) => l.includes(o)),
  close: r(),
  duration: e(2500),
  round: r(),
  icon: n(),
  color: t(),
  background: t(),
  offset: e(20),
  placement: t("top", (o) => ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(o)),
  zIndex: e(),
  closeBtn: {
    type: [String, Object],
    default: () => null
  },
  onClose: p()
};
export {
  i as Props
};
