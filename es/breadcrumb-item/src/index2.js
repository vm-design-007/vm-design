import { defineComponent as c, inject as f, reactive as u, getCurrentInstance as C, computed as d, openBlock as _, createElementBlock as b, normalizeStyle as h, unref as r, createElementVNode as v, renderSlot as S, createVNode as g } from "vue";
import { Props as I } from "./index3.js";
import { BREADCRUMB_PROPS_KEY as y } from "../../breadcrumb/src/index3.js";
import { VSvgIcon as z } from "../../svg-icon/index.js";
import { useList as B } from "../../_hooks/use-list/index.js";
import "../../loading/src/index2.js";
import "../../_hooks/use-message/index.js";
import V from "../../_svg/v-icon-chevron-right/index.js";
const k = { class: "v-breadcrumb-item__text" }, E = c({
  name: "VBreadcrumbItem"
}), A = /* @__PURE__ */ c({
  ...E,
  props: I,
  setup(s) {
    const t = s, o = f(y, null), { styles: i } = B(
      u({
        iconColor: t.iconColor || o && o.iconColor,
        fontColor: t.fontColor || o && o.fontColor,
        fontSize: o && o.fontSize
      }),
      "breadcrumb-item"
    ), a = C(), l = d(() => t.separator ? t.separator : o && o.separator ? o.separator : V), m = i(["fontColor", "iconColor", "fontSize"]), p = () => {
      const e = a.appContext.config.globalProperties.$router;
      if (e && t.to)
        try {
          e.push(t.to);
        } catch (n) {
          console.warn(n);
        }
    };
    return (e, n) => (_(), b("div", {
      class: "v-breadcrumb-item",
      style: h(r(m)),
      onClick: p
    }, [
      v("span", k, [
        S(e.$slots, "default")
      ]),
      g(r(z), {
        icon: r(l),
        size: 16
      }, null, 8, ["icon"])
    ], 4));
  }
});
export {
  A as default
};
