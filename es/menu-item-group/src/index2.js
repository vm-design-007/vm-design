import { defineComponent as o, openBlock as s, createElementBlock as n, createElementVNode as t, toDisplayString as r, renderSlot as i } from "vue";
import { Props as _ } from "./index3.js";
const l = { class: "v-menu-item-group" }, m = { class: "v-menu-item-group__title" }, p = { class: "v-menu-item-group__list" }, c = o({
  name: "VMenuItemGroup"
}), v = /* @__PURE__ */ o({
  ...c,
  props: _,
  setup(u) {
    return (e, a) => (s(), n("div", l, [
      t("div", m, r(e.title), 1),
      t("div", p, [
        i(e.$slots, "default")
      ])
    ]));
  }
});
export {
  v as default
};
