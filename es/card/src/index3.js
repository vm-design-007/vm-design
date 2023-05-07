import "vue";
import { setStringProp as o, setBooleanProp as r, setStringNumberProp as e, setFunctionProp as l } from "../../_utils/props/index.js";
const i = {
  title: o(),
  round: r(),
  padding: e(),
  shadow: o(null, (t) => ["hover", "always"].includes(t)),
  borderColor: o(),
  background: o(),
  titleColor: o(),
  titleBold: r(),
  close: r(),
  onClose: l()
};
export {
  i as Props
};
