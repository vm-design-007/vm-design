import { defineComponent as v, inject as k, ref as C, resolveComponent as V, openBlock as i, createElementBlock as c, normalizeClass as m, unref as e, createBlock as $, withCtx as r, renderSlot as l, createElementVNode as s, createCommentVNode as g, createVNode as u } from "vue";
import { Props as w } from "./index3.js";
import { MENU_PROVIDE_KEY as E } from "../../menu/src/index3.js";
import { VDropdown as I } from "../../dropdown/index.js";
import { useRun as N } from "../../_hooks/use-run/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import { VSvgIcon as _ } from "../../svg-icon/index.js";
import d from "../../_svg/v-icon-chevron-down/index.js";
const S = { class: "v-submenu__title" }, y = { class: "v-submenu__title-text" }, B = {
  key: 1,
  role: "none",
  class: "v-submenu__inline"
}, D = {
  role: "none",
  class: "v-submenu__title-text"
}, j = {
  role: "none",
  class: "v-submenu__content"
}, O = v({
  name: "VSubmenu"
}), G = /* @__PURE__ */ v({
  ...O,
  props: w,
  setup(p) {
    const a = p, { run: f } = N(), o = k(E, null), t = C(a.opened), b = (n) => {
      a.disabled || (t.value = !t.value, o && f(o.onSubmenuClick, n, t.value));
    };
    return (n, P) => {
      const h = V("v-collapse-animation");
      return i(), c("div", {
        role: "menuitem",
        class: m([
          "v-submenu",
          {
            [`v-submenu__${e(o) && e(o).mode.value}`]: e(o) && e(o).mode.value,
            "v-submenu__disabled": n.disabled
          }
        ])
      }, [
        e(o) && e(o).mode.value !== "inline" ? (i(), $(e(I), {
          key: 0,
          trigger: "click",
          spacing: 5
        }, {
          content: r(() => [
            l(n.$slots, "default")
          ]),
          default: r(() => [
            s("div", S, [
              s("div", y, [
                n.$slots.title ? l(n.$slots, "title", { key: 0 }) : g("", !0)
              ]),
              u(e(_), { icon: e(d) }, null, 8, ["icon"])
            ])
          ]),
          _: 3
        })) : (i(), c("div", B, [
          s("div", {
            role: "none",
            class: "v-submenu__title",
            onClick: b
          }, [
            s("div", D, [
              l(n.$slots, "title")
            ]),
            u(e(_), {
              class: m([
                "v-submenu__arrow-icon",
                { "v-submenu__arrow-icon-animation": t.value }
              ]),
              icon: e(d)
            }, null, 8, ["class", "icon"])
          ]),
          s("div", j, [
            u(h, { opened: t.value }, {
              default: r(() => [
                l(n.$slots, "default")
              ]),
              _: 3
            }, 8, ["opened"])
          ])
        ]))
      ], 2);
    };
  }
});
export {
  G as default
};
