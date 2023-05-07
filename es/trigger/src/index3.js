import "vue";
import { setStringNumberProp as n, setBooleanProp as o, setStringProp as i, setNumberProp as e, setFunctionProp as r } from "../../_utils/props/index.js";
const a = {
  spacing: n(),
  disabled: o(),
  trigger: i("hover", (t) => ["hover", "click"].includes(t)),
  arrow: o(),
  enterDuration: e(),
  leaveDuration: e(),
  onChange: r(),
  onOpen: r(),
  onClose: r()
}, c = Symbol("trigger-close-key");
export {
  a as Props,
  c as TRIGGER_CLOSE_KEY
};
