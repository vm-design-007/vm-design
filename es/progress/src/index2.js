import { defineComponent as c, computed as s, provide as f, reactive as i, toRefs as a, openBlock as t, createBlock as o, unref as n } from "vue";
import { Props as _, PROGRESS_PROPS_KEY as u } from "./index3.js";
import d from "../components/circle/index2.js";
import g from "../components/line/index2.js";
import { isNumber as l } from "../../_utils/is/index.js";
const P = c({
  name: "VProgress"
}), E = /* @__PURE__ */ c({
  ...P,
  props: _,
  setup(p) {
    const e = p, m = s(() => {
      const { percentage: r } = e;
      return l(r) ? e.percentage >= 100 ? 100 : e.percentage <= 0 ? 0 : e.percentage : 0;
    });
    return f(u, i({ ...a(e), percent: m })), (r, k) => r.state === "circle" ? (t(), o(n(d), { key: 0 })) : (t(), o(n(g), { key: 1 }));
  }
});
export {
  E as default
};
