import { defineComponent as r, openBlock as e, createElementBlock as o, Fragment as p, renderList as u, unref as s } from "vue";
import { Props as c } from "./index3.js";
import { sizeChange as m } from "../../../_utils/utils/index.js";
const i = ["width"], _ = r({
  name: "VTableColgroup"
}), k = /* @__PURE__ */ r({
  ..._,
  props: c,
  setup(a) {
    return (t, d) => (e(), o("colgroup", null, [
      (e(!0), o(p, null, u(t.columns, (n, l) => (e(), o("col", {
        key: l,
        width: s(m)(n.width)
      }, null, 8, i))), 128))
    ]));
  }
});
export {
  k as default
};
