import "vue";
import { setArrayProp as r, setBooleanProp as n, setFunctionProp as e } from "../../../_utils/props/index.js";
const o = {
  navs: r(),
  type: {
    type: String,
    default: () => "line",
    validator: (t) => ["line", "card", "segment"].includes(t)
  },
  position: {
    type: String,
    default: () => "top",
    validator: (t) => ["left", "right", "top", "bottom"].includes(t)
  },
  activeName: {
    type: [String, Number],
    default: () => null
  },
  justifyContent: {
    type: String,
    default: () => "flex-start",
    validator: (t) => [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly"
    ].includes(t)
  },
  editStatus: n(),
  trigger: {
    type: String,
    default: () => "click",
    validator: (t) => ["click", "hover"].includes(t)
  },
  setActiveName: e(),
  setEdit: e(),
  onSwitch: e()
};
export {
  o as Props
};
