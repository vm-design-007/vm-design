import "vue";
import { setBooleanProp as i, setStringProp as o, setNumberProp as r, setStringNumberProp as t } from "../../_utils/props/index.js";
const p = {
  round: i(),
  behavior: o("smooth", (e) => ["smooth", "auto"].includes(e)),
  visibleHeight: r(200),
  right: t(),
  bottom: t(),
  zIndex: r(),
  top: r(0),
  listenEl: o(),
  background: o(),
  color: o()
};
export {
  p as Props
};
