import { isNumber as r } from "../is/index.js";
import "vue";
const o = (t = !1) => ({
  type: Boolean,
  default: () => t
}), l = (t) => ({
  type: Number,
  default: () => r(t) ? t : null
}), p = (t, e) => e ? {
  type: String,
  default: () => t || null,
  validator: e
} : {
  type: String,
  default: () => t || null
}, s = (t) => ({
  type: [String, Number],
  default: () => t || null
}), c = (t = null) => ({
  type: Object,
  default: () => t
}), i = (t = null) => ({
  type: Function,
  default: () => t
}), y = (t) => ({
  type: Array,
  default: () => t || null
});
export {
  y as setArrayProp,
  o as setBooleanProp,
  i as setFunctionProp,
  l as setNumberProp,
  c as setObjectProp,
  s as setStringNumberProp,
  p as setStringProp
};
