import * as t from "./index3.js";
import { version as e } from "./index4.js";
import { VLoading as n } from "./loading/index.js";
import "vue";
import { objectEntries as m } from "./_utils/compatible/index.js";
import { VMessage as s } from "./message/index.js";
import { VNotification as c } from "./notification/index.js";
const f = (o) => (m(t).forEach(([i, r]) => {
  o.component(i, r);
}), o.config.globalProperties.VMessage = s, o.config.globalProperties.VNotification = c, o.directive("loading", n.directive), o), b = {
  version: e,
  install: f
};
export {
  b as default
};
