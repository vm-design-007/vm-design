import { defineComponent as o, inject as s, toRefs as m, openBlock as l, createElementBlock as i, createElementVNode as p, normalizeStyle as u, unref as e, renderSlot as d, createVNode as _ } from "vue";
import { BreadcrumbPropsKey as f } from "../../breadcrumb/src/index3.js";
import { VSvgIcon as b } from "../../svg-icon/index.js";
import V from "../../_components/svg/index3.js";
const C = { class: "v-breadcrumb-item" }, h = o({
  name: "VBreadcrumbItem"
}), k = /* @__PURE__ */ o({
  ...h,
  setup(v) {
    const r = s(f), { separator: t, itemColor: n, separatorColor: c } = m(r);
    return (a, B) => (l(), i("span", C, [
      p("span", {
        class: "v-breadcrumb-item__inner",
        style: u({ color: e(n) })
      }, [
        d(a.$slots, "default")
      ], 4),
      _(e(b), {
        icon: e(t) || e(V),
        color: e(c),
        size: 16
      }, null, 8, ["icon", "color"])
    ]));
  }
});
export {
  k as default
};
