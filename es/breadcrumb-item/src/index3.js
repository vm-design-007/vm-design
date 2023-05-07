import "vue";
import { setStringProp as o, setObjectProp as t } from "../../_utils/props/index.js";
const p = {
  fontColor: o(),
  iconColor: o(),
  separator: t(),
  to: {
    type: [String, Object],
    default: () => null
  }
};
export {
  p as Props
};
