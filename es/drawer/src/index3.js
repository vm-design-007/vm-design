import "vue";
import { setBooleanProp as o, setStringProp as t, setStringNumberProp as n, setObjectProp as s, setNumberProp as p, setFunctionProp as e } from "../../_utils/props/index.js";
const u = {
  visible: o(),
  appendToBody: o(),
  direction: t("right", (r) => ["left", "top", "right", "bottom"].includes(r)),
  size: n("30%"),
  title: t(),
  showMask: o(!0),
  maskClose: o(!0),
  maskBlur: o(),
  showCloseIcon: o(!0),
  closeIcon: s(),
  zIndex: p(1999),
  onOpen: e(),
  onOpenEnd: e(),
  onClose: e(),
  onCloseEnd: e()
};
export {
  u as Props
};
