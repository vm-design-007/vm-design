import "vue";
import { setStringNumberProp as r, setStringProp as t, setBooleanProp as o, setFunctionProp as n } from "../../_utils/props/index.js";
const l = {
  modelValue: r(),
  position: t("top", (e) => ["left", "right", "top", "bottom"].includes(e)),
  type: t("line", (e) => ["line", "card", "segment"].includes(e)),
  justifyContent: t(
    null,
    (e) => [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly"
    ].includes(e)
  ),
  editStatus: o(),
  trigger: t("click", (e) => ["click", "hover"].includes(e)),
  onSwitch: n(),
  onEdit: n()
}, c = Symbol("tabs-props-key");
export {
  l as Props,
  c as TABS_PROPS_KEY
};
