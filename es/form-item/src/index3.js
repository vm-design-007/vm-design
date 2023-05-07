import "vue";
import { setStringProp as r } from "../../_utils/props/index.js";
const o = {
  label: r(),
  name: r(),
  rules: {
    type: [Array, Object],
    default: () => null
  }
};
export {
  o as Props
};
