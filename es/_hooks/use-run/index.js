import { isFunction as o } from "../../_utils/is/index.js";
import "vue";
const s = () => ({ run: (n, ...r) => {
  o(n) && n(...r);
} });
export {
  s as useRun
};
