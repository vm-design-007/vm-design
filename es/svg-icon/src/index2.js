import { defineComponent as t, openBlock as n, createElementBlock as m, normalizeStyle as p, unref as a, createBlock as u, resolveDynamicComponent as f, renderSlot as d } from "vue";
import { Props as k } from "./index3.js";
import { useList as y } from "../../_hooks/use-list/index.js";
import { useRun as v } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const C = t({
  name: "VSvgIcon"
}), D = /* @__PURE__ */ t({
  ...C,
  props: k,
  setup(r) {
    const e = r, { run: s } = v(), { styles: c } = y(e, "svg-icon"), i = (o) => {
      s(e.onClick, o);
    }, l = c(["size", "color"]);
    return (o, _) => (n(), m("i", {
      role: "img",
      class: "v-svg-icon",
      "text-indent": "middle",
      style: p(a(l)),
      onClick: i
    }, [
      o.icon ? (n(), u(f(o.icon), { key: 0 })) : d(o.$slots, "default", { key: 1 })
    ], 4));
  }
});
export {
  D as default
};
