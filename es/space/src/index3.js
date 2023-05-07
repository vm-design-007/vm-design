import "vue";
import { setBooleanProp as r, setStringProp as o } from "../../_utils/props/index.js";
import { VM_SIZE as t } from "../../_tokens/attrs/index.js";
const a = {
  vertical: r(),
  nowrap: r(),
  spacing: o(null, (p) => t.includes(p)),
  rowGap: o(),
  columnGap: o()
};
export {
  a as Props
};
