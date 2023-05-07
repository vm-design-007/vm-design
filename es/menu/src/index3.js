import "vue";
import { setStringProp as n, setStringNumberProp as r, setFunctionProp as o } from "../../_utils/props/index.js";
const m = {
  mode: n("horizontal", (e) => ["horizontal", "vertical", "inline"].includes(e)),
  activeName: r(),
  onMenuItemClick: o(),
  onSubmenuClick: o()
}, c = Symbol("menu-provide-key");
export {
  c as MENU_PROVIDE_KEY,
  m as Props
};
