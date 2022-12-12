import { defineComponent as e, computed as a, openBlock as s, createElementBlock as c, normalizeClass as l, unref as p } from "vue";
import { Props as i } from "./index4.js";
const m = e({
  name: "VLoadingBar"
}), f = /* @__PURE__ */ e({
  ...m,
  props: i,
  setup(n) {
    const t = n, r = a(() => {
      const { type: o } = t;
      return ["v-loading-bar", { [`v-loading-bar__${o}`]: o }];
    });
    return (o, _) => (s(), c("div", {
      class: l(p(r))
    }, null, 2));
  }
});
export {
  f as default
};
