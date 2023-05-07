import "vue";
import { setStringNumberProp as t, setStringProp as e, setObjectProp as r, setFunctionProp as i } from "../../_utils/props/index.js";
const l = {
  labelWidth: t(),
  labelPosition: e("left", (o) => ["left", "top"].includes(o)),
  model: r(),
  onSubmit: i()
}, s = Symbol("form-provide-key");
export {
  s as FORM_PROVIDE_KEY,
  l as Props
};
