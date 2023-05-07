import "vue";
import { setStringNumberProp as t, setBooleanProp as o, setStringProp as i, setNumberProp as e, setFunctionProp as r } from "../../_utils/props/index.js";
const a = {
  spacing: t(),
  disabled: o(),
  trigger: i("hover", (n) => ["hover", "click"].includes(n)),
  arrow: o(),
  enterDuration: e(),
  leaveDuration: e(),
  onChange: r(),
  onOpen: r(),
  onClose: r()
};
export {
  a as Props
};
