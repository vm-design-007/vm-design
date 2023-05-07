import "vue";
import { setStringNumberProp as e, setStringProp as o, setBooleanProp as t } from "../../_utils/props/index.js";
const s = {
  content: e(),
  position: o("bottom", (r) => ["top", "bottom", "right", "left"].includes(r)),
  disabled: t(),
  state: o("hover", (r) => ["hover", "active", "always"].includes(r)),
  noArrow: t(),
  bold: t(),
  bright: t(),
  background: o(),
  fontColor: o()
};
export {
  s as Props
};
