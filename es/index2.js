import * as e from "./index3.js";
import { version as i } from "./index4.js";
import { VMessage as n } from "./message/index.js";
import { VNotification as s } from "./notification/index.js";
const c = (o) => (Object.entries(e).forEach(([t, r]) => {
  o.component(t, r);
}), o.config.globalProperties.VMessage = n, o.config.globalProperties.VNotification = s, o), l = {
  version: i,
  install: c
};
export {
  l as default
};
