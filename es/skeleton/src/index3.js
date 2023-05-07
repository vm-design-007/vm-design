import "vue";
import { setBooleanProp as o, setNumberProp as e, setStringProp as t } from "../../_utils/props/index.js";
import { VM_SIZE as i } from "../../_tokens/attrs/index.js";
const s = {
  round: o(),
  animated: o(),
  rows: e(1),
  loading: o(),
  size: t("middle", (r) => i.includes(r))
};
export {
  s as Props
};
