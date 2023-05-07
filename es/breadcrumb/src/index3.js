import "vue";
import { setObjectProp as r, setStringProp as o, setStringNumberProp as t } from "../../_utils/props/index.js";
const s = {
  separator: r(),
  fontColor: o(),
  iconColor: o(),
  fontSize: t()
}, n = Symbol("breadcrumb-props-key");
export {
  n as BREADCRUMB_PROPS_KEY,
  s as Props
};
