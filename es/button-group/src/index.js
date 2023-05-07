import "vue";
import { setStringProp as r } from "../../_utils/props/index.js";
import { VM_SIZE as t } from "../../_tokens/attrs/index.js";
const p = {
  size: r(null, (o) => t.includes(o)),
  direction: r(
    "horizontal",
    (o) => ["horizontal", "vertical"].includes(o)
  )
}, l = Symbol(
  "button-group-props-key"
);
export {
  l as BUTTON_GROUP_PROPS_KEY,
  p as Props
};
