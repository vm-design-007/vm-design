import "vue";
import { setBooleanProp as o, setStringNumberProp as r, setStringProp as t, setFunctionProp as n } from "../../_utils/props/index.js";
import { VM_SIZE as p } from "../../_tokens/attrs/index.js";
const m = {
  modelValue: {
    type: [String, Number, Boolean],
    default: () => null
  },
  disabled: o(),
  vertical: o(),
  columnGap: r(),
  rowGap: r(),
  background: o(),
  size: t("middle", (e) => p.includes(e)),
  onChange: n()
}, s = Symbol(
  "radio-group-props-key"
);
export {
  m as Props,
  s as RADIO_GROUP_PROPS_kEY
};
