import "vue";
import { setArrayProp as s, setStringProp as o, setBooleanProp as e, setNumberProp as r, setFunctionProp as t } from "../../_utils/props/index.js";
const i = {
  files: s([]),
  accept: o(),
  name: o(),
  drag: e(),
  isRemove: e(!0),
  showList: e(!1),
  multiple: e(),
  maxSize: r(),
  maxLength: r(),
  disabled: e(),
  onLoad: t(),
  onChange: t()
};
export {
  i as Props
};
