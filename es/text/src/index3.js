import "vue";
import { setStringProp as r, setStringNumberProp as e, setBooleanProp as n } from "../../_utils/props/index.js";
import { VM_TYPE as i } from "../../_tokens/attrs/index.js";
const s = {
  type: r(null, (o) => i.includes(o)),
  size: e(),
  color: r(),
  background: r(),
  block: n(),
  spacing: e(),
  lineHeight: e(),
  indent: e(),
  bold: n(),
  decoration: r(null, (o) => ["overline", "line-through", "underline"].includes(o)),
  padding: e(),
  width: e(),
  ellipsis: n(),
  center: n()
};
export {
  s as Props
};
