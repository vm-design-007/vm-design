import "vue";
import { setBooleanProp as e, setStringProp as t, setStringNumberProp as r, setObjectProp as s, setNumberProp as n, setFunctionProp as o } from "../../_utils/props/index.js";
const l = {
  visible: {
    ...e(),
    required: !0
  },
  title: t(),
  appendToBody: e(),
  width: r(),
  height: r(),
  fullscreen: e(),
  showMask: e(!0),
  maskClose: e(!0),
  maskBlur: e(),
  showCloseIcon: e(!0),
  closeIcon: s(),
  zIndex: n(1999),
  onOpen: o(),
  onOpenEnd: o(),
  onClose: o(),
  onCloseEnd: o()
};
export {
  l as Props
};
