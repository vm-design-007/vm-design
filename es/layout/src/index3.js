import "vue";
import { setStringProp as o } from "../../_utils/props/index.js";
const n = {
  direction: o(null, (r) => ["horizontal", "vertical"].includes(r))
};
export {
  n as Props
};
