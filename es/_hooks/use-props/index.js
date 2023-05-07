import { reactive as s, toRef as o } from "vue";
import { isString as n, isObject as l } from "../../_utils/is/index.js";
const k = (c) => ({
  filter: (e) => {
    const t = s({});
    return e.forEach((r) => {
      n(r) ? t[r] = o(c, r) : l(r) && r.callback && r.callback() && (t[r.key] = o(c, r.key));
    }), t;
  },
  interceptors: (e, t, r = null) => t() ? o(c, e) : r
});
export {
  k as useProps
};
