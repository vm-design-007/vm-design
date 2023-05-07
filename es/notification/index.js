import o from "./src/index2.js";
import { installFn as i } from "../_utils/install/index.js";
import "vue";
import "../loading/src/index2.js";
import { useMessage as t } from "../_hooks/use-message/index.js";
const { Message: m } = t(o, "notification"), c = i(m, "VNotification");
export {
  c as VNotification
};
