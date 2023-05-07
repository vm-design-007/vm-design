import "vue";
import { setStringNumberProp as t, setStringProp as r, setBooleanProp as o, setFunctionProp as e } from "../../_utils/props/index.js";
const m = {
  time: t(0),
  format: r("HH:mm:ss"),
  autoStart: o(!0),
  millisecond: o(!1),
  onFinish: e()
};
export {
  m as Props
};
