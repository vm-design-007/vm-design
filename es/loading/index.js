import "vue";
import { install as i, installDirective as o } from "../_utils/install/index.js";
import { useLoading as t } from "../_hooks/use-loading/index.js";
import "../_hooks/use-message/index.js";
const m = i({
  directive: o(t(), "loading")
});
export {
  m as VLoading,
  m as default
};
