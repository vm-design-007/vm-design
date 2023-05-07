import "vue";
import { setStringProp as r, setBooleanProp as o, setStringNumberProp as t, setFunctionProp as e } from "../../_utils/props/index.js";
import { VM_FIT as n } from "../../_tokens/attrs/index.js";
const c = {
  src: r(),
  alt: r(),
  draggable: o(!0),
  lazy: o(),
  rootMargin: t("100px"),
  width: t(),
  height: t(),
  block: o(),
  fit: r(null, (i) => n.includes(i)),
  select: o(),
  referrerPolicy: r(),
  round: t(),
  errSrc: r(),
  title: r(),
  onLoad: e(),
  onError: e()
};
export {
  c as Props
};
