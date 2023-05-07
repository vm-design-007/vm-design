import "vue";
import { setBooleanProp as o, setStringProp as r, setStringNumberProp as t } from "../../_utils/props/index.js";
import { VM_SIZE as i } from "../../_tokens/attrs/index.js";
const l = {
  zebra: o(),
  center: o(),
  textColor: r(),
  borderColor: r(),
  size: r("middle", (e) => i.includes(e)),
  maxHeight: t(),
  zebraColor: r()
}, n = Symbol("list-props-key");
export {
  n as LIST_PROPS_KEY,
  l as Props
};
