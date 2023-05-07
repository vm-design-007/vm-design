import { defineComponent as s, inject as _, getCurrentInstance as v, computed as C, openBlock as m, createElementBlock as k, normalizeClass as y, unref as r, normalizeStyle as I, createBlock as g, createCommentVNode as h, createElementVNode as E, renderSlot as V } from "vue";
import { Props as b } from "./index3.js";
import { MENU_PROVIDE_KEY as A } from "../../menu/src/index3.js";
import { VSvgIcon as N } from "../../svg-icon/index.js";
import { warning as S } from "../../_utils/tips/index.js";
import { useList as z } from "../../_hooks/use-list/index.js";
import { useRun as B } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
const M = { class: "v-menu-item__text" }, P = s({
  name: "VMenuItem"
}), Y = /* @__PURE__ */ s({
  ...P,
  props: b,
  setup(c) {
    const e = c, { run: i } = B(), { styles: l } = z(e, "menu-item"), t = _(A, null), a = v(), u = (n) => {
      if (e.disabled)
        return;
      t && (i(t.onMenuItemClick, n, e.name), i(t.setActiveName, e.name));
      const o = a.appContext.config.globalProperties.$router;
      if (o && e.to)
        try {
          o.push(e.to);
        } catch (d) {
          S("v-menu-item", d);
        }
    }, p = C(() => !t || !t.defaultActive ? !1 : e.name === t.defaultActive.value), f = l(["fontSize", "color"]);
    return (n, o) => (m(), k("div", {
      role: "menuitem",
      class: y([
        "v-menu-item",
        { "v-menu-item__active": r(p), "v-menu-item__disabled": n.disabled }
      ]),
      style: I(r(f)),
      onClick: u
    }, [
      n.icon ? (m(), g(r(N), {
        key: 0,
        icon: n.icon
      }, null, 8, ["icon"])) : h("", !0),
      E("span", M, [
        V(n.$slots, "default")
      ])
    ], 6));
  }
});
export {
  Y as default
};
