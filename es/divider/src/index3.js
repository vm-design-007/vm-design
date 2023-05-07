import "vue";
import { setStringProp as o, setBooleanProp as e, setStringNumberProp as t } from "../../_utils/props/index.js";
const s = {
  position: o(
    "center",
    (r) => ["left", "center", "right"].includes(r)
  ),
  vertical: e(),
  color: o(),
  fontColor: o(),
  margin: t(),
  height: t(),
  background: o(),
  type: o("solid", (r) => ["dashed", "dotted", "double", "solid"].includes(r))
};
export {
  s as Props
};
