import { defineComponent as p, ref as g, computed as c, openBlock as n, createElementBlock as a, normalizeStyle as l, unref as d, Fragment as C, renderList as y, normalizeClass as k, toDisplayString as L, createCommentVNode as E } from "vue";
import { Props as w } from "./index3.js";
import { isString as z, sizeChange as u } from "../../_utils/index3.js";
const I = ["onClick"], S = p({
  name: "VExpandCard"
}), A = /* @__PURE__ */ p({
  ...S,
  props: w,
  setup(m) {
    const r = m, i = g(r.expandIndex), _ = (e) => {
      i.value = e;
    }, v = (e) => {
      if (e === i.value)
        return "v-expand-card__active";
    }, x = c(() => {
      const { round: e } = r;
      return ["v-expand-card__item", { "v-expand-card__round": e }];
    }), f = c(() => {
      const { imageList: e } = r;
      return e.map((t) => z(t) ? { url: t } : t);
    }), h = c(() => {
      const { width: e, height: t } = r;
      return {
        width: u(e),
        height: u(t)
      };
    });
    return (e, t) => (n(), a("div", {
      class: "v-expand-card",
      style: l(d(h))
    }, [
      (n(!0), a(C, null, y(d(f), (o, s) => (n(), a("div", {
        key: s,
        class: k([v(s), ...d(x)]),
        style: l({ backgroundImage: `url(${o.url})` }),
        onClick: (B) => _(s)
      }, [
        o.text ? (n(), a("h3", {
          key: 0,
          class: "v-expand-card__title",
          style: l({ color: e.color })
        }, L(o.text), 5)) : E("", !0)
      ], 14, I))), 128))
    ], 4));
  }
});
export {
  A as default
};
