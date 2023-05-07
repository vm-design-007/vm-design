import "vue";
import { setBooleanProp as o, setStringNumberProp as n, setStringProp as e, setObjectProp as t, setFunctionProp as l } from "../../_utils/props/index.js";
import { VM_SIZE as i, VM_TARGET as s, VM_TYPE as u } from "../../_tokens/attrs/index.js";
const a = {
  bold: o(),
  circle: o(),
  round: o(),
  spread: o(),
  fontSize: n(),
  fontColor: e(),
  size: e(null, (r) => i.includes(r)),
  block: o(),
  href: e(),
  target: e("_self", (r) => s.includes(r)),
  loading: o(),
  disabled: o(),
  loadingIcon: t(),
  type: e(null, (r) => u.includes(r)),
  autofocus: o(),
  name: e("v-button"),
  shadow: e(),
  text: o(),
  nativeType: e("button", (r) => ["button", "submit", "reset"].includes(r)),
  simple: o(),
  beforeIcon: t(),
  afterIcon: t(),
  ripples: o(),
  ripplesColor: e(),
  color: e(),
  onClick: l()
};
export {
  a as Props
};
