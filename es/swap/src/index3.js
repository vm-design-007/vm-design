import "vue";
import { setBooleanProp as r, setStringNumberProp as t, setStringProp as n, setObjectProp as e, setFunctionProp as p } from "../../_utils/props/index.js";
const u = {
  modelValue: {
    ...r(),
    require: !0
  },
  size: t(40),
  type: n(null, (o) => ["sound", "swap"].includes(o)),
  iconOn: e(),
  iconOff: e(),
  onChange: p()
};
export {
  u as Props
};
