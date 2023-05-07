import { defineComponent as n, computed as t, provide as c, reactive as l, renderSlot as a } from "vue";
import { Props as m, VM_GLOBAL_PROPS_KEY as d } from "./index.js";
import { VM_TYPE as _, VM_SIZE as f } from "../../_tokens/attrs/index.js";
import { useProps as z } from "../../_hooks/use-props/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const v = n({
  name: "VVmGlobal"
}), E = /* @__PURE__ */ n({
  ...v,
  props: m,
  setup(o) {
    const e = o, { interceptors: r } = z(e), s = t(() => r(
      "type",
      () => _.includes(e.type),
      "default"
    )), p = t(() => r(
      "size",
      () => f.includes(e.size),
      "middle"
    )), i = t(() => r(
      "lang",
      () => ["en-US", "zh-CN"].includes(e.lang),
      "zh-CN"
    ));
    return c(
      d,
      l({
        type: s.value,
        size: p.value,
        lang: i.value
      })
    ), (u, P) => a(u.$slots, "default");
  }
});
export {
  E as default
};
