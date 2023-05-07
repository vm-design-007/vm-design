import "vue";
import { setBooleanProp as e, setNumberProp as r, setStringProp as t, setStringNumberProp as n, setFunctionProp as o } from "../../_utils/props/index.js";
const u = {
  visible: {
    ...e(),
    required: !0
  },
  appendToBody: e(),
  showMask: e(!0),
  maskClose: e(!0),
  maskBlur: e(),
  zIndex: r(1999),
  maskBackground: t(),
  maskOpacity: r(),
  direction: t("center", (p) => ["left", "right", "top", "bottom", "center"].includes(p)),
  popupSize: n(),
  fullscreen: e(),
  padding: n(),
  onOpen: o(),
  onClose: o(),
  onOpenEnd: o(),
  onCloseEnd: o()
};
export {
  u as Props
};
