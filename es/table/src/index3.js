import "vue";
import { setArrayProp as e, setStringProp as r, setBooleanProp as o, setStringNumberProp as n } from "../../_utils/props/index.js";
const s = {
  data: e(),
  columns: e(),
  align: r("left", (t) => ["left", "center", "right"].includes(t)),
  border: o(),
  num: o(),
  zebra: o(),
  zebraColor: r(),
  height: n(),
  bgColor: r(),
  headBgColor: r(),
  showHead: o(!0)
};
export {
  s as Props
};
