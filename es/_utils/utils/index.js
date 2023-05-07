import { isNumber as o, isString as u } from "../is/index.js";
import "vue";
const i = (r, t = 2) => o(r) ? Number(r.toFixed(t)) : r, p = (r, t) => {
  let e;
  return (...n) => {
    e && clearTimeout(e), e = setTimeout(() => {
      r(...n);
    }, t);
  };
}, s = (r) => r < 10 ? `0${r}` : r.toString(), a = (r, t = "px") => r ? u(r) ? r : r + t : "", f = (r) => r ? o(r) ? r : Number.parseFloat(r) || 0 : 0, b = (r) => r.replace(/([A-Z])/g, (t, e) => "-" + e.toLowerCase());
export {
  s as addZero,
  b as convertFormat,
  p as debounce,
  i as keepDecimal,
  a as sizeChange,
  f as sizeToNum
};
