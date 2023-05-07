import s from "./src/index2.js";
import { installFn as e } from "../_utils/install/index.js";
import "vue";
import "../loading/src/index2.js";
import { useMessage as o } from "../_hooks/use-message/index.js";
const { Message: m } = o(s, "message"), g = e(m, "VMessage");
export {
  g as VMessage
};
